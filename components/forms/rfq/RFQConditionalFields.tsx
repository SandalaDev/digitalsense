'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { RFQSectionProps } from './types';

// ─── Shared select component ───
function FormSelect({
  id,
  label,
  required,
  options,
  error,
  ...rest
}: {
  id: string;
  label: string;
  required?: boolean;
  options: { value: string; label: string }[];
  error?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        className="w-full px-3 py-2 rounded-md border border-input bg-input-background text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
        {...rest}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

// ─── Multi-select checkbox group ───
function CheckboxGroup({
  label,
  required,
  options,
  selected,
  onToggle,
  error,
}: {
  label: string;
  required?: boolean;
  options: { value: string; label: string }[];
  selected: string[];
  onToggle: (value: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt) => {
          const isChecked = selected.includes(opt.value);
          return (
            <label
              key={opt.value}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg border text-sm cursor-pointer transition-all',
                isChecked
                  ? 'border-green-500 bg-green-500/5 text-foreground'
                  : 'border-input bg-input-background text-muted-foreground hover:border-muted-foreground/30'
              )}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => onToggle(opt.value)}
                className="sr-only"
              />
              <div className={cn(
                'w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors',
                isChecked ? 'bg-green-500 border-green-500' : 'border-muted-foreground/40'
              )}>
                {isChecked && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="leading-tight">{opt.label}</span>
            </label>
          );
        })}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

// ─── Energy Fields ───
function EnergyFields({ register, errors }: Pick<RFQSectionProps, 'register' | 'errors'>) {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
        Energy & Power Details
      </h4>

      <FormSelect
        id="rfq-systemType"
        label="What type of system do you need?"
        required
        options={[
          { value: 'grid-tied', label: 'Grid-Tied' },
          { value: 'hybrid', label: 'Hybrid' },
          { value: 'off-grid', label: 'Off-Grid' },
          { value: 'battery-only', label: 'Battery Storage Only' },
          { value: 'not-sure', label: 'Not Sure' },
        ]}
        error={errors.systemType?.message}
        {...register('systemType')}
      />

      <FormSelect
        id="rfq-propertyType"
        label="Property Type"
        required
        options={[
          { value: 'residential', label: 'Residential' },
          { value: 'commercial', label: 'Commercial' },
          { value: 'industrial', label: 'Industrial' },
          { value: 'agricultural', label: 'Agricultural' },
        ]}
        error={errors.propertyType?.message}
        {...register('propertyType')}
      />

      <FormSelect
        id="rfq-monthlyBill"
        label="Average Monthly Electricity Bill (USD)"
        options={[
          { value: 'under-100', label: 'Under $100' },
          { value: '100-300', label: '$100 - $300' },
          { value: '300-500', label: '$300 - $500' },
          { value: '500-1000', label: '$500 - $1,000' },
          { value: '1000-plus', label: '$1,000+' },
          { value: 'not-sure', label: 'Not sure' },
        ]}
        {...register('monthlyBill')}
      />

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="rfq-utilityBills"
          className="w-4 h-4 rounded border-input accent-green-500"
          {...register('canProvideUtilityBills')}
        />
        <label htmlFor="rfq-utilityBills" className="text-sm">
          I can provide recent utility bills
        </label>
      </div>

      <FormSelect
        id="rfq-preferredTimeline"
        label="Preferred Timeline"
        required
        options={[
          { value: 'asap', label: 'ASAP / Urgent' },
          { value: '1-3-months', label: '1 - 3 months' },
          { value: '3-6-months', label: '3 - 6 months' },
          { value: '6-12-months', label: '6 - 12 months' },
          { value: 'exploring', label: 'Just exploring' },
        ]}
        error={errors.preferredTimeline?.message}
        {...register('preferredTimeline')}
      />
    </div>
  );
}

