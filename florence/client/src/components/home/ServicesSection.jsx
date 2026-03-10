import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FaEarthAmericas, FaBriefcase, FaHandshake, FaLandmarkDome, FaArrowTrendUp, FaBuildingUser, FaMapLocationDot, FaMoneyBillTrendUp } from 'react-icons/fa6';

const services = [
    { icon: FaEarthAmericas, title: 'Global Business Networking', desc: 'Connect with leaders, entrepreneurs, and decision-makers from around the world.' },
    { icon: FaBriefcase, title: 'Business Consulting', desc: 'Expert guidance for international market entry and business growth strategies.' },
    { icon: FaHandshake, title: 'B2B Matchmaking', desc: 'Precision-matched introductions to the right global business partners.' },
    { icon: FaLandmarkDome, title: 'Trade Fair Participation', desc: 'Represent your brand at prestigious international trade fairs in Florence.' },
    { icon: FaArrowTrendUp, title: 'Market Expansion Support', desc: 'Data-driven strategies to enter and thrive in new global markets.' },
    { icon: FaBuildingUser, title: 'Global Real Estate Solutions', desc: 'Cross-border property investment opportunities and advisory services.' },
    { icon: FaMapLocationDot, title: 'Market Expansion Strategies', desc: 'Comprehensive roadmaps for sustainable international business growth.' },
    { icon: FaMoneyBillTrendUp, title: 'Trade & Investment Advisory', desc: 'Navigate complex trade regulations and investment opportunities globally.' },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 md:py-32 bg-white relative">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F5F7FA] rounded-full blur-[80px] opacity-60" />
                <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeading

                    title="Our Services"
                    subtitle="Comprehensive solutions for businesses looking to grow globally"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: '0 20px 40px -10px rgba(11,31,58,0.1)',
                                borderColor: '#C9A84C'
                            }}
                            className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 group flex flex-col h-full"
                        >
                            <motion.div
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="w-16 h-16 bg-[#F5F7FA] border border-[#E2E8F0] group-hover:bg-gold group-hover:border-gold rounded-2xl flex items-center justify-center text-3xl mb-6 text-navy transition-all duration-300 shadow-sm group-hover:shadow-lg"
                            >
                                <service.icon />
                            </motion.div>
                            <h3 className="text-navy text-xl font-semibold mb-3 tracking-tight group-hover:text-gold transition-colors">{service.title}</h3>
                            <p className="text-[#64748B] text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>

                            <div className="mt-auto flex items-center gap-2 text-gold font-medium text-sm overflow-hidden">
                                <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 group-hover:after:w-full">
                                    Learn More
                                </span>
                                <motion.span
                                    className="inline-block"
                                    initial={{ x: -10, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    →
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
