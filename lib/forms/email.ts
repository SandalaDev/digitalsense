import { Resend } from 'resend';
import type { FormType } from './schemas';

let _resend: Resend | null = null;
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}
const recipient = process.env.FORM_RECIPIENT_EMAIL || 'info@digitalsense.tech';

const formLabels: Record<FormType, string> = {
  'contact': 'Schedule a Call',
  'energy-quote': 'Energy Quote Request',
  'software-quote': 'Software Quote Request',
  'it-assessment': 'IT Assessment Request',
  'rfq': 'RFQ — Request for Quote',
  'general-enquiry': 'General Enquiry',
};

function formatFieldName(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

function buildEmailBody(formType: FormType, data: Record<string, unknown>): { text: string; html: string } {
  const label = formLabels[formType];
  const lines: string[] = [];

  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined && value !== null && value !== '') {
      lines.push(`${formatFieldName(key)}: ${Array.isArray(value) ? value.join(', ') : String(value)}`);
    }
  }

  const text = `New ${label} Submission\n${'='.repeat(40)}\n\n${lines.join('\n')}\n`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0a0a0a; padding: 24px 32px; border-radius: 12px 12px 0 0;">
        <h1 style="color: #22c55e; margin: 0; font-size: 20px;">Digital Sense Zambia</h1>
        <p style="color: #999; margin: 4px 0 0; font-size: 14px;">New ${label} Submission</p>
      </div>
      <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          ${lines
            .map(
              (line) => {
                const [field, ...rest] = line.split(': ');
                const val = rest.join(': ');
                return `<tr>
                  <td style="padding: 8px 12px 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #333; vertical-align: top; white-space: nowrap;">${field}</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #555;">${val}</td>
                </tr>`;
              }
            )
            .join('')}
        </table>
      </div>
    </div>
  `;

  return { text, html };
}

export async function sendFormEmail(
  formType: FormType,
  data: Record<string, unknown>
): Promise<{ success: boolean; error?: string }> {
  const label = formLabels[formType];
  const { text, html } = buildEmailBody(formType, data);
  const senderName = (data.firstName as string) || 'Website';
  const senderEmail = (data.email as string) || 'noreply@digitalsense.tech';

  try {
    await getResend().emails.send({
      from: `Digital Sense Forms <onboarding@resend.dev>`,
      to: recipient,
      replyTo: senderEmail,
      subject: `[${label}] ${senderName} ${(data.lastName as string) || ''}`.trim(),
      text,
      html,
    });

    return { success: true };
  } catch (err) {
    console.error(`[forms/email] Failed to send ${formType} email:`, err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to send email',
    };
  }
}
