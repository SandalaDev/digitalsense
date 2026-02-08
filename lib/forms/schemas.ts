import { z } from 'zod';

const baseFields = {
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone number is required'),
};

export const contactSchema = z.object({
  ...baseFields,
  interest: z.string().min(1, 'Please select an area of interest'),
  message: z.string().optional(),
});

export const energyQuoteSchema = z.object({
  ...baseFields,
  phone: z.string().optional(),
  systemType: z.string().min(1, 'Please select a system type'),
  projectDetails: z.string().min(1, 'Please describe your project'),
});

export const softwareQuoteSchema = z.object({
  ...baseFields,
  company: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().optional(),
});

export const itAssessmentSchema = z.object({
  ...baseFields,
  company: z.string().optional(),
  users: z.string().optional(),
  message: z.string().optional(),
});

export const formTypes = ['contact', 'energy-quote', 'software-quote', 'it-assessment'] as const;
export type FormType = typeof formTypes[number];

export const submissionSchema = z.object({
  formType: z.enum(formTypes),
  data: z.record(z.string(), z.unknown()),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type EnergyQuoteFormData = z.infer<typeof energyQuoteSchema>;
export type SoftwareQuoteFormData = z.infer<typeof softwareQuoteSchema>;
export type ITAssessmentFormData = z.infer<typeof itAssessmentSchema>;

export function getSchemaForFormType(formType: FormType) {
  switch (formType) {
    case 'contact':
      return contactSchema;
    case 'energy-quote':
      return energyQuoteSchema;
    case 'software-quote':
      return softwareQuoteSchema;
    case 'it-assessment':
      return itAssessmentSchema;
  }
}
