import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const testimonials = [
    {
        quote: 'FBNI has been instrumental in helping our manufacturing firm find the right distributors in Milan. Their network is truly top-tier.',
        author: 'Rajiv Sharma',
        company: 'Director, Sharma Exports',
        rating: 5,
    },
    {
        quote: 'The trade fair in Florence was exceptionally well-organized. We secured three major European contracts within a month.',
        author: 'Elena Rossi',
        company: 'CEO, Rossi Design Studio',
        rating: 5,
    },
    {
        quote: 'As an investor, the B2B matchmaking service provided by FBNI saved me months of research. Highly professional team.',
        author: 'Vikram Mehta',
        company: 'Partner, VM Ventures',
        rating: 5,
    },
    {
        quote: 'Outstanding consulting services. They navigated the complex Italian regulatory landscape for our tech startup effortlessly.',
        author: 'Anjali Desai',
        company: 'Founder, TechBridge Solutions',
        rating: 4,
    },
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            if (!isPaused) {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            }
        }, 5000);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(timerRef.current);
    }, [isPaused]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        startTimer();
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        startTimer();
    };

    return (
        <section id="testimonials" className="py-20 md:py-32 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#F5F7FA] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeading

                    title="What Our Members Say"
                    subtitle="Real results from businesses that expanded globally with FBNI"
                />

                <div
                    className="relative max-w-4xl mx-auto mt-16"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 md:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 z-20 shadow-lg"
                    >
                        <FaChevronLeft />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 md:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 z-20 shadow-lg"
                    >
                        <FaChevronRight />
                    </button>

                    {/* Carousel */}
                    <div className="overflow-hidden px-14 md:px-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <TestimonialCard {...testimonials[currentIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-10">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setCurrentIndex(i);
                                    startTimer();
                                }}
                                className={`transition-all duration-500 rounded-full ${i === currentIndex ? 'w-8 h-2.5 bg-gold' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
