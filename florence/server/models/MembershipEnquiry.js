const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    industry: { type: String },
    country: { type: String },
    message: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MembershipEnquiry', membershipSchema);
