'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Battery,
  Network,
  Calculator,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Sun,
  Plug,
  Shield,
  TrendingUp,
  DollarSign,
  Clock,
  Phone,
  Mail
} from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { EnergyCalculator, SystemConfigurations, EnergyFAQ } from '@/components/energy';
import { RFQForm } from '@/components/forms/rfq/RFQForm';

const services = [
  {
    icon: Sun,
    title: 'Solar Photovoltaic Systems',
    description: 'Grid-tied, hybrid, and off-grid solar installations engineered for maximum ROI',
    features: [
      {
        title: 'Grid-tied with net-metering capability',
        details: [
          '5kW - 200kW+ installations (capable of larger projects)',
          'Utility interconnection and bi-directional metering',
          'Export excess generation for grid credits where permitted',
          'Optimized for self-consumption and peak demand reduction'
        ]
      },
      {
        title: 'Hybrid systems (Solar + Battery + Grid)',
        details: [
          'Intelligent energy management across three power sources',
          'Load shifting to minimize grid consumption during peak tariff periods',
          'Backup power during outages while maintaining solar generation',
          'Scalable battery capacity from 10kWh to 100kWh+'
        ]
      },
      {
        title: 'Off-grid systems',
        details: [
          'Complete grid independence for remote facilities',
          'Solar + battery + generator integration with auto-start logic',
          '2-4 days battery autonomy (configurable)',
          'Critical for sites beyond grid extension economics'
        ]
      },
      {
        title: 'Technical specifications',
        details: [
          'Tier 1 monocrystalline panels: 300W - 550W modules, >21% efficiency',
          'String inverters and MPPT charge controllers: 3kW - 50kW capacity',
          'All roof types: corrugated metal, concrete tile, flat membrane, steel deck',
          'Ground-mount and carport structures where roof space constrains'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1635424710918-d5c138981922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwcm9vZnxlbnwxfHx8fDE3Njk3MTY2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Battery,
    title: 'Battery Energy Storage Systems',
    description: 'Modular lithium storage for backup power, load shifting, and grid independence',
    features: [
      {
        title: 'Modular lithium battery architecture',
        details: [
          'LiFePO4 chemistry: 6,000+ cycle life at 80% depth of discharge',
          'Scalable capacity: 5kWh modules to 100kWh+ installations',
          '15-20 year calendar life with minimal degradation'
        ]
      },
      {
        title: 'Inverter-charger integration',
        details: [
          'Multi-input capability: PV + Grid + Generator',
          'Pure sine wave output: 3kW - 50kW continuous capacity',
          'Intelligent load prioritization and charge management',
          '<10ms transfer time for seamless backup switching'
        ]
      },
      {
        title: 'Applications',
        details: [
          'Backup power: 4-48 hour autonomy for critical loads',
          'Load shifting: Charge during off-peak, discharge during peak tariff periods',
          'Grid instability mitigation: Buffer voltage fluctuations and outages',
          'Demand charge reduction: Shave peak consumption for commercial tariff optimization'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1766507679641-51002768af6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwc3RvcmFnZSUyMHN5c3RlbXxlbnwxfHx8fDE3Njk2ODI1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Plug,
    title: 'Electrical Services',
    description: 'Code-compliant electrical integration and backup power systems',
    features: [
      {
        title: 'Renewable energy integration',
        details: [
          'Service entrance upgrades and panel replacements',
          'AC/DC system tie-ins with code-compliant protection',
          'Automatic transfer switching for backup power circuits',
          'Load analysis and circuit optimization'
        ]
      },
      {
        title: 'Backup power (no solar)',
        details: [
          'Grid-charged battery systems with instant failover',
          'Generator integration with smart auto-start',
          'Critical load isolation and dedicated circuits',
          'Suitable for data centers, medical facilities, security systems'
        ]
      },
      {
        title: 'Standards compliance',
        details: [
          'Zambian Electrical Code (ZEC) adherence',
          'Proper grounding and lightning protection',
          'Cable sizing for <1% voltage drop at full load',
          'IP65+ rated equipment for outdoor installations'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzY5NzI5NjE4fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Shield,
    title: 'System Monitoring & Maintenance',
    description: 'Real-time performance tracking and preventive maintenance programs',
    features: [
      {
        title: 'Real-time performance tracking',
        details: [
          'Solar generation, grid import/export, battery state of charge',
          'Per-circuit consumption monitoring (optional)',
          'Mobile and web dashboard access',
          'Automated fault detection and alerts'
        ]
      },
      {
        title: 'Preventive maintenance programs',
        details: [
          'Quarterly site inspections and panel cleaning',
          'Connection torque verification and thermal imaging',
          'Annual performance audits with efficiency reporting',
          'Priority service response for system faults'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1635424710918-d5c138981922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwcm9vZnxlbnwxfHx8fDE3Njk3MTY2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function EnergySystems() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1635424710918-d5c138981922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwcm9vZnxlbnwxfHx8fDE3Njk3MTY2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Solar panel installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        {/* Content */}
        <div className="container-custom relative py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-white"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/20 mb-8">
              <Zap className="w-4 h-4 text-energy" />
              <span className="text-sm font-medium">Energy & Electrical Systems</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Power Independence Through
              <br />
              <span className="text-gradient-energy">Precision Engineering</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              Digital Sense delivers solar PV, battery storage, and electrical infrastructure across Zambia—engineered for reliability, designed for ROI, installed for the long term.
            </p>

            <p className="text-lg text-white/80 mb-12 max-w-2xl">
              From <span className="font-semibold text-energy">5kW residential systems</span> to <span className="font-semibold text-energy">200kW+ commercial installations</span>, we supply, install, monitor, and maintain modern energy solutions that reduce costs, eliminate outages, and hedge against grid instability.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-energy" />
                <span className="text-sm">Licensed electrical contractor</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-energy" />
                <span className="text-sm">Grid-tied, hybrid, and off-grid systems</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-energy" />
                <span className="text-sm">Net-metering ready</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 rounded-xl bg-energy text-white font-medium hover:scale-105 transition-all shadow-lg hover:shadow-2xl inline-flex items-center justify-center space-x-2"
              >
                <span>Schedule Technical Assessment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#calculator"
                className="group px-8 py-4 rounded-xl glass border border-white/30 font-medium hover:scale-105 hover:bg-white/10 transition-all inline-flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Calculate Your System Size</span>
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
              <div className="text-4xl md:text-5xl font-bold text-energy mb-2">250+</div>
              <div className="text-sm text-neutral-400">Power Systems Installed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-energy mb-2">99.9%</div>
              <div className="text-sm text-neutral-400">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-energy mb-2">50MW</div>
              <div className="text-sm text-neutral-400">Managed Capacity</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-energy mb-2">4-6yr</div>
              <div className="text-sm text-neutral-400">Typical ROI</div>
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
              Comprehensive energy solutions from design to maintenance
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
                  className="glass rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedService(isExpanded ? null : index)}
                    className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-energy flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
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
                                <h4 className="font-semibold mb-3 text-energy flex items-center space-x-2">
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

      {/* Net-Metering Section */}
      <section className="py-32 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success-500/10 border border-success-500/20 mb-6">
                <Network className="w-4 h-4 text-energy" />
                <span className="text-sm font-medium text-energy">Strategic Feature</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Net-Metering in Zambia: <br />
                <span className="text-gradient-energy">Designed In, Not Retrofitted</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We engineer grid-tied systems from day one for utility net-metering compatibility—where your excess solar generation earns credits that offset evening and nighttime grid consumption.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">How Net-Metering Works</h3>
                <ol className="space-y-4">
                  {[
                    'Solar system generates power during daylight hours',
                    'Loads are powered directly from solar (zero grid import)',
                    'Excess generation flows to the grid via bi-directional meter',
                    'Utility credits your account at retail or preferential rate',
                    'Credits offset grid consumption during no-sun periods',
                    'Monthly bill reflects net usage: (Grid Import - Solar Export)'
                  ].map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-success-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-energy">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Financial Impact</h3>
                <div className="space-y-6">
                  {[
                    { icon: DollarSign, text: 'Eliminates need for expensive battery storage for many applications' },
                    { icon: TrendingUp, text: 'Captures 80-95% of solar value vs. 60-70% with self-consumption only' },
                    { icon: Clock, text: 'Reduces grid-tied system payback from 7-8 years to 4-5 years' },
                    { icon: Shield, text: 'Protects against 3-5% annual utility tariff escalation' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-energy flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-muted-foreground pt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border-l-4 border-energy"
            >
              <h4 className="font-semibold mb-4 text-lg">What We Handle</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Net-metering-compliant inverter configuration and protection',
                  'Utility interconnection applications and inspections',
                  'Bi-directional metering coordination',
                  'System sizing optimized for export scenarios'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-energy flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                Note: Net-metering availability varies by utility and service area. We confirm program eligibility during technical assessment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Transparent <span className="text-gradient-energy">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Clear cost indicators for informed decision-making
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            {[
              {
                title: 'Residential Solar Systems',
                price: 'USD 4.00/watt',
                description: 'Starting price for systems 5-15kW',
                icon: Sun
              },
              {
                title: 'Commercial Solar Systems',
                price: 'USD 3.20-3.60/watt',
                description: 'For systems exceeding 30kW (economies of scale)',
                icon: Zap
              },
              {
                title: 'Battery Storage',
                price: 'USD 400-550/kWh',
                description: 'Usable capacity (LiFePO4 modules)',
                icon: Battery
              },
              {
                title: 'Hybrid Inverter-Chargers',
                price: 'USD 0.60-0.90/watt',
                description: 'Rated continuous capacity',
                icon: Plug
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:scale-105 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-energy flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <div className="text-3xl font-bold text-energy mb-4">{item.price}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-energy" />
                <span>What&apos;s Included</span>
              </h3>
              <ul className="space-y-3">
                {[
                  'All equipment: panels, inverters, batteries, mounting, cabling',
                  'Installation labor and electrical integration',
                  'Grid interconnection (where applicable)',
                  'System commissioning and client training',
                  '5-year workmanship warranty'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">What Affects Final Pricing</h3>
              <ul className="space-y-3">
                {[
                  'Roof complexity and structural requirements',
                  'Distance from electrical service entrance',
                  'Battery capacity and backup duration',
                  'Expedited equipment sourcing (if required)',
                  'Remote site logistics'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-energy mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-energy font-medium hover:gap-3 transition-all"
                >
                  <span>Request Detailed Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Final pricing provided after technical site assessment
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Energy Calculator */}
      <EnergyCalculator />

      {/* System Configurations */}
      <SystemConfigurations />

      {/* FAQ */}
      <EnergyFAQ />

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
                Ready to Start Your <span className="text-gradient-energy">Energy Project?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Start with data, not assumptions. Get a comprehensive technical assessment within 5 business days.
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-energy flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:info@digitalsense.tech" className="text-energy hover:underline">
                        info@digitalsense.tech
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-energy flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:+260XXXXXXXXX" className="text-energy hover:underline">
                        +260-XXX-XXXXXX
                      </a>
                      <div className="text-sm text-muted-foreground mt-1">
                        Monday-Friday, 08:00-17:00 CAT
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-success-500/10 border border-success-500/20">
                    <h4 className="font-semibold mb-4">What Happens Next?</h4>
                    <ol className="space-y-3">
                      {[
                        'We schedule a comprehensive site survey within 48 hours',
                        'Consumption analysis and preliminary system design (3-5 days)',
                        'Fixed-price quotation with detailed specifications',
                        'System installation within 3-8 weeks'
                      ].map((step, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-success-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-energy">{index + 1}</span>
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
                <RFQForm presetService="energy" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
