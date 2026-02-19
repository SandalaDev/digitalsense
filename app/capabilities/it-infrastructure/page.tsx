'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Network,
    Server,
    Cloud,
    Shield,
    HeadphonesIcon,
    Clock,
    CheckCircle,
    ChevronDown,
    ArrowRight,
    Phone,
    Mail,
    TrendingUp,
    Users,
    Award,
    Wrench,
    PhoneCall,
    Globe,
    Zap,
    BarChart3,
    CalendarCheck,
    Check,
    Star,
    MonitorSmartphone,
    ShieldCheck,
    Radio
} from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { useFormSubmit } from '@/hooks/useFormSubmit';

interface AssessmentFormData {
    fullName: string;
    email: string;
    phone: string;
    company: string;
    companySize: string;
    challenge: string;
    details: string;
    contactTime: string;
}

export default function ITInfrastructurePage() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [formData, setFormData] = useState<AssessmentFormData>({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        challenge: '',
        details: '',
        contactTime: '',
    });
    const { submit, isSubmitting, isSuccess, reset } = useFormSubmit('it-assessment');

    const handleFormChange = (field: keyof AssessmentFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submit(formData as unknown as Record<string, unknown>);
    };

    const services = [
        {
            icon: Server,
            title: 'Managed IT Services',
            description: 'Your entire IT department, outsourced to experts. No big upfront costs — just one predictable monthly subscription.',
            features: ['Complete infrastructure oversight', 'Strategic technology roadmaps', 'Vendor management & procurement', 'IT budget planning & cost optimization', 'Compliance auditing & reporting'],
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            highlight: true,
            tag: 'Most Popular',
        },
        {
            icon: PhoneCall,
            title: 'Cloud PBX & Unified Communications',
            description: 'Enterprise-grade business phone systems hosted in the cloud. Crystal-clear calls, video conferencing, and team messaging — no expensive hardware.',
            features: ['Hosted PBX with auto-attendant & IVR', 'SIP trunking & VoIP services', 'Video conferencing & screen sharing', 'Microsoft Teams & Zoom integration', 'Call analytics & recording'],
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            highlight: true,
            tag: 'New Service',
        },
        {
            icon: Network,
            title: 'Network Design & Management',
            description: '24/7 proactive monitoring and optimization. We design, deploy, and manage enterprise-grade networks that never let you down.',
            features: ['Network architecture & deployment', 'Bandwidth management & QoS', 'Enterprise routing & switching', 'VPN & remote access solutions', 'WiFi design & guest networks'],
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            highlight: false,
        },
        {
            icon: ShieldCheck,
            title: 'Cybersecurity & Compliance',
            description: 'Multi-layered security protecting your business from evolving threats. Content filtering, endpoint protection, and full compliance auditing.',
            features: ['Next-gen firewall management', 'Endpoint protection & EDR', 'Content filtering & web security', 'Security awareness training', 'Compliance auditing (ISO, GDPR)'],
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            highlight: false,
        },
        {
            icon: Cloud,
            title: 'Cloud Services & Migration',
            description: 'Seamless cloud migration and ongoing management. Microsoft 365, Azure, AWS — we handle the complexity so you can focus on growth.',
            features: ['Cloud migration strategy & execution', 'Microsoft 365 & Azure implementation', 'AWS & hybrid cloud solutions', 'Cloud cost optimization', 'Backup & disaster recovery'],
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            highlight: false,
        },
        {
            icon: Globe,
            title: 'Managed Internet & Connectivity',
            description: 'Reliable business internet with failover, traffic prioritization, and bandwidth management. Stay connected even when others go down.',
            features: ['Fibre & wireless broadband', 'Internet failover management', 'Traffic prioritization & QoS', 'Bandwidth monitoring & reporting', 'Multi-site connectivity'],
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            highlight: false,
        },
        {
            icon: HeadphonesIcon,
            title: 'Help Desk & Technical Support',
            description: 'Multi-tiered support with rapid response times and clear SLAs. Remote and on-site — we are always just a call away.',
            features: ['Level 1, 2, and 3 support', 'Defined SLAs & response times', 'Remote & on-site support', 'User onboarding & training', '24/7 availability for critical issues'],
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            highlight: false,
        },
        {
            icon: Server,
            title: 'Server & Infrastructure',
            description: 'On-premise, cloud, and hybrid server solutions. From deployment to disaster recovery, your data is always protected and performing.',
            features: ['Server deployment & optimization', 'Patch management & updates', 'Backup & disaster recovery', 'High availability configurations', 'Performance & capacity planning'],
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            highlight: false,
        },
        {
            icon: MonitorSmartphone,
            title: 'Workstation & Device Management',
            description: 'End-to-end device lifecycle management. Procurement, deployment, MDM, and ongoing maintenance for every device in your organization.',
            features: ['Device procurement & imaging', 'Mobile device management (MDM)', 'Software licensing & deployment', 'Asset tracking & lifecycle management', 'Hardware maintenance & replacement'],
            image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            highlight: false,
        },
        {
            icon: Wrench,
            title: 'Proactive Maintenance & Updates',
            description: 'Scheduled maintenance, security patching, and continuous optimization. We prevent problems before they disrupt your business.',
            features: ['Scheduled maintenance windows', 'Security patching & updates', 'Hardware health monitoring', 'Performance tuning & optimization', 'Regular system health reviews'],
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            highlight: false,
        },
    ];

    const pricingPlans = [
        {
            name: 'Starter',
            subtitle: 'For Smaller Businesses',
            users: '5 Users',
            price: '3,519',
            period: '/mo',
            description: 'Essential IT outsourcing for small teams who need reliable support without the overhead.',
            features: [
                'Antivirus & threat protection',
                'Microsoft 365 backup',
                'Proactive system monitoring',
                'Daily IT support (business hours)',
                'Monthly health reports',
                'Email & phone support',
            ],
            cta: 'Get Started',
            popular: false,
        },
        {
            name: 'Professional',
            subtitle: 'For Medium Businesses',
            users: '10 Users',
            price: '8,799',
            period: '/mo',
            description: 'Comprehensive IT management for growing teams that need security and reliability at scale.',
            features: [
                'Everything in Starter, plus:',
                'Endpoint protection & EDR',
                'Network monitoring & management',
                'Desktop & laptop support',
                'Cloud PBX (5 extensions)',
                'Priority response times',
                'Quarterly business reviews',
                'Dedicated account manager',
            ],
            cta: 'Get Started',
            popular: true,
        },
        {
            name: 'Enterprise',
            subtitle: 'For Larger Businesses',
            users: '20+ Users',
            price: '14,299',
            period: '/mo',
            description: 'Full-service IT department for organizations that need complete technology coverage.',
            features: [
                'Everything in Professional, plus:',
                'Full IT support for all staff',
                'Network & equipment management',
                'Cloud PBX (unlimited extensions)',
                'Cybersecurity & compliance',
                'On-site support visits',
                'Strategic IT roadmapping',
                'No lock-in contracts',
            ],
            cta: 'Get Started',
            popular: false,
        },
    ];

    const whyChoose = [
        {
            icon: Zap,
            title: 'We Implement in 2 Weeks',
            description: 'No lengthy onboarding. We assess, plan, and deploy your managed IT solution in just 14 days — with zero disruption to operations.',
            stat: '14 days',
            statLabel: 'Average onboarding',
        },
        {
            icon: TrendingUp,
            title: 'Proactive, Not Reactive',
            description: 'Our 24/7 monitoring detects and resolves issues before they impact your business. Stop fighting fires — let us prevent them.',
            stat: '93%',
            statLabel: 'Issues resolved proactively',
        },
        {
            icon: BarChart3,
            title: 'Predictable Monthly Costs',
            description: 'No surprise repair bills. One simple monthly subscription covers everything — monitoring, support, maintenance, and security.',
            stat: '40%',
            statLabel: 'Average IT cost reduction',
        },
        {
            icon: Shield,
            title: 'Enterprise-Grade for SMEs',
            description: 'Access the same security platforms, monitoring tools, and management systems used by large enterprises — priced for growing businesses.',
            stat: '100%',
            statLabel: 'Enterprise-grade tooling',
        },
        {
            icon: Users,
            title: 'Local Expertise, Regional Reach',
            description: 'Based in Zambia with deep understanding of regional connectivity challenges, power considerations, and business environments.',
            stat: '10+',
            statLabel: 'Years local experience',
        },
        {
            icon: Radio,
            title: 'Full Flexibility',
            description: 'Month-to-month subscriptions with no lock-in contracts. Upgrade, downgrade, or cancel at any time. Your IT, your terms.',
            stat: '0',
            statLabel: 'Lock-in contracts',
        },
    ];

    const processSteps = [
        {
            title: 'Discovery & Assessment',
            duration: 'Week 1',
            description: 'Comprehensive audit of your current IT infrastructure — strengths, vulnerabilities, and opportunities.',
            deliverables: ['Infrastructure inventory', 'Network topology map', 'Security vulnerability report', 'Priority recommendations'],
        },
        {
            title: 'Strategy & Planning',
            duration: 'Week 2',
            description: 'Tailored IT roadmap aligned with your business objectives, timeline, and budget.',
            deliverables: ['IT infrastructure roadmap', 'Implementation timeline', 'Budget & resource plan', 'SLA proposal'],
        },
        {
            title: 'Implementation',
            duration: 'Weeks 2-4',
            description: 'We execute with minimal disruption — thorough testing at every stage, zero downtime migration.',
            deliverables: ['Configured infrastructure', 'Documentation & runbooks', 'Staff training & handover', 'Go-live validation'],
        },
        {
            title: 'Ongoing Optimization',
            duration: 'Continuous',
            description: 'Continuous monitoring, maintenance, and strategic reviews to keep your technology ahead of your business needs.',
            deliverables: ['24/7 monitoring & support', 'Monthly performance reports', 'Quarterly business reviews', 'Continuous improvement'],
        },
    ];

    const techStack = [
        { title: 'Microsoft Ecosystem', desc: 'Microsoft 365, Azure, Windows Server, Active Directory, Intune' },
        { title: 'Cloud Platforms', desc: 'AWS, Azure, Google Cloud, hybrid deployments' },
        { title: 'Networking', desc: 'Cisco, Ubiquiti, Mikrotik, enterprise switching & routing' },
        { title: 'Communications', desc: '3CX, Microsoft Teams, Zoom, SIP trunking' },
        { title: 'Security', desc: 'Next-gen firewalls, Sophos, CrowdStrike, SIEM' },
        { title: 'Backup & DR', desc: 'Veeam, cloud backup, disaster recovery planning' },
    ];

    const slaData = [
        { level: 'Critical', response: '1 hour', resolution: '4-hour target', color: 'bg-red-500', textColor: 'text-red-500' },
        { level: 'High', response: '2 hours', resolution: '8-hour target', color: 'bg-orange-500', textColor: 'text-orange-500' },
        { level: 'Normal', response: '4 hours', resolution: 'Next business day', color: 'bg-blue-500', textColor: 'text-blue-500' },
    ];

    const faqs = [
        {
            question: 'How quickly can you respond to critical IT issues?',
            answer: 'For critical issues affecting business operations, we guarantee a 1-hour response time with a 4-hour resolution target. Our 24/7 monitoring systems often detect and resolve issues before you even notice them.',
        },
        {
            question: 'Do we need to replace all our existing IT infrastructure?',
            answer: 'Not necessarily. We conduct a thorough assessment to determine what can be optimized, what should be upgraded, and what needs replacement. Our approach is pragmatic — we work with your existing investments where possible while strategically upgrading components that will deliver the greatest impact.',
        },
        {
            question: 'What if we already have an internal IT person?',
            answer: 'Our co-managed IT services work alongside your existing staff, providing specialized expertise, 24/7 coverage, and additional capacity. This gives your team enterprise-level resources without hiring multiple specialists.',
        },
        {
            question: 'What is Cloud PBX and do we need it?',
            answer: 'Cloud PBX is a modern business phone system hosted in the cloud instead of on physical hardware. It provides enterprise-grade calling features like auto-attendant, call routing, voicemail-to-email, and video conferencing — all for a fraction of the cost of traditional phone systems. If your team makes calls, you need it.',
        },
        {
            question: 'Can you help us migrate to the cloud?',
            answer: 'Absolutely. We specialize in cloud migrations for businesses of all sizes — Microsoft 365, Azure, AWS, or hybrid environments. We handle planning, execution, training, and ongoing management.',
        },
        {
            question: 'How do your pricing plans work?',
            answer: 'Our plans are based on the number of users and services included. All plans are month-to-month with no lock-in contracts. You can upgrade, downgrade, or cancel at any time. Custom plans are available for organizations with unique requirements.',
        },
        {
            question: 'Is there an onboarding fee?',
            answer: 'No. There are no onboarding fees, setup charges, or hidden costs. Your monthly subscription covers everything — including the initial assessment and implementation.',
        },
        {
            question: 'Do you provide on-site support or only remote?',
            answer: 'Both. While many issues can be resolved remotely (often faster), our Enterprise plan includes scheduled on-site visits. All plans include emergency on-site support when a physical presence is required.',
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* ============================================ */}
            {/* HERO SECTION */}
            {/* ============================================ */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
                        alt="IT Infrastructure"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/75" />
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-black/60 to-green-950/40" />
                    {/* Dot grid overlay */}
                    <div className="absolute inset-0 bg-dot-grid opacity-30" />
                </div>

                {/* Animated accent orbs */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Content */}
                <div className="container-custom relative py-32 md:py-40">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl text-white"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full glass-light border border-green-500/30 mb-10"
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-semibold tracking-wide text-green-400">IT & Infrastructure Solutions</span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
                            Your IT Department,
                            <br />
                            <span className="text-gradient-energy">Reimagined.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-6">
                            Enterprise-grade managed IT, cybersecurity, cloud, and communications — delivered as a simple monthly subscription.
                        </p>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-12 text-white/70">
                            {['No upfront costs', 'No lock-in contracts', 'Live in 2 weeks'].map((item, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <a
                                href="#assessment"
                                className="group inline-flex items-center space-x-3 px-10 py-5 rounded-2xl bg-green-500 text-black font-bold text-lg hover:bg-green-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30"
                            >
                                <span>Schedule Your Free IT Assessment</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
            </section>

            {/* ============================================ */}
            {/* STATS BAR */}
            {/* ============================================ */}
            <section className="relative py-20 section-dark overflow-hidden">
                <div className="absolute inset-0 bg-dot-grid opacity-20" />
                <div className="container-custom relative">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {[
                            { value: '99.9%', label: 'Five Nines System Uptime', icon: Zap },
                            { value: '<1hr', label: 'Critical Response Time', icon: Clock },
                            { value: '24/7', label: 'Monitoring & Support', icon: Shield },
                            { value: '200+', label: 'Business Internet Connections Managed', icon: Globe },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="text-center group"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 mb-4 group-hover:bg-green-500/20 transition-colors">
                                    <stat.icon className="w-5 h-5 text-green-500" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2 tracking-tight">{stat.value}</div>
                                <div className="text-sm text-neutral-400 leading-tight max-w-[180px] mx-auto">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* SERVICES - BENTO GRID */}
            {/* ============================================ */}
            <section id="services" className="py-28 md:py-36 bg-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-6 border border-green-500/20">
                            Our Services
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            Everything Your Business Needs,
                            <br className="hidden md:block" />
                            <span className="text-gradient-energy">Under One Roof</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            From cloud communications to cybersecurity — we handle your entire technology stack so you can focus on what matters most.
                        </p>
                    </motion.div>

                    {/* Featured Services - Large Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6 max-w-7xl mx-auto">
                        {services.filter(s => s.highlight).map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                    className="group relative rounded-3xl overflow-hidden border border-neutral-200 hover:border-green-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/5"
                                >
                                    {/* Background image */}
                                    <div className="absolute inset-0">
                                        <ImageWithFallback
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-8 md:p-10 min-h-[420px] flex flex-col justify-end text-white">
                                        {service.tag && (
                                            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-green-500 text-black text-xs font-bold">
                                                {service.tag}
                                            </div>
                                        )}
                                        <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center mb-5 shadow-lg shadow-green-500/25">
                                            <Icon className="w-7 h-7 text-black" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-3">{service.title}</h3>
                                        <p className="text-white/70 mb-6 max-w-md">{service.description}</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm text-white/80">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Regular Services Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                        {services.filter(s => !s.highlight).map((service, index) => {
                            const Icon = service.icon;
                            const isHovered = hoveredService === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                    onMouseEnter={() => setHoveredService(index)}
                                    onMouseLeave={() => setHoveredService(null)}
                                    className="group relative glass rounded-2xl p-6 border border-neutral-200 hover:border-green-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 hover:-translate-y-1 cursor-default"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-300">
                                        <Icon className="w-6 h-6 text-green-600 group-hover:text-black transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 border-t border-neutral-200 space-y-1.5">
                                                    {service.features.slice(0, 4).map((feature, idx) => (
                                                        <div key={idx} className="flex items-start space-x-2">
                                                            <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                                            <span className="text-xs text-muted-foreground">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* WHY CHOOSE DIGITAL SENSE */}
            {/* ============================================ */}
            <section className="py-28 md:py-36 gradient-green-black text-white overflow-hidden">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-6 border border-green-500/20">
                            Why Digital Sense
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            IT That Works <span className="text-green-400">For</span> Your Business,
                            <br className="hidden md:block" />
                            Not <span className="text-green-400">Against</span> It
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
                            We transform IT from a cost center into a competitive advantage
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {whyChoose.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    className="group glass-dark rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:bg-white/5"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-green-500 group-hover:text-black transition-colors duration-300" />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-green-500">{item.stat}</div>
                                            <div className="text-xs text-neutral-500">{item.statLabel}</div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* PRICING PLANS */}
            {/* ============================================ */}
            <section id="pricing" className="py-28 md:py-36 bg-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-6 border border-green-500/20">
                            Transparent Pricing
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            Select Your <span className="text-gradient-energy">IT Outsource Plan</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            Month-to-month subscriptions. No lock-in contracts. No onboarding fees. Cancel or upgrade anytime.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                                    plan.popular
                                        ? 'border-2 border-green-500 shadow-xl shadow-green-500/10 hover:shadow-green-500/20 md:-mt-4 md:mb-0'
                                        : 'border border-neutral-200 hover:border-green-500/30 hover:shadow-green-500/5'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="bg-green-500 text-black text-center py-2.5 text-sm font-bold flex items-center justify-center space-x-1">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span>Most Popular</span>
                                    </div>
                                )}
                                <div className={`p-8 lg:p-10 ${plan.popular ? 'bg-background' : 'bg-background'}`}>
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-1">{plan.subtitle}</p>
                                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 mt-2">
                                            <Users className="w-3 h-3 mr-1.5" />
                                            {plan.users}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-baseline">
                                            <span className="text-sm text-muted-foreground mr-1">K</span>
                                            <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                                            <span className="text-muted-foreground ml-1">{plan.period}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                                    </div>

                                    <a
                                        href="#assessment"
                                        className={`w-full flex items-center justify-center space-x-2 py-4 rounded-xl font-semibold transition-all duration-200 mb-8 ${
                                            plan.popular
                                                ? 'bg-green-500 text-black hover:bg-green-400 shadow-lg shadow-green-500/25'
                                                : 'bg-neutral-900 text-white hover:bg-neutral-800'
                                        }`}
                                    >
                                        <span>{plan.cta}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>

                                    <div className="space-y-3">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start space-x-3">
                                                <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${idx === 0 && index > 0 ? 'text-green-500' : 'text-green-500'}`} />
                                                <span className={`text-sm ${idx === 0 && index > 0 ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto"
                    >
                        All prices in Zambian Kwacha (ZMW), billed monthly. Custom plans available for organizations with specific requirements.{' '}
                        <a href="#assessment" className="text-green-600 hover:underline font-medium">Contact us</a> for a tailored quote.
                    </motion.p>
                </div>
            </section>

            {/* ============================================ */}
            {/* OUR PROCESS */}
            {/* ============================================ */}
            <section className="py-28 md:py-36 section-gray">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-6 border border-green-500/20">
                            How It Works
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            From Assessment to <span className="text-gradient-energy">Optimization</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            A proven methodology that gets you operational in weeks, not months
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        {/* Desktop: horizontal timeline */}
                        <div className="hidden lg:grid lg:grid-cols-4 gap-6 relative">
                            {/* Connecting line */}
                            <div className="absolute top-[72px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-green-500/20 via-green-500 to-green-500/20" />

                            {processSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15, duration: 0.4 }}
                                        className="relative text-center"
                                    >
                                        {/* Step number circle */}
                                        <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center mb-6 shadow-lg shadow-green-500/25">
                                            <span className="text-2xl font-bold text-black">{index + 1}</span>
                                        </div>
                                        <div className="glass rounded-2xl p-6 border border-neutral-200 hover:border-green-500/30 hover:shadow-lg transition-all">
                                            <div className="text-xs font-semibold text-green-600 mb-2 uppercase tracking-wider">{step.duration}</div>
                                            <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                                            <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                                            <div className="space-y-2">
                                                {step.deliverables.map((d, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2 text-left">
                                                        <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                                        <span className="text-xs text-muted-foreground">{d}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                            ))}
                        </div>

                        {/* Mobile: vertical timeline */}
                        <div className="lg:hidden space-y-6">
                            {processSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/25">
                                                <span className="text-lg font-bold text-black">{index + 1}</span>
                                            </div>
                                            {index < processSteps.length - 1 && (
                                                <div className="w-0.5 h-full bg-green-500/20 mx-auto mt-2" />
                                            )}
                                        </div>
                                        <div className="glass rounded-2xl p-6 border border-neutral-200 flex-1 mb-2">
                                            <div className="text-xs font-semibold text-green-600 mb-1 uppercase tracking-wider">{step.duration}</div>
                                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                            <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                                            <div className="space-y-2">
                                                {step.deliverables.map((d, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2">
                                                        <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                                        <span className="text-xs text-muted-foreground">{d}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* TECHNOLOGY & SLA */}
            {/* ============================================ */}
            <section className="py-28 md:py-36 bg-background">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-6 border border-green-500/20">
                                Technology Partners
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                Industry-Leading <span className="text-gradient-energy">Technology</span>
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                We partner with the world&apos;s leading technology vendors, tailored to your specific needs.
                            </p>
                            <div className="space-y-3">
                                {techStack.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08 }}
                                        className="glass rounded-xl p-5 border border-neutral-200 hover:border-green-500/30 hover:shadow-md transition-all group"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="w-2 h-8 rounded-full bg-green-500 group-hover:h-10 transition-all" />
                                            <div>
                                                <h4 className="font-semibold text-sm">{tech.title}</h4>
                                                <p className="text-xs text-muted-foreground mt-0.5">{tech.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* SLAs */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-6 border border-green-500/20">
                                Service Guarantees
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                Service Level <span className="text-gradient-energy">Agreements</span>
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Clear expectations and guaranteed response times — backed by contract.
                            </p>
                            <div className="space-y-4 mb-6">
                                {slaData.map((sla, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="glass rounded-xl p-5 border border-neutral-200 hover:shadow-md transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center space-x-3">
                                                <div className={`w-3 h-3 rounded-full ${sla.color}`} />
                                                <h4 className="font-bold">{sla.level} Issues</h4>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-neutral-50 rounded-lg p-3">
                                                <div className="text-xs text-muted-foreground mb-1">Response</div>
                                                <div className={`text-lg font-bold ${sla.textColor}`}>{sla.response}</div>
                                            </div>
                                            <div className="bg-neutral-50 rounded-lg p-3">
                                                <div className="text-xs text-muted-foreground mb-1">Resolution</div>
                                                <div className="text-lg font-bold">{sla.resolution}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="rounded-2xl p-6 bg-green-500/10 border border-green-500/20">
                                <div className="flex items-center space-x-3 mb-3">
                                    <Award className="w-7 h-7 text-green-500" />
                                    <div>
                                        <h4 className="font-bold">Network Uptime Guarantee</h4>
                                        <p className="text-sm text-muted-foreground">Contractually guaranteed availability</p>
                                    </div>
                                </div>
                                <div className="text-4xl font-bold text-green-600 tracking-tight">99.9%</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* FAQ */}
            {/* ============================================ */}
            <section className="py-28 md:py-36 section-gray">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-6 border border-green-500/20">
                            FAQ
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            Frequently Asked <span className="text-gradient-energy">Questions</span>
                        </h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-3">
                        {faqs.map((faq, index) => {
                            const isExpanded = expandedFaq === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.04 }}
                                    className="glass rounded-xl overflow-hidden border border-neutral-200 hover:border-green-500/20 transition-colors"
                                >
                                    <button
                                        onClick={() => setExpandedFaq(isExpanded ? null : index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-green-500/3 transition-colors"
                                    >
                                        <h3 className="font-semibold pr-8 text-sm md:text-base">{faq.question}</h3>
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex-shrink-0"
                                        >
                                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-5">
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* SCHEDULE AN IT ASSESSMENT - FORM */}
            {/* ============================================ */}
            <section id="assessment" className="py-28 md:py-36 relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 gradient-green-black" />
                <div className="absolute inset-0 bg-dot-grid opacity-20" />

                {/* Accent orbs */}
                <motion.div
                    className="absolute top-1/3 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="container-custom relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            {/* Left - Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-white"
                            >
                                <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-8 border border-green-500/20">
                                    Free Assessment
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                                    Schedule Your
                                    <br />
                                    <span className="text-green-400">IT Assessment</span>
                                </h2>
                                <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
                                    Get a comprehensive evaluation of your IT infrastructure — completely free. We&apos;ll identify vulnerabilities, inefficiencies, and opportunities for improvement.
                                </p>

                                <div className="space-y-6 mb-10">
                                    {[
                                        { icon: CalendarCheck, title: 'Assessment scheduled within 48 hours', desc: 'We move fast — expect a call within one business day.' },
                                        { icon: BarChart3, title: 'Full infrastructure audit (3-5 days)', desc: 'Network, security, hardware, cloud readiness — everything.' },
                                        { icon: Mail, title: 'Custom proposal with transparent pricing', desc: 'Actionable recommendations with clear ROI projections.' },
                                        { icon: Zap, title: 'Implementation in as little as 2 weeks', desc: 'From assessment to fully managed — seamlessly.' },
                                    ].map((step, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                            className="flex items-start space-x-4"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                                                <step.icon className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white text-sm">{step.title}</div>
                                                <div className="text-xs text-neutral-400 mt-0.5">{step.desc}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex items-start space-x-4 p-5 rounded-xl glass-dark border border-white/10">
                                    <Phone className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <div className="text-sm font-medium text-white">Prefer to talk?</div>
                                        <a href="mailto:info@digitalsense.tech" className="text-green-400 hover:underline text-sm">
                                            info@digitalsense.tech
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right - Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/20">
                                    {isSuccess ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-12"
                                        >
                                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <Check className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3">Assessment Requested!</h3>
                                            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                                                We&apos;ll be in touch within 24 hours to schedule your free IT infrastructure assessment.
                                            </p>
                                            <button
                                                onClick={reset}
                                                className="text-green-600 font-medium hover:underline text-sm"
                                            >
                                                Submit another request
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <>
                                            <div className="mb-8">
                                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Book Your Free Assessment</h3>
                                                <p className="text-sm text-muted-foreground">Fill in your details and we&apos;ll schedule your assessment within 48 hours.</p>
                                            </div>
                                            <form onSubmit={handleFormSubmit} className="space-y-5">
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={formData.fullName}
                                                            onChange={(e) => handleFormChange('fullName', e.target.value)}
                                                            placeholder="John Banda"
                                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Work Email *</label>
                                                        <input
                                                            type="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={(e) => handleFormChange('email', e.target.value)}
                                                            placeholder="john@company.co.zm"
                                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number *</label>
                                                        <input
                                                            type="tel"
                                                            required
                                                            value={formData.phone}
                                                            onChange={(e) => handleFormChange('phone', e.target.value)}
                                                            placeholder="+260 97X XXX XXX"
                                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name *</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={formData.company}
                                                            onChange={(e) => handleFormChange('company', e.target.value)}
                                                            placeholder="Your Company Ltd"
                                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company Size *</label>
                                                        <select
                                                            required
                                                            value={formData.companySize}
                                                            onChange={(e) => handleFormChange('companySize', e.target.value)}
                                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all appearance-none"
                                                        >
                                                            <option value="">Select size...</option>
                                                            <option value="1-10">1-10 employees</option>
                                                            <option value="11-50">11-50 employees</option>
                                                            <option value="51-200">51-200 employees</option>
                                                            <option value="200+">200+ employees</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Biggest IT Challenge *</label>
                                                        <select
                                                            required
                                                            value={formData.challenge}
                                                            onChange={(e) => handleFormChange('challenge', e.target.value)}
                                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all appearance-none"
                                                        >
                                                            <option value="">Select challenge...</option>
                                                            <option value="network">Network reliability</option>
                                                            <option value="security">Security concerns</option>
                                                            <option value="cloud">Cloud migration</option>
                                                            <option value="cost">Cost optimization</option>
                                                            <option value="scaling">Scaling infrastructure</option>
                                                            <option value="outdated">Outdated systems</option>
                                                            <option value="communications">Phone/communications</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Additional Details <span className="text-muted-foreground font-normal">(optional)</span></label>
                                                    <textarea
                                                        value={formData.details}
                                                        onChange={(e) => handleFormChange('details', e.target.value)}
                                                        placeholder="Tell us about your current IT setup, pain points, or specific requirements..."
                                                        rows={3}
                                                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all resize-none"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Preferred Contact Time</label>
                                                    <select
                                                        value={formData.contactTime}
                                                        onChange={(e) => handleFormChange('contactTime', e.target.value)}
                                                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all appearance-none"
                                                    >
                                                        <option value="">Anytime</option>
                                                        <option value="morning">Morning (08:00-12:00)</option>
                                                        <option value="afternoon">Afternoon (12:00-17:00)</option>
                                                    </select>
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-green-500 text-black font-bold text-base hover:bg-green-400 active:scale-[0.98] transition-all shadow-lg shadow-green-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                            <span>Submitting...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <CalendarCheck className="w-5 h-5" />
                                                            <span>Schedule My Free Assessment</span>
                                                        </>
                                                    )}
                                                </button>

                                                <p className="text-xs text-center text-muted-foreground">
                                                    No commitment required. We&apos;ll contact you within 24 hours.
                                                </p>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
