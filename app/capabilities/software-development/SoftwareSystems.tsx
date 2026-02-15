'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
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
  Phone,
  Mail,
  TrendingUp,
  Shield,
  Users
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
    duration: '2-3 weeks',
    description: 'Align on business objectives, technical requirements, and success metrics',
    deliverables: ['Technical architecture docs', 'Content model design', 'Integration planning', 'Brand strategy alignment', 'Project roadmap']
  },
  {
    phase: 'Brand & Design Strategy',
    duration: '3-4 weeks',
    description: 'Strategic brand positioning and visual identity development',
    deliverables: ['Competitive analysis', 'Brand voice definition', 'Style directions', 'Brand guidelines', 'Mood boards']
  },
  {
    phase: 'UI/UX Design & Prototyping',
    duration: '3-4 weeks',
    description: 'User research, wireframing, and high-fidelity design system creation',
    deliverables: ['Information architecture', 'Component library', 'Interactive prototypes', 'Design system', 'Accessibility testing']
  },
  {
    phase: 'Content Strategy & Architecture',
    duration: '2-3 weeks',
    description: 'Content audit, keyword research, and editorial workflow planning',
    deliverables: ['Content templates', 'SEO optimization', 'Governance frameworks', 'Content model', 'Editorial workflows']
  },
  {
    phase: 'Development Sprints',
    duration: '4-8 weeks',
    description: 'Iterative development in two-week sprints with working software delivered early',
    deliverables: ['Working software', 'Feature prioritization', 'Sprint reviews', 'Continuous integration', 'Documentation']
  },
  {
    phase: 'AI & Integration',
    duration: '2-4 weeks',
    description: 'Smart features and third-party integrations implemented and tested',
    deliverables: ['API development', 'AI model integration', 'Third-party connections', 'System testing', 'Performance optimization']
  },
  {
    phase: 'Testing & Optimization',
    duration: '2-3 weeks',
    description: 'Comprehensive QA including automated testing and accessibility audits',
    deliverables: ['Automated tests', 'Cross-browser testing', 'WCAG 2.1 AA compliance', '90+ Lighthouse scores', 'Security scanning']
  },
  {
    phase: 'Deployment & Launch',
    duration: '1-2 weeks',
    description: 'Staged rollout with monitoring dashboards configured',
    deliverables: ['DNS & SSL setup', 'CDN configuration', 'Analytics setup', 'Launch monitoring', '48-hour support']
  },
  {
    phase: 'Training & Documentation',
    duration: '1 week',
    description: 'Comprehensive training and documentation for your team',
    deliverables: ['Video tutorials', 'Written guides', 'Brand guidelines', 'Architecture docs', 'CMS training']
  },
  {
    phase: 'Ongoing Partnership',
    duration: 'Continuous',
    description: 'Monthly reviews, updates, and strategic consulting',
    deliverables: ['Performance reviews', 'Security updates', 'Feature enhancements', 'Content optimization', 'Strategic consulting']
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

const techStack = [
  { category: 'Frontend', logos: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', logos: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Prisma', 'Supabase'] },
  { category: 'CMS', logos: ['Payload CMS', 'Sanity', 'Contentful', 'Strapi'] },
  { category: 'AI/ML', logos: ['OpenAI', 'Anthropic', 'Vercel AI SDK', 'LangChain', 'Pinecone'] },
  { category: 'Cloud', logos: ['Vercel', 'Cloudflare', 'AWS', 'Google Cloud', 'Digital Ocean'] },
  { category: 'Design', logos: ['Figma', 'Adobe Suite', 'Sketch', 'Framer', 'Miro'] }
];

