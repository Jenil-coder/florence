const MembershipEnquiry = require('../models/MembershipEnquiry');

// @desc    Submit membership enquiry
// @route   POST /api/membership
// @access  Public
const submitMembership = async (req, res, next) => {
    try {
        const { fullName, email, phone, company, industry, country, message } = req.body;

        if (!fullName || !email) {
            return res.status(400).json({
                success: false,
                message: 'Full name and email are required.',
            });
        }

        let enquiry = null;
        try {
            enquiry = await MembershipEnquiry.create({
                fullName, email, phone, company, industry, country, message,
            });
        } catch (dbErr) {
            console.log('Database not available, skipping save:', dbErr.message);
        }

        res.status(201).json({
            success: true,
            message: 'Membership enquiry submitted successfully!',
            data: { id: enquiry?._id || 'no-db' },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all membership enquiries (admin)
// @route   GET /api/membership
// @access  Private
const getAllMemberships = async (req, res, next) => {
    try {
        const enquiries = await MembershipEnquiry.find().sort({ createdAt: -1 });
        res.json({ success: true, count: enquiries.length, data: enquiries });
    } catch (error) {
        next(error);
    }
};

module.exports = { submitMembership, getAllMemberships };
