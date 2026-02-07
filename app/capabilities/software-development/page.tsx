import { Metadata } from 'next';
import { SoftwareSystems } from './SoftwareSystems';

export const metadata: Metadata = {
  title: 'Software Development | Digital Sense',
  description: 'Full-stack web applications, headless CMS, AI integration, and e-commerce platforms built with Next.js, React, and TypeScript. Strategic brand design and UI/UX included.',
  keywords: ['software development', 'Next.js', 'React', 'Payload CMS', 'AI integration', 'e-commerce', 'web applications', 'Zambia'],
};

export default function SoftwareDevelopmentPage() {
  return <SoftwareSystems />;
}
