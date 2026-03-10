import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FaLocationDot } from 'react-icons/fa6';

const milestones = [
    { year: 'Q1', title: 'Network Expansion', desc: 'Opening corporate offices in Milan and Rome to facilitate direct trade.' },
    { year: 'Q2', title: 'Tech Platform', desc: 'Launch of proprietary AI B2B matchmaking platform for exclusive members.' },
    { year: 'Q3', title: 'Global Summit', desc: 'Hosting the annual India-Italy Leadership Summit in Florence.' },
    { year: 'Q4', title: 'New Markets', desc: 'Expanding chapter footprints into Germany, France, and Switzerland.' },
];

const RoadmapSection = () => {
    return (
        <section className="py-20 md:py-32 bg-[#F5F7FA] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading

                    title="Our Roadmap"
                    subtitle="Strategic milestones for the upcoming year"
                />

                <div className="mt-20 relative px-4 md:px-0">

                    {/* Animated SVG Path for Desktop */}
                    <svg className="hidden md:block absolute top-[100px] left-0 w-full h-[150px] -z-10" preserveAspectRatio="none">
                        <motion.path
                            d="M 50 50 Q 250 150 500 50 T 950 50"
                            fill="transparent"
                            stroke="#C9A84C"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray="10 10"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.4 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                        />
                    </svg>

                    {/* Vertical Line for Mobile */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="md:hidden absolute left-[31px] top-6 w-1 bg-gold/30 -z-10"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.3, type: "spring" }}
                                className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-0 group"
                            >
                                {/* Node */}
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 15 }}
                                    className="w-16 h-16 rounded-full bg-white border-[4px] border-[#F5F7FA] shadow-[0_0_20px_rgba(201,168,76,0.2)] flex items-center justify-center text-gold md:mb-8 flex-shrink-0 z-10 transition-transform duration-300"
                                >
                                    <FaLocationDot size={20} className="group-hover:animate-bounce" />
                                </motion.div>

                                {/* Content */}
                                <div className="md:text-center mt-2 md:mt-0 flex-1">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + index * 0.3 }}
                                        className="inline-block px-4 py-1 bg-navy text-white text-sm font-bold rounded-full mb-4 shadow-md font-mono"
                                    >
                                        {item.year}
                                    </motion.div>
                                    <h3 className="text-xl font-semibold text-navy mb-3 font-display relative inline-block group-hover:text-gold transition-colors duration-300">
                                        {item.title}
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                                    </h3>
                                    <p className="text-[#64748B] text-sm leading-relaxed max-w-[250px] mx-auto">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
