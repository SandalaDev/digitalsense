'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroSlider } from '@/components/home/HeroSlider';
import { LogoScroller } from '@/components/home/LogoScroller';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { RFQForm } from '@/components/forms/rfq';
import {
  Sun,
  Network,
  Code2,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Home() {
  const capabilities = [
    {
      icon: Sun,
      title: 'Solar Energy',
      description: 'Design, install, and maintain commercial solar systems engineered for reliable power, lower operating costs, and long-term energy resilience.',
      highlights: [
        {
          title: '2.5+ MW Installed Capacity',
          description: 'Commercial-scale solar experience across real-world environments.',
        },
        {
          title: 'Hybrid Power Systems',
          description: 'Solar, battery storage, inverter, and backup systems designed as one integrated solution.',
        },
        {
          title: 'Lifecycle Support',
          description: 'From system design and installation to maintenance, monitoring, and optimization.',
        },
      ],
      image: 'https://images.unsplash.com/photo-1545209575-704d1434f9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      href: '/capabilities/energy-systems',
    },
    {
      icon: Network,
      title: 'Enterprise IT Infrastructure',
      description: 'Build the secure, connected, and resilient technology backbone your organization needs to operate without disruption.',
      highlights: [
        {
          title: '5-Nines Uptime Commitment',
          description: 'Infrastructure designed around availability, redundancy, and operational continuity.',
        },
        {
          title: 'Secure Network Architecture',
          description: 'Structured cabling, routing, switching, firewalls, access control, and segmentation.',
        },
        {
          title: 'End-to-End Deployment',
          description: 'Planning, installation, configuration, documentation, monitoring, and support.',
        },
      ],
      image: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      href: '/capabilities/it-infrastructure',
    },
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Create fast, secure, custom web platforms that give your business full control over content, workflows, integrations, and digital growth.',
      highlights: [
        {
          title: 'Sub-2s Page Loads',
          description: 'Performance-focused websites built for speed, conversion, and user experience.',
        },
        {
          title: 'Security-First Engineering',
          description: 'Modern authentication, hardened deployment patterns, and safe data handling.',
        },
        {
          title: 'Unlimited Customisation & Integration',
          description: 'Built beyond templates, page builders, and WordPress limitations.',
        },
      ],
      image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      href: '/capabilities/software-development',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Slider - 3 Business Verticals */}
      <HeroSlider />

      {/* Logo Scroller — Social Proof */}
      <LogoScroller />

      {/* Capabilities Section - 3 Horizontal Cards */}
      <section id="capabilities" className="py-28 md:py-36 bg-background relative overflow-hidden">
        {/* Subtle dot grid overlay for technical feel */}
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Our <span className="text-gradient-energy">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mission-critical systems across energy, enterprise infrastructure, and the web.
            </p>
          </motion.div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group flex flex-col md:flex-row ${
                    isEven ? '' : 'md:flex-row-reverse'
                  } rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/10 hover:border-green-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/5 glass`}
                >
                  {/* Image Side */}
                  <div className="relative w-full md:w-5/12 h-64 md:h-auto min-h-[320px] overflow-hidden">
                    <ImageWithFallback
                      src={capability.image}
                      alt={capability.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-${isEven ? 'r' : 'l'} from-black/70 via-black/30 to-transparent`} />
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-12 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Icon Badge */}
                      <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-300">
                        <Icon className="w-7 h-7 text-green-600 group-hover:text-black transition-colors duration-300" />
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-green-500 transition-colors duration-300">
                        {capability.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-base leading-relaxed mb-8">
                        {capability.description}
                      </p>

                      {/* Highlights */}
                      <div className="grid sm:grid-cols-1 gap-5 mb-8">
                        {capability.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-foreground text-sm leading-snug">
                                {highlight.title}
                              </h4>
                              <p className="text-xs text-muted-foreground leading-normal mt-0.5">
                                {highlight.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Link */}
                    <div>
                      <Link
                        href={capability.href}
                        className="group/link inline-flex items-center space-x-2.5 text-green-600 font-bold hover:text-green-500 hover:gap-3 transition-all duration-300"
                      >
                        <span>Explore Capability</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Work — Jenny Internet Zambia */}
      <section id="featured-work" className="py-28 md:py-36 section-gray relative overflow-hidden">
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
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
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
            <div className="rounded-3xl overflow-hidden border border-neutral-200 hover:border-green-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/5 glass">
              {/* Image banner */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <ImageWithFallback
                  src="/jenny-internet.jpg"
                  alt="Jenny Internet Zambia - Connecting Africa to Information"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

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
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
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
      <section id="request-quote" className="py-28 md:py-36 bg-background relative overflow-hidden">
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
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
                      desc: 'Line-item breakdown showing exactly what you’re paying for. No hidden costs.',
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
                        <CheckCircle className="w-5 h-5 text-green-500" />
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
                  <p>Email: <a href="mailto:connect@digitalsense.tech" className="text-foreground hover:text-green-500 transition-colors font-medium">connect@digitalsense.tech</a></p>
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
                  <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-1 transition-all" />
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

