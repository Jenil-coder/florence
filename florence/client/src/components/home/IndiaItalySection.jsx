import { motion } from 'framer-motion';
import { FaBuilding, FaEarthEurope, FaArrowRightArrowLeft } from 'react-icons/fa6';

const IndiaItalySection = () => {
    return (
        <section className="py-20 md:py-32 bg-[#F5F7FA] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-navy rounded-3xl p-8 md:p-16 relative shadow-2xl overflow-hidden"
                >
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">

                        {/* India Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 hover:border-gold/50 transition-colors group"
                        >
                            <div className="w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                                <FaBuilding size={32} />
                            </div>
                            <h3 className="text-2xl font-display font-semibold text-white mb-2 tracking-wide">India</h3>
                            <div className="h-1 w-12 bg-gold mx-auto rounded-full mb-4" />
                            <p className="text-white/70 text-sm leading-relaxed">
                                One of the world's fastest-growing economies, offering immense manufacturing, tech, and market potential.
                            </p>
                        </motion.div>

                        {/* Bridge / Connection */}
                        <div className="flex flex-col items-center justify-center relative py-8 md:py-0">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-24 h-24 bg-gold/10 rounded-full border border-gold/30 flex items-center justify-center text-gold relative z-10 backdrop-blur-sm"
                            >
                                <FaArrowRightArrowLeft size={32} />
                            </motion.div>

                            {/* Animated Connection Lines */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent -translate-y-1/2">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-gold to-transparent"
                                />
                            </div>

                            <div className="mt-6 text-center z-10">
                                <h4 className="text-gold font-display font-semibold text-lg uppercase tracking-widest">
                                    The Corridor
                                </h4>
                                <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">
                                    Strategic Partnership
                                </p>
                            </div>
                        </div>

                        {/* Italy Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 hover:border-gold/50 transition-colors group"
                        >
                            <div className="w-16 h-16 mx-auto bg-[#009246]/20 rounded-full flex items-center justify-center text-[#009246] group-hover:text-white mb-6 group-hover:bg-[#009246] transition-all duration-300">
                                <FaEarthEurope size={32} />
                            </div>
                            <h3 className="text-2xl font-display font-semibold text-white mb-2 tracking-wide">Italy</h3>
                            <div className="h-1 w-12 bg-[#009246] mx-auto rounded-full mb-4" />
                            <p className="text-white/70 text-sm leading-relaxed">
                                A global leader in design, luxury, high-tech manufacturing, and European market accessibility.
                            </p>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IndiaItalySection;
