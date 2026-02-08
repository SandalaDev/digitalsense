import { type FormType, getSchemaForFormType } from './schemas';
import { sendFormEmail } from './email';

export async function handleFormSubmission(
  formType: FormType,
  rawData: unknown
): Promise<{ success: boolean; error?: string }> {
  const schema = getSchemaForFormType(formType);

  const result = schema.safeParse(rawData);
  if (!result.success) {
    const firstError = result.error.issues[0];
    return {
      success: false,
      error: firstError?.message || 'Validation failed',
    };
  }

  const emailResult = await sendFormEmail(formType, result.data as Record<string, unknown>);
  if (!emailResult.success) {
    return { success: false, error: emailResult.error };
  }

  // Extensible: add saveToDB(), callWebhook(), etc. here

  return { success: true };
}
