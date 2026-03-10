import { motion } from 'framer-motion';

const marqueeItems = [
    'Global Networking',
    '✦',
    'Trade Fairs',
    '✦',
    'Business Consulting',
    '✦',
    'B2B Matchmaking',
    '✦',
    'Market Expansion',
    '✦',
    'Investment Advisory',
    '✦',
    'India–Italy Bridge',
    '✦',
];

const MarqueeStrip = ({ className = '' }) => {
    return (
        <div className={`relative overflow-hidden bg-navy/5 py-4 ${className}`}>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="marquee-track">
                    {/* Duplicate content for seamless loop */}
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span
                            key={i}
                            className={`mx-4 whitespace-nowrap text-sm font-medium uppercase tracking-[0.2em] ${item === '✦' ? 'text-gold text-xs' : 'text-navy/40'
                                }`}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default MarqueeStrip;
