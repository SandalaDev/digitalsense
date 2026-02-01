'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Zap, Wind } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ConfigDetails {
  title: string;
  architecture: string;
  operation: string[];
  powerFlow: { scenario: string; flow: string }[];
  applications: string[];
  limitations?: string[];
  roi: string;
  icon: LucideIcon;
}

export function SystemConfigurations() {
  const [selectedConfig, setSelectedConfig] = useState<string>('grid-tied');

  const configurations: Record<string, ConfigDetails> = {
    'grid-tied': {
      title: 'Grid-Tied System (No Battery)',
      icon: Sun,
      architecture: 'Solar Array → Grid-Tie Inverter → AC Panel → Loads + Grid Connection',
      operation: [
        'Solar generation feeds facility loads directly during daylight',
        'Excess power exports to grid (net-metering credit where available)',
        'Grid supplies power during evenings, nights, and low-generation periods',
        'No battery storage—lowest $/kW installed cost'
      ],
      powerFlow: [
        { scenario: 'Daytime (sunny)', flow: 'Solar > Loads → Export to grid' },
        { scenario: 'Daytime (cloudy)', flow: 'Solar + Grid → Loads' },
        { scenario: 'Nighttime', flow: 'Grid → Loads' }
      ],
      applications: [
        'Commercial facilities with stable grid and daytime consumption',
        'Net-metering eligible sites',
        'Budget-constrained projects prioritizing ROI'
      ],
      limitations: [
        'No backup power during grid outages',
        'Solar generation wasted if grid is down (anti-islanding protection)',
        'Value dependent on net-metering availability'
      ],
      roi: '4-6 years typical in Zambian commercial tariff environment'
    },
    'off-grid': {
      title: 'Off-Grid System (Complete Independence)',
      icon: Battery,
      architecture: 'Solar Array → MPPT Charge Controller → Battery Bank → Inverter-Charger ← Backup Generator → AC Loads',
      operation: [
        'Solar charges batteries and powers loads during daylight',
        'Batteries supply power during no-sun periods (evening, night, cloudy days)',
        'Generator auto-starts when battery reaches low SOC threshold',
        'Complete grid independence—zero grid connection'
      ],
      powerFlow: [
        { scenario: 'Daytime (sunny)', flow: 'Solar → Loads + Battery charging' },
        { scenario: 'Daytime (cloudy)', flow: 'Solar + Battery → Loads' },
        { scenario: 'Nighttime', flow: 'Battery → Loads' },
        { scenario: 'Low battery', flow: 'Generator → Loads + Battery charging' }
      ],
      applications: [
        'Remote facilities beyond grid extension',
        'Operations requiring 24/7 power reliability',
        'Sites with unreliable or absent grid infrastructure'
      ],
      limitations: [
        'Higher upfront cost than grid-tied',
        'Requires generator for extended cloudy periods'
      ],
      roi: '3-5 years vs. diesel genset only (fuel savings)'
    },
    'hybrid': {
      title: 'Hybrid System with Net-Metering',
      icon: Zap,
      architecture: 'Solar Array → Hybrid Inverter-Charger ← Grid Connection ↔ Battery Bank → AC Loads',
      operation: [
        'Solar charges batteries and powers loads',
        'Excess solar exports to grid for net-metering credits',
        'Batteries discharge during peak tariff periods or outages',
        'Grid supplies power when both solar and battery depleted',
        'Intelligent energy management optimizes source selection'
      ],
      powerFlow: [
        { scenario: 'Peak generation, low consumption', flow: 'Solar → Loads + Battery + Grid export' },
        { scenario: 'Peak tariff period', flow: 'Battery → Loads (grid import avoided)' },
        { scenario: 'Grid outage', flow: 'Solar + Battery → Loads (seamless)' },
        { scenario: 'Evening (post-sunset)', flow: 'Battery → Loads, then Grid when depleted' },
        { scenario: 'Low battery + no solar', flow: 'Grid → Loads + Battery charging (off-peak)' }
      ],
      applications: [
        'Commercial facilities with time-of-use tariffs',
        'Sites requiring both backup power and grid cost optimization',
        'Businesses with high afternoon/evening consumption'
      ],
      limitations: [
        'Higher complexity than grid-tied',
        'Requires net-metering program availability'
      ],
      roi: '5-7 years (combines net-metering savings + demand charge reduction + outage mitigation)'
    },
    'battery-backup': {
      title: 'Battery Backup System (No Solar)',
      icon: Wind,
      architecture: 'Grid Connection → Inverter-Charger → Battery Bank → Critical Load Panel (plus Main AC Panel for non-critical loads)',
      operation: [
        'Batteries continuously charged from grid during normal operation',
        'Instant automatic transfer to battery power during outage (<10ms)',
        'Powers critical loads for 2-12 hours (configuration-dependent)',
        'Optional generator integration for extended outages'
      ],
      powerFlow: [
        { scenario: 'Normal operation', flow: 'Grid → All loads + Battery float charging' },
        { scenario: 'Grid outage', flow: 'Battery → Critical loads only' },
        { scenario: 'Extended outage (with generator)', flow: 'Generator → All loads + Battery charging' }
      ],
      applications: [
        'Data centers and server rooms',
        'Medical clinics and laboratories',
        'Security operations centers',
        'Manufacturing facilities with sensitive equipment'
      ],
      limitations: [
        'No renewable generation—purely grid-charged backup',
        'Ongoing grid electricity costs'
      ],
      roi: 'Instant switchover (no 5-15 second delay), Silent operation, No fuel logistics'
    }
  };

  const config = configurations[selectedConfig];
  const Icon = config.icon;

  return (
    <section className="py-32 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            System Configuration <span className="text-gradient-energy">Deep-Dive</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive diagrams showing component interaction and power flow
          </p>
        </motion.div>

        {/* Configuration Tabs */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(configurations).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedConfig(key)}
                className={`p-4 rounded-xl font-medium transition-all ${
                  selectedConfig === key
                    ? 'bg-energy text-white shadow-lg scale-105'
                    : 'glass hover:bg-white/50'
                }`}
              >
                {configurations[key].title.split('(')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Configuration Details */}
        <motion.div
          key={selectedConfig}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-energy flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold">{config.title}</h3>
            </div>

            {/* Architecture */}
            <div className="mb-12">
              <h4 className="text-xl font-bold mb-4 text-energy">Architecture</h4>
              <div className="p-6 rounded-xl bg-success-500/10 border border-success-500/20">
                <code className="text-sm md:text-base font-mono text-foreground whitespace-pre-wrap break-words">
                  {config.architecture}
                </code>
              </div>
            </div>

            {/* Operation */}
            <div className="mb-12">
              <h4 className="text-xl font-bold mb-4 text-energy">Operation</h4>
              <ul className="space-y-3">
                {config.operation.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-energy mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Power Flow */}
            <div className="mb-12">
              <h4 className="text-xl font-bold mb-4 text-energy">Power Flow Scenarios</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {config.powerFlow.map((scenario, index) => (
                  <div key={index} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="font-semibold mb-2">{scenario.scenario}</div>
                    <code className="text-sm text-energy font-mono">{scenario.flow}</code>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Applications */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-energy">Typical Applications</h4>
                <ul className="space-y-3">
                  {config.applications.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-success-500 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              {config.limitations && (
                <div>
                  <h4 className="text-xl font-bold mb-4 text-energy">Limitations</h4>
                  <ul className="space-y-3">
                    {config.limitations.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* ROI */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h4 className="text-lg font-bold mb-3">Return on Investment</h4>
              <p className="text-muted-foreground">{config.roi}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
