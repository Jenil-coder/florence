const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');
const membershipRoutes = require('./routes/membershipRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/membership', membershipRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'FBNI Server is running' });
});

// Error handler
app.use(errorHandler);

// Connect to MongoDB and start server
if (process.env.MONGO_URI) {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log('✅ MongoDB connected');
            app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
        })
        .catch((err) => console.error('❌ MongoDB connection error:', err));
} else {
    // Start without MongoDB for development
    app.listen(PORT, () => {
        console.log(`✅ Server running on port ${PORT} (no MongoDB)`);
    });
}

module.exports = app;
