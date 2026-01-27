'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Capabilities', href: '#capabilities' },
        { label: 'Solutions', href: '#solutions' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'glass shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative w-32 h-10">
                            <Image
                                src="/logo white.svg"
                                alt="Digital Sense"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors relative group ${isScrolled
                                    ? 'text-accent hover:text-accent/80'
                                    : 'text-white hover:text-white/80'
                                    }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-accent' : 'bg-white'
                                    }`} />
                            </a>
                        ))}
                    </nav>

                    {/* WhatsApp & CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a
                            href="#"
                            className={`flex items-center space-x-2 text-sm font-medium transition-colors ${isScrolled
                                ? 'text-foreground/70 hover:text-accent'
                                : 'text-white/90 hover:text-white'
                                }`}
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>WhatsApp</span>
                        </a>
                        <a
                            href="#contact"
                            className={`px-6 py-2.5 rounded-lg text-sm font-medium hover:scale-105 transition-all ${isScrolled
                                ? 'glass text-foreground'
                                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                                }`}
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden p-2 transition-colors ${isScrolled
                            ? 'text-foreground hover:text-accent'
                            : 'text-white hover:text-white/80'
                            }`}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass border-t border-border"
                    >
                        <nav className="container-custom py-6 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-base font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="#"
                                className="flex items-center space-x-2 text-base font-medium text-accent py-2"
                            >
                                <MessageCircle className="w-6 h-6" />
                                <span>WhatsApp</span>
                            </a>
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center glass px-6 py-3 rounded-lg font-medium text-foreground mt-4"
                            >
                                Get Started
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