export function SoftwareSystems() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
            alt="Software Development"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="container-custom relative py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-white"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/20 mb-8">
              <Code className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">Software Engineering</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Architecting High-Performance<br />
              <span className="text-gradient-energy">Digital Experiences</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              We build production-grade web applications using the modern React ecosystem&mdash;Next.js, Payload CMS, and AI-powered capabilities.
            </p>

            <p className="text-lg text-white/80 mb-12 max-w-2xl">
              Unified by <span className="font-semibold text-green-500">strategic brand systems</span> that drive <span className="font-semibold text-green-500">measurable business outcomes</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Next.js & React</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">90+ Lighthouse Scores</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">AI-Powered Features</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 rounded-xl bg-green-500 text-black font-medium hover:scale-105 transition-all shadow-lg hover:shadow-2xl inline-flex items-center justify-center space-x-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="group px-8 py-4 rounded-xl glass border border-white/30 font-medium hover:scale-105 hover:bg-white/10 transition-all inline-flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-neutral-950 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">90+</div>
              <div className="text-sm text-neutral-400">Lighthouse Scores</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">2-3x</div>
              <div className="text-sm text-neutral-400">Faster Time-to-Market</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">$50M+</div>
              <div className="text-sm text-neutral-400">Annual GMV Processed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">40%</div>
              <div className="text-sm text-neutral-400">Fewer Production Bugs</div>
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
              Scalable web applications and digital platforms that combine technical excellence with strategic thinking
            </p>
          </motion.div>

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
                  className="glass rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedService(isExpanded ? null : index)}
                    className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
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
                                      &bull; {detail}
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
                            fill
                            className="object-cover"
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

      {/* Business Impact */}
      <section className="py-32 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Business Impact You Can <span className="text-gradient-energy">Measure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from modern development practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {businessImpact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold mb-3">{item.capability}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{item.outcome}</p>
                <div className="text-3xl font-bold text-green-500">{item.result}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-32 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What Sets <span className="text-gradient-energy">Us Apart</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technical excellence meets strategic thinking
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
                  className="glass rounded-2xl p-8"
                >
                  <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center mb-6">
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

      {/* Technology Stack */}
      <section className="py-32 bg-neutral-950 text-white overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              State-of-the-Art <span className="text-gradient-energy">Technology Stack</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We work with industry-leading frameworks and tools
            </p>
          </motion.div>

          <div className="space-y-12">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-sm font-semibold text-green-500 mb-4 uppercase tracking-wider">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {stack.logos.map((logo, logoIndex) => (
                    <div
                      key={logoIndex}
                      className="px-6 py-3 rounded-lg glass border border-white/10 text-sm font-medium text-white/80 hover:border-green-500/50 hover:text-white transition-all"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Engineering Process */}
      <section className="py-32 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our Engineering <span className="text-gradient-energy">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven methodology from discovery to ongoing partnership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-black">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step.phase}</h3>
                    <p className="text-sm text-green-500 font-medium">{step.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 text-sm">{step.description}</p>
                <div>
                  <h4 className="font-semibold mb-3 text-xs text-muted-foreground uppercase tracking-wider">Deliverables</h4>
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

      {/* Why Next.js + Payload CMS */}
      <section className="py-32 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why <span className="text-gradient-energy">Next.js + Payload CMS?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                This technology pairing represents the state of the art for content-driven applications
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Type Safety End-to-End', desc: 'Both frameworks are TypeScript-native, eliminating entire classes of runtime errors' },
                { title: 'Developer Velocity', desc: 'Rapid local development with instant feedback loops accelerates iteration' },
                { title: 'Content Flexibility', desc: 'Code-first CMS enables complex relationships impossible in traditional platforms' },
                { title: 'Performance by Default', desc: 'Server Components minimize client-side JavaScript for superior Core Web Vitals' },
                { title: 'Data Sovereignty', desc: 'Your content lives in your database, not locked in a third-party SaaS platform' },
                { title: 'Cost Predictability', desc: 'No per-seat or per-content-type pricing that escalates with growth' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <h3 className="font-bold mb-3 text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-background">
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
                  className="glass rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
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
      <section id="contact" className="py-32 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build Something <span className="text-gradient-energy">Exceptional?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Schedule a consultation to discuss your business objectives and technical requirements
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
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:info@digitalsense.tech" className="text-green-500 hover:underline">
                        info@digitalsense.tech
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
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
                        'Discovery call within 24 hours',
                        'Detailed proposal and timeline (3-5 days)',
                        'Design and architecture phase begins',
                        'Iterative development with regular demos'
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
                <RFQForm presetService="software" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
