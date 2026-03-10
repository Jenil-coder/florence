import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const IntroAnimation = ({ onComplete }) => {
    const overlayRef = useRef(null);
    const fbniRef = useRef(null);
    const taglineRef = useRef(null);
    const flagsRef = useRef(null);
    const lineRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        const finish = () => {
            sessionStorage.setItem('hasSeenIntro', 'true');
            onComplete();
        };

        // Safety fallback: always complete within 5 seconds even if GSAP fails
        const fallbackTimer = setTimeout(finish, 5000);

        try {
            const tl = gsap.timeline({
                onComplete: () => {
                    clearTimeout(fallbackTimer);
                    finish();
                },
            });

            gsap.set(
                [fbniRef.current, taglineRef.current, flagsRef.current, subtitleRef.current],
                { opacity: 0, y: 30 }
            );
            gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'left center' });

            tl.to(fbniRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
                .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
                .to(flagsRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.5)' }, '+=0.2')
                .to(lineRef.current, { scaleX: 1, duration: 0.5, ease: 'power2.inOut' }, '-=0.2')
                .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
                .to(overlayRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: 'power4.inOut',
                    delay: 0.6,
                });
        } catch (err) {
            console.error('IntroAnimation GSAP error:', err);
            clearTimeout(fallbackTimer);
            finish();
        }

        return () => clearTimeout(fallbackTimer);
    }, [onComplete]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy"
        >
            <div className="text-center space-y-4 px-6">
                <h1
                    ref={fbniRef}
                    className="text-7xl md:text-9xl font-bold text-gold tracking-[0.2em] font-display"
                >
                    FBNI
                </h1>
                <p
                    ref={taglineRef}
                    className="text-white text-sm md:text-base tracking-[0.3em] uppercase opacity-80 font-sans"
                >
                    Florence Business Network International
                </p>
                <div ref={flagsRef} className="flex items-center justify-center gap-6 mt-4">
                    <span className="text-lg md:text-xl font-display text-white/90 tracking-[0.2em] uppercase">India</span>
                    <div ref={lineRef} className="h-px w-20 md:w-24 bg-gold shadow-[0_0_15px_rgba(201,168,76,0.5)]" />
                    <span className="text-lg md:text-xl font-display text-white/90 tracking-[0.2em] uppercase">Italy</span>
                </div>
                <p
                    ref={subtitleRef}
                    className="text-white/60 text-sm md:text-base max-w-md mx-auto mt-6"
                >
                    Building Strong India–Italy and Global Business Connections
                </p>
            </div>
        </div>
    );
};

export default IntroAnimation;
