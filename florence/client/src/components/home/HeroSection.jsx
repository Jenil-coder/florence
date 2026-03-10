import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StatCard from '../ui/StatCard';
import GlobalDashboard from './GlobalDashboard';
import DashboardStatusBar from '../ui/DashboardStatusBar';

const words = 'Building Strong India–Italy and Global Business Connections'.split(' ');

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a1628]">

            {/* Immersive Global Business Network Dashboard */}
            <GlobalDashboard />

            {/* Content overlay */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
                {/* Subtle backdrop wrapper to ensure text readability over the complex dashboard lines */}
                <div className="bg-[#0a1628]/40 backdrop-blur-[2px] p-8 rounded-[3rem] border border-white/5 shadow-2xl inline-block max-w-4xl mx-auto">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/40 text-gold text-sm font-mono mb-8 pulse-glow bg-[#0a1628]/60"
                    >
                        🌐 India · Italy · Global
                    </motion.div>

                    {/* Heading - word by word */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white leading-tight mb-6 text-shimmer">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                                className="inline-block mr-[0.3em]"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-medium"
                    >
                        A professional platform connecting Indian businesses with global opportunities
                        through trade, networking, and international collaboration.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light hover:scale-105 transition-all text-base"
                        >
                            Join Our Network
                        </Link>
                        <Link
                            to="/services"
                            className="px-8 py-4 border-2 border-gold/60 text-gold font-semibold rounded-lg hover:bg-gold hover:text-navy hover:border-gold transition-all text-base bg-[#0a1628]/50 backdrop-blur-sm"
                        >
                            Explore Services
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Live Status Bar */}
            <DashboardStatusBar />

        </section>
    );
};

export default HeroSection;
