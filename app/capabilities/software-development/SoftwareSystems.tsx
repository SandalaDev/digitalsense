'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Code,
  Cpu,
  Database,
  Layers,
  Zap,
  Globe,
  Sparkles,
  ShoppingCart,
  Palette,
  Layout,
  FileText,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  TrendingUp,
  Shield,
  Users,
  Check,
  CalendarCheck,
  Clock,
  Gauge,
  GitBranch,
  Rocket
} from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { RFQForm } from '@/components/forms/rfq/RFQForm';

const services = [
  {
    icon: Code,
    title: 'Full-Stack Web Applications',
    description: 'Production-ready applications built with Next.js and React',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    features: [
      {
        title: 'Modern React Ecosystem',
        details: [
          'Server-side rendering and static generation',
          'Edge computing for lightning-fast experiences',
          'TypeScript for type-safe development',
          'Component-driven architecture'
        ]
      },
      {
        title: 'Performance Optimized',
        details: [
          '90+ Lighthouse scores guaranteed',
          'Optimized code splitting and lazy loading',
          'Image optimization and CDN delivery',
          'Core Web Vitals excellence'
        ]
      }
    ]
  },
  {
    icon: Layers,
    title: 'Headless CMS & Content Platforms',
    description: 'Payload CMS implementations with complete control and flexibility',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    features: [
      {
        title: 'TypeScript-Native CMS',
        details: [
          'Code-first configuration',
          'Complex content relationships',
          'Custom field types and validation',
          'Role-based access control'
        ]
      },
      {
        title: 'Content Flexibility',
        details: [
          'Your data in your database',
          'No vendor lock-in or per-seat pricing',
          'Unlimited customization potential',
          'RESTful and GraphQL APIs'
        ]
      }
    ]
  },
  {
    icon: Sparkles,
    title: 'AI Integration & Intelligent Automation',
    description: 'AI capabilities that create measurable business value',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    features: [
      {
        title: 'Enterprise AI',
        details: [
          'OpenAI and Anthropic Claude integration',
          'Vector databases for semantic search',
          'Custom model implementation',
          'Edge AI processing for speed'
        ]
      },
      {
        title: 'Practical Applications',
        details: [
          'Intelligent chatbots and assistants',
          'Content generation and optimization',
          'Predictive analytics and insights',
          'Workflow automation'
        ]
      }
    ]
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Transactional Systems',
    description: 'High-performance commerce platforms that convert',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    features: [
      {
        title: 'Headless Commerce',
        details: [
          'Shopify Hydrogen, Medusa, or custom builds',
          'Real-time inventory management',
          'Payment orchestration (Stripe, PayPal)',
          'Seamless checkout experiences'
        ]
      },
      {
        title: 'Conversion Optimization',
        details: [
          'Lightning-fast product pages',
          'Personalized shopping experiences',
          'A/B testing infrastructure',
          '$50M+ in annual GMV processed'
        ]
      }
    ]
  },
  {
    icon: Palette,
    title: 'Brand Design & Strategy',
    description: 'Comprehensive brand identity and strategic positioning',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    features: [
      {
        title: 'Strategic Branding',
        details: [
          'Market positioning and differentiation',
          'Brand personality and voice definition',
          'Competitive analysis and research',
          'Messaging frameworks'
        ]
      },
      {
        title: 'Visual Identity',
        details: [
          'Logo design and brand marks',
          'Color systems and typography',
          'Brand guidelines and governance',
          'Design tokens as code'
        ]
      }
    ]
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'User-centered design grounded in behavioral research',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    features: [
      {
        title: 'Research & Strategy',
        details: [
          'User interviews and testing',
          'Information architecture',
          'Journey mapping and personas',
          'Competitive analysis'
        ]
      },
      {
        title: 'Accessible Design',
        details: [
          'WCAG 2.1 AA compliance',
          'Responsive across all devices',
          'Interactive prototyping',
          'Design system development'
        ]
      }
    ]
  },
  {
    icon: FileText,
    title: 'Digital Content Strategy & Production',
    description: 'Content modeling aligned with SEO and conversion goals',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    features: [
      {
        title: 'Strategic Content',
        details: [
          'Keyword research and gap analysis',
          'Content architecture and modeling',
          'Editorial workflow design',
          'SEO optimization'
        ]
      },
      {
        title: 'Content Production',
        details: [
          'Copywriting and editorial content',
          'Long-form guides and resources',
          'Product descriptions and landing pages',
          'Performance tracking and analytics'
        ]
      }
    ]
  },
  {
    icon: Globe,
    title: 'DevOps & Edge Infrastructure',
    description: 'Modern deployment pipelines and global CDN distribution',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    features: [
      {
        title: 'Modern Infrastructure',
        details: [
          'Vercel, Cloudflare edge deployment',
          'Automated CI/CD pipelines',
          'Global CDN distribution',
          'Serverless architecture'
        ]
      },
      {
        title: 'Monitoring & Quality',
        details: [
          'Performance monitoring dashboards',
          'Automated testing suites',
          'Security scanning',
          'Analytics instrumentation'
        ]
      }
    ]
  }
];

