import { useState, useEffect, useRef } from 'react';

const useCountUp = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const countRef = useRef(start);
    const rafRef = useRef(null);

    useEffect(() => {
        const startTime = performance.now();
        const range = end - start;

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            countRef.current = Math.round(start + range * eased);
            setCount(countRef.current);

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(step);
            }
        };

        rafRef.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafRef.current);
    }, [end, duration, start]);

    return count;
};

export default useCountUp;
