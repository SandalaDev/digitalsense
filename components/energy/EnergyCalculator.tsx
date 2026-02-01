'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Calculator, ArrowRight, Download } from 'lucide-react';

interface LoadItem {
  id: string;
  name: string;
  powerRating: number;
  powerUnit: 'W' | 'kW';
  quantity: number;
  hoursPerDay: number;
  isCritical: boolean;
}

export function EnergyCalculator() {
  const [loads, setLoads] = useState<LoadItem[]>([
    { id: '1', name: '', powerRating: 0, powerUnit: 'W', quantity: 1, hoursPerDay: 0, isCritical: false }
  ]);

  const addLoad = () => {
    const newLoad: LoadItem = {
      id: Date.now().toString(),
      name: '',
      powerRating: 0,
      powerUnit: 'W',
      quantity: 1,
      hoursPerDay: 0,
      isCritical: false
    };
    setLoads([...loads, newLoad]);
  };

  const removeLoad = (id: string) => {
    if (loads.length > 1) {
      setLoads(loads.filter(load => load.id !== id));
    }
  };

  const updateLoad = (id: string, field: keyof LoadItem, value: string | number | boolean) => {
    setLoads(loads.map(load =>
      load.id === id ? { ...load, [field]: value } : load
    ));
  };

  const calculateDailyKWh = (load: LoadItem): number => {
    const powerInKW = load.powerUnit === 'W' ? load.powerRating / 1000 : load.powerRating;
    return powerInKW * load.quantity * load.hoursPerDay;
  };

  const totals = loads.reduce((acc, load) => {
    const dailyKWh = calculateDailyKWh(load);
    return {
      total: acc.total + dailyKWh,
      critical: acc.critical + (load.isCritical ? dailyKWh : 0),
      nonCritical: acc.nonCritical + (!load.isCritical ? dailyKWh : 0)
    };
  }, { total: 0, critical: 0, nonCritical: 0 });

  const peakDemand = loads.reduce((max, load) => {
    const powerInKW = load.powerUnit === 'W' ? load.powerRating / 1000 : load.powerRating;
    const loadPower = powerInKW * load.quantity;
    return Math.max(max, loadPower);
  }, 0);

  return (
    <section id="calculator" className="py-32 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success-500/10 border border-success-500/20 mb-6">
            <Calculator className="w-4 h-4 text-energy" />
            <span className="text-sm font-medium text-energy">System Sizing Tools</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Energy Calculation & <span className="text-gradient-energy">System Sizing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate your true daily energy requirements—the foundation for proper system sizing
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Step 1: Load Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Step 1: Energy Consumption Calculator</h3>
                <p className="text-muted-foreground">List all equipment and appliances to calculate daily kWh consumption</p>
              </div>
              <button
                onClick={addLoad}
                className="px-4 py-2 rounded-lg bg-energy text-white hover:scale-105 transition-all flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Load</span>
              </button>
            </div>

            {/* Table Header */}
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-muted-foreground">
                  <div className="col-span-3">Equipment/Appliance</div>
                  <div className="col-span-2">Power Rating</div>
                  <div className="col-span-1">Qty</div>
                  <div className="col-span-2">Hours/Day</div>
                  <div className="col-span-2">Daily kWh</div>
                  <div className="col-span-1">Critical</div>
                  <div className="col-span-1"></div>
                </div>

                {/* Load Items */}
                <div className="space-y-3">
                  {loads.map((load) => (
                    <div key={load.id} className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-3">
                        <input
                          type="text"
                          value={load.name}
                          onChange={(e) => updateLoad(load.id, 'name', e.target.value)}
                          placeholder="e.g., LED Lights"
                          className="w-full px-3 py-2 rounded-lg bg-input-background border border-input focus:border-ring focus:outline-none text-sm"
                        />
                      </div>
                      <div className="col-span-2 flex space-x-2">
                        <input
                          type="number"
                          value={load.powerRating || ''}
                          onChange={(e) => updateLoad(load.id, 'powerRating', parseFloat(e.target.value) || 0)}
                          placeholder="100"
                          className="w-full px-3 py-2 rounded-lg bg-input-background border border-input focus:border-ring focus:outline-none text-sm"
                        />
                        <select
                          value={load.powerUnit}
                          onChange={(e) => updateLoad(load.id, 'powerUnit', e.target.value)}
                          className="px-3 py-2 rounded-lg bg-input-background border border-input focus:border-ring focus:outline-none text-sm"
                        >
                          <option value="W">W</option>
                          <option value="kW">kW</option>
                        </select>
                      </div>
                      <div className="col-span-1">
                        <input
                          type="number"
                          value={load.quantity || ''}
                          onChange={(e) => updateLoad(load.id, 'quantity', parseInt(e.target.value) || 1)}
                          placeholder="1"
                          min="1"
                          className="w-full px-3 py-2 rounded-lg bg-input-background border border-input focus:border-ring focus:outline-none text-sm"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={load.hoursPerDay || ''}
                          onChange={(e) => updateLoad(load.id, 'hoursPerDay', parseFloat(e.target.value) || 0)}
                          placeholder="8"
                          step="0.5"
                          min="0"
                          max="24"
                          className="w-full px-3 py-2 rounded-lg bg-input-background border border-input focus:border-ring focus:outline-none text-sm"
                        />
                      </div>
                      <div className="col-span-2">
                        <div className="px-3 py-2 rounded-lg bg-success-500/10 text-energy font-semibold text-sm text-center">
                          {calculateDailyKWh(load).toFixed(2)}
                        </div>
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <input
                          type="checkbox"
                          checked={load.isCritical}
                          onChange={(e) => updateLoad(load.id, 'isCritical', e.target.checked)}
                          className="w-4 h-4 accent-success-500 rounded"
                        />
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <button
                          onClick={() => removeLoad(load.id)}
                          disabled={loads.length === 1}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="glass rounded-xl p-6 border-l-4 border-energy">
                  <div className="text-sm text-muted-foreground mb-2">Total Daily Consumption</div>
                  <div className="text-3xl font-bold text-energy">{totals.total.toFixed(1)} kWh</div>
                </div>
                <div className="glass rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Critical Loads</div>
                  <div className="text-2xl font-bold">{totals.critical.toFixed(1)} kWh</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {totals.total > 0 ? ((totals.critical / totals.total) * 100).toFixed(0) : 0}%
                  </div>
                </div>
                <div className="glass rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Non-Critical Loads</div>
                  <div className="text-2xl font-bold">{totals.nonCritical.toFixed(1)} kWh</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {totals.total > 0 ? ((totals.nonCritical / totals.total) * 100).toFixed(0) : 0}%
                  </div>
                </div>
                <div className="glass rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Peak Demand (est.)</div>
                  <div className="text-2xl font-bold">{peakDemand.toFixed(1)} kW</div>
                  <div className="text-xs text-muted-foreground mt-1">Auto-estimated</div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg glass border border-neutral-200 hover:bg-white/50 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download Load Analysis PDF</span>
                </button>
                <a
                  href="#sizing-calculator"
                  className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-energy text-white hover:scale-105 transition-all"
                >
                  <span>Use in System Sizing Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm text-muted-foreground mt-6 italic">
                <strong>Accuracy tips:</strong> Include all loads (lighting, HVAC, refrigeration, office equipment, pumps, etc.), account for seasonal variation, consider future load growth, and differentiate critical vs. non-critical loads for backup sizing.
              </p>
            </div>
          </motion.div>

          {/* Step 2: System Sizing */}
          <motion.div
            id="sizing-calculator"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Step 2: System Sizing & Financial Modeling</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-2">Daily Energy Consumption</label>
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    value={totals.total.toFixed(1)}
                    readOnly
                    className="flex-1 px-4 py-3 rounded-lg bg-success-500/10 border border-success-500/20 font-semibold text-energy"
                  />
                  <span className="text-sm text-muted-foreground">kWh/day</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Auto-filled from Step 1</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">System Configuration</label>
                <select className="w-full px-4 py-3 rounded-lg bg-input-background border border-input focus:border-ring focus:outline-none">
                  <option>Grid-tied (no battery, net-metering)</option>
                  <option>Hybrid (solar + battery + grid)</option>
                  <option>Off-grid (solar + battery + generator)</option>
                  <option>Battery backup only (no solar)</option>
                </select>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-success-500/10 to-success-500/5 border border-success-500/20">
              <h4 className="font-semibold mb-4 text-lg">Recommended System Configuration</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Solar Array</div>
                  <div className="text-2xl font-bold text-energy">
                    {totals.total > 0 ? (totals.total * 1.3 / 5.5).toFixed(1) : '0.0'} kW
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">DC capacity required</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Battery Storage</div>
                  <div className="text-2xl font-bold text-energy">
                    {totals.critical > 0 ? (totals.critical * 1.2).toFixed(1) : '0.0'} kWh
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Usable capacity</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Estimated Cost</div>
                  <div className="text-2xl font-bold text-energy">
                    USD {totals.total > 0 ? ((totals.total * 1.3 / 5.5) * 3500).toLocaleString('en-US', {maximumFractionDigits: 0}) : '0'}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Hybrid system estimate</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-success-500/20">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Assumptions:</strong> Average peak sun hours: 5.5 hrs/day, System efficiency: 0.85, Hybrid configuration with 12hr backup for critical loads
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-energy font-medium hover:gap-3 transition-all"
                >
                  <span>Request Detailed System Specification & Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
