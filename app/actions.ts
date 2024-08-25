'use server'

import { z } from 'zod';

const schema = z.object({
  email: z.string({
    invalid_type_error: 'Please enter a valid email address',
  }),
  firstName: z.string({
    invalid_type_error: 'Please enter your first name',
  }),
  lastName: z.string({
    invalid_type_error: 'Please enter your last name',
  }),
});

const captchaSecret = process.env.RECAPTCHA_SECRET_KEY!;

export async function createSubscriber(prevState: any, formData: FormData) {

  const captchaResponse = formData.get('g-recaptcha-response');

  if (!captchaResponse) {
    return { type: 'error', message: 'Please complete the captcha' };
  }

  const captchaValidation = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${captchaResponse}`, {
    method: 'POST',
  });

  const captchaValidationData = await captchaValidation.json();

  if (!captchaValidationData.success) {
    return { type: 'error', message: 'Captcha validation failed' };
  }

  const validatedFields = schema.safeParse({
    email: formData.get('email'),
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    userGroup: formData.get('userGroup')
  });

  if (!validatedFields.success) {
    return { type: 'error', message: validatedFields.error.errors[0].message };
  }

  const response = await fetch('https://app.loops.so/api/newsletter-form/clzmukb310095ntgwcjuwdsug', {
    method: 'POST',
    body: JSON.stringify(validatedFields.data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return { type: 'error', message: 'Something went wrong! 🙀 Please try again later.' };
  } else {
    return { type: 'success', message: 'Thank you for signing up! 🎉' };
  }
}