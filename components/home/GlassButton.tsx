'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface GlassButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'accent';
    icon?: boolean;
    className?: string;
}

export function GlassButton({
    children,
    href,
    onClick,
    variant = 'primary',
    icon = true,
    className = ''
}: GlassButtonProps) {
    const Component = href ? 'a' : 'button';

    const baseClasses = 'group relative px-8 py-4 rounded-xl font-medium overflow-hidden transition-all duration-300';
    const variantClasses = variant === 'primary'
        ? 'glass hover:shadow-2xl'
        : 'glass hover:shadow-2xl';

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`${baseClasses} ${variantClasses} ${className}`}
        >
            {/* Animated gradient background on hover */}
            <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${variant === 'primary' ? 'gradient-primary' : 'gradient-accent'
                    }`}
                initial={false}
            />

            {/* Shimmer effect on hover */}
            <motion.div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                }}
            />

            {/* Content */}
            <span className="relative flex items-center space-x-2 justify-center">
                <span>{children}</span>
                {icon && (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                )}
            </span>
        </Component>
    );
}