const whyChoose = [
  {
    icon: Users,
    title: 'Engineers Who Think Like Consultants',
    description: 'We don\'t just build what you ask for\u2014we help you define what you actually need. Our discovery process identifies the highest-impact features and creates a roadmap aligned with business objectives.'
  },
  {
    icon: TrendingUp,
    title: 'Future-Proof Technology Choices',
    description: 'We focus on proven frameworks backed by massive developer communities. Next.js, React, and TypeScript ensure your platform stays maintainable as your business scales.'
  },
  {
    icon: Layers,
    title: 'Seamless Integration Capabilities',
    description: 'Our applications integrate with CRMs, ERPs, payment processors, marketing automation, and analytics platforms\u2014creating unified digital ecosystems.'
  },
  {
    icon: Zap,
    title: 'Performance-First Architecture',
    description: 'We obsess over Core Web Vitals and Lighthouse scores. Every application is optimized for speed, accessibility, and SEO from day one.'
  },
  {
    icon: Sparkles,
    title: 'AI Implementation That Delivers ROI',
    description: 'We don\'t add AI for novelty. Every intelligent feature solves a specific business problem with measurable outcomes\u2014reducing costs and extracting insights.'
  },
  {
    icon: Shield,
    title: 'Strategic Brand Integration',
    description: 'Technical implementation reinforces brand equity. Design tokens as code and accessibility as brand value ensure authentic digital presence.'
  }
];

const businessImpact = [
  {
    capability: 'Performance Optimization',
    outcome: 'Sub-second page loads reduce bounce rates',
    result: '15-40% conversion improvement'
  },
  {
    capability: 'Modern Development Stack',
    outcome: 'Type-safe code accelerates delivery',
    result: '2-3x faster time-to-market'
  },
  {
    capability: 'Headless CMS Architecture',
    outcome: 'No engineering bottlenecks',
    result: '60% faster content updates'
  },
  {
    capability: 'Serverless Infrastructure',
    outcome: 'Scales automatically with demand',
    result: '30-50% cost reduction'
  },
  {
    capability: 'AI-Powered Features',
    outcome: 'Automated workflows reduce workload',
    result: '40% efficiency improvement'
  },
  {
    capability: 'Clean, Maintainable Code',
    outcome: 'Comprehensive testing reduces debt',
    result: '40% fewer production bugs'
  }
];

