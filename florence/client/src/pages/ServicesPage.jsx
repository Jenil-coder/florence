import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEarthAmericas, FaBriefcase, FaHandshake, FaLandmarkDome, FaArrowTrendUp, FaBuildingUser, FaMapLocationDot, FaMoneyBillTrendUp, FaCheck } from 'react-icons/fa6';

const services = [
    {
        icon: FaEarthAmericas,
        title: 'Global Business Networking',
        desc: 'Connect with leaders, entrepreneurs, and decision-makers from around the world. Our exclusive networking events bring together the brightest minds in international business.',
        features: ['Curated networking events', 'Industry-specific meetups', 'One-on-one introductions', 'Virtual networking lounges'],
    },
    {
        icon: FaBriefcase,
        title: 'Business Consulting',
        desc: 'Expert guidance for international market entry and business growth strategies. Our seasoned consultants help navigate the complexities of global expansion.',
        features: ['Market entry strategies', 'Business plan development', 'Risk assessment', 'Growth roadmaps'],
    },
    {
        icon: FaHandshake,
        title: 'B2B Matchmaking',
        desc: 'Precision-matched introductions to the right global business partners. Our proprietary matching system ensures high-quality, relevant connections.',
        features: ['AI-powered matching', 'Verified business profiles', 'Sector-specific matching', 'Follow-up facilitation'],
    },
    {
        icon: FaLandmarkDome,
        title: 'Trade Fair Participation',
        desc: 'Represent your brand at prestigious international trade fairs in Florence, Italy. Complete end-to-end support from booth design to buyer engagement.',
        features: ['Booth design & setup', 'Buyer engagement', 'Product showcasing', 'Post-event follow-ups'],
    },
    {
        icon: FaArrowTrendUp,
        title: 'Market Expansion Support',
        desc: 'Data-driven strategies to enter and thrive in new global markets. We provide comprehensive market intelligence and entry support.',
        features: ['Market research & analysis', 'Competitor intelligence', 'Regulatory guidance', 'Local partner identification'],
    },
    {
        icon: FaBuildingUser,
        title: 'Global Real Estate Solutions',
        desc: 'Cross-border property investment opportunities and advisory services. Navigate international real estate markets with expert guidance.',
        features: ['Property sourcing', 'Legal & regulatory support', 'Investment analysis', 'Property management'],
    },
    {
        icon: FaMapLocationDot,
        title: 'Market Expansion Strategies',
        desc: 'Comprehensive roadmaps for sustainable international business growth. We create tailored strategies for each target market.',
        features: ['Custom expansion roadmaps', 'Financial planning', 'Resource allocation', 'Milestone tracking'],
    },
    {
        icon: FaMoneyBillTrendUp,
        title: 'Trade & Investment Advisory',
        desc: 'Navigate complex trade regulations and investment opportunities globally. Our experts simplify cross-border transactions.',
        features: ['Trade compliance', 'Investment structuring', 'Tax optimization', 'Currency risk management'],
    },
];

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ServicesPage = () => {
    return (
        <main className="pt-20">
            {/* Hero Banner */}
            <section className="bg-navy py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1a3a6e]/50 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-gold text-sm font-mono tracking-[0.25em] uppercase block mb-6"
                    >
                        OUR SERVICES
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white mb-8 leading-tight"
                    >
                        Comprehensive Business Solutions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        End-to-end services meticulously designed to help your business succeed on the global stage.
                    </motion.p>
                </div>
            </section>

            {/* Services Detail */}
            <section className="py-24 md:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24 md:space-y-32">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''
                                    }`}
                            >
                                <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: i % 2 === 1 ? 30 : -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="flex items-center gap-6 mb-6"
                                    >
                                        <div className="w-20 h-20 bg-[#F5F7FA] border border-[#E2E8F0] shadow-sm rounded-2xl flex items-center justify-center text-4xl text-gold">
                                            <service.icon />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
                                            {service.title}
                                        </h2>
                                    </motion.div>
                                    <p className="text-[#64748B] text-lg leading-relaxed mb-8">{service.desc}</p>
                                    <Link to="/contact" className="inline-flex items-center gap-2 text-gold font-semibold text-lg hover:text-navy transition-colors group">
                                        Enquire about this service
                                        <motion.span className="inline-block" whileHover={{ x: 5 }}>→</motion.span>
                                    </Link>
                                </div>

                                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="bg-[#F5F7FA] border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <h4 className="text-navy font-semibold text-sm uppercase tracking-widest mb-6">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-4">
                                            {service.features.map((f, index) => (
                                                <motion.li
                                                    key={f}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.5 + index * 0.1 }}
                                                    className="flex items-center gap-4 text-base text-[#64748B]"
                                                >
                                                    <div className="w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                                                        <FaCheck size={10} />
                                                    </div>
                                                    {f}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-navy text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-semibold text-white mb-6"
                    >
                        Need a Custom Solution?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg md:text-xl mb-12"
                    >
                        Our team can create tailored architectural and strategic packages for your specific business needs.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-block px-12 py-5 bg-gold text-navy font-bold rounded-xl hover:bg-gold-light hover:-translate-y-1 transition-all shadow-[0_10px_30px_rgba(201,168,76,0.3)] text-lg"
                        >
                            Contact Our Team
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default ServicesPage;
