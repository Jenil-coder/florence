import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FaFileSignature, FaBuildingColumns, FaRocket } from 'react-icons/fa6';

const steps = [
    {
        num: '01',
        icon: FaFileSignature,
        title: 'Profile Analysis',
        desc: 'We analyze your business goals, target markets, and current capabilities to create a custom profile.',
    },
    {
        num: '02',
        icon: FaBuildingColumns,
        title: 'Strategic Matchmaking',
        desc: 'Our experts identify the ideal partners, investors, or events in Italy and Europe for your brand.',
    },
    {
        num: '03',
        icon: FaRocket,
        title: 'Execution & Growth',
        desc: 'We facilitate introductions, handle fair logistics, and consult through the final deal sealing.',
    },
];

const HowItWorksSection = () => {
    return (
        <section className="py-20 md:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading

                    title="How It Works"
                    subtitle="A streamlined roadmap to your international business expansion"
                />

                <div className="mt-20 relative">
                    {/* Connecting Dashed Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gold/30 -z-10" />

                    {/* Animated path line */}
                    <svg className="hidden lg:block absolute top-[120px] left-[10%] w-[80%] h-[4px] -z-10 -translate-y-[2px]" preserveAspectRatio="none">
                        <motion.line
                            x1="0" y1="2" x2="100%" y2="2"
                            stroke="#C9A84C"
                            strokeWidth="4"
                            initial={{ strokeDasharray: "100%", strokeDashoffset: "100%" }}
                            whileInView={{ strokeDashoffset: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.4 }}
                                className="text-center group relative"
                            >
                                {/* Step Number Badge */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-navy text-gold font-mono text-sm font-bold px-4 py-1 rounded-full border-2 border-white shadow-md z-20 group-hover:bg-gold group-hover:text-navy transition-colors">
                                    Step {step.num}
                                </div>

                                {/* Card */}
                                <div className="bg-white border text-center border-[#E2E8F0] rounded-2xl p-8 pt-12 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(201,168,76,0.3)] hover:border-gold transition-all duration-300 h-full">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                        className="w-20 h-20 mx-auto rounded-full bg-[#F5F7FA] flex items-center justify-center text-3xl mb-6 text-gold group-hover:bg-gold/10 transition-colors"
                                    >
                                        <step.icon />
                                    </motion.div>
                                    <h3 className="text-xl font-semibold text-navy mb-4 font-display">{step.title}</h3>
                                    <p className="text-[#64748B] text-base leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