const processSteps = [
  {
    phase: 'Discovery & Architecture',
    duration: 'Week 1',
    description: 'Align on business objectives, users, integrations, content, and measurable launch outcomes.',
    deliverables: ['Technical architecture', 'Feature roadmap', 'Integration plan', 'Success metrics']
  },
  {
    phase: 'Experience & Content System',
    duration: 'Weeks 2-3',
    description: 'Turn brand, UX, and content requirements into reusable page patterns and CMS structures.',
    deliverables: ['Interface system', 'Content model', 'Prototype', 'Accessibility baseline']
  },
  {
    phase: 'Build Sprints',
    duration: '4-8 weeks',
    description: 'Develop the platform in two-week increments with working demos and clear technical review.',
    deliverables: ['Working software', 'CMS setup', 'API integrations', 'Continuous integration']
  },
  {
    phase: 'Quality & Launch',
    duration: '1-2 weeks',
    description: 'Validate performance, SEO, accessibility, security, analytics, and production readiness.',
    deliverables: ['QA report', '90+ Lighthouse target', 'Security checks', 'Launch runbook']
  },
  {
    phase: 'Operate & Improve',
    duration: 'Continuous',
    description: 'Support content teams, monitor production, and plan improvements from real usage data.',
    deliverables: ['Training', 'Documentation', 'Monitoring', 'Enhancement backlog']
  }
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Most projects range from 6-16 weeks depending on complexity. Simple marketing sites launch in 6-8 weeks, while applications with AI integration and complex features typically require 12-16 weeks. When brand development and content strategy are included, add 3-5 weeks to the timeline.'
  },
  {
    question: 'Can you work with our existing brand guidelines?',
    answer: 'Absolutely. We excel at translating established brand systems into executable design systems. If you need brand development or refinement, our design team can handle that alongside technical development\u2014ensuring complete alignment between strategy and execution.'
  },
  {
    question: 'What happens after launch?',
    answer: 'We offer ongoing support packages covering maintenance, security updates, performance monitoring, feature enhancements, content strategy optimization, and brand evolution. Most clients opt for continued partnership as their digital needs evolve.'
  },
  {
    question: 'How much does hosting cost?',
    answer: 'Modern edge infrastructure (Vercel, Cloudflare) typically costs $20-200/month depending on traffic volume. These platforms scale automatically\u2014you pay only for what you use, with no manual intervention required during traffic spikes.'
  },
  {
    question: 'What is Payload CMS and why do you recommend it?',
    answer: 'Payload is a code-first, TypeScript-native CMS that runs within your Next.js application. Unlike SaaS options, Payload provides data sovereignty\u2014your content lives in your database. It offers unlimited customization, no per-seat pricing, and complete type safety between CMS and frontend.'
  },
  {
    question: 'How do you integrate AI without compromising performance?',
    answer: 'We implement AI at the infrastructure edge\u2014processing happens server-side with responses streamed to clients. This keeps API keys secure, enables caching for common queries, and maintains sub-second latency. For sensitive data, we deploy self-hosted models within your VPC.'
  },
  {
    question: 'Do you provide CMS training for our team?',
    answer: 'Yes. Every project includes comprehensive training: video tutorials, written documentation, and live training sessions. Payload\'s intuitive interface is designed for non-technical users, and we ensure your team feels confident managing content independently.'
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Yes. We have extensive experience integrating with CRMs (Salesforce, HubSpot), ERPs, payment processors (Stripe, PayPal), marketing automation platforms, and custom APIs. Integration planning happens during discovery to ensure smooth data flow.'
  },
  {
    question: 'What about e-commerce capabilities?',
    answer: 'We specialize in headless e-commerce using Shopify Hydrogen, Medusa, or custom solutions. This approach delivers superior performance and unique shopping experiences while maintaining robust inventory and order management. We\'ve processed $50M+ in annual GMV.'
  },
  {
    question: 'How do you ensure website performance?',
    answer: 'Performance is architectural, not an afterthought. We use Next.js for optimal code splitting, implement aggressive image optimization, leverage edge caching, and continuously monitor Core Web Vitals. Every project must achieve 90+ Lighthouse scores before launch.'
  }
];

const stats = [
  { value: '90+', label: 'Lighthouse Performance Targets', icon: Gauge },
  { value: '2-3x', label: 'Faster Delivery Through Typed Systems', icon: Rocket },
  { value: '99.9%', label: 'Launch Uptime Architecture', icon: Shield },
  { value: '24/7', label: 'Monitoring-Ready Deployments', icon: Clock }
];

