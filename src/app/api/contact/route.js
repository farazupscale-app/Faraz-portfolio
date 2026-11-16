import { NextResponse } from 'next/server';

const DEFAULT_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycby_VZRkYhMNVguv8wqQ5qGxxwAqbXLwhoRomqeZXoEnoMi67JsW_P2YW3xb9efSmjuJ/exec';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }
    if (!subject || !subject.trim()) {
      return NextResponse.json({ error: 'Subject is required.' }, { status: 400 });
    }
    if (!message || !message.trim() || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters.' },
        { status: 400 }
      );
    }

    const scriptUrl =
      process.env.GOOGLE_SHEETS_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL ||
      DEFAULT_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        {
          error:
            'Google Sheets Webhook URL is not configured. Please set GOOGLE_SHEETS_SCRIPT_URL in your .env.local file or Vercel environment settings.',
        },
        { status: 503 }
      );
    }

    // Call Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        submittedAt: new Date().toISOString(),
      }),
      // Apps Script web apps return a 302 redirect that must be followed
      redirect: 'follow',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Apps Script request failed:', errorText);
      return NextResponse.json(
        { error: 'Failed to record entry in Google Sheets. Please try again later.' },
        { status: 502 }
      );
    }

    const result = await response.json().catch(() => ({ status: 'success' }));

    return NextResponse.json({
      success: true,
      message: 'Inquiry saved to Google Sheets successfully.',
      result,
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred while sending your message.' },
      { status: 500 }
    );
  }
}
