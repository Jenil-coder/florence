const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create transporter (configure with your SMTP)
const createTransporter = () => {
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }
    return null;
};

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res, next) => {
    try {
        const { fullName, email, phone, companyName, enquiryType, message } = req.body;

        // Validation
        if (!fullName || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Full name, email, and message are required.',
            });
        }

        // Save to database if connected
        let contact = null;
        try {
            contact = await Contact.create({
                fullName, email, phone, companyName, enquiryType, message,
            });
        } catch (dbErr) {
            console.log('Database not available, skipping save:', dbErr.message);
        }

        // Send notification emails if configured
        const transporter = createTransporter();
        if (transporter) {
            try {
                // Notify FBNI
                await transporter.sendMail({
                    from: `"FBNI Website" <${process.env.EMAIL_USER}>`,
                    to: 'florencedesign123@gmail.com',
                    subject: `New ${enquiryType} from ${fullName}`,
                    html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${companyName || 'Not provided'}</p>
            <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
            <p><strong>Message:</strong> ${message}</p>
            <hr/>
            <p>Submitted on: ${new Date().toLocaleString('en-IN')}</p>
          `,
                });

                // Confirm to user
                await transporter.sendMail({
                    from: `"Florence Business Network International" <${process.env.EMAIL_USER}>`,
                    to: email,
                    subject: 'Thank you for contacting FBNI',
                    html: `
            <h2>Thank you, ${fullName}!</h2>
            <p>We have received your enquiry and will get back to you within <strong>24 business hours</strong>.</p>
            <p><strong>Your Enquiry Type:</strong> ${enquiryType}</p>
            <p><strong>Your Message:</strong> ${message}</p>
            <br/>
            <p>Best regards,<br/><strong>Florence Business Network International Pvt. Ltd.</strong></p>
            <p>📞 +91 9953090209 | 📧 florencedesign123@gmail.com</p>
            <p>📍 Gurugram Sector-52, India</p>
          `,
                });
            } catch (emailErr) {
                console.log('Email sending failed:', emailErr.message);
            }
        }

        res.status(201).json({
            success: true,
            message: 'Your message has been sent successfully! We will contact you within 24 hours.',
            data: { id: contact?._id || 'no-db' },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all contacts (admin)
// @route   GET /api/contact
// @access  Private
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json({ success: true, count: contacts.length, data: contacts });
    } catch (error) {
        next(error);
    }
};

module.exports = { submitContact, getAllContacts };
