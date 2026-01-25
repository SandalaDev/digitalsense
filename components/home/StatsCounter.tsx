'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface StatsCounterProps {
    value: string;
    label: string;
    duration?: number;
}

export function StatsCounter({ value, label, duration = 2000 }: StatsCounterProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Extract number from value string
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const startTime = Date.now();
                    const endTime = startTime + duration;

                    const updateCount = () => {
                        const now = Date.now();
                        const progress = Math.min((now - startTime) / duration, 1);
                        const easeOutQuad = 1 - Math.pow(1 - progress, 3);
                        const currentCount = Math.floor(easeOutQuad * numericValue);

                        setCount(currentCount);

                        if (now < endTime) {
                            requestAnimationFrame(updateCount);
                        } else {
                            setCount(numericValue);
                        }
                    };

                    requestAnimationFrame(updateCount);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [hasAnimated, numericValue, duration]);

    return (
        <div ref={ref} className="border-l-2 border-accent/50 pl-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-1 text-accent"
            >
                {count}{suffix}
            </motion.div>
            <div className="text-sm text-white/70">{label}</div>
        </div>
    );
}
