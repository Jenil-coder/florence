import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Trade Fairs', path: '/#trade-fairs' },
    { name: 'Membership', path: '/#membership' },
    { name: 'Chapters', path: '/#chapters' },
    { name: 'Why Us', path: '/#why-us' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    const handleNavClick = (path) => {
        setMobileOpen(false);
        if (path.startsWith('/#')) {
            const id = path.substring(2);
            if (location.pathname === '/') {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = path;
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={scrolled ? { backgroundColor: '#0A192F', boxShadow: '0 4px 24px rgba(10, 25, 47, 0.45)' } : { backgroundColor: 'transparent' }}
            className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <span
                            className="text-2xl md:text-3xl font-bold font-display tracking-wider"
                            style={{ color: '#E0E5E9' }}
                        >
                            FBNI
                        </span>
                        <span
                            className="hidden md:block text-[10px] leading-tight uppercase tracking-widest max-w-[140px]"
                            style={{ color: 'rgba(224,229,233,0.6)' }}
                        >
                            Florence Business Network International
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path.startsWith('/#') ? (location.pathname === '/' ? link.path : `/${link.path}`) : link.path}
                                onClick={() => handleNavClick(link.path)}
                                className="relative px-3 py-2 text-sm font-medium transition-colors group"
                                style={{ color: '#C9A84C' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#E8C96B'}
                                onMouseLeave={e => e.currentTarget.style.color = '#C9A84C'}
                            >
                                {link.name}
                                <span
                                    className="absolute bottom-0 left-3 right-3 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                                    style={{ backgroundColor: '#C9A84C' }}
                                />
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="ml-4 px-6 py-2.5 font-semibold text-sm rounded-lg hover:scale-105 transition-all"
                            style={{ backgroundColor: '#E0E5E9', color: '#071b45ff' }}
                            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#cdd5db'; }}
                            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#E0E5E9'; }}
                        >
                            Join Now
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2"
                        style={{ color: '#E0E5E9' }}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden"
                        style={{ backgroundColor: '#0A192F', borderTop: '1px solid rgba(224,229,233,0.15)' }}
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path.startsWith('/#') ? '/' : link.path}
                                    onClick={() => handleNavClick(link.path)}
                                    className="block px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                                    style={{ color: 'rgba(27, 77, 118, 0.85)' }}
                                    onMouseEnter={e => { e.currentTarget.style.color = '#425463ff'; e.currentTarget.style.backgroundColor = 'rgba(224,229,233,0.08)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(19, 64, 101, 0.85)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="block mt-3 text-center px-6 py-3 font-semibold rounded-lg transition-colors"
                                style={{ backgroundColor: '#E0E5E9', color: '#004E64' }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#cdd5db'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(28, 65, 99, 1)'; }}
                            >
                                Join Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
