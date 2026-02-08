'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle } from 'lucide-react';
import { rfqSchema, type RFQFormData } from '@/lib/forms/schemas';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { RFQContactSection } from './RFQContactSection';
import { RFQServiceSelector } from './RFQServiceSelector';
import { RFQConditionalFields } from './RFQConditionalFields';
import { RFQProjectDetails } from './RFQProjectDetails';
import { RFQSubmitButton } from './RFQSubmitButton';

// Fields to clear when switching away from each service
const serviceFields = {
  energy: ['systemType', 'propertyType', 'monthlyBill', 'canProvideUtilityBills', 'preferredTimeline'] as const,
  it: ['itServices', 'endpoints', 'currentSetup', 'urgencyLevel'] as const,
  software: ['projectType', 'startingPoint', 'keyFeatures', 'projectTimeline'] as const,
};

export function RFQForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset: resetForm,
  } = useForm<RFQFormData>({
    resolver: zodResolver(rfqSchema),
    mode: 'onTouched',
  });

  const { submit, isSubmitting, isSuccess, error } = useFormSubmit('rfq');

  const selectedService = watch('service');
  const prevServiceRef = useRef(selectedService);

  // Clear stale fields when service changes
  useEffect(() => {
    const prev = prevServiceRef.current;
    if (prev && prev !== selectedService) {
      for (const field of serviceFields[prev]) {
        setValue(field as keyof RFQFormData, undefined as never);
      }
    }
    prevServiceRef.current = selectedService;
  }, [selectedService, setValue]);

  const onSubmit = async (data: RFQFormData) => {
    // Strip undefined values before sending
    const cleaned = Object.fromEntries(
      Object.entries(data).filter(([, v]) => v !== undefined && v !== '')
    );
    await submit(cleaned);
    if (!error) resetForm();
  };

  if (isSuccess) {
    return (
      <div className="glass rounded-2xl p-8 md:p-10">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Quote Request Received!</h3>
          <p className="text-muted-foreground">
            We&apos;ll review your requirements and send a detailed proposal within 48 business hours.
          </p>
        </div>
      </div>
    );
  }

  const sectionProps = { register, errors, watch, setValue };

  return (
    <div className="glass rounded-2xl p-6 md:p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 pb-24 md:pb-0">
        <RFQContactSection register={register} errors={errors} />

        <RFQServiceSelector watch={watch} setValue={setValue} errors={errors} />

        <RFQConditionalFields {...sectionProps} selectedService={selectedService} />

        {selectedService && <RFQProjectDetails register={register} errors={errors} watch={watch} />}

        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-600">
            {error}
          </div>
        )}

        <RFQSubmitButton isSubmitting={isSubmitting} hasService={!!selectedService} />
      </form>
    </div>
  );
}
