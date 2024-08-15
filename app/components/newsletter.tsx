'use client';

import { useFormState } from 'react-dom'
import { createSubscriber } from '@/app/actions';
import { NoFrameInput } from './ui/input';
import clsx from '@/lib/utils/clsx';

const initialState = {
  type:'',
  message: 'No spam, ever. You can unsubscribe at anytime.',
}

export default function Newsletter() {
  
  const [state, formAction, pending] = useFormState(createSubscriber, initialState);

  if (state?.type === 'success') {
    return (
      <div className='mt-8 flex flex-col space-y-6 p-12 border border-zinc-200 rounded-lg'>
        <p className='text-lg xl:text-xl font-medium text-center leading-6 text-zinc-50'>
          {state?.message}
        </p>
      </div>
    );
  }
  
  return (
    <form
      action={formAction}
      className='mt-8 flex flex-col space-y-6 p-12 border border-zinc-200 rounded-lg'
    >   
      <NoFrameInput
        label='Email'
        showLabel={false}
        type='email'
        name='email'
        required={true}
        placeholder='Enter your email address'
      />    
      <NoFrameInput
        label='First Name'
        showLabel={false}
        type='text'
        name='firstName'
        required={true}
        placeholder='Enter your first name'
      />
      <NoFrameInput
        label='Last Name'
        showLabel={false}
        type='text'
        name='lastName'
        required={true}
        placeholder='Enter your last name'
      />
      <input type='hidden' name='userGroup' value='Website signups'></input>
      <div className='h-8 flex items-center justify-center space-x-2'>
        <div className={clsx(
          'flex items-center justify-center px-2 py-1 rounded-md',
          state?.type === 'success'
            ? 'bg-green-200'
            : state?.type === 'error'
            ? 'bg-red-200'
            : 'bg-none'
        )}>
          <p
            aria-live='polite'
            className={clsx(
              'text-base',
              state?.type === 'success'
                ? 'text-green-800'
                : state?.type === 'error'
                ? 'text-red-800'
                : 'text-zinc-400'
            )}
          >
            {state?.message}
          </p>
        </div>
      </div>
      <button
        type='submit'
        className='text-lg xl:text-xl px-6 py-3 font-medium leading-6 text-zinc-800 bg-primary rounded-md hover:bg-yellow-400 transition-colors duration-300 ease-in-out'>
        {pending ? 'Processing...' : 'Subscribe'}
      </button>
    </form>
  );
}