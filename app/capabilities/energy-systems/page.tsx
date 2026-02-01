import { Metadata } from 'next';
import { EnergySystems } from './EnergySystems';

export const metadata: Metadata = {
  title: 'Energy & Electrical Systems | Digital Sense',
  description: 'Solar PV, battery storage, and electrical infrastructure solutions across Zambia. Grid-tied, hybrid, and off-grid systems engineered for reliability and ROI.',
  keywords: ['solar panels', 'battery storage', 'electrical systems', 'Zambia', 'net-metering', 'solar installation', 'energy solutions'],
};

export default function EnergySystemsPage() {
  return <EnergySystems />;
}
