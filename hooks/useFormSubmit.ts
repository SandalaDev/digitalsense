'use client';

import { useState, useCallback } from 'react';
import type { FormType } from '@/lib/forms/schemas';

interface UseFormSubmitReturn {
  submit: (data: Record<string, unknown>) => Promise<void>;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  reset: () => void;
}

export function useFormSubmit(formType: FormType): UseFormSubmitReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
  }, []);

  const submit = useCallback(
    async (data: Record<string, unknown>) => {
      setIsSubmitting(true);
      setError(null);
      setIsSuccess(false);

      try {
        const res = await fetch('/api/forms/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ formType, data }),
        });

        const result = await res.json();

        if (!res.ok || !result.success) {
          setError(result.error || 'Something went wrong. Please try again.');
          return;
        }

        setIsSuccess(true);
      } catch {
        setError('Network error. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formType]
  );

  return { submit, isSubmitting, isSuccess, error, reset };
}
