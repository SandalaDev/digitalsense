'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroSlider } from '@/components/home/HeroSlider';
import {
  Zap,
  Network,
  Code,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Calendar,
} from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  const [expandedCapability, setExpandedCapability] = useState<number | null>(null);

  const clients = [
    {
      monogram: 'TC',
      name: 'TechCorp Solutions',
      service: 'Enterprise IT infrastructure overhaul across 3 data centers',
      stat: '99.9%',
      statLabel: 'Uptime',
    },
    {
      monogram: 'GF',
      name: 'GreenField Energy',
      service: 'Hybrid solar & battery storage with intelligent energy management',
      stat: '500kW',
      statLabel: 'Installed capacity',
    },
    {
      monogram: 'LM',
      name: 'Lusaka Metro Group',
      service: 'Network infrastructure deployment for municipal operations',
      stat: '15',
      statLabel: 'Sites connected',
    },
    {
      monogram: 'AZ',
      name: 'AgriTech Zambia',
      service: 'IoT monitoring & automation platform for commercial farms',
      stat: '40%',
      statLabel: 'Cost reduction',
    },
  ];

  const capabilities = [
    {
      icon: Zap,
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
      icon: Network,
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
      icon: Code,
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

      {/* Social Proof — Logo Cards */}
      <section className="py-28 section-dark relative overflow-hidden">
        {/* Layered background: dot grid + radial green glow */}
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Trusted by operators who care about{' '}
              <span className="text-gradient-energy">reliability</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative rounded-2xl p-6 md:p-7 bg-white/[0.03] border border-white/[0.06] hover:border-green-500/30 hover:bg-white/[0.06] transition-all duration-500"
              >
                {/* Monogram logo mark */}
                <div className="w-11 h-11 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5 group-hover:bg-green-500/20 group-hover:border-green-500/40 transition-all duration-500">
                  <span className="text-sm font-bold tracking-wider text-green-400">{client.monogram}</span>
                </div>

                <h3 className="text-[15px] font-semibold text-white mb-1.5 leading-snug">{client.name}</h3>
                <p className="text-[13px] text-white/35 leading-relaxed mb-6">{client.service}</p>

                {/* Stat — anchored to bottom */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="text-2xl md:text-3xl font-bold text-green-500 tracking-tight">{client.stat}</div>
                  <div className="text-[11px] text-white/30 uppercase tracking-[0.15em] mt-0.5">{client.statLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              const Icon = capability.icon;
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
                        <Icon className="w-8 h-8 text-black" />
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
                    <div className="p-8 pt-0 grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-accent">What This System Controls</h4>
                        <ul className="space-y-3">
                          {capability.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
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
                            <ArrowRight className="w-4 h-4" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="text-gradient-energy">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real engagements, real results, real reliability
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="glass rounded-3xl overflow-hidden border border-neutral-200/80 hover:border-green-500/20 transition-all duration-500 hover:shadow-2xl">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Content — spans 3 columns */}
                <div className="md:col-span-3 p-10 md:p-14">
                  <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold text-green-700">Featured Engagement</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Jenny Internet Zambia</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Internet Service Provider — Fiber &amp; Wireless
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-10">
                    Digital Sense is the installation and maintenance partner for Jenny Internet&apos;s access network in Zambia,
                    supporting the rollout and ongoing reliability of fixed uncapped internet services to homes and businesses.
                  </p>

                  <div className="mb-10">
                    <h4 className="font-semibold mb-5 text-foreground">Our responsibilities include:</h4>
                    <div className="space-y-4">
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

                {/* Stats sidebar — spans 2 columns */}
                <div className="md:col-span-2 bg-neutral-950 p-10 md:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                      <div className="text-4xl font-bold text-green-500 mb-2 tracking-tight">Zambia</div>
                      <div className="text-sm text-neutral-400">Operating Region</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                      <div className="text-4xl font-bold text-green-500 mb-2 tracking-tight">24/7</div>
                      <div className="text-sm text-neutral-400">Support Coverage</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                      <div className="text-4xl font-bold text-green-500 mb-2 tracking-tight">ISP</div>
                      <div className="text-sm text-neutral-400">Partner Category</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-8">
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

      {/* Schedule a Call */}
      <section id="schedule-call" className="py-32 bg-background relative overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-16"
            >
              {/* Left Column - Info */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Let&apos;s Talk About
                  <br />
                  <span className="text-gradient-energy">Your Next Project</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Book a free consultation with our team. We&apos;ll discuss your requirements,
                  explore solutions, and outline a clear path forward.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Free Consultation</h3>
                      <p className="text-muted-foreground">No obligation assessment of your requirements and goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Rapid Response</h3>
                      <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">End-to-End Support</h3>
                      <p className="text-muted-foreground">From scoping through delivery and ongoing maintenance</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a href="#" className="group mt-12 p-6 rounded-2xl bg-neutral-950 text-white flex items-center space-x-5 hover:bg-neutral-900 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/25 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" className="w-7 h-7">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-neutral-400">Prefer to chat?</div>
                    <div className="text-lg font-semibold text-[#25D366] group-hover:text-[#25D366]/80 transition-colors">
                      Let&apos;s chat on WhatsApp
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Right Column - Form */}
              <div className="glass rounded-2xl p-8 md:p-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">Schedule a Call</h3>
                </div>

                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        required
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      required
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+260 97 XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      What can we help with? *
                    </label>
                    <select
                      id="interest"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-input-background border border-input focus:border-ring focus:outline-none transition-colors"
                    >
                      <option value="">Select an area</option>
                      <option value="energy">Energy &amp; Electrical Systems</option>
                      <option value="it">IT &amp; Infrastructure</option>
                      <option value="software">Software &amp; Intelligent Systems</option>
                      <option value="integrated">Integrated Solution (multiple areas)</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell us more
                    </label>
                    <Textarea
                      id="message"
                      rows={3}
                      placeholder="Briefly describe your project or challenge..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2 group"
                  >
                    <span>Schedule a Call</span>
                    <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    No commitment required. We&apos;ll reach out within 24 hours.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
