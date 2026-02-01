'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Menu, X, ChevronDown, Zap, Monitor, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
    label: string;
    href: string;
    children?: { label: string; href: string; icon: React.ComponentType<{ className?: string }>; description: string }[];
}

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems: NavItem[] = [
        { label: 'Home', href: '/' },
        {
            label: 'Capabilities',
            href: '#capabilities',
            children: [
                {
                    label: 'Energy & Electrical',
                    href: '/capabilities/energy-systems',
                    icon: Zap,
                    description: 'Solar PV, battery storage, electrical infrastructure'
                },
                {
                    label: 'IT Infrastructure',
                    href: '#capabilities',
                    icon: Monitor,
                    description: 'Networks, servers, cloud solutions'
                },
                {
                    label: 'Software Solutions',
                    href: '#capabilities',
                    icon: Code,
                    description: 'Custom development, integrations, automation'
                },
            ]
        },
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
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                {item.children ? (
                                    <button
                                        className={`flex items-center space-x-1 text-sm font-medium transition-colors relative group ${isScrolled
                                            ? 'text-accent hover:text-accent/80'
                                            : 'text-white hover:text-white/80'
                                            }`}
                                    >
                                        <span>{item.label}</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-accent' : 'bg-white'}`} />
                                    </button>
                                ) : (
                                    <a
                                        href={item.href}
                                        className={`text-sm font-medium transition-colors relative group ${isScrolled
                                            ? 'text-accent hover:text-accent/80'
                                            : 'text-white hover:text-white/80'
                                            }`}
                                    >
                                        {item.label}
                                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-accent' : 'bg-white'}`} />
                                    </a>
                                )}

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {item.children && openDropdown === item.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 pt-4 w-72"
                                        >
                                            <div className="glass rounded-xl p-2 shadow-xl border border-border">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                                                    >
                                                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                                                            <child.icon className="w-5 h-5 text-accent group-hover:text-white" />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                                                                {child.label}
                                                            </div>
                                                            <div className="text-xs text-muted-foreground">
                                                                {child.description}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
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
                        <nav className="container-custom py-6 space-y-2">
                            {navItems.map((item) => (
                                <div key={item.label}>
                                    {item.children ? (
                                        <div>
                                            <button
                                                onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                                                className="flex items-center justify-between w-full text-base font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                                            >
                                                <span>{item.label}</span>
                                                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {openDropdown === item.label && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="pl-4 space-y-1 overflow-hidden"
                                                    >
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.href}
                                                                href={child.href}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="flex items-center space-x-3 py-2 text-foreground/60 hover:text-accent transition-colors"
                                                            >
                                                                <child.icon className="w-5 h-5 text-accent" />
                                                                <span>{child.label}</span>
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-base font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </div>
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
