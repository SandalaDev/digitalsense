import type { UseFormRegister, FieldErrors, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import type { RFQFormData } from '@/lib/forms/schemas';

export interface RFQSectionProps {
  register: UseFormRegister<RFQFormData>;
  errors: FieldErrors<RFQFormData>;
  watch: UseFormWatch<RFQFormData>;
  setValue: UseFormSetValue<RFQFormData>;
}
