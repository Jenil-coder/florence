import { motion } from 'framer-motion';
import { FaEarthAmericas, FaHandshake, FaUserTie, FaRocket } from 'react-icons/fa6';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const benefits = [
    { icon: FaEarthAmericas, title: 'Global Exposure', desc: 'Present your business to an international audience.' },
    { icon: FaHandshake, title: 'Exclusive Networks', desc: 'Access private events, dinners, and high-level meetings.' },
    { icon: FaUserTie, title: 'Expert Advisory', desc: 'Consulting on legal, financial, and regulatory matters.' },
    { icon: FaRocket, title: 'Growth Opportunities', desc: 'Find investors, distributors, and strategic partners.' },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } }
};

const MembershipSection = () => {
    return (
        <section id="membership" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    label=""
                    title="Membership Benefits"
                    subtitle="Unlock the potential of your business with our exclusive network"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {benefits.map((benefit) => (
                        <motion.div
                            key={benefit.title}
                            variants={itemVariants}
                            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(11,31,58,0.08)' }}
                            className="bg-[#F5F7FA] rounded-2xl p-8 hover:bg-navy group transition-all duration-500 ease-out"
                        >
                            <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-gold text-2xl mb-6 group-hover:scale-110 group-hover:bg-gold/10 transition-transform duration-300">
                                <benefit.icon />
                            </div>
                            <h3 className="text-navy font-semibold text-lg mb-3 group-hover:text-white transition-colors duration-300">
                                {benefit.title}
                            </h3>
                            <p className="text-[#64748B] text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                                {benefit.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto bg-gold/5 border border-gold/20 rounded-3xl p-10"
                >
                    <h3 className="text-2xl font-display font-semibold text-navy mb-4">
                        Become a Corporate Member
                    </h3>
                    <p className="text-[#64748B] mb-8">
                        Elevate your company's profile across borders. Apply today and our membership team will be in touch.
                    </p>
                    <Button variant="primary" size="lg" to="/contact" className="hover:scale-105 transition-transform duration-300 shadow-lg shadow-gold/20">
                        Apply for Membership
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default MembershipSection;
