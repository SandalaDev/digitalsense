'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrosoft,
  faGoogle,
  faAws,
  faLinux,
  faUbuntu,
  faDigitalOcean,
  faCloudflare,
  faWindows,
} from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const logos: { name: string; icon: IconDefinition }[] = [
  { name: 'Microsoft', icon: faMicrosoft },
  { name: 'Google Cloud', icon: faGoogle },
  { name: 'AWS', icon: faAws },
  { name: 'Linux', icon: faLinux },
  { name: 'Ubuntu', icon: faUbuntu },
  { name: 'DigitalOcean', icon: faDigitalOcean },
  { name: 'Cloudflare', icon: faCloudflare },
  { name: 'Windows', icon: faWindows },
];

export function LogoScroller() {
  return (
    <section className="py-16 bg-white overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] relative z-10">
      <div className="container-custom mb-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold">
          Chosen by teams who take <span className="text-gradient-energy">reliability</span> seriously
        </h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex items-center animate-logo-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-12 flex items-center space-x-3 opacity-30 hover:opacity-70 transition-opacity duration-300"
            >
              <FontAwesomeIcon icon={logo.icon} className="h-8 w-8 text-neutral-800" />
              <span className="text-lg font-semibold text-neutral-800 whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
