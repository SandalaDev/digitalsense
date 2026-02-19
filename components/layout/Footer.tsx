import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-950 text-white pt-20 pb-8">
            <div className="container-custom">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="relative w-48 h-12 mb-6">
                            <Image
                                src="/logo/greenwhite horizontal.svg"
                                alt="Digital Sense"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-neutral-400 mb-6 leading-relaxed">
                            Delivering integrated energy, IT, and software solutions that transform operations and reduce risk.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Capabilities */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Capabilities</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#energy-systems" className="text-neutral-400 hover:text-accent transition-colors">
                                    Energy & Electrical Systems
                                </a>
                            </li>
                            <li>
                                <a href="#it-systems" className="text-neutral-400 hover:text-accent transition-colors">
                                    IT & Infrastructure
                                </a>
                            </li>
                            <li>
                                <a href="#software-systems" className="text-neutral-400 hover:text-accent transition-colors">
                                    Software & Intelligent Systems
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/capabilities/it-infrastructure#pricing" className="text-neutral-400 hover:text-accent transition-colors">
                                    IT Outsourcing Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/capabilities/energy-systems#pricing" className="text-neutral-400 hover:text-accent transition-colors">
                                    Unitised Power System Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/capabilities/energy-systems#calculator" className="text-neutral-400 hover:text-accent transition-colors">
                                    Power System Calculator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-accent mt-0.5" />
                                <a href="mailto:connect@digitalsense.tech" className="text-neutral-400 hover:text-accent transition-colors">
                                    connect@digitalsense.tech
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                                <span className="text-neutral-400">
                                    Plot F3091/M #2, Foxdale Area<br />
                                    Lusaka, 10101, Zambia
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-neutral-400 text-sm text-center md:text-left">
                        © {currentYear} Digital Sense. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
