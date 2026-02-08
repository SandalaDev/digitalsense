'use client';

import { Input } from '@/components/ui/input';
import type { RFQSectionProps } from './types';

export function RFQContactSection({ register, errors }: Pick<RFQSectionProps, 'register' | 'errors'>) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Contact Information
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="rfq-firstName" className="block text-sm font-medium mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            id="rfq-firstName"
            placeholder="John"
            {...register('firstName')}
          />
          {errors.firstName && (
            <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="rfq-lastName" className="block text-sm font-medium mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            id="rfq-lastName"
            placeholder="Doe"
            {...register('lastName')}
          />
          {errors.lastName && (
            <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="rfq-email" className="block text-sm font-medium mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <Input
          type="email"
          id="rfq-email"
          placeholder="john@company.com"
          {...register('email')}
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="rfq-phone" className="block text-sm font-medium mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <Input
          type="tel"
          id="rfq-phone"
          placeholder="+260 97 XXX XXXX"
          {...register('phone')}
        />
        {errors.phone && (
          <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="rfq-company" className="block text-sm font-medium mb-1.5">
          Company / Organization
        </label>
        <Input
          type="text"
          id="rfq-company"
          placeholder="Optional"
          {...register('company')}
        />
      </div>
    </div>
  );
}
