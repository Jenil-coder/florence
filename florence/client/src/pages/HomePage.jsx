import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import TradeFairsSection from '../components/home/TradeFairsSection';
import IndiaItalySection from '../components/home/IndiaItalySection';
import MembershipSection from '../components/home/MembershipSection';
import ChaptersSection from '../components/home/ChaptersSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import WhyUsSection from '../components/home/WhyUsSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import RoadmapSection from '../components/home/RoadmapSection';
import ContactSection from '../components/home/ContactSection';
import AnimatedDivider from '../components/ui/AnimatedDivider';
import MarqueeStrip from '../components/ui/MarqueeStrip';

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <MarqueeStrip />

            <AboutSection />
            <AnimatedDivider variant="gold" className="bg-[#F5F7FA]" />

            <ServicesSection />
            <AnimatedDivider variant="navy" className="bg-white" />

            <TradeFairsSection />
            <AnimatedDivider variant="gold" className="bg-navy" />

            <IndiaItalySection />
            <AnimatedDivider variant="teal" className="bg-white" />

            <MembershipSection />
            <AnimatedDivider variant="gold" className="bg-[#F8FAFC]" />

            <ChaptersSection />
            <AnimatedDivider variant="navy" className="bg-white" />

            <TestimonialsSection />
            <AnimatedDivider variant="gold" className="bg-white" />

            <WhyUsSection />
            <AnimatedDivider variant="teal" className="bg-white" />

            <HowItWorksSection />
            <AnimatedDivider variant="gold" className="bg-[#F5F7FA]" />

            <RoadmapSection />
            <ContactSection />
        </main>
    );
};

export default HomePage;
