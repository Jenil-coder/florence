import { motion } from 'framer-motion';
import { FaStar, FaHandshake, FaEarthEurope, FaArrowRight } from 'react-icons/fa6';

const highlights = [
    { icon: FaStar, title: 'Showcase Innovation', desc: 'Display products to a global audience of buyers and investors spanning across multiple continents.' },
    { icon: FaHandshake, title: 'Forge Partnerships', desc: 'Build lasting alliances with Italian and European industry leaders driving mutual business growth.' },
    { icon: FaEarthEurope, title: 'European Market Access', desc: 'Establish a direct entry point into the highly lucrative and stable European Union market.' },
];

const sectors = [
    'AI & Technology', 'Real Estate', 'Manufacturing', 'Fashion & Textiles',
    'Import-Export', 'Construction', 'Architecture', 'Interior Design',
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const TradeFairsSection = () => {
    return (
        <section id="trade-fairs" className="py-20 md:py-32 bg-navy relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1a3a6e] rounded-full blur-[120px] pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    className="text-center mb-20"
                >
                    <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-mono tracking-widest uppercase mb-6">
                        Florence, Italy
                    </motion.span>
                    <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
                        Florence Trade Fairs
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-white/80 text-lg md:text-xl font-medium mb-4">
                        Connecting Indian Businesses to International Markets
                    </motion.p>
                    <motion.p variants={fadeUp} className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Our flagship trade fair events in Florence, Italy bring together the best of Indian
                        entrepreneurship and European business innovation under one spectacular roof.
                    </motion.p>
                </motion.div>

                {/* Highlight Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-20"
                >
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.title}
                            variants={fadeUp}
                            whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(201,168,76,0.5)' }}
                            className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-md text-center transition-all duration-300 relative overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-3xl mb-8 text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-navy transition-all duration-300 relative z-10">
                                <item.icon />
                            </div>
                            <h3 className="text-white text-xl font-semibold mb-4 tracking-tight relative z-10">{item.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed relative z-10">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Focus Sectors */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16 max-w-4xl mx-auto"
                >
                    <motion.span variants={fadeUp} className="text-gold font-display text-xl mb-6 block">Industry Focus Sectors</motion.span>
                    <motion.div
                        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                        className="flex flex-wrap justify-center gap-3 lg:gap-4 mt-6"
                    >
                        {sectors.map((sector) => (
                            <motion.span
                                key={sector}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8, y: 20 },
                                    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
                                }}
                                whileHover={{ backgroundColor: '#C9A84C', color: '#0B1F3A', scale: 1.05 }}
                                className="px-5 py-2.5 border border-gold/30 text-white/90 text-sm rounded-full cursor-pointer transition-colors duration-300 backdrop-blur-sm bg-white/5 hover:border-gold hover:shadow-[0_0_15px_rgba(201,168,76,0.4)]"
                            >
                                {sector}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(201,168,76,0.3)" }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-xl transition-all text-base shadow-lg group"
                    >
                        <span>Register for Next Trade Fair</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default TradeFairsSection;
