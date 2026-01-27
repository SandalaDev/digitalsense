import Link from 'next/link';
import { Mail, MessageCircle, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-950 text-white pt-20 pb-8">
            <div className="container-custom">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                                <span className="text-white font-bold text-xl">DS</span>
                            </div>
                            <div>
                                <div className="font-bold text-lg">DIGITAL SENSE</div>
                                <div className="text-xs text-neutral-400">INTEGRATED SYSTEMS</div>
                            </div>
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

                    {/* Solutions */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Solutions</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#commercial" className="text-neutral-400 hover:text-accent transition-colors">
                                    Commercial Infrastructure
                                </a>
                            </li>
                            <li>
                                <a href="#industrial" className="text-neutral-400 hover:text-accent transition-colors">
                                    Industrial Operations
                                </a>
                            </li>
                            <li>
                                <a href="#sustainable" className="text-neutral-400 hover:text-accent transition-colors">
                                    Sustainable Power
                                </a>
                            </li>
                            <li>
                                <a href="#digital" className="text-neutral-400 hover:text-accent transition-colors">
                                    Digital Transformation
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-accent mt-0.5" />
                                <a href="mailto:info@digitalsense.com" className="text-neutral-400 hover:text-accent transition-colors">
                                    info@digitalsense.com
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MessageCircle className="w-5 h-5 text-accent mt-0.5" />
                                <a href="#" className="text-neutral-400 hover:text-accent transition-colors">
                                    WhatsApp
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                                <span className="text-neutral-400">
                                    123 Tech Street<br />
                                    San Francisco, CA 94105
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-neutral-400 text-sm">
                            © {currentYear} Digital Sense. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-neutral-400 hover:text-accent transition-colors text-sm">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-neutral-400 hover:text-accent transition-colors text-sm">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
