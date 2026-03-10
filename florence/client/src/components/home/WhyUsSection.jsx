import { motion } from 'framer-motion';
import Button from '../ui/Button';
import StatCard from '../ui/StatCard';
import { FaGlobe, FaLink, FaBullseye, FaCircleCheck } from 'react-icons/fa6';

const reasons = [
    { icon: FaGlobe, title: 'Global Reach', desc: 'Direct access to verified business leaders across Europe and Asia.' },
    { icon: FaLink, title: 'End-to-End Support', desc: 'From initial introduction to finalizing the trade deal.' },
    { icon: FaBullseye, title: 'Industry Specific', desc: 'Tailored matchmaking based on your exact sector needs.' },
];

const WhyUsSection = () => {
    return (
        <section className="py-20 md:py-32 bg-[#F5F7FA] relative overflow-hidden">
            {/* Giant Background Text */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-display font-bold text-navy/[0.03] whitespace-nowrap pointer-events-none select-none">
                WHY FBNI
            </h2>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="mb-10 lg:mb-0"
                    >
                        <span className="section-label mb-4 block">THE FBNI ADVANTAGE</span>
                        <h2 className="text-3xl md:text-5xl font-display font-semibold text-navy mb-6 leading-tight">
                            Why Choose Us as Your <br className="hidden md:block" />
                            <span className="text-gold">Global Partner</span>
                        </h2>
                        <p className="text-[#64748B] text-lg leading-relaxed mb-10">
                            We don't just introduce you to overseas contacts; we actively facilitate
                            and nurture transactions. Our deep understanding of both Indian
                            and Italian business cultures eliminates traditional barriers to entry.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mb-12">
                            <StatCard end={20} suffix="+" label="Years Experience" />
                            <StatCard end={500} suffix="+" label="Global Partners" />
                        </div>

                        <Button variant="outline" size="lg" to="/about" className="hover:bg-navy hover:text-white transition-colors duration-300">
                            Read Our Story
                        </Button>
                    </motion.div>

                    <div className="space-y-6 lg:pl-10">
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 100 }}
                                className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_-15px_rgba(11,31,58,0.1)] flex items-start gap-6 group hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-gold/30"
                            >
                                <div className="w-14 h-14 bg-[#F5F7FA] rounded-full flex-shrink-0 flex items-center justify-center text-gold text-2xl group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                    <reason.icon />
                                </div>
                                <div>
                                    <h3 className="text-navy text-xl font-semibold mb-2 flex items-center gap-2">
                                        {reason.title}
                                        <FaCircleCheck className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                                    </h3>
                                    <p className="text-[#64748B] text-base leading-relaxed">{reason.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
