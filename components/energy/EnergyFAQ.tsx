'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | string[];
}

export function EnergyFAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What is net-metering and is it available in Zambia?',
      answer: [
        '<strong>What it is:</strong> Net-metering allows solar system owners to export excess generation to the grid in exchange for credits that offset future consumption from the grid.',
        '<strong>How it works:</strong> Your bi-directional meter tracks both imports (grid → facility) and exports (solar → grid). During peak solar generation, excess power flows to the grid. Utility credits your account at retail rate or preferential export rate. Credits offset consumption during evenings, nights, or cloudy periods. Monthly bill = Grid import charges - Solar export credits.',
        '<strong>Availability in Zambia:</strong> Net-metering regulations are evolving. Availability depends on your utility provider and service area. ZESCO has net-metering pilot programs in select areas—we check eligibility during assessment. Other utilities vary.',
        '<strong>What we do:</strong> Confirm net-metering program availability, design grid-tied system with compliant inverter and protection, handle interconnection applications and utility approvals, optimize system sizing for export scenarios.',
        '<strong>Financial impact:</strong> Eliminates battery storage costs (USD 400-550/kWh saved), captures 80-95% of solar value vs. 60-70% with self-consumption only, reduces payback from 7-8 years to 4-5 years.'
      ]
    },
    {
      question: 'How long do solar panels and batteries last?',
      answer: [
        '<strong>Solar panels:</strong> 25-year manufacturer warranty at >80% output, 30-35 year expected lifespan, ~0.5% degradation per year. After 25 years, panels still produce 87-88% of original capacity.',
        '<strong>Lithium batteries (LiFePO4):</strong> 10-year product warranty, 6,000+ cycles OR 70% capacity retention at 15-20 year calendar life. For daily cycling: 16+ years of service.',
        '<strong>Inverters:</strong> 10-15 year expected lifespan, 5-10 year manufacturer warranty. Replacement cost: USD 0.30-0.50/watt.',
        '<strong>System lifecycle:</strong> Years 0-15: original equipment with minimal cost. Year 15-20: inverter replacement (USD 3,000-8,000). Year 15-20: battery replacement if daily cycling. Years 20-30: panels still producing 82-88% capacity.',
        '<strong>Maintenance keeps systems performing:</strong> Quarterly panel cleaning (dust reduces output 5-15%), annual connection checks, remote monitoring catches degradation early.'
      ]
    },
    {
      question: 'What size system do I need?',
      answer: [
        '<strong>It depends on three factors:</strong> Your daily energy consumption (kWh/day), desired backup duration, and system type (grid-tied, hybrid, off-grid).',
        '<strong>Quick estimates for residential:</strong> Small home (5-10 kWh/day): 3-5kW solar, 10-20kWh battery. Medium home (10-20 kWh/day): 7-12kW solar, 20-40kWh battery. Large home (20-30 kWh/day): 12-18kW solar, 40-60kWh battery.',
        '<strong>Commercial systems:</strong> Small shop (30-60 kWh/day): 15-25kW solar, 30-60kWh battery. Medium facility (100-200 kWh/day): 40-80kW solar, 80-160kWh battery. Large facility (500-1000 kWh/day): 150-300kW solar.',
        '<strong>Sizing by system type:</strong> Grid-tied: solar sized to 70-100% of daily consumption. Hybrid: solar 1.2-1.3× daily consumption, battery sized to evening consumption OR backup duration. Off-grid: solar 1.5× daily consumption, battery for 2-4 days autonomy.',
        '<strong>Don\'t guess</strong>—use our calculator or schedule an assessment. Undersizing wastes money on grid consumption; oversizing wastes money on unused capacity.'
      ]
    },
    {
      question: 'What is the return on investment for solar?',
      answer: [
        '<strong>Grid-tied with net-metering (best ROI):</strong> 4-6 year payback, 300-400% 25-year ROI, USD 0.04-0.06/kWh LCOE. No battery cost, captures 80-95% of solar value via exports.',
        '<strong>Hybrid (solar + battery + grid):</strong> 6-8 year payback, 250-350% 25-year ROI, USD 0.08-0.12/kWh LCOE. Battery cost offset by backup value and demand charge reduction.',
        '<strong>Off-grid vs. grid extension:</strong> Immediate payback if grid extension >2km (solar cheaper than grid buildout). USD 0.12-0.18/kWh LCOE.',
        '<strong>Off-grid vs. diesel genset:</strong> 3-5 year payback from fuel savings, USD 0.12-0.18/kWh vs. USD 0.40-0.60/kWh for diesel.',
        '<strong>Value drivers beyond grid bills:</strong> Avoided demand charges (USD 500-2,000/year for commercial), outage mitigation, tariff hedge against 3-5% annual escalation, property value increase of 3-4%.',
        '<strong>Fastest ROI:</strong> Commercial facilities with high daytime consumption (4-5 years), sites with net-metering (4-6 years), facilities with time-of-use tariffs (5-7 years), remote sites vs. diesel (3-5 years).'
      ]
    },
    {
      question: 'Do solar systems work during power outages?',
      answer: [
        '<strong>Short answer:</strong> Only if you have batteries.',
        '<strong>Grid-tied systems (no battery):</strong> Do NOT provide backup power. Grid-tie inverters shut down when grid voltage drops (anti-islanding protection). This is a safety feature to prevent back-feeding the grid and endangering utility workers. System resumes automatically when grid is restored.',
        '<strong>Hybrid and off-grid systems (with battery):</strong> YES—provide continuous power during outages with automatic transfer (<10ms switchover). Solar continues charging batteries during daylight. System operates independently until grid restoration.',
        '<strong>System design for backup:</strong> 4-8 hour backup for short outages and critical loads, 12-24 hour backup for essential loads, 48+ hour backup with solar recharge for off-grid capability.',
        '<strong>Example:</strong> Facility consumes 100 kWh/day with 20 kWh/day critical loads. For 12-hour critical backup: 10 kWh battery needed. With 20kW solar, system can run indefinitely during multi-day outages.'
      ]
    },
    {
      question: 'What maintenance do solar systems require?',
      answer: [
        '<strong>Solar panels:</strong> Quarterly cleaning recommended (dust reduces output 5-15% in dry season). Annual visual inspection for damage. Continuous performance monitoring via remote system.',
        '<strong>Batteries (LiFePO4):</strong> Monitoring via battery management system. Quarterly connection checks. NO equalization required. 15-20 year lifespan, then module-by-module replacement.',
        '<strong>Inverters & electrical:</strong> Semi-annual visual inspection. Annual connection torque verification. Quarterly filter cleaning for forced-air cooled units. Remote firmware updates.',
        '<strong>Our maintenance programs include:</strong> Remote performance monitoring with alerts, quarterly on-site visits (panel cleaning, inspection, connection checks), annual thermal imaging, vegetation management, priority fault response (<24hr callout).',
        '<strong>Typical costs:</strong> Residential: USD 200-400/year. Commercial: USD 500-1,500/year (1-2% of system value).',
        '<strong>Without maintenance:</strong> Dirty panels cause 10-20% production loss. Loose connections lead to component failure. Undetected faults mean extended downtime. Warranty voids if required maintenance not performed.'
      ]
    },
    {
      question: 'Can I expand my system later?',
      answer: [
        '<strong>Yes—with proper initial design.</strong> We design all systems with 20-30% expansion headroom.',
        '<strong>Solar array expansion:</strong> Add panels to existing strings if inverter MPPT has capacity, add new strings with additional MPPT inputs, or parallel a second inverter if current unit maxed out.',
        '<strong>Battery expansion:</strong> Modular systems allow incremental additions. Add battery modules to existing bank (must match voltage and chemistry). LiFePO4 can be expanded 5kWh at a time.',
        '<strong>System type upgrades:</strong> Grid-tied → Hybrid: add battery + replace inverter. Small → Larger: add equipment in parallel or upgrade inverter. Single-phase → Three-phase: parallel 3× units or upgrade.',
        '<strong>When to expand:</strong> Business growth increases consumption, adding EV charging or new equipment, grid reliability degrades, want to increase energy independence.',
        '<strong>Best practice:</strong> During initial consultation, tell us your 5-year growth plans. We\'ll design infrastructure (conduit sizing, panel space, inverter capacity) to accommodate future expansion without major rework.',
        '<strong>Typical expansion cost:</strong> 30-40% less per kW than initial install (infrastructure already in place).'
      ]
    },
    {
      question: 'What warranties cover the system?',
      answer: [
        '<strong>Solar panels:</strong> 10-12 year product warranty (defects, mechanical failure). 25-year performance warranty at >80% rated output with linear degradation.',
        '<strong>Batteries (LiFePO4):</strong> 10-year product warranty. 6,000 cycles OR 70% capacity retention. Pro-rated replacement if fails early.',
        '<strong>Inverters:</strong> 5-10 year standard warranty (manufacturer-dependent). Extended warranty available for purchase.',
        '<strong>Digital Sense installation warranty:</strong> 5-year workmanship (installation errors, wiring faults, connection issues). 10-year structural mounting and waterproofing. 5-year electrical installation.',
        '<strong>What\'s covered:</strong> Equipment failures due to manufacturing defects, installation errors, structural mounting failures, electrical code violations from our work.',
        '<strong>What\'s NOT covered:</strong> External damage (lightning, vandalism, vehicle impact), normal wear within specs, lack of maintenance, unauthorized modifications, acts of God.',
        '<strong>Warranty service:</strong> Report issue → Remote diagnostics → Manufacturer claim filed → Expedited parts shipping (1-3 weeks) → On-site installation → Re-commissioning. Response: same-day diagnostics, <48hr on-site visit for critical failures.'
      ]
    },
    {
      question: 'How do I know if my roof can support solar panels?',
      answer: [
        '<strong>Load capacity needed:</strong> Solar system weight is 10-15 kg/m² (panels + mounting). Roof must support dead load + wind uplift forces.',
        '<strong>We evaluate during site assessment:</strong> Roof age and condition (should have 15+ years remaining), structural material and soundness, roof type and penetration strategy.',
        '<strong>Roof types we work with:</strong> Corrugated metal (clamp systems or sealed penetrations), concrete/clay tile (tile hooks, no penetration), flat concrete (ballasted non-penetrating OR chemical anchors), steel deck (standing seam clamps OR through-deck fasteners).',
        '<strong>Assessment process:</strong> Visual inspection → Structural analysis with load calculations → Engineering certification (if required for commercial >500m² or roof >20 years) → Recommendation to proceed, reinforce, or defer.',
        '<strong>If roof is unsuitable:</strong> Ground-mounted array (concrete piers), carport/shade structure (new steel structure with solar on top), roof reinforcement (add structural support), or defer until roof replacement.',
        '<strong>Cost comparison:</strong> Roof reinforcement: +USD 2,000-5,000. Ground-mount: +USD 3,000-8,000 vs. roof-mount. Carport: +USD 8,000-15,000 (adds covered parking value).',
        '<strong>Waterproofing guarantee:</strong> We warranty roof penetrations for 10 years—no leaks. Sealed penetrations with EPDM gaskets + flashing, 20+ year UV-rated sealant, post-install water test for flat roofs.'
      ]
    }
  ];

  return (
    <section className="py-32 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success-500/10 border border-success-500/20 mb-6">
            <HelpCircle className="w-4 h-4 text-energy" />
            <span className="text-sm font-medium text-energy">Expert Answers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient-energy">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical answers to help you make informed decisions
          </p>
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
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : index)}
                  className="w-full p-6 flex items-start justify-between text-left hover:bg-white/50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-energy" />
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
                  <div className="px-6 pb-6 space-y-4">
                    {Array.isArray(faq.answer) ? (
                      faq.answer.map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-muted-foreground leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                      ))
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
