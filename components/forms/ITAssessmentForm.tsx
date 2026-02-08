'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Loader2 } from 'lucide-react';
import { itAssessmentSchema, type ITAssessmentFormData } from '@/lib/forms/schemas';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-input-background border border-input focus:border-ring focus:outline-none transition-colors';

export function ITAssessmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<ITAssessmentFormData>({
    resolver: zodResolver(itAssessmentSchema),
  });

  const { submit, isSubmitting, isSuccess, error } = useFormSubmit('it-assessment');

  const onSubmit = async (data: ITAssessmentFormData) => {
    await submit(data as unknown as Record<string, unknown>);
    if (!error) resetForm();
  };

  if (isSuccess) {
    return (
      <div className="glass rounded-2xl p-8 border border-neutral-200">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Assessment Scheduled!</h3>
          <p className="text-muted-foreground">
            We&apos;ll respond within 24 hours to schedule your free IT assessment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-8 border border-neutral-200">
      <h3 className="text-2xl font-bold mb-6">Schedule Your Free IT Assessment</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="it-firstName" className="block text-sm font-medium mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="it-firstName"
              className={inputClass}
              placeholder="John"
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="it-lastName" className="block text-sm font-medium mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="it-lastName"
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
          <label htmlFor="it-email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="it-email"
            className={inputClass}
            placeholder="john@company.com"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="it-phone" className="block text-sm font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="it-phone"
            className={inputClass}
            placeholder="+260-XXX-XXXXXX"
            {...register('phone')}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="it-company" className="block text-sm font-medium mb-2">
            Company
          </label>
          <input
            type="text"
            id="it-company"
            className={inputClass}
            placeholder="Your Company"
            {...register('company')}
          />
        </div>

        <div>
          <label htmlFor="it-users" className="block text-sm font-medium mb-2">
            Number of Users
          </label>
          <select
            id="it-users"
            className={inputClass}
            {...register('users')}
          >
            <option value="">Select range</option>
            <option value="1-10">1-10 users</option>
            <option value="11-25">11-25 users</option>
            <option value="26-50">26-50 users</option>
            <option value="51-100">51-100 users</option>
            <option value="100+">100+ users</option>
          </select>
        </div>

        <div>
          <label htmlFor="it-message" className="block text-sm font-medium mb-2">
            Tell Us About Your IT Needs
          </label>
          <textarea
            id="it-message"
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Describe your current challenges or what you're looking to improve..."
            {...register('message')}
          />
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-600">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition-all shadow-lg hover:shadow-2xl disabled:opacity-60 disabled:pointer-events-none inline-flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <span>Schedule Assessment</span>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          We&apos;ll respond within 24 hours to schedule your free IT assessment
        </p>
      </form>
    </div>
  );
}
