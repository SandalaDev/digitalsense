'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Loader2 } from 'lucide-react';
import { generalEnquirySchema, type GeneralEnquiryFormData } from '@/lib/forms/schemas';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function GeneralEnquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<GeneralEnquiryFormData>({
    resolver: zodResolver(generalEnquirySchema),
  });

  const { submit, isSubmitting, isSuccess, error } = useFormSubmit('general-enquiry');

  const onSubmit = async (data: GeneralEnquiryFormData) => {
    await submit(data as unknown as Record<string, unknown>);
    if (!error) resetForm();
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You</h3>
        <p className="text-muted-foreground">
          We&apos;ll review your enquiry and respond with next steps.
          <br />
          No generic sales responses.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="ge-fullName" className="block text-sm font-medium mb-2">
          Full Name *
        </label>
        <Input
          type="text"
          id="ge-fullName"
          placeholder="Jane Mwale"
          {...register('fullName')}
        />
        {errors.fullName && (
          <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="ge-company" className="block text-sm font-medium mb-2">
          Company / Organization
        </label>
        <Input
          type="text"
          id="ge-company"
          placeholder="Acme Corp"
          {...register('company')}
        />
      </div>

      <div>
        <label htmlFor="ge-email" className="block text-sm font-medium mb-2">
          Email Address *
        </label>
        <Input
          type="email"
          id="ge-email"
          placeholder="jane@company.com"
          {...register('email')}
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="ge-phone" className="block text-sm font-medium mb-2">
          Phone Number
        </label>
        <Input
          type="tel"
          id="ge-phone"
          placeholder="+260 97 XXX XXXX"
          {...register('phone')}
        />
      </div>

      <div>
        <label htmlFor="ge-enquiryType" className="block text-sm font-medium mb-2">
          Enquiry Type *
        </label>
        <select
          id="ge-enquiryType"
          className="w-full px-4 py-3 rounded-lg bg-input-background border border-input focus:border-ring focus:outline-none transition-colors"
          {...register('enquiryType')}
        >
          <option value="">Select a type</option>
          <option value="energy">Energy & Electrical Systems</option>
          <option value="it">IT & Infrastructure Systems</option>
          <option value="software">Software Systems</option>
          <option value="general">General Enquiry</option>
        </select>
        {errors.enquiryType && (
          <p className="text-xs text-red-500 mt-1">{errors.enquiryType.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="ge-message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <Textarea
          id="ge-message"
          rows={4}
          placeholder="Tell us about your project, challenge, or question..."
          {...register('message')}
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
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
        className="w-full py-4 px-6 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2 group disabled:opacity-60 disabled:pointer-events-none"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <span>Request a consultation</span>
        )}
      </button>
    </form>
  );
}
