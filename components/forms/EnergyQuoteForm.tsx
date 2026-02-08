'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { energyQuoteSchema, type EnergyQuoteFormData } from '@/lib/forms/schemas';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-input-background border border-input focus:border-ring focus:outline-none transition-colors';

export function EnergyQuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<EnergyQuoteFormData>({
    resolver: zodResolver(energyQuoteSchema),
  });

  const { submit, isSubmitting, isSuccess, error } = useFormSubmit('energy-quote');

  const onSubmit = async (data: EnergyQuoteFormData) => {
    await submit(data as unknown as Record<string, unknown>);
    if (!error) resetForm();
  };

  if (isSuccess) {
    return (
      <div className="glass rounded-2xl p-8">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-success-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-energy" />
          </div>
          <h3 className="text-xl font-bold mb-2">Assessment Requested!</h3>
          <p className="text-muted-foreground">
            We&apos;ll schedule your technical assessment within 48 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-6">Request Technical Assessment</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="energy-firstName" className="block text-sm font-medium mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="energy-firstName"
              className={inputClass}
              placeholder="John"
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="energy-lastName" className="block text-sm font-medium mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="energy-lastName"
              className={inputClass}
              placeholder="Doe"
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="energy-email" className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="energy-email"
            className={inputClass}
            placeholder="john.doe@company.com"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="energy-phone" className="block text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="energy-phone"
            className={inputClass}
            placeholder="+260-XXX-XXXXXX"
            {...register('phone')}
          />
        </div>

        <div>
          <label htmlFor="energy-systemType" className="block text-sm font-medium mb-2">
            System Type of Interest *
          </label>
          <select
            id="energy-systemType"
            className={inputClass}
            {...register('systemType')}
          >
            <option value="">Select a system type</option>
            <option value="grid-tied">Grid-Tied (Net-Metering)</option>
            <option value="hybrid">Hybrid (Solar + Battery + Grid)</option>
            <option value="off-grid">Off-Grid (Complete Independence)</option>
            <option value="battery-only">Battery Backup Only</option>
            <option value="not-sure">Not Sure / Need Consultation</option>
          </select>
          {errors.systemType && (
            <p className="text-xs text-red-500 mt-1">{errors.systemType.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="energy-projectDetails" className="block text-sm font-medium mb-2">
            Project Details *
          </label>
          <textarea
            id="energy-projectDetails"
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your energy requirements, location, and any specific goals..."
            {...register('projectDetails')}
          />
          {errors.projectDetails && (
            <p className="text-xs text-red-500 mt-1">{errors.projectDetails.message}</p>
          )}
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-600">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-xl bg-energy text-white font-medium hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2 group disabled:opacity-60 disabled:pointer-events-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Schedule Assessment</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our privacy policy. We&apos;ll contact you within 24 hours.
        </p>
      </form>
    </div>
  );
}
