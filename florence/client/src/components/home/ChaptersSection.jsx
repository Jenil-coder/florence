import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import {
    FaStethoscope, FaHotel, FaPills, FaMicroscope, FaScaleBalanced,
    FaCoins, FaBullseye, FaChartPie, FaMagnifyingGlassChart,
    FaHelmetSafety, FaGlobe
} from 'react-icons/fa6';

const chapters = [
    { icon: FaStethoscope, name: 'Medical', color: 'bg-blue-50 text-blue-600 border-blue-100 hover:border-blue-300 hover:bg-blue-600 hover:text-white' },
    { icon: FaHotel, name: 'Hospitality', color: 'bg-orange-50 text-orange-600 border-orange-100 hover:border-orange-300 hover:bg-orange-600 hover:text-white' },
    { icon: FaPills, name: 'Pharma', color: 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:border-emerald-300 hover:bg-emerald-600 hover:text-white' },
    { icon: FaMicroscope, name: 'Scientific', color: 'bg-purple-50 text-purple-600 border-purple-100 hover:border-purple-300 hover:bg-purple-600 hover:text-white' },
    { icon: FaScaleBalanced, name: 'Legal', color: 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-700 hover:text-white' },
    { icon: FaCoins, name: 'Finance', color: 'bg-green-50 text-green-600 border-green-100 hover:border-green-300 hover:bg-green-600 hover:text-white' },
    { icon: FaBullseye, name: 'Marketing', color: 'bg-pink-50 text-pink-600 border-pink-100 hover:border-pink-300 hover:bg-pink-600 hover:text-white' },
    { icon: FaChartPie, name: 'Business Consultants', color: 'bg-indigo-50 text-indigo-600 border-indigo-100 hover:border-indigo-300 hover:bg-indigo-600 hover:text-white' },
    { icon: FaMagnifyingGlassChart, name: 'Chartered Accountants', color: 'bg-teal-50 text-teal-600 border-teal-100 hover:border-teal-300 hover:bg-teal-600 hover:text-white' },
    { icon: FaHelmetSafety, name: 'Civil Contract', color: 'bg-amber-50 text-amber-600 border-amber-100 hover:border-amber-300 hover:bg-amber-600 hover:text-white' },
    { icon: FaGlobe, name: 'Immigration', color: 'bg-cyan-50 text-cyan-600 border-cyan-100 hover:border-cyan-300 hover:bg-cyan-600 hover:text-white' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150 } }
};

const ChaptersSection = () => {
    return (
        <section className="py-20 md:py-28 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    label=""
                    title="Professional Chapters"
                    subtitle="Specialized business chapters connecting industry experts"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12 mb-16"
                >
                    {chapters.map((chapter) => (
                        <motion.div
                            key={chapter.name}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-3 px-6 py-4 rounded-full border shadow-sm cursor-pointer transition-all duration-300 font-medium ${chapter.color} group`}
                        >
                            <div className="text-xl group-hover:scale-110 transition-transform">
                                <chapter.icon />
                            </div>
                            <span className="whitespace-nowrap">{chapter.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center"
                >
                    <p className="text-[#64748B] text-sm md:text-base">
                        Don't see your industry? We are constantly expanding. <br className="hidden md:block" />
                        <a href="/contact" className="text-gold font-semibold hover:underline ml-1">Contact us</a> to start a new chapter.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ChaptersSection;
