import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const footerLinks = {
    Company: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Services', path: '/services' },
        { name: 'Membership', path: '/#membership' },
        { name: 'Contact', path: '/contact' },
    ],
    Services: [
        { name: 'B2B Matchmaking', path: '/services' },
        { name: 'Trade Fair Participation', path: '/#trade-fairs' },
        { name: 'Business Consulting', path: '/services' },
        { name: 'Market Expansion', path: '/services' },
    ],
    Resources: [
        { name: 'Professional Chapters', path: '/#chapters' },
        { name: 'Success Stories', path: '/#testimonials' },
        { name: 'How It Works', path: '/#how-it-works' },
        { name: 'Roadmap', path: '/#roadmap' },
    ],
};

const socialLinks = [
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaXTwitter, href: '#', label: 'X / Twitter' },
];

const Footer = () => {
    return (
        <footer className="bg-navy text-white">
            {/* Newsletter Bar */}
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-display font-semibold text-gold">
                                Stay Connected with FBNI
                            </h3>
                            <p className="text-white/60 text-sm mt-1">
                                Get the latest updates on trade fairs, events, and business opportunities.
                            </p>
                        </div>
                        <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder:text-white/40 focus:outline-none focus:border-gold w-full md:w-72 text-sm"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gold text-navy font-semibold rounded-r-lg hover:bg-gold-light transition-colors text-sm whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="inline-block">
                            <span className="text-3xl font-bold text-gold font-display tracking-wider">
                                FBNI
                            </span>
                        </Link>
                        <p className="text-white/50 text-sm mt-4 leading-relaxed">
                            Florence Business Network International Pvt. Ltd. — Building strong
                            India–Italy and global business connections through strategic networking
                            and trade consulting.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-gold hover:border-gold transition-all"
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                                {title}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-white/50 hover:text-gold transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
                        <p>© {new Date().getFullYear()} Florence Business Network International Pvt. Ltd. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
