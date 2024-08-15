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

export async function createSubscriber(prevState: any, formData: FormData) {

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