const techStack = [
  {
    icon: Code,
    title: 'Application Core',
    desc: 'The default lane for public websites, customer portals, dashboards, and high-performance web apps.',
    proof: 'Server rendering, static generation, typed UI, and accessible component systems.',
    tools: [
      { name: 'Next.js', note: 'App Router', logo: '/icons/next.svg' },
      { name: 'React', note: 'UI systems', logo: '/icons/react.svg' },
      { name: 'TypeScript', note: 'type safety', logo: '/icons/ts.svg' },
      { name: 'Tailwind CSS', note: 'design tokens', logo: '/icons/tailwiind.svg' },
      { name: 'Framer Motion', note: 'motion', logo: '/icons/framer.svg' }
    ]
  },
  {
    icon: Database,
    title: 'Content & Data',
    desc: 'Structured content and business data stay flexible without creating a maintenance burden.',
    proof: 'Code-first CMS models, relational data, clean APIs, and editor workflows.',
    tools: [
      { name: 'Payload CMS', note: 'headless CMS', logo: '/icons/payload.svg' },
      { name: 'PostgreSQL', note: 'relational data', logo: '/icons/postgres.svg' },
      { name: 'Node.js', note: 'runtime', logo: '/icons/node.svg' },
      { name: 'Redis', note: 'cache/queues', logo: '/icons/redis.svg' },
      { name: 'GraphQL', note: 'API layer', logo: '/icons/graphql.svg' }
    ]
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    desc: 'AI is planned around workflow value, latency, governance, and secure server-side execution.',
    proof: 'Assistants, semantic search, generated content workflows, and process automation.',
    tools: [
      { name: 'OpenAI', note: 'AI features', logo: '/icons/open.svg' },
      { name: 'Pinecone', note: 'vector search', logo: '/icons/pinecone.svg' },
      { name: 'Streaming APIs', note: 'low latency', logo: '/icons/streaming.svg' },
      { name: 'Guardrails', note: 'control', logo: '/icons/shield.svg' }
    ]
  },
  {
    icon: Globe,
    title: 'Delivery & Operations',
    desc: 'Every build ships with deployment, observability, backups, and a clean path for future changes.',
    proof: 'Edge deployment, CI/CD, security checks, analytics, and release discipline.',
    tools: [
      { name: 'Cloudflare', note: 'edge/CDN', logo: '/icons/cloudflare.svg' },
      { name: 'Docker', note: 'portable builds', logo: '/icons/docker.svg' },
      { name: 'GitHub', note: 'source control', logo: '/icons/gitHub.svg' },
      { name: 'Prometheus', note: 'metrics', logo: '/icons/prometheus.svg' },
      { name: 'Nginx', note: 'proxy', logo: '/icons/nginx.svg' }
    ]
  },
  {
    icon: Palette,
    title: 'Brand & Interface Systems',
    desc: 'Design work is converted into durable tokens, reusable components, and accessible page patterns.',
    proof: 'Brand systems, UX prototypes, content templates, and production-ready visual governance.',
    tools: [
      { name: 'Figma', note: 'interface design', logo: '/icons/figma.svg' },
      { name: 'Illustrator', note: 'identity', logo: '/icons/illustrator.svg' },
      { name: 'Photoshop', note: 'creative assets', logo: '/icons/photoshop.svg' },
      { name: 'HTML', note: 'semantic markup', logo: '/icons/html.svg' },
      { name: 'CSS', note: 'responsive polish', logo: '/icons/css.svg' }
    ]
  }
];

const stackPrinciples = [
  {
    title: 'Default to maintainable',
    desc: 'We choose tools your team can understand, hire for, and extend after launch.'
  },
  {
    title: 'Performance is architectural',
    desc: 'Rendering strategy, caching, images, and data access are planned before UI production.'
  },
  {
    title: 'Own the critical data',
    desc: 'Content and business records stay portable, backed up, and free from unnecessary vendor lock-in.'
  },
  {
    title: 'Ship with operations',
    desc: 'Monitoring, rollback paths, documentation, and handover are part of the build, not extras.'
  }
];

