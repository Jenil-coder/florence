import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEarthAmericas, FaHandshake, FaLightbulb, FaBullseye } from 'react-icons/fa6';

const values = [
    {
        icon: FaEarthAmericas,
        title: 'Global Vision',
        desc: 'We think beyond boundaries to create opportunities that span continents and cultures.',
    },
    {
        icon: FaHandshake,
        title: 'Trust & Integrity',
        desc: 'Every partnership is built on transparency, accountability, and mutual respect.',
    },
    {
        icon: FaLightbulb,
        title: 'Innovation',
        desc: 'We leverage cutting-edge strategies and technologies to give our members a competitive edge.',
    },
    {
        icon: FaBullseye,
        title: 'Results-Driven',
        desc: 'Measurable outcomes and tangible business growth are our top priorities.',
    },
];

const timeline = [
    { year: 'Foundation', desc: 'FBNI was established with a vision to bridge Indian and Italian business communities.' },
    { year: 'Growth', desc: 'Expanded to 10+ Indian cities and established partnerships across Europe.' },
    { year: 'Impact', desc: 'Facilitated over 500 successful business connections and trade deals globally.' },
    { year: 'Future', desc: 'Aiming to become the world\'s premier India-Italy business networking platform.' },
];

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const AboutPage = () => {
    return (
        <main className="pt-20">
            {/* Hero Banner */}
            <section className="bg-navy py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-gold text-sm font-mono tracking-[0.25em] uppercase block mb-6"
                    >
                        ABOUT FBNI
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white mb-8"
                    >
                        Our Story & Mission
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Bridging the gap between Indian entrepreneurship and Italian excellence
                        through strategic business networking and international trade consulting.
                    </motion.p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-label mb-6 block">WHO WE ARE</span>
                            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy mb-8 leading-tight">
                                Florence Business <br /> Network International <br />
                                <span className="text-gold text-2xl md:text-3xl block mt-2">Pvt. Ltd.</span>
                            </h2>
                            <div className="space-y-6 text-[#64748B] text-lg leading-relaxed">
                                <p>
                                    Florence Business Network International (FBNI) is a professional business
                                    networking and consulting company dedicated to helping businesses expand
                                    internationally through strategic partnerships and market insights.
                                </p>
                                <p>
                                    We specialize in connecting Indian entrepreneurs with Italian and global
                                    industries, fostering trade, investment, and long-term business relationships.
                                    Our team of experienced consultants and industry experts brings decades of
                                    international business expertise.
                                </p>
                                <p className="p-6 bg-[#F5F7FA] border-l-4 border-gold rounded-r-xl italic text-navy/80 font-medium">
                                    Named after the historic city of Florence — the birthplace of the Renaissance
                                    and a symbol of innovation and trade — FBNI embodies the spirit of global
                                    commerce and cultural exchange.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {[
                                { value: '500+', label: 'Active Members' },
                                { value: '20+', label: 'Trade Events' },
                                { value: '10+', label: 'Countries' },
                                { value: '50+', label: 'Global Partners' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    variants={fadeUp}
                                    className="bg-[#F5F7FA] rounded-2xl p-8 text-center border border-transparent hover:border-gold/30 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-3">{stat.value}</div>
                                    <div className="text-[#64748B] text-base font-medium uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 md:py-32 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="heading-underline inline-block text-4xl md:text-5xl font-display font-semibold text-navy">
                            Our Core Values
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                variants={fadeUp}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white rounded-2xl p-8 text-center border border-[#E2E8F0] shadow-sm hover:border-gold hover:shadow-[0_20px_40px_-15px_rgba(201,168,76,0.2)] transition-all duration-500 group"
                            >
                                <div className="text-4xl mb-6 text-navy group-hover:text-gold transition-colors duration-300 flex justify-center">
                                    <v.icon />
                                </div>
                                <h3 className="text-navy font-semibold text-xl mb-4 group-hover:text-gold transition-colors">{v.title}</h3>
                                <p className="text-[#64748B] text-base leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Journey */}
            <section className="py-24 md:py-32 bg-navy relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="heading-underline inline-block text-4xl md:text-5xl font-display font-semibold text-white">
                            Our Journey
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Animated Line */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="absolute left-[31px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent"
                        />

                        <div className="space-y-16">
                            {timeline.map((t, i) => (
                                <motion.div
                                    key={t.year}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: i * 0.2, type: "spring" }}
                                    className="relative pl-16 md:pl-24"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 0.4 + i * 0.2, type: "spring" }}
                                        className="absolute left-[20px] top-1.5 w-6 h-6 bg-gold rounded-full border-4 border-navy z-10 shadow-[0_0_15px_rgba(201,168,76,0.6)]"
                                    />
                                    <h3 className="text-gold font-display font-bold text-3xl mb-3">{t.year}</h3>
                                    <p className="text-white/70 text-lg leading-relaxed">{t.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center relative bg-fixed">
                <div className="absolute inset-0 bg-navy/90 backdrop-blur-sm" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto px-4 text-center relative z-10"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
                        Ready to Be Part of Our Story?
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Join hundreds of businesses that have expanded globally with FBNI.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-12 py-5 bg-gold text-navy font-semibold rounded-xl hover:bg-gold-light hover:scale-105 transition-all shadow-[0_0_30px_rgba(201,168,76,0.3)] text-lg"
                    >
                        Get Started Today
                    </Link>
                </motion.div>
            </section>
        </main>
    );
};

export default AboutPage;
