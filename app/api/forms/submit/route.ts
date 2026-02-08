import { NextResponse } from 'next/server';
import { submissionSchema } from '@/lib/forms/schemas';
import { handleFormSubmission } from '@/lib/forms/handlers';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = submissionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { formType, data } = parsed.data;
    const result = await handleFormSubmission(formType, data);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 422 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
