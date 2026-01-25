'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    fill?: boolean;
    priority?: boolean;
}

export function ImageWithFallback({
    src,
    alt,
    className = '',
    width,
    height,
    fill = false,
    priority = false,
}: ImageWithFallbackProps) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        setHasError(true);
        // Fallback to a gradient placeholder
        setImgSrc('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3C/svg%3E');
    };

    if (fill) {
        return (
            <Image
                src={imgSrc}
                alt={alt}
                fill
                className={className}
                onError={handleError}
                priority={priority}
            />
        );
    }

    return (
        <Image
            src={imgSrc}
            alt={alt}
            width={width || 1080}
            height={height || 720}
            className={className}
            onError={handleError}
            priority={priority}
        />
    );
}
