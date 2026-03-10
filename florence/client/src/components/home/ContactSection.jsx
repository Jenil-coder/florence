import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLocationDot, FaGlobe, FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { submitContact } from '../../utils/api';

const enquiryTypes = [
    'Membership Enquiry',
    'Trade Fair Registration',
    'Business Consulting',
    'B2B Matchmaking',
    'Partnership',
    'General',
];

const ContactSection = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        enquiryType: 'General',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await submitContact(form);
            setStatus('success');
            setForm({ fullName: '', email: '', phone: '', companyName: '', enquiryType: 'General', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 md:py-28 bg-[#F5F7FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="heading-underline text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-navy">
                        Get In Touch
                    </h2>
                    <p className="mt-6 text-[#64748B] text-base md:text-lg max-w-xl mx-auto">
                        Ready to expand your business globally? Let's talk.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Left — Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl font-semibold text-navy mb-6">
                            Florence Business Network International Pvt. Ltd.
                        </h3>

                        <div className="space-y-5 mb-8">
                            {[
                                { icon: FaPhone, label: '+91 9953090209', href: 'tel:+919953090209' },
                                { icon: FaEnvelope, label: 'florencedesign123@gmail.com', href: 'mailto:florencedesign123@gmail.com' },
                                { icon: FaLocationDot, label: 'Gurugram Sector-52, Haryana, India', href: null },
                                { icon: FaGlobe, label: 'Under Development', href: null },
                            ].map((item) => (
                                <div key={item.label} className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                                        <item.icon size={16} />
                                    </div>
                                    <div>
                                        {item.href ? (
                                            <a href={item.href} className="text-navy hover:text-gold transition-colors font-medium">
                                                {item.label}
                                            </a>
                                        ) : (
                                            <span className="text-[#64748B]">{item.label}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h4 className="text-navy font-semibold mb-3">Follow Us</h4>
                        <div className="flex gap-3">
                            {[
                                { icon: FaLinkedinIn, label: 'LinkedIn' },
                                { icon: FaInstagram, label: 'Instagram' },
                                { icon: FaFacebookF, label: 'Facebook' },
                                { icon: FaXTwitter, label: 'X / Twitter' },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center hover:text-gold hover:bg-navy/80 transition-all"
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-5"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name *"
                                    required
                                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email Address *"
                                    required
                                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none"
                                />
                                <input
                                    type="text"
                                    name="companyName"
                                    value={form.companyName}
                                    onChange={handleChange}
                                    placeholder="Company Name"
                                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none"
                                />
                            </div>
                            <select
                                name="enquiryType"
                                value={form.enquiryType}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none bg-white text-gray-600"
                            >
                                {enquiryTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your Message *"
                                required
                                rows={4}
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none resize-none"
                            />

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-gold text-navy font-semibold py-4 rounded-lg hover:bg-gold-light transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {status === 'loading' && (
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                )}
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <div className="text-green-600 text-sm text-center bg-green-50 py-3 rounded-lg">
                                    ✅ Message sent! We'll contact you within 24 hours.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="text-red-600 text-sm text-center bg-red-50 py-3 rounded-lg">
                                    ❌ Something went wrong. Please try again.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
