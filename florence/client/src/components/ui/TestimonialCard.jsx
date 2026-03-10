import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa6';

const TestimonialCard = ({ quote, author, company, rating }) => {
    return (
        <div className="bg-white border text-left border-[#E2E8F0] rounded-2xl p-6 md:p-8 h-full flex flex-col relative overflow-hidden group hover:border-gold/50 transition-colors duration-500 shadow-sm hover:shadow-xl">
            <div className="absolute -top-4 -right-4 text-navy/5 text-8xl group-hover:text-gold/5 transition-colors duration-500">
                <FaQuoteLeft />
            </div>

            <div className="flex text-gold text-sm mb-6 gap-1 relative z-10">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                    >
                        <FaStar className={i < rating ? "text-gold" : "text-gray-200"} />
                    </motion.div>
                ))}
            </div>

            <p className="text-[#64748B] text-base md:text-lg italic leading-relaxed mb-8 flex-grow relative z-10">
                "{quote}"
            </p>

            <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-navy to-[#1a3a6e] rounded-full flex items-center justify-center text-white font-display font-bold text-lg border-2 border-transparent group-hover:border-gold transition-colors duration-300">
                    {author.charAt(0)}
                </div>
                <div>
                    <h4 className="text-navy font-semibold text-base">{author}</h4>
                    <p className="text-[#64748B] text-sm">{company}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
