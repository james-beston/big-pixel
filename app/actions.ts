'use server'

import { z } from 'zod';

const client = require('@sendgrid/client');

client.setApiKey(process.env.SENDGRID_API_KEY!);

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

  if (!validatedFields.success) {
    return { type: 'error', message: validatedFields.error.errors[0].message };
  }

  const validateData = {
    'source': 'Newsletter Signup',
    'email': validatedFields.data.email,
  }

  const validateRequest: any = {
    url: `/v3/validations/email`,
    method: 'POST',
    body: validateData,
  }

  const validateEmail = client.request(validateRequest)
    .then(([response, body]: any) => {
      console.log(response.statusCode);
      console.log(body);
      return true
    })
    .catch((error: any) => {
      console.error(error);
      return false
    });

  if (!validateEmail) {
    return { type: 'error', message: 'An error occurred. Please try again later. 🙀' };
  }

  const data = {
    list_ids: [
      'd0b9b3c0-8f73-4f22-a80f-a34911ea88e4'
    ],
    contacts: [
      {
        email: validatedFields.data.email,
        first_name: validatedFields.data.firstName,
        last_name: validatedFields.data.lastName,
      }
    ]
  }
  
  const request: any = {
    url: `/v3/marketing/contacts`,
    method: 'PUT',
    body: data,
  }

  const result = client.request(request)
      .then(([response, body]: any) => {
        console.log(response.statusCode);
        console.log(body);
        return true
      })
      .catch((error: any) => {
        console.error(error);
        return false
      });

  if (result) {
    return { type: 'success', message: 'Thank you for subscribing! 🎉' };
  } else {
    return { type: 'error', message: 'An error occurred. Please try again later. 🙀' };
  }
}