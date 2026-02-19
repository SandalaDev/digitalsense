'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroSlider } from '@/components/home/HeroSlider';
import { LogoScroller } from '@/components/home/LogoScroller';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faNetworkWired,
  faCode,
  faArrowRight,
  faCircleCheck,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { RFQForm } from '@/components/forms/rfq';

export default function Home() {
  const [expandedCapability, setExpandedCapability] = useState<number | null>(null);

  const capabilities = [
    {
      icon: faBolt,
      title: 'Energy & Electrical Systems',
      description: 'Design, integrate, and maintain power systems that ensure reliable, efficient, and sustainable energy delivery.',
      details: [
        'Solar & renewable energy integration',
        'Power distribution & backup systems',
        'Energy monitoring & optimization',
        'Compliance with NEC & local codes',
      ],
      image: 'https://images.unsplash.com/photo-1545209575-704d1434f9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      icon: faNetworkWired,
      title: 'IT & Infrastructure Systems',
      description: 'Build robust network and infrastructure systems that enable seamless connectivity and data flow.',
      details: [
        'Network design & implementation',
        'Data center infrastructure',
        'Cybersecurity frameworks',
        'Cloud & hybrid solutions',
      ],
      image: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      icon: faCode,
      title: 'Software & Intelligent Systems',
      description: 'Develop intelligent software solutions that automate, optimize, and transform your operations.',
      details: [
        'Custom software development',
        'IoT & automation platforms',
        'AI & machine learning integration',
        'System integration & APIs',
      ],
      image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Slider - 3 Business Verticals */}
      <HeroSlider />

      {/* Logo Scroller — Social Proof */}
      <LogoScroller />

      {/* Capabilities Section - Expandable */}
      <section id="capabilities" className="py-32 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient-energy">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technical excellence across energy, infrastructure, and intelligent systems
            </p>
          </motion.div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => {
              const isExpanded = expandedCapability === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCapability(isExpanded ? null : index)}
                    className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={capability.icon} className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{capability.title}</h3>
                        <p className="text-muted-foreground">{capability.description}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FontAwesomeIcon icon={faChevronDown} className="w-6 h-6 text-muted-foreground" />
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
                    <div className="p-8 pt-0 grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-accent">What This System Controls</h4>
                        <ul className="space-y-3">
                          {capability.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <FontAwesomeIcon icon={faCircleCheck} className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6">
                          <a
                            href={`#${capability.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="inline-flex items-center space-x-2 text-accent font-medium hover:gap-3 transition-all"
                          >
                            <span>Learn More</span>
                            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <div className="relative h-64 rounded-xl overflow-hidden">
                        <ImageWithFallback
                          src={capability.image}
                          alt={capability.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Work — Jenny Internet Zambia */}
      <section id="featured-work" className="py-32 section-gray relative overflow-hidden">
        {/* Subtle diagonal texture */}
        <div className="absolute inset-0 bg-circuit opacity-40 pointer-events-none" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              Featured <span className="text-gradient-energy">Work</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="rounded-3xl overflow-hidden border border-neutral-200/80 hover:border-green-500/20 transition-all duration-500 hover:shadow-2xl bg-white">
              {/* Image banner */}
              <div className="relative h-56 md:h-72 overflow-hidden">
                <ImageWithFallback
                  src="/jenny-internet.jpg"
                  alt="Jenny Internet Zambia - Connecting Africa to Information"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Badge + Title overlaid on image */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold text-white">Featured Engagement</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Jenny Internet Zambia</h3>
                  <p className="text-white/70 mt-1">Internet Service Provider &mdash; Fiber &amp; Wireless</p>
                </div>
              </div>

              {/* Content + Stats */}
              <div className="grid md:grid-cols-3 gap-0">
                {/* Content */}
                <div className="md:col-span-2 p-8 md:p-10">
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Digital Sense is the installation and maintenance partner for Jenny Internet&apos;s access network in Zambia,
                    supporting the rollout and ongoing reliability of fixed uncapped internet services to homes and businesses.
                  </p>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-foreground">Our responsibilities include:</h4>
                    <div className="space-y-3">
                      {[
                        'Field installation and on-site technical work',
                        'Maintenance and fault response',
                        'Coordination between network, infrastructure, and customer environments',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <FontAwesomeIcon icon={faCircleCheck} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground italic border-l-2 border-green-500/30 pl-4 leading-relaxed">
                    This work directly supports service availability, uptime, and customer experience across Jenny Internet&apos;s operating footprint.
                  </p>
                </div>

                {/* Stats panel */}
                <div className="bg-neutral-950 p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    {[
                      { value: 'Zambia', label: 'Operating Region' },
                      { value: '24/7', label: 'Support Coverage' },
                      { value: 'ISP', label: 'Partner Category' },
                    ].map((stat, idx) => (
                      <div key={idx} className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                        <div className="text-3xl font-bold text-green-500 mb-1 tracking-tight">{stat.value}</div>
                        <div className="text-sm text-neutral-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
                      IT Infrastructure
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
                      Field Operations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Request a Quote */}
      <section id="request-quote" className="py-32 bg-background relative overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-5 gap-12 lg:gap-16"
            >
              {/* Left Column - Info (2 cols) */}
              <div className="lg:col-span-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Request a
                  <br />
                  <span className="text-gradient-energy">Quote</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Get a detailed, transparent proposal with technical specifications, clear pricing, and realistic timelines.
                </p>

                {/* Value Props */}
                <div className="space-y-5 mb-10">
                  {[
                    {
                      title: 'Technical Specifications',
                      desc: 'Complete system design with equipment specs, performance metrics, and compliance standards.',
                    },
                    {
                      title: 'Transparent Pricing',
                      desc: 'Line-item breakdown showing exactly what you\u2019re paying for. No hidden costs.',
                    },
                    {
                      title: 'Implementation Timeline',
                      desc: 'Realistic project schedule from assessment through deployment.',
                    },
                    {
                      title: 'ROI Analysis',
                      desc: 'Financial projections with documented assumptions.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FontAwesomeIcon icon={faCircleCheck} className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-0.5 text-sm">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Process Steps (hidden on mobile) */}
                <div className="hidden md:block mb-10">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    How It Works
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Submit your request',
                      'Technical review',
                      'Site assessment (if needed)',
                      'Detailed proposal within 48 hrs',
                      'Consultation call',
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-green-500">{idx + 1}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div className="text-sm text-muted-foreground space-y-1 mb-8">
                  <p>Email: <a href="mailto:connect@digitalsense.tech" className="text-foreground hover:text-green-500 transition-colors">connect@digitalsense.tech</a></p>
                  <p>Mon&ndash;Fri, 8:00 AM &ndash; 5:00 PM CAT</p>
                </div>

                {/* WhatsApp CTA */}
                <a href="#" className="group p-5 rounded-2xl bg-neutral-950 text-white flex items-center space-x-4 hover:bg-neutral-900 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/25 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" className="w-6 h-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-neutral-400">Prefer to chat?</div>
                    <div className="text-base font-semibold text-[#25D366] group-hover:text-[#25D366]/80 transition-colors">
                      WhatsApp us
                    </div>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Right Column - Form (3 cols) */}
              <div className="lg:col-span-3">
                <RFQForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
