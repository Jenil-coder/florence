const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    companyName: { type: String, trim: true },
    enquiryType: {
        type: String,
        enum: ['Membership Enquiry', 'Trade Fair Registration', 'Business Consulting',
            'B2B Matchmaking', 'Partnership', 'General'],
        default: 'General'
    },
    message: { type: String, required: true },
    status: { type: String, enum: ['new', 'read', 'replied'], default: 'new' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