// ─── IT Fields ───
function ITFields({ register, errors, watch, setValue }: RFQSectionProps) {
  const current = watch('itServices') || [];

  const toggle = (val: string) => {
    const next = current.includes(val)
      ? current.filter((v) => v !== val)
      : [...current, val];
    setValue('itServices', next, { shouldValidate: true });
  };

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
        IT & Infrastructure Details
      </h4>

      <CheckboxGroup
        label="Which IT services do you need?"
        required
        options={[
          { value: 'managed-it', label: 'Managed IT' },
          { value: 'cybersecurity', label: 'Cybersecurity' },
          { value: 'cloud', label: 'Cloud Infrastructure' },
          { value: 'network', label: 'Network Management' },
          { value: 'backup', label: 'Backup & Recovery' },
          { value: 'server', label: 'Server Infrastructure' },
          { value: 'hardware', label: 'Hardware Procurement' },
          { value: 'voip', label: 'VoIP / Communications' },
        ]}
        selected={current}
        onToggle={toggle}
        error={errors.itServices?.message}
      />

      <FormSelect
        id="rfq-endpoints"
        label="Number of Employees / Endpoints"
        required
        options={[
          { value: '1-10', label: '1 - 10' },
          { value: '11-25', label: '11 - 25' },
          { value: '26-50', label: '26 - 50' },
          { value: '51-100', label: '51 - 100' },
          { value: '100-plus', label: '100+' },
        ]}
        error={errors.endpoints?.message}
        {...register('endpoints')}
      />

      <FormSelect
        id="rfq-currentSetup"
        label="Current IT Setup"
        required
        options={[
          { value: 'none', label: 'No formal setup' },
          { value: 'basic', label: 'Basic / Ad-hoc' },
          { value: 'in-house', label: 'In-house IT team' },
          { value: 'outsourced', label: 'Outsourced provider' },
        ]}
        error={errors.currentSetup?.message}
        {...register('currentSetup')}
      />

      <FormSelect
        id="rfq-urgencyLevel"
        label="Urgency Level"
        required
        options={[
          { value: 'critical', label: 'Critical — Immediate need' },
          { value: 'high', label: 'High — Within weeks' },
          { value: 'medium', label: 'Medium — Within months' },
          { value: 'low', label: 'Low — Planning ahead' },
        ]}
        error={errors.urgencyLevel?.message}
        {...register('urgencyLevel')}
      />
    </div>
  );
}

// ─── Software Fields ───
function SoftwareFields({ register, errors, watch, setValue }: RFQSectionProps) {
  const current = watch('keyFeatures') || [];

  const toggle = (val: string) => {
    const next = current.includes(val)
      ? current.filter((v) => v !== val)
      : [...current, val];
    setValue('keyFeatures', next, { shouldValidate: true });
  };

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
        Software Development Details
      </h4>

      <FormSelect
        id="rfq-projectType"
        label="What type of project?"
        required
        options={[
          { value: 'web-app', label: 'Web Application' },
          { value: 'mobile-app', label: 'Mobile App' },
          { value: 'api', label: 'API / Backend Service' },
          { value: 'iot', label: 'IoT / Embedded' },
          { value: 'ai-ml', label: 'AI / Machine Learning' },
          { value: 'integration', label: 'System Integration' },
          { value: 'other', label: 'Other' },
        ]}
        error={errors.projectType?.message}
        {...register('projectType')}
      />

      <FormSelect
        id="rfq-startingPoint"
        label="Starting Point"
        required
        options={[
          { value: 'scratch', label: 'Building from scratch' },
          { value: 'upgrade', label: 'Upgrading existing system' },
          { value: 'migration', label: 'Migrating platforms' },
          { value: 'consultation', label: 'Need consultation first' },
        ]}
        error={errors.startingPoint?.message}
        {...register('startingPoint')}
      />

      <CheckboxGroup
        label="Key Features / Requirements"
        options={[
          { value: 'auth', label: 'User Authentication' },
          { value: 'payments', label: 'Payment Processing' },
          { value: 'realtime', label: 'Real-time Features' },
          { value: 'apis', label: 'API Integrations' },
          { value: 'analytics', label: 'Analytics / Reporting' },
          { value: 'mobile', label: 'Mobile App' },
          { value: 'ai', label: 'AI / ML Features' },
          { value: 'multilang', label: 'Multi-language' },
        ]}
        selected={current}
        onToggle={toggle}
        error={errors.keyFeatures?.message}
      />

      <FormSelect
        id="rfq-projectTimeline"
        label="Project Timeline"
        required
        options={[
          { value: 'under-1-month', label: 'Under 1 month' },
          { value: '1-3-months', label: '1 - 3 months' },
          { value: '3-6-months', label: '3 - 6 months' },
          { value: '6-12-months', label: '6 - 12 months' },
          { value: 'ongoing', label: 'Ongoing / Retainer' },
        ]}
        error={errors.projectTimeline?.message}
        {...register('projectTimeline')}
      />
    </div>
  );
}

// ─── Conditional Fields Wrapper ───
export function RFQConditionalFields(props: RFQSectionProps & { selectedService: string | undefined }) {
  const { selectedService, ...sectionProps } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const prevServiceRef = useRef(selectedService);

  useEffect(() => {
    if (selectedService && selectedService !== prevServiceRef.current) {
      // Scroll to the conditional fields when service changes
      setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 350);
    }
    prevServiceRef.current = selectedService;
  }, [selectedService]);

  return (
    <div ref={containerRef}>
      <AnimatePresence mode="wait">
        {selectedService && (
          <motion.div
            key={selectedService}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pt-2">
              {selectedService === 'energy' && <EnergyFields {...sectionProps} />}
              {selectedService === 'it' && <ITFields {...sectionProps} />}
              {selectedService === 'software' && <SoftwareFields {...sectionProps} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
