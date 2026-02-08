'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Network,
    Server,
    Laptop,
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
    Database,
    Wifi
} from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { ITAssessmentForm } from '@/components/forms/ITAssessmentForm';

export default function ITInfrastructurePage() {
    const [expandedService, setExpandedService] = useState<number | null>(null);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const services = [
        {
            icon: Network,
            title: 'Network Management & Monitoring',
            description: '24/7 proactive monitoring and optimization of your network infrastructure',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
            features: [
                {
                    title: 'Proactive Monitoring',
                    details: [
                        '24/7 network monitoring and performance optimization',
                        'Proactive issue detection and resolution',
                        'Network security and access control'
                    ]
                },
                {
                    title: 'Network Infrastructure',
                    details: [
                        'Network design, deployment, and upgrades',
                        'Bandwidth management and optimization',
                        'Enterprise-grade routing and switching'
                    ]
                }
            ]
        },
        {
            icon: Server,
            title: 'Managed IT Services',
            description: 'Complete IT infrastructure management and strategic technology planning',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
            features: [
                {
                    title: 'Complete Infrastructure Management',
                    details: [
                        'Complete IT infrastructure oversight',
                        'Strategic technology planning and roadmap development',
                        'Technology lifecycle management'
                    ]
                },
                {
                    title: 'Business Optimization',
                    details: [
                        'Vendor management and procurement',
                        'IT budget planning and cost optimization',
                        'Compliance auditing and reporting'
                    ]
                }
            ]
        },
        {
            icon: HeadphonesIcon,
            title: 'Help Desk & Technical Support',
            description: 'Multi-tiered support with rapid response times and defined SLAs',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
            features: [
                {
                    title: 'Multi-Tiered Support',
                    details: [
                        'Multi-tiered support (Level 1, 2, and 3)',
                        'Rapid response times with defined SLAs',
                        'Remote and on-site support options'
                    ]
                },
                {
                    title: 'User Enablement',
                    details: [
                        'User onboarding and training',
                        'Comprehensive documentation and knowledge base',
                        '24/7 availability for critical issues'
                    ]
                }
            ]
        },
        {
            icon: Server,
            title: 'Server Management',
            description: 'On-premise, cloud, and hybrid server infrastructure solutions',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
            features: [
                {
                    title: 'Server Infrastructure',
                    details: [
                        'Server deployment, configuration, and optimization',
                        'Patch management and updates',
                        'Performance monitoring and capacity planning'
                    ]
                },
                {
                    title: 'Data Protection',
                    details: [
                        'Backup and disaster recovery solutions',
                        'High availability configurations',
                        'On-premise, cloud, and hybrid setups'
                    ]
                }
            ]
        },
        {
            icon: Laptop,
            title: 'Workstation Setup & Management',
            description: 'End-user device procurement, deployment, and management',
            image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
            features: [
                {
                    title: 'Device Management',
                    details: [
                        'End-user device procurement and deployment',
                        'Desktop and laptop configuration',
                        'Mobile device management (MDM)'
                    ]
                },
                {
                    title: 'Software & Licensing',
                    details: [
                        'Software installation and licensing',
                        'Hardware maintenance and replacement',
                        'Asset tracking and lifecycle management'
                    ]
                }
            ]
        },
        {
            icon: Cloud,
            title: 'Cloud Services',
            description: 'Cloud migration, implementation, and ongoing management',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
            features: [
                {
                    title: 'Cloud Migration',
                    details: [
                        'Cloud migration strategy and execution',
                        'Microsoft 365, Azure, and AWS implementation',
                        'Cloud infrastructure design and management'
                    ]
                },
                {
                    title: 'Cloud Optimization',
                    details: [
                        'Cloud security and compliance',
                        'Cost optimization and resource management',
                        'Hybrid cloud solutions'
                    ]
                }
            ]
        },
        {
            icon: Wrench,
            title: 'Regular Maintenance & Updates',
            description: 'Scheduled maintenance and proactive system optimization',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
            features: [
                {
                    title: 'Preventive Maintenance',
                    details: [
                        'Scheduled system maintenance windows',
                        'Security patching and software updates',
                        'Hardware health checks and preventive maintenance'
                    ]
                },
                {
                    title: 'Continuous Improvement',
                    details: [
                        'Performance tuning and optimization',
                        'Compliance auditing and reporting',
                        'Regular system health reviews'
                    ]
                }
            ]
        }
    ];

    const whyChoose = [
        {
            icon: TrendingUp,
            title: 'Proactive, Not Reactive',
            description: 'We identify and resolve issues before they impact your business. Our 24/7 monitoring systems detect anomalies early, preventing downtime and keeping your operations running smoothly.'
        },
        {
            icon: TrendingUp,
            title: 'Predictable IT Costs',
            description: 'Move from unexpected repair bills to predictable monthly investments. Our managed services model provides budget certainty while ensuring your infrastructure receives the attention it deserves.'
        },
        {
            icon: Shield,
            title: 'Enterprise-Grade Technology for SMEs',
            description: 'Access the same monitoring tools, security platforms, and management systems used by large enterprises—sized and priced appropriately for growing businesses.'
        },
        {
            icon: Users,
            title: 'Local Expertise with Regional Reach',
            description: 'Based in Zambia with deep understanding of regional connectivity challenges, power considerations, and business environments. We design solutions that work in real-world African conditions.'
        },
        {
            icon: TrendingUp,
            title: 'Scalable Infrastructure',
            description: 'Your IT grows with your business. Our flexible infrastructure solutions scale seamlessly as you add users, locations, or services—without requiring complete overhauls.'
        },
        {
            icon: Clock,
            title: 'Reduced Downtime, Increased Productivity',
            description: 'Every minute of system downtime costs your business money and momentum. Our proactive approach and rapid response times minimize disruptions and maximize workforce productivity.'
        }
    ];

    const process = [
        {
            title: 'Discovery & Assessment',
            duration: 'Week 1',
            description: 'We conduct a comprehensive audit of your current IT infrastructure, identifying strengths, vulnerabilities, and opportunities for improvement.',
            deliverables: [
                'Complete infrastructure inventory',
                'Network topology documentation',
                'Security vulnerability report',
                'Recommendations and priorities'
            ]
        },
        {
            title: 'Strategy & Planning',
            duration: 'Week 2',
            description: 'Based on our findings, we develop a tailored IT roadmap aligned with your business objectives.',
            deliverables: [
                'IT infrastructure roadmap',
                'Implementation timeline',
                'Budget and resource requirements',
                'Service level agreement (SLA) proposal'
            ]
        },
        {
            title: 'Implementation & Migration',
            duration: 'Weeks 3-8',
            description: 'We execute the plan with minimal disruption to your operations, with thorough testing at each stage.',
            deliverables: [
                'Configured infrastructure',
                'Documentation and runbooks',
                'User training and handover',
                'Transition to managed services'
            ]
        },
        {
            title: 'Ongoing Management & Optimization',
            duration: 'Continuous',
            description: 'Continuous monitoring, maintenance, and optimization ensuring your infrastructure evolves with your business.',
            deliverables: [
                '24/7 monitoring and support',
                'Monthly performance reports',
                'Quarterly business reviews',
                'Continuous improvement recommendations'
            ]
        }
    ];

    const faqs = [
        {
            question: 'How quickly can you respond to critical IT issues?',
            answer: 'For critical issues affecting business operations, we guarantee a 1-hour response time with a 4-hour resolution target. Our 24/7 monitoring systems often detect and resolve issues before you even notice them.'
        },
        {
            question: 'Do we need to replace all our existing IT infrastructure?',
            answer: 'Not necessarily. We conduct a thorough assessment to determine what can be optimized, what should be upgraded, and what needs replacement. Our approach is pragmatic—we work with your existing investments where possible while strategically upgrading components that will deliver the greatest impact.'
        },
        {
            question: 'What if we already have an internal IT person?',
            answer: 'Our co-managed IT services are perfect for this scenario. We work alongside your existing IT staff, providing specialized expertise, 24/7 coverage, and additional capacity during busy periods or projects. This gives your team enterprise-level resources without the cost of hiring multiple specialists.'
        },
        {
            question: 'How do you handle after-hours emergencies?',
            answer: 'We provide 24/7 monitoring and support for critical issues. Our on-call engineers are available around the clock to address infrastructure problems, security incidents, or system failures that can\'t wait until business hours.'
        },
        {
            question: 'Can you help us migrate to the cloud?',
            answer: 'Absolutely. We specialize in cloud migrations for businesses of all sizes, whether you\'re moving to Microsoft 365, Azure, AWS, or hybrid cloud environments. We handle planning, migration execution, user training, and ongoing cloud management.'
        },
        {
            question: 'What\'s included in your managed IT services?',
            answer: 'Our managed IT packages typically include 24/7 network monitoring, help desk support, patch management, backup monitoring, security updates, vendor management, and quarterly business reviews. Specific inclusions depend on your chosen service level and business requirements.'
        },
        {
            question: 'How do you price your services?',
            answer: 'We create custom quotes based on your specific needs, number of users, infrastructure complexity, and required service levels. Most clients prefer our monthly managed services model, which provides predictable costs and comprehensive coverage.'
        },
        {
            question: 'Do you provide on-site support or only remote?',
            answer: 'Both. While many issues can be resolved remotely (often faster), we provide on-site support when needed for hardware installations, troubleshooting, user training, or situations requiring physical presence.'
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                        alt="IT Infrastructure"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="container-custom relative py-32 md:py-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl text-white space-y-8"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-light border border-white/20 mb-8">
                            <Network className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-medium">IT & Infrastructure Systems</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Reliable IT Infrastructure<br />
                            <span className="text-gradient-energy">That Powers Your Business Forward</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
                            Comprehensive managed IT services and infrastructure solutions that keep your systems secure, efficient, and always available.
                        </p>

                        <p className="text-lg text-white/80 max-w-2xl">
                            From <span className="font-semibold text-green-500">24/7 monitoring</span> to <span className="font-semibold text-green-500">complete network management</span>, we handle your technology so you can focus on growth.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-12">
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span className="text-sm">24/7 Monitoring & Support</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span className="text-sm">99.5% Uptime Guarantee</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span className="text-sm">Enterprise-Grade Solutions</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="group px-10 py-5 rounded-xl bg-green-500 text-black font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-2xl inline-flex items-center justify-center space-x-2"
                            >
                                <span>Schedule Your IT Assessment</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#services"
                                className="group px-10 py-5 rounded-xl glass-light border border-white/20 font-semibold hover:bg-white/15 transition-all inline-flex items-center justify-center space-x-2"
                            >
                                <span>View Our Capabilities</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 section-dark">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">99.8%</div>
                            <div className="text-sm text-neutral-400">System Uptime</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">1hr</div>
                            <div className="text-sm text-neutral-400">Critical Response Time</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">24/7</div>
                            <div className="text-sm text-neutral-400">Monitoring & Support</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">200+</div>
                            <div className="text-sm text-neutral-400">Businesses Supported</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Deliver */}
            <section id="services" className="py-32 bg-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            What We <span className="text-gradient-energy">Deliver</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Comprehensive IT services providing complete technology oversight, proactive maintenance, and expert support
                        </p>
                    </motion.div>

                    {/* Service Expandable Cards */}
                    <div className="space-y-4 max-w-6xl mx-auto">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const isExpanded = expandedService === index;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="glass rounded-2xl overflow-hidden border border-neutral-200 hover:border-green-500/30"
                                >
                                    <button
                                        onClick={() => setExpandedService(isExpanded ? null : index)}
                                        className="w-full p-8 flex items-center justify-between text-left hover:bg-green-500/5 transition-all border border-neutral-200 hover:border-green-500/30 rounded-2xl"
                                    >
                                        <div className="flex items-center space-x-6">
                                            <div className="w-16 h-16 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                                <Icon className="w-8 h-8 text-black" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                                <p className="text-muted-foreground">{service.description}</p>
                                            </div>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-6 h-6 text-muted-foreground" />
                                        </motion.div>
                                    </button>

                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: isExpanded ? 'auto' : 0,
                                            opacity: isExpanded ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0">
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div>
                                                    <div className="space-y-6">
                                                        {service.features.map((feature, idx) => (
                                                            <div key={idx}>
                                                                <h4 className="font-semibold mb-3 text-green-500 flex items-center space-x-2">
                                                                    <CheckCircle className="w-5 h-5" />
                                                                    <span>{feature.title}</span>
                                                                </h4>
                                                                <ul className="space-y-2 ml-7">
                                                                    {feature.details.map((detail, detailIdx) => (
                                                                        <li key={detailIdx} className="text-muted-foreground text-sm">
                                                                            • {detail}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="relative h-80 rounded-xl overflow-hidden">
                                                    <ImageWithFallback
                                                        src={service.image}
                                                        alt={service.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Digital Sense */}
            <section className="py-32 section-gray">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            Why Choose <span className="text-gradient-energy">Digital Sense</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We transform IT infrastructure from a cost center into a competitive advantage
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {whyChoose.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass rounded-2xl p-8 border border-neutral-200 hover:border-green-500/30 hover:shadow-xl transition-all"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center mb-6 shadow-lg">
                                        <Icon className="w-7 h-7 text-black" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-32 bg-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            Our <span className="text-gradient-energy">Process</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            A proven methodology from discovery to ongoing optimization
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-2xl p-8 border border-neutral-200 hover:border-green-500/30 hover:shadow-xl transition-all"
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <span className="text-xl font-bold text-black">{index + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{step.title}</h3>
                                        <p className="text-sm text-green-500 font-medium">{step.duration}</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground mb-6">{step.description}</p>
                                <div>
                                    <h4 className="font-semibold mb-3 text-sm">Deliverables:</h4>
                                    <ul className="space-y-2">
                                        {step.deliverables.map((deliverable, idx) => (
                                            <li key={idx} className="flex items-start space-x-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-muted-foreground">{deliverable}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology & SLA Section */}
            <section className="py-32 section-gray">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                Technology & <span className="text-gradient-energy">Methodology</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We work with industry-leading technologies tailored to your needs
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: 'Microsoft Ecosystem', desc: 'Microsoft 365, Azure, Windows Server, Active Directory' },
                                    { title: 'Cloud Platforms', desc: 'AWS, Azure, Google Cloud Platform' },
                                    { title: 'Networking', desc: 'Cisco, Ubiquiti, Mikrotik, enterprise routing and switching' },
                                    { title: 'Virtualization', desc: 'VMware, Hyper-V, Proxmox' },
                                    { title: 'Security', desc: 'Next-gen firewalls, endpoint protection, SIEM solutions' },
                                    { title: 'Backup & DR', desc: 'Veeam, cloud backup, disaster recovery planning' }
                                ].map((tech, index) => (
                                    <div key={index} className="glass rounded-xl p-6 border border-neutral-200">
                                        <h4 className="font-semibold mb-2">{tech.title}</h4>
                                        <p className="text-sm text-muted-foreground">{tech.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                Service Level <span className="text-gradient-energy">Agreements</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Clear expectations and guaranteed response times
                            </p>
                            <div className="space-y-6">
                                {[
                                    { level: 'Critical Issues', response: '1-hour response', resolution: '4-hour resolution target', color: '#ef4444' },
                                    { level: 'High Priority', response: '2-hour response', resolution: '8-hour resolution target', color: '#f97316' },
                                    { level: 'Normal Priority', response: '4-hour response', resolution: 'Next business day', color: '#3b82f6' }
                                ].map((sla, index) => (
                                    <div key={index} className="glass rounded-xl p-6 border-l-4" style={{ borderColor: sla.color }}>
                                        <h4 className="font-bold mb-3">{sla.level}</h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <Clock className="w-4 h-4 text-green-500" />
                                                <span className="text-sm">{sla.response}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span className="text-sm">{sla.resolution}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="glass rounded-xl p-6 bg-green-500/10 border border-green-500/30">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <Award className="w-6 h-6 text-green-500" />
                                        <h4 className="font-bold">Network Uptime</h4>
                                    </div>
                                    <p className="text-2xl font-bold text-green-500">99.5% Minimum Availability</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Project */}
            <section className="py-32 bg-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            Featured <span className="text-gradient-energy">Project</span>
                        </h2>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl overflow-hidden border border-neutral-200"
                        >
                            <div className="grid lg:grid-cols-2 gap-0">
                                <div className="relative h-96 lg:h-auto">
                                    <ImageWithFallback
                                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                                        alt="Regional ISP Field Operations"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                <div className="p-12">
                                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                                        <Award className="w-4 h-4 text-green-500" />
                                        <span className="text-sm font-medium text-green-500">Case Study</span>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">Managed Field Operations for Regional ISP</h3>
                                    <p className="text-muted-foreground mb-8">
                                        A South African-based ISP expanding across Zambia needed reliable IT infrastructure to coordinate distributed field teams and customer installations.
                                    </p>
                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        <div>
                                            <div className="text-3xl font-bold text-green-500 mb-2">99.8%</div>
                                            <div className="text-sm text-muted-foreground">System Uptime</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-green-500 mb-2">40%</div>
                                            <div className="text-sm text-muted-foreground">Faster Installations</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-green-500 mb-2">65%</div>
                                            <div className="text-sm text-muted-foreground">Less Communication Delays</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-green-500 mb-2">150%</div>
                                            <div className="text-sm text-muted-foreground">Business Growth</div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-sm text-muted-foreground">Services Provided</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['Network Management', 'Cloud Infrastructure', 'Help Desk Support', 'System Monitoring', 'MDM'].map((service, idx) => (
                                                <span key={idx} className="px-3 py-1 rounded-lg bg-green-500/10 text-green-700 text-sm font-medium border border-green-500/20">
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 section-gray">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            Frequently Asked <span className="text-gradient-energy">Questions</span>
                        </h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, index) => {
                            const isExpanded = expandedFaq === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="glass rounded-2xl overflow-hidden border border-neutral-200"
                                >
                                    <button
                                        onClick={() => setExpandedFaq(isExpanded ? null : index)}
                                        className="w-full p-6 flex items-center justify-between text-left hover:bg-green-500/5 transition-colors"
                                    >
                                        <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                        </motion.div>
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: isExpanded ? 'auto' : 0,
                                            opacity: isExpanded ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6">
                                            <p className="text-muted-foreground">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 bg-background">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Build <span className="text-gradient-energy">Reliable IT Infrastructure?</span>
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Let's discuss how our managed IT services can transform your technology into a competitive advantage
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <Mail className="w-6 h-6 text-black" />
                                        </div>
                                        <div>
                                            <div className="font-semibold mb-1">Email</div>
                                            <a href="mailto:it@digitalsense.co.zm" className="text-green-500 hover:underline">
                                                it@digitalsense.co.zm
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <Phone className="w-6 h-6 text-black" />
                                        </div>
                                        <div>
                                            <div className="font-semibold mb-1">Phone</div>
                                            <a href="tel:+260XXXXXXXXX" className="text-green-500 hover:underline">
                                                +260-XXX-XXXXXX
                                            </a>
                                            <div className="text-sm text-muted-foreground mt-1">
                                                Monday-Friday, 08:00-17:00 CAT
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                                        <h4 className="font-semibold mb-4">What Happens Next?</h4>
                                        <ol className="space-y-3">
                                            {[
                                                'We schedule a comprehensive IT assessment within 48 hours',
                                                'Infrastructure audit and preliminary recommendations (3-5 days)',
                                                'Custom proposal with transparent pricing',
                                                'Implementation begins within 2-3 weeks'
                                            ].map((step, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <span className="text-xs font-bold text-green-500">{index + 1}</span>
                                                    </div>
                                                    <span className="text-sm text-muted-foreground">{step}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <ITAssessmentForm />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
