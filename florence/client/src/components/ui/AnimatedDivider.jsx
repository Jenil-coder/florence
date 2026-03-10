import { motion } from 'framer-motion';

const AnimatedDivider = ({ variant = 'gold', className = '' }) => {
    const colors = {
        gold: { line: '#C9A84C', glow: 'rgba(201,168,76,0.3)' },
        navy: { line: '#0B1F3A', glow: 'rgba(11,31,58,0.2)' },
        teal: { line: '#004E64', glow: 'rgba(0,78,100,0.2)' },
    };

    const c = colors[variant] || colors.gold;

    return (
        <div className={`relative w-full overflow-hidden py-4 ${className}`}>
            {/* Center line with animated glow */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="flex-1 h-[1px] origin-left"
                    style={{ background: `linear-gradient(90deg, transparent, ${c.line}, transparent)` }}
                />
                {/* Center diamond */}
                <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 45 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
                    className="w-3 h-3 flex-shrink-0"
                    style={{
                        backgroundColor: c.line,
                        boxShadow: `0 0 12px ${c.glow}`,
                    }}
                />
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
                    className="flex-1 h-[1px] origin-right"
                    style={{ background: `linear-gradient(90deg, transparent, ${c.line}, transparent)` }}
                />
            </div>
        </div>
    );
};

export default AnimatedDivider;
