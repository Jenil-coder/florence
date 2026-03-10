import { motion } from 'framer-motion';
import ContactSection from '../components/home/ContactSection';
import { FaLocationDot } from 'react-icons/fa6';

const ContactPage = () => {
    return (
        <main className="pt-20">
            {/* Hero Banner */}
            <section className="bg-navy py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-gold text-sm font-mono tracking-[0.25em] uppercase block mb-6"
                    >
                        CONTACT US
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white mb-8"
                    >
                        Let's Build Together
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Whether you're looking to join our network, attend a trade fair, or explore
                        business opportunities — we'd love to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* Reuse Contact Section */}
            <ContactSection />

            {/* Map / Location hint */}
            <section className="bg-navy py-24 relative overflow-hidden border-t border-white/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay" />

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-24 h-24 mx-auto bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-4xl text-gold mb-8 shadow-[0_0_30px_rgba(201,168,76,0.2)]"
                    >
                        <FaLocationDot />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white font-display text-4xl font-semibold mb-4"
                    >
                        Visit Us
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-white/70 text-xl font-light mb-6"
                    >
                        Gurugram Sector-52, Haryana, India
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-gold text-sm tracking-widest uppercase font-mono bg-white/5 inline-block px-6 py-2 rounded-full border border-white/10"
                    >
                        Available for meetings by appointment
                    </motion.p>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
