import { motion } from 'framer-motion';

const SectionHeading = ({
    label,
    title,
    subtitle,
    centered = true,
    light = false,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
        >
            {label && (
                <span className="section-label mb-4 block">
                    {label}
                </span>
            )}
            <h2
                className={`heading-underline text-3xl md:text-4xl lg:text-5xl font-display font-semibold ${light ? 'text-white' : 'text-navy'
                    }`}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`mt-6 text-base md:text-lg max-w-2xl ${centered ? 'mx-auto' : ''
                        } ${light ? 'text-white/60' : 'text-[#64748B]'}`}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeading;
