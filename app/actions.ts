'use server'

import { z } from 'zod';
import MailerLite from '@mailerlite/mailerlite-nodejs';

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY!,
});


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
  });

  const honeypot = formData.get('honeypot')

  if (!validatedFields.success) {
    return { type: 'error', message: validatedFields.error.errors[0].message };
  }

  const params = {
    email: validatedFields.data.email,
    fields: {
      name: validatedFields.data.firstName,
      last_name: validatedFields.data.lastName,
      honeypot: honeypot,
    },
    groups: ['130842370640971232'],
  };

  mailerlite.subscribers.createOrUpdate(params)
    .then(([response, body]: any) => {
      console.log(response.statusCode);
      console.log(body);
      return { type: 'success', message: 'Thank you for subscribing! 👍' };
    })
    .catch((error: any) => {
      console.error(error);
      return { type: 'error', message: 'An error occurred. Please try again later.' };
    });
}