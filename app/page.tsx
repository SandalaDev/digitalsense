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
  Building2,
  Factory,
  Leaf,
  TrendingUp,
  ChevronDown,
  Send,
  Phone
} from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  const [expandedCapability, setExpandedCapability] = useState<number | null>(null);

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

  const solutions = [
    {
      icon: Building2,
      title: 'Commercial & Office Infrastructure',
      description: 'Complete system integration for modern office environments.',
      stack: ['Energy', 'IT', 'Software'],
    },
    {
      icon: Factory,
      title: 'Industrial & Remote Operations',
      description: 'Resilient systems for critical and remote industrial facilities.',
      stack: ['Energy', 'IT', 'Software'],
    },
    {
      icon: Leaf,
      title: 'Sustainable & Resilient Power',
      description: 'Future-proof energy solutions for environmental and operational goals.',
      stack: ['Energy', 'Software'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation & Automation',
      description: 'End-to-end automation and intelligence for modern operations.',
      stack: ['IT', 'Software'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Slider - 3 Business Verticals */}
      <HeroSlider />

      {/* Positioning Statement */}
      <section className="py-32 section-dark relative">
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
              <span className="text-sm font-semibold text-green-500">Our North Star</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Systems That <span className="text-gradient-energy">Work Together</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
              Digital Sense designs, integrates, and maintains physical and digital systems across energy, IT, and software. We don't just deliver components—we deliver integrated solutions that reduce risk and increase operational efficiency.
            </p>
          </motion.div>
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

      {/* Solutions Section */}
      <section id="solutions" className="py-32 section-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Integrated <span className="text-gradient-energy">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-service engagement that addresses your real operational challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-green-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`#${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center space-x-2 text-primary font-medium group-hover:gap-3 transition-all"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-16"
            >
              {/* Left Column - Info */}
              <div>
                <h2 className="text-5xl font-bold mb-6">
                  Let's Build Your
                  <br />
                  <span className="text-gradient-primary">Integrated System</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Start with a consultation. We'll assess your needs, design a solution, and provide lifecycle support.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Free Consultation</h3>
                      <p className="text-muted-foreground">No obligation system assessment and architecture planning</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Rapid Response</h3>
                      <p className="text-muted-foreground">Initial consultation within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Lifecycle Support</h3>
                      <p className="text-muted-foreground">From design through maintenance and optimization</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-neutral-950 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="w-6 h-6 text-accent" />
                    <div>
                      <div className="text-sm text-neutral-400">Direct Line</div>
                      <a href="tel:+1234567890" className="text-xl font-semibold hover:text-accent transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-400">
                    Available Monday-Friday, 8AM-6PM PST
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="glass rounded-2xl p-8">
                <form className="space-y-6">
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
                      placeholder="john.doe@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      I'm interested in *
                    </label>
                    <select
                      id="interest"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-input-background border border-input focus:border-ring focus:outline-none transition-colors"
                    >
                      <option value="">Select a solution</option>
                      <option value="energy">Energy & Electrical Systems</option>
                      <option value="it">IT & Infrastructure Systems</option>
                      <option value="software">Software & Intelligent Systems</option>
                      <option value="commercial">Commercial Infrastructure</option>
                      <option value="industrial">Industrial Operations</option>
                      <option value="sustainable">Sustainable Power</option>
                      <option value="digital">Digital Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-primary text-primary-foreground font-medium hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
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
