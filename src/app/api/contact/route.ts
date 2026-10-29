import { createFUBContactLead } from '@/utils/followUpBoss';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, interest, preferredTime } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const lead = await createFUBContactLead({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || undefined,
      message: message?.trim() || undefined,
      interest: interest?.trim() || undefined,
      preferredTime: preferredTime?.trim() || undefined
    });

    if (!lead) {
      return NextResponse.json(
        { error: 'Unable to submit your request. Please try again or call (702) 500-1955.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Dr. Jan Duffy will reach out soon to schedule your consultation.'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call (702) 500-1955.' },
      { status: 500 }
    );
  }
}
