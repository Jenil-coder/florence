import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FaBullseye, FaRocket, FaGlobe } from 'react-icons/fa6';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const AboutSection = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-[#F5F7FA] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                    >
                        <motion.span variants={fadeUpVariant} className="section-label mb-4 block">ABOUT US</motion.span>
                        <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-navy mb-6">
                            Who We Are
                        </motion.h2>
                        <motion.p variants={fadeUpVariant} className="text-[#64748B] text-base md:text-lg leading-relaxed mb-10">
                            Florence Business Network International is a professional business networking
                            and consulting company dedicated to helping businesses expand internationally
                            through strategic partnerships and market insights. We specialize in connecting
                            Indian entrepreneurs with Italian and global industries, fostering trade,
                            investment, and long-term business relationships.
                        </motion.p>

                        {/* Vision & Mission Cards */}
                        <motion.div variants={fadeUpVariant} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-navy rounded-xl p-6 md:p-8 border-t-4 border-gold shadow-lg group transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-colors" />
                                <div className="mb-5 text-gold group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                                    <FaBullseye size={32} />
                                </div>
                                <h3 className="text-gold font-semibold text-lg mb-3 font-display">
                                    Our Vision
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed relative z-10">
                                    To become a leading international business networking hub connecting
                                    India, Italy, and global markets.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-navy rounded-xl p-6 md:p-8 border-t-4 border-gold shadow-lg group transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-colors" />
                                <div className="mb-5 text-gold group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300">
                                    <FaRocket size={32} />
                                </div>
                                <h3 className="text-gold font-semibold text-lg mb-3 font-display">
                                    Our Mission
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed relative z-10">
                                    To promote trade fairs, partnerships, and cross-border business
                                    growth through strategic collaboration.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex justify-center relative"
                    >
                        {/* Background decorative blob */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-navy/5 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] scale-[1.2] -z-10 blur-xl"
                        />

                        <div className="relative bg-navy rounded-[2rem] p-10 md:p-14 w-full max-w-lg aspect-square flex items-center justify-center shadow-2xl border border-white/10">
                            {/* India Label - Top Left */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="absolute top-8 left-8 flex items-center gap-3"
                            >
                                <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                                <span className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-[0.2em]">India</span>
                            </motion.div>

                            {/* Italy Label - Bottom Right */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="absolute bottom-8 right-8 flex items-center gap-3"
                            >
                                <span className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-[0.2em]">Italy</span>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#009246] animate-pulse" />
                            </motion.div>

                            {/* Diagonal Gold Dashed Line */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                                <motion.line
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                                    x1="20" y1="20"
                                    x2="80" y2="80"
                                    stroke="#C9A84C"
                                    strokeWidth="0.5"
                                    strokeDasharray="2,2"
                                    opacity="0.8"
                                />
                            </svg>

                            {/* Center Globe */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                                className="relative z-10"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border hover:border-gold/80 border-gold/40 flex items-center justify-center text-gold shadow-[0_0_40px_rgba(201,168,76,0.15)] transition-colors duration-300"
                                >
                                    <FaGlobe size={48} className="drop-shadow-[0_0_10px_rgba(201,168,76,0.5)]" />
                                </motion.div>
                            </motion.div>

                            {/* Bottom Label */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold to-gold-light text-navy px-8 py-3 rounded-full text-sm font-bold tracking-wide whitespace-nowrap shadow-lg"
                            >
                                Global Business Network
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
