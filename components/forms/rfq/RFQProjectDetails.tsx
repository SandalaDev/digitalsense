'use client';

import { Textarea } from '@/components/ui/textarea';
import type { RFQSectionProps } from './types';

export function RFQProjectDetails({ register, errors, watch }: Pick<RFQSectionProps, 'register' | 'errors' | 'watch'>) {
  const description = watch('description') || '';
  const charCount = description.length;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Project Details
      </h3>

      <div>
        <label htmlFor="rfq-description" className="block text-sm font-medium mb-1.5">
          Project Description <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="rfq-description"
          rows={4}
          placeholder="Describe your project, goals, and any specific requirements (min. 50 characters)..."
          {...register('description')}
        />
        <div className="flex items-center justify-between mt-1">
          {errors.description ? (
            <p className="text-xs text-red-500">{errors.description.message}</p>
          ) : (
            <span />
          )}
          <span className={`text-xs ${charCount >= 50 ? 'text-green-500' : 'text-muted-foreground'}`}>
            {charCount}/50
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="rfq-budgetRange" className="block text-sm font-medium mb-1.5">
          Budget Range
        </label>
        <select
          id="rfq-budgetRange"
          className="w-full px-3 py-2 rounded-md border border-input bg-input-background text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
          {...register('budgetRange')}
        >
          <option value="">Select...</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-15k">$5,000 - $15,000</option>
          <option value="15k-50k">$15,000 - $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="100k-plus">$100,000+</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="rfq-referralSource" className="block text-sm font-medium mb-1.5">
          How did you hear about us?
        </label>
        <select
          id="rfq-referralSource"
          className="w-full px-3 py-2 rounded-md border border-input bg-input-background text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
          {...register('referralSource')}
        >
          <option value="">Select...</option>
          <option value="google">Google Search</option>
          <option value="social">Social Media</option>
          <option value="referral">Referral</option>
          <option value="client">Existing Client</option>
          <option value="event">Event / Conference</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
}
