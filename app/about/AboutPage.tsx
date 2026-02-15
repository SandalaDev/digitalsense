'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faNetworkWired,
  faCode,
  faArrowRight,
  faCircleCheck,
  faLocationDot,
  faEnvelope,
  faClock,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { AnimatedSection } from '@/components/home/AnimatedSection';
import { RFQForm } from '@/components/forms/rfq';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* ───── Hero ───── */}
      <section className="relative bg-neutral-950 text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(102,204,51,0.08),transparent_60%)]" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Engineering systems
              <br />
              <span className="text-green-500">built to last.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl">
              Digital Sense is an engineering-led technology firm delivering energy, IT infrastructure, and software systems for organizations that value reliability, clarity, and long-term performance.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 hover:scale-[1.02] transition-all duration-300 shadow-lg group"
            >
              <span>Start a conversation</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ───── Who We Are ───── */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Each practice area operates independently, with its own methods, tools, and delivery standards. Clients engage us for specific outcomes, not bundled offerings.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our role is simple: design and deliver systems that work as intended&nbsp;&mdash; and keep working.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───── Our Approach ───── */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Most problems in infrastructure and technology don&apos;t come from complexity. They come from short-term thinking, poor design discipline, and unclear ownership.
              </p>
              <p className="text-lg font-medium mb-8">
                Digital Sense takes a different approach. We focus on:
              </p>
              <div className="space-y-4">
                {[
                  'Proper requirements gathering',
                  'Thoughtful system design',
                  'Realistic assumptions about operating conditions',
                  'Clear documentation and handover',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-5 rounded-xl bg-white border border-neutral-200">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-8 leading-relaxed">
                We don&apos;t oversell scope, force unnecessary dependencies, or push services that aren&apos;t needed.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───── What Sets Us Apart ───── */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Sets Us Apart
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Engineering first',
                desc: 'We approach every engagement as an engineering problem, not a sales exercise. Decisions are justified, documented, and defensible.',
              },
              {
                title: 'Built for real environments',
                desc: 'Our systems are designed for the conditions they will operate in, including power variability, connectivity constraints, and operational realities.',
              },
              {
                title: 'Vendor-neutral by default',
                desc: 'We recommend tools and platforms based on fitness for purpose, not resale incentives.',
              },
              {
                title: 'Clear boundaries',
                desc: 'Each engagement has defined scope, ownership, and success criteria. No ambiguity. No hidden dependencies.',
              },
            ].map((card, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="h-full p-8 rounded-2xl border border-neutral-200 bg-white hover:border-green-500/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-5">
                    <FontAwesomeIcon icon={faCircleCheck} className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Practice Areas ───── */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Practice Areas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Digital Sense operates across three distinct practice areas. Each can be engaged independently.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: faBolt,
                title: 'Energy & Electrical Systems',
                desc: 'Design and implementation of safe, reliable power infrastructure — including electrical systems, renewable energy solutions, and backup power.',
                href: '/capabilities/energy-systems',
              },
              {
                icon: faNetworkWired,
                title: 'IT & Infrastructure Systems',
                desc: 'Networks, servers, cloud services, and security systems designed for stability, performance, and maintainability.',
                href: '/capabilities/it-infrastructure',
              },
              {
                icon: faCode,
                title: 'Software Systems',
                desc: 'Custom software, automation, and internal tools built to solve specific operational or business problems.',
                href: '/capabilities/software-development',
              },
            ].map((card, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <Link
                  href={card.href}
                  className="group block h-full p-8 rounded-2xl border border-neutral-200 bg-white hover:border-green-500/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-5 group-hover:bg-green-500 transition-colors duration-300">
                    <FontAwesomeIcon icon={card.icon} className="w-6 h-6 text-green-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-green-500 transition-colors">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-green-500 group-hover:translate-x-1 transition-transform">
                    Learn more
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 ml-2" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <p className="text-center text-muted-foreground mt-10 max-w-xl mx-auto">
              Clients work with us in one area or several, depending entirely on their needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ───── Who We Work With ───── */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Who We Work With
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="h-full p-8 rounded-2xl border border-green-500/20 bg-green-500/[0.03]">
                <h3 className="text-lg font-bold mb-6 text-green-600">Good fit</h3>
                <ul className="space-y-4">
                  {[
                    'Require dependable infrastructure or systems',
                    'Scaling operations or formalizing technology decisions',
                    'Want clarity, not complexity',
                    'Prefer long-term reliability over quick fixes',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="h-full p-8 rounded-2xl border border-neutral-200 bg-neutral-50">
                <h3 className="text-lg font-bold mb-6 text-muted-foreground">Not a fit</h3>
                <ul className="space-y-4">
                  {[
                    'Lowest-bid procurement exercises',
                    'One-off installs with no accountability',
                    'Clients looking for "everything included" bundles',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faXmark} className="w-4 h-4 text-neutral-400 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───── How Engagements Begin ───── */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How Engagements Begin
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: '01',
                title: 'Assessment or review',
                desc: 'Evaluating an existing system and identifying risks, gaps, or improvements.',
              },
              {
                num: '02',
                title: 'Project delivery',
                desc: 'Designing and implementing a defined system with clear scope and deliverables.',
              },
              {
                num: '03',
                title: 'Targeted support',
                desc: 'Improving or extending an existing setup without unnecessary redesign.',
              },
            ].map((card, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="h-full p-8 rounded-2xl border border-neutral-200 bg-white">
                  <span className="text-4xl font-bold text-green-500/20 mb-4 block">{card.num}</span>
                  <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <p className="text-center text-muted-foreground mt-10 max-w-xl mx-auto">
              Every engagement is structured around clear objectives and measurable outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ───── Where We Operate ───── */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Where We Operate</h2>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-6">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
                <span>Lusaka, Zambia</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital Sense is based in Lusaka, Zambia, serving clients across Southern Africa. Our work reflects local operating conditions and regulatory realities, while maintaining international engineering standards.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───── How We Work ───── */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How We Work
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              'Conservative claims and realistic timelines',
              'Documentation as a deliverable, not an afterthought',
              'Decisions explained in plain language',
              'Systems designed to be maintained by real teams',
            ].map((principle, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.08}>
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-white border border-neutral-200">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="font-medium">{principle}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <p className="text-center text-muted-foreground mt-10 max-w-xl mx-auto">
              If a solution would create unnecessary risk or complexity, we will say so.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ───── Contact ───── */}
      <section id="contact" className="py-32 bg-background relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start a practical conversation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                If you&apos;re planning a project, reviewing existing systems, or looking for a reliable technical partner, get in touch. We&apos;ll help you define the problem clearly before proposing a solution.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-5 gap-12 lg:gap-16"
            >
              {/* Left Column — Contact Info (2 cols) */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-8">Contact Details</h3>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Physical Address</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Plot F3091/M #2, Foxdale Area
                        <br />
                        Lusaka, 10101
                        <br />
                        Zambia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">General Enquiries</h4>
                      <a href="mailto:info@digitalsense.tech" className="text-sm text-foreground hover:text-green-500 transition-colors">
                        info@digitalsense.tech
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Business Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        Mon&ndash;Fri, 8:00 AM &ndash; 5:00 PM CAT
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a href="#" className="group p-5 rounded-2xl bg-neutral-950 text-white flex items-center space-x-4 hover:bg-neutral-900 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/25 transition-colors duration-300">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-neutral-400">Prefer to chat?</div>
                    <div className="text-base font-semibold text-[#25D366] group-hover:text-[#25D366]/80 transition-colors">
                      WhatsApp us
                    </div>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-1 transition-all" />
                </a>

                <p className="text-xs text-muted-foreground mt-4">
                  For brief enquiries only. Project scoping and formal engagements are handled via email or the contact form.
                </p>
              </div>

              {/* Right Column — Quote Form (3 cols) */}
              <div className="lg:col-span-3">
                <RFQForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
