import { Metadata } from 'next';
import AboutPage from './AboutPage';

export const metadata: Metadata = {
  title: 'About | Digital Sense',
  description:
    'Digital Sense is an engineering-led technology firm delivering energy, IT infrastructure, and software systems — built for reliability across Southern Africa.',
  keywords: [
    'engineering firm',
    'Zambia',
    'energy systems',
    'IT infrastructure',
    'software systems',
    'Lusaka',
  ],
};

export default function Page() {
  return <AboutPage />;
}
