'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle } from 'lucide-react';
import { rfqSchema, rfqPresetSchema, type RFQFormData, type RFQPresetFormData } from '@/lib/forms/schemas';
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

interface RFQFormProps {
  presetService?: 'energy' | 'it' | 'software';
}

export function RFQForm({ presetService }: RFQFormProps = {}) {
  const isPreset = !!presetService;

  // Full form (home page)
  const fullForm = useForm<RFQFormData>({
    resolver: zodResolver(rfqSchema),
    mode: 'onTouched',
  });

  // Preset form (capabilities pages)
  const presetForm = useForm<RFQPresetFormData>({
    resolver: zodResolver(rfqPresetSchema),
    mode: 'onTouched',
    defaultValues: presetService ? { service: presetService } : undefined,
  });

  const form = isPreset ? presetForm : fullForm;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset: resetForm,
  } = form;

  const { submit, isSubmitting, isSuccess, error } = useFormSubmit('rfq');

  // Full form: track service changes and clear stale fields
  const selectedService = isPreset ? presetService : fullForm.watch('service');
  const prevServiceRef = useRef(selectedService);

  useEffect(() => {
    if (isPreset) return;
    const prev = prevServiceRef.current;
    if (prev && prev !== selectedService) {
      for (const field of serviceFields[prev]) {
        fullForm.setValue(field as keyof RFQFormData, undefined as never);
      }
    }
    prevServiceRef.current = selectedService;
  }, [selectedService, isPreset, fullForm]);

  const onSubmit = async (data: RFQFormData | RFQPresetFormData) => {
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

  // Use type assertions to bridge the two form types for shared sub-components
  // Both schemas share the same contact fields, so this is safe
  const registerAny = register as UseFormRegisterAny;
  const errorsAny = errors as FieldErrorsAny;
  const watchAny = watch as UseFormWatchAny;
  const setValueAny = setValue as UseFormSetValueAny;

  return (
    <div className="glass rounded-2xl p-6 md:p-10">
      <form onSubmit={handleSubmit(onSubmit as Parameters<typeof handleSubmit>[0])} className="space-y-8 pb-24 md:pb-0">
        <RFQContactSection register={registerAny} errors={errorsAny} />

        {!isPreset && (
          <>
            <RFQServiceSelector watch={watchAny} setValue={setValueAny} errors={errorsAny} />
            <RFQConditionalFields
              register={registerAny}
              errors={errorsAny}
              watch={watchAny}
              setValue={setValueAny}
              selectedService={selectedService}
            />
          </>
        )}

        {(isPreset || selectedService) && (
          <RFQProjectDetails
            register={registerAny}
            errors={errorsAny}
            watch={watchAny}
            {...(isPreset ? { minLength: 1, maxLength: 2000 } : {})}
          />
        )}

        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-600">
            {error}
          </div>
        )}

        <RFQSubmitButton isSubmitting={isSubmitting} hasService={isPreset || !!selectedService} />
      </form>
    </div>
  );
}

// Internal type aliases for bridging form types in shared sub-components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UseFormRegisterAny = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FieldErrorsAny = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UseFormWatchAny = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UseFormSetValueAny = any;
