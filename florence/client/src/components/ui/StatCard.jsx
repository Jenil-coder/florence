import { motion } from 'framer-motion';
import useCountUp from '../../hooks/useCountUp';

const StatCard = ({ end, suffix = '', label, delay = 0 }) => {
    const count = useCountUp(end, 2000);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="text-center"
        >
            <div className="text-3xl md:text-4xl font-display font-bold text-gold">
                {count}{suffix}
            </div>
            <div className="text-white/60 text-sm mt-1 font-sans">{label}</div>
        </motion.div>
    );
};

export default StatCard;
