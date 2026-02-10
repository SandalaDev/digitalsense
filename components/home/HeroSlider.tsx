'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../shared/ImageWithFallback';

interface HeroSlide {
    id: number;
    title: string;
    titleHighlight: string;
    description: string;
    backgroundImage: string;
    primaryCTA: {
        label: string;
        href: string;
    };
    secondaryCTA: {
        label: string;
        href: string;
    };
    badge: string;
    stats?: {
        value: string;
        label: string;
    }[];
}

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const slides: HeroSlide[] = [
        {
            id: 1,
            badge: 'Energy & Electrical Systems',
            title: 'Power Systems That',
            titleHighlight: 'Never Fail',
            description: 'Design, integrate, and maintain reliable electrical infrastructure. From renewable energy integration to mission-critical backup systems, we deliver power solutions that keep your operations running.',
            backgroundImage: 'https://images.unsplash.com/photo-1652849962548-44d46f88d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
            primaryCTA: {
                label: 'Energy Solutions',
                href: '#energy-systems',
            },
            secondaryCTA: {
                label: 'View Case Studies',
                href: '#case-studies',
            },
            stats: [
                { value: '250+', label: 'Power Systems' },
                { value: '99.9%', label: 'Uptime' },
                { value: '50MW', label: 'Managed Capacity' },
            ],
        },
        {
            id: 2,
            badge: 'IT & Infrastructure Systems',
            title: 'Networks Built for',
            titleHighlight: 'Scale & Security',
            description: 'Enterprise-grade IT infrastructure that connects, protects, and performs. From data centers to distributed networks, we architect systems that grow with your business.',
            backgroundImage: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
            primaryCTA: {
                label: 'IT Infrastructure',
                href: '#it-systems',
            },
            secondaryCTA: {
                label: 'Network Design',
                href: '#network-design',
            },
            stats: [
                { value: '150+', label: 'Networks Deployed' },
                { value: '10Gbps', label: 'Average Throughput' },
                { value: 'Zero', label: 'Breaches' },
            ],
        },
        {
            id: 3,
            badge: 'Software & Intelligent Systems',
            title: 'Software That',
            titleHighlight: 'Transforms Operations',
            description: 'Custom software solutions that automate, optimize, and integrate. From IoT platforms to AI-driven analytics, we build intelligent systems that deliver measurable business value.',
            backgroundImage: 'https://images.unsplash.com/photo-1658274474930-bb27a64022c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
            primaryCTA: {
                label: 'Software Solutions',
                href: '#software-systems',
            },
            secondaryCTA: {
                label: 'Custom Development',
                href: '#custom-dev',
            },
            stats: [
                { value: '100+', label: 'Applications Built' },
                { value: '5M+', label: 'Data Points/Day' },
                { value: '40%', label: 'Avg. Cost Reduction' },
            ],
        },
    ];

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    // Auto-advance slides every 7 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 7000);

        return () => clearInterval(timer);
    }, [currentSlide]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
        }),
    };

    return (
        <section className="relative h-svh min-h-[600px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 },
                    }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <ImageWithFallback
                            src={slides[currentSlide].backgroundImage}
                            alt={slides[currentSlide].title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Enhanced dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/70" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="container-custom relative h-full flex items-end pb-28 sm:items-center sm:pt-20 sm:pb-24">
                        <div className="max-w-4xl text-white space-y-4 sm:space-y-5 lg:space-y-6 2xl:space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-accent border border-green-500/30"
                            >
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs sm:text-sm font-semibold text-white">{slides[currentSlide].badge}</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-[1.1]"
                            >
                                {slides[currentSlide].title}
                                <br />
                                <span className="text-gradient-energy">{slides[currentSlide].titleHighlight}</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-white/80 max-w-2xl leading-relaxed"
                            >
                                {slides[currentSlide].description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-3 md:gap-4 pt-1 sm:pt-2"
                            >
                                <a
                                    href={slides[currentSlide].primaryCTA.href}
                                    className="group px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-3.5 2xl:px-10 2xl:py-5 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition-all shadow-lg hover:shadow-2xl inline-flex items-center justify-center space-x-2.5"
                                >
                                    <span className="text-sm md:text-base">{slides[currentSlide].primaryCTA.label}</span>
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href={slides[currentSlide].secondaryCTA.href}
                                    className="group px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-3.5 2xl:px-10 2xl:py-5 rounded-xl glass-light border border-white/20 font-semibold text-white hover:bg-white/15 transition-all inline-flex items-center justify-center space-x-2.5"
                                >
                                    <span className="text-sm md:text-base">{slides[currentSlide].secondaryCTA.label}</span>
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>

                            {/* Stats */}
                            {slides[currentSlide].stats && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="hidden sm:grid grid-cols-3 gap-4 md:gap-6 2xl:gap-8 max-w-2xl"
                                >
                                    {slides[currentSlide].stats.map((stat, index) => (
                                        <div key={index} className="border-l-2 border-accent/50 pl-3 md:pl-4">
                                            <div className="text-xl md:text-2xl 2xl:text-4xl font-bold mb-1 text-accent">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs md:text-sm text-white/70">{stat.label}</div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-20">
                <div className="container-custom">
                    <div className="flex items-center justify-between">
                        {/* Slide Indicators */}
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className="group relative"
                                    aria-label={`Go to slide ${index + 1}`}
                                >
                                    {/* Background bar */}
                                    <div className="h-1 w-8 sm:w-12 md:w-16 bg-white/30 rounded-full overflow-hidden">
                                        {/* Progress bar for current slide */}
                                        {index === currentSlide && (
                                            <motion.div
                                                className="h-full bg-accent"
                                                initial={{ width: '0%' }}
                                                animate={{ width: '100%' }}
                                                transition={{ duration: 7, ease: 'linear' }}
                                            />
                                        )}
                                        {/* Full bar for completed slides */}
                                        {index < currentSlide && (
                                            <div className="h-full w-full bg-accent" />
                                        )}
                                    </div>
                                    {/* Label on hover */}
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg glass border border-white/20 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
                                        {slides[index].badge}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Scroll Indicator — centered between indicators and arrows */}
                        <a href="#capabilities" className="hidden sm:block">
                            <div className="w-6 h-9 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5 hover:border-white/50 transition-colors">
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-1.5 h-1.5 rounded-full bg-white/50"
                                />
                            </div>
                        </a>

                        {/* Arrow Controls */}
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-light border border-white/15 flex items-center justify-center text-white hover:bg-white/15 hover:scale-110 transition-all"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-light border border-white/15 flex items-center justify-center text-white hover:bg-white/15 hover:scale-110 transition-all"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vertical Slide Number */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
                <div className="flex flex-col items-center space-y-4">
                    <div className="text-white/50 text-sm font-mono">
                        0{currentSlide + 1}
                    </div>
                    <div className="w-px h-20 bg-white/20" />
                    <div className="text-white/30 text-sm font-mono">
                        0{slides.length}
                    </div>
                </div>
            </div>
        </section>
    );
}
