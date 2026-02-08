'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, CheckCircle, Loader2 } from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/forms/schemas';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const { submit, isSubmitting, isSuccess, error } = useFormSubmit('contact');

  const onSubmit = async (data: ContactFormData) => {
    await submit(data as unknown as Record<string, unknown>);
    if (!error) resetForm();
  };

  if (isSuccess) {
    return (
      <div className="glass rounded-2xl p-8 md:p-10">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground">
            We&apos;ve received your request and will get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-8 md:p-10">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
          <Calendar className="w-5 h-5 text-green-500" />
        </div>
        <h3 className="text-xl font-bold">Schedule a Call</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-firstName" className="block text-sm font-medium mb-2">
              First Name *
            </label>
            <Input
              type="text"
              id="contact-firstName"
              placeholder="John"
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="contact-lastName" className="block text-sm font-medium mb-2">
              Last Name *
            </label>
            <Input
              type="text"
              id="contact-lastName"
              placeholder="Doe"
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <Input
            type="email"
            id="contact-email"
            placeholder="john@company.com"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium mb-2">
            Phone Number *
          </label>
          <Input
            type="tel"
            id="contact-phone"
            placeholder="+260 97 XXX XXXX"
            {...register('phone')}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-interest" className="block text-sm font-medium mb-2">
            What can we help with? *
          </label>
          <select
            id="contact-interest"
            className="w-full px-4 py-3 rounded-lg bg-input-background border border-input focus:border-ring focus:outline-none transition-colors"
            {...register('interest')}
          >
            <option value="">Select an area</option>
            <option value="energy">Energy &amp; Electrical Systems</option>
            <option value="it">IT &amp; Infrastructure</option>
            <option value="software">Software &amp; Intelligent Systems</option>
            <option value="integrated">Integrated Solution (multiple areas)</option>
            <option value="other">Something else</option>
          </select>
          {errors.interest && (
            <p className="text-xs text-red-500 mt-1">{errors.interest.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
            Tell us more
          </label>
          <Textarea
            id="contact-message"
            rows={3}
            placeholder="Briefly describe your project or challenge..."
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
          className="w-full py-4 px-6 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2 group disabled:opacity-60 disabled:pointer-events-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Schedule a Call</span>
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          No commitment required. We&apos;ll reach out within 24 hours.
        </p>
      </form>
    </div>
  );
}
