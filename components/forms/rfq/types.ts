import type { UseFormRegister, FieldErrors, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import type { RFQFormData, RFQPresetFormData } from '@/lib/forms/schemas';

export interface RFQSectionProps {
  register: UseFormRegister<RFQFormData>;
  errors: FieldErrors<RFQFormData>;
  watch: UseFormWatch<RFQFormData>;
  setValue: UseFormSetValue<RFQFormData>;
}

export interface RFQPresetSectionProps {
  register: UseFormRegister<RFQPresetFormData>;
  errors: FieldErrors<RFQPresetFormData>;
  watch: UseFormWatch<RFQPresetFormData>;
  setValue: UseFormSetValue<RFQPresetFormData>;
}
