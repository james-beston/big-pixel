import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  
  const data = await req.json();
  const { token } = data;

  if (!token) {
    return new Response('Please complete the captcha', { status: 400 });
  }

  const captchaValidation = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`, {
    method: 'POST',
  });

  const captchaValidationData = await captchaValidation.json();

  if (!captchaValidationData.success) {
    return NextResponse.json('Captcha validation failed', { status: 400 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
  
}