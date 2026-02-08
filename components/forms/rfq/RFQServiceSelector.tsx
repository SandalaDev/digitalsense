'use client';

import { Zap, Network, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { RFQSectionProps } from './types';

const services = [
  {
    value: 'energy' as const,
    icon: Zap,
    title: 'Energy & Power',
    description: 'Solar PV, battery storage, electrical systems',
  },
  {
    value: 'it' as const,
    icon: Network,
    title: 'IT & Infrastructure',
    description: 'Managed IT, cybersecurity, cloud & network',
  },
  {
    value: 'software' as const,
    icon: Code,
    title: 'Software Development',
    description: 'Web apps, mobile, custom software & APIs',
  },
];

export function RFQServiceSelector({ watch, setValue, errors }: Pick<RFQSectionProps, 'watch' | 'setValue' | 'errors'>) {
  const selected = watch('service');

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Which service are you interested in? <span className="text-red-500">*</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {services.map((svc) => {
          const Icon = svc.icon;
          const isSelected = selected === svc.value;

          return (
            <button
              key={svc.value}
              type="button"
              onClick={() => setValue('service', svc.value, { shouldValidate: true })}
              className={cn(
                'relative flex flex-col items-center text-center p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer',
                isSelected
                  ? 'border-green-500 bg-green-500/5'
                  : 'border-input bg-input-background hover:border-muted-foreground/30'
              )}
            >
              <input
                type="radio"
                name="service"
                value={svc.value}
                checked={isSelected}
                onChange={() => setValue('service', svc.value, { shouldValidate: true })}
                className="sr-only"
                aria-label={svc.title}
              />
              <div className={cn(
                'w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors',
                isSelected ? 'bg-green-500/15' : 'bg-muted/50'
              )}>
                <Icon className={cn(
                  'w-5 h-5 transition-colors',
                  isSelected ? 'text-green-500' : 'text-muted-foreground'
                )} />
              </div>
              <span className={cn(
                'text-sm font-semibold transition-colors',
                isSelected ? 'text-green-600 dark:text-green-400' : 'text-foreground'
              )}>
                {svc.title}
              </span>
              <span className="text-xs text-muted-foreground mt-1 leading-snug">
                {svc.description}
              </span>
            </button>
          );
        })}
      </div>

      {errors.service && (
        <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>
      )}
    </div>
  );
}