export function SoftwareSystems() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/software.png"
            alt="Software Development"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/65 to-green-950/45" />
          <div className="absolute inset-0 bg-dot-grid opacity-30" />
        </div>

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
              <span className="text-sm font-semibold tracking-wide text-green-400">Software Engineering & Digital Platforms</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
              Software Built for
              <br />
              <span className="text-gradient-energy">Business Outcomes.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-6">
              Production-grade web applications, content platforms, e-commerce systems, and AI-enabled workflows built on a maintainable modern stack.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-12 text-white/70">
              {['Typed architecture', 'Launch-ready operations', 'Performance by design'].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-3 px-10 py-5 rounded-2xl bg-green-500 text-black font-bold text-lg hover:bg-green-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30"
              >
                <span>Request a Software Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#stack"
                className="group inline-flex items-center justify-center space-x-3 px-10 py-5 rounded-2xl glass-light border border-white/20 text-white font-bold text-lg hover:border-green-500/40 hover:bg-white/10 transition-all"
              >
                <span>View Our Stack</span>
                <GitBranch className="w-5 h-5 text-green-400" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
      </section>

      <section className="relative py-20 section-dark overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
        <div className="container-custom relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 mb-4 group-hover:bg-green-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-sm text-neutral-400 leading-tight max-w-[180px] mx-auto">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-28 md:py-36 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-6 border border-green-500/20">
              What We Deliver
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Digital Systems That
              <br className="hidden md:block" />
              <span className="text-gradient-energy">Work Like Infrastructure</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategy, design, engineering, content, integrations, and operations handled as one connected delivery system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6 max-w-7xl mx-auto">
            {services.slice(0, 2).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="group relative rounded-3xl overflow-hidden border border-neutral-200 hover:border-green-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/5"
                >
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                  </div>

                  <div className="relative p-8 md:p-10 min-h-[420px] flex flex-col justify-end text-white">
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-green-500 text-black text-xs font-bold">
                      Core Service
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center mb-5 shadow-lg shadow-green-500/25">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/70 mb-6 max-w-md">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.flatMap((feature) => feature.details).slice(0, 6).map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {services.slice(2).map((service, index) => {
              const Icon = service.icon;
              const serviceIndex = index + 2;
              const isExpanded = expandedService === serviceIndex;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="group relative glass rounded-2xl p-6 border border-neutral-200 hover:border-green-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 hover:-translate-y-1"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedService(isExpanded ? null : serviceIndex)}
                    className="w-full text-left"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-300">
                        <Icon className="w-6 h-6 text-green-600 group-hover:text-black transition-colors duration-300" />
                      </div>
                      <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 mt-5 border-t border-neutral-200 space-y-2">
                          {service.features.flatMap((feature) => feature.details).slice(0, 5).map((feature) => (
                            <div key={feature} className="flex items-start space-x-2">
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
              Software That Supports
              <br className="hidden md:block" />
              <span className="text-green-400">Real Operations</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
              We combine consulting, engineering, design, and lifecycle thinking so platforms stay useful after launch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group glass-dark rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:bg-white/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/20 flex items-center justify-center mb-6 group-hover:bg-green-500 transition-all duration-300">
                    <Icon className="w-6 h-6 text-green-500 group-hover:text-black transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 section-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-6 border border-green-500/20">
              Business Impact
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Outcomes You Can
              <br className="hidden md:block" />
              <span className="text-gradient-energy">Measure After Launch</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The stack, process, and UX decisions are selected around operational value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {businessImpact.map((item, index) => (
              <motion.div
                key={item.capability}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="glass rounded-2xl p-8 border border-neutral-200 hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/5 transition-all"
              >
                <div className="text-3xl font-bold text-green-500 mb-4">{item.result}</div>
                <h3 className="text-xl font-bold mb-3">{item.capability}</h3>
                <p className="text-sm text-muted-foreground">{item.outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="relative py-28 md:py-36 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-circuit opacity-30" />
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 max-w-7xl mx-auto items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-6 border border-green-500/20">
                Technology Stack
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Modern Tools,
                <br />
                <span className="text-gradient-energy">Selected With Restraint</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                The stack is not a logo wall. We pick technology by the job it performs, the people who will maintain it, and the operational risk it removes.
              </p>

              <div className="space-y-4">
                {stackPrinciples.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-green-500/15 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-green-400">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{principle.title}</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">{principle.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-4">
              {techStack.map((stack, index) => {
                const Icon = stack.icon;
                return (
                  <motion.div
                    key={stack.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="glass-dark rounded-2xl p-6 md:p-7 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-white">{stack.title}</h3>
                            <p className="text-sm text-neutral-400 mt-1 leading-relaxed">{stack.desc}</p>
                          </div>
                          <div className="shrink-0 text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 w-fit">
                            {stack.tools.length} tools
                          </div>
                        </div>

                        <p className="text-xs text-neutral-500 mb-5">{stack.proof}</p>

                        <div className="flex flex-wrap gap-2.5">
                          {stack.tools.map((tool) => (
                            <div
                              key={tool.name}
                              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-left hover:border-green-500/30 hover:bg-green-500/10 transition-all"
                            >
                              {tool.logo ? (
                                <span className="relative w-5 h-5 rounded bg-white flex items-center justify-center overflow-hidden">
                                  <ImageWithFallback
                                    src={tool.logo}
                                    alt={`${tool.name} logo`}
                                    width={20}
                                    height={20}
                                    className="w-4 h-4 object-contain"
                                  />
                                </span>
                              ) : (
                                <span className="w-5 h-5 rounded bg-green-500/15 text-green-400 flex items-center justify-center text-[10px] font-bold">
                                  {tool.name.slice(0, 1)}
                                </span>
                              )}
                              <span>
                                <span className="block text-sm font-semibold leading-none text-white">{tool.name}</span>
                                <span className="block text-[11px] leading-tight text-neutral-500 mt-1">{tool.note}</span>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
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
              From Discovery to
              <br className="hidden md:block" />
              <span className="text-gradient-energy">Continuous Improvement</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A practical delivery path with enough structure to reduce risk and enough flexibility to adapt.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="hidden lg:grid lg:grid-cols-5 gap-5 relative">
              <div className="absolute top-[72px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-green-500/20 via-green-500 to-green-500/20" />

              {processSteps.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.4 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center mb-6 shadow-lg shadow-green-500/25">
                    <span className="text-2xl font-bold text-black">{index + 1}</span>
                  </div>
                  <div className="glass rounded-2xl p-6 border border-neutral-200 hover:border-green-500/30 hover:shadow-lg transition-all h-full">
                    <div className="text-xs font-semibold text-green-600 mb-2 uppercase tracking-wider">{step.duration}</div>
                    <h3 className="text-lg font-bold mb-3">{step.phase}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <div className="space-y-2">
                      {step.deliverables.map((deliverable) => (
                        <div key={deliverable} className="flex items-center space-x-2 text-left">
                          <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:hidden space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.phase}
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
                    <h3 className="text-lg font-bold mb-2">{step.phase}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <div className="space-y-2">
                      {step.deliverables.map((deliverable) => (
                        <div key={deliverable} className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{deliverable}</span>
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

      <section className="py-28 md:py-36 section-gray">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-6 border border-green-500/20">
                Recommended Core
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Why <span className="text-gradient-energy">Next.js + Payload CMS?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                This pairing gives content teams control while keeping engineering close to the data model, front end, and deployment pipeline.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { title: 'Type Safety End-to-End', desc: 'Both frameworks are TypeScript-native, reducing avoidable runtime failures.' },
                { title: 'Content Flexibility', desc: 'Code-first CMS models support complex relationships without forcing a SaaS template.' },
                { title: 'Performance by Default', desc: 'Server Components, caching, and edge delivery reduce unnecessary client-side weight.' },
                { title: 'Data Sovereignty', desc: 'Content can live in your database, with cleaner backup, migration, and ownership paths.' },
                { title: 'Cost Predictability', desc: 'Avoid per-seat and per-content-type pricing that scales badly with growth.' },
                { title: 'Editor Confidence', desc: 'Structured fields, roles, previews, and workflows make content operations safer.' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="glass rounded-2xl p-6 border border-neutral-200 hover:border-green-500/30 transition-all"
                >
                  <h3 className="font-bold mb-3 text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-6 border border-green-500/20">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Software Development
              <br className="hidden md:block" />
              <span className="text-gradient-energy">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="glass rounded-2xl overflow-hidden border border-neutral-200 hover:border-green-500/30 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-green-500/5 transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
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

      <section id="contact" className="relative py-28 md:py-36 gradient-green-black text-white overflow-hidden">
        <div className="container-custom relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-8 border border-green-500/20">
                  Start a Project
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                  Ready to Build
                  <br />
                  <span className="text-green-400">Something Useful?</span>
                </h2>
                <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
                  Share the business problem, current systems, and launch constraints. We will shape the right scope before writing code.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: CalendarCheck, title: 'Discovery call within 24 hours', desc: 'We clarify goals, stakeholders, timeline, and budget range.' },
                    { icon: Layers, title: 'Architecture and scope proposal', desc: 'You get a practical roadmap with the stack, phases, and risks.' },
                    { icon: GitBranch, title: 'Iterative build with demos', desc: 'Working software is reviewed early instead of waiting until the end.' },
                    { icon: Rocket, title: 'Launch and handover', desc: 'Deployment, analytics, documentation, and training are included.' },
                  ].map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">{step.title}</div>
                          <div className="text-xs text-neutral-400 mt-0.5">{step.desc}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="grid gap-4 sm:grid-cols-2 p-5 rounded-xl glass-dark border border-white/10">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-white">Email</div>
                      <a href="mailto:connect@digitalsense.tech" className="text-green-400 hover:underline text-sm break-all">
                        connect@digitalsense.tech
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-white">Phone</div>
                      <a href="tel:+260978980494" className="text-green-400 hover:underline text-sm">
                        +260 978 980 494
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/20"
              >
                <RFQForm presetService="software" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
