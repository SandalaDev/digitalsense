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

// RFQ form: flat schema with superRefine for conditional required fields
export const rfqSchema = z.object({
  // Contact info (always required)
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  company: z.string().optional(),

  // Service selection (always required)
  service: z.enum(['energy', 'it', 'software'], {
    message: 'Please select a service',
  }),

  // Energy-specific fields
  systemType: z.string().optional(),
  propertyType: z.string().optional(),
  monthlyBill: z.string().optional(),
  canProvideUtilityBills: z.boolean().optional(),
  preferredTimeline: z.string().optional(),

  // IT-specific fields
  itServices: z.array(z.string()).optional(),
  endpoints: z.string().optional(),
  currentSetup: z.string().optional(),
  urgencyLevel: z.string().optional(),

  // Software-specific fields
  projectType: z.string().optional(),
  startingPoint: z.string().optional(),
  keyFeatures: z.array(z.string()).optional(),
  projectTimeline: z.string().optional(),

  // Universal project details
  description: z.string().min(50, 'Please provide at least 50 characters'),
  budgetRange: z.string().optional(),
  referralSource: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.service === 'energy') {
    if (!data.systemType) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Please select a system type', path: ['systemType'] });
    }
    if (!data.propertyType) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Please select a property type', path: ['propertyType'] });
    }
    if (!data.preferredTimeline) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Please select a timeline', path: ['preferredTimeline'] });
    }
  }

  if (data.service === 'it') {
    if (!data.itServices || data.itServices.length === 0) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Please select at least one service', path: ['itServices'] });
    }
    if (!data.endpoints) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Please select endpoint count', path: ['endpoints'] });
    }
    if (!data.currentSetup) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Please select current setup', path: ['currentSetup'] });
    }
    if (!data.urgencyLevel) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Please select urgency level', path: ['urgencyLevel'] });
    }
  }

  if (data.service === 'software') {
    if (!data.projectType) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Please select a project type', path: ['projectType'] });
    }
    if (!data.startingPoint) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Please select a starting point', path: ['startingPoint'] });
    }
    if (!data.projectTimeline) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Please select a timeline', path: ['projectTimeline'] });
    }
  }
});

export type RFQFormData = z.infer<typeof rfqSchema>;

export const generalEnquirySchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  enquiryType: z.string().min(1, 'Please select an enquiry type'),
  message: z.string().min(1, 'Please describe how we can help'),
});

export type GeneralEnquiryFormData = z.infer<typeof generalEnquirySchema>;

export const formTypes = ['contact', 'energy-quote', 'software-quote', 'it-assessment', 'rfq', 'general-enquiry'] as const;
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
    case 'rfq':
      return rfqSchema;
    case 'general-enquiry':
      return generalEnquirySchema;
  }
}
