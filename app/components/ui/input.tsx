import clsx from '@/utils/clsx';

export function NoFrameInput({
  label,
  showLabel,
  type,
  name,
  required,
  placeholder
 }: {
  label: string,
  showLabel: boolean,
  type: string,
  name: string,
  required: boolean,
  placeholder: string
}) {
  return (
    <div>
      <label htmlFor={name} className={clsx(
        showLabel
          ? 'block text-sm font-medium leading-6 text-zinc-200'
          : 'sr-only'
      )}>
        {label}
      </label>
      <div className='relative mt-2'>
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          placeholder={placeholder}
          className='peer block w-full border-0 bg-black/10 py-1.5 md:py-2 text-zinc-100 focus:ring-0 sm:text-sm md:text-base sm:leading-6'
        />
        <div
          aria-hidden='true'
          className='absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-primary'
        />
      </div>
    </div>
  );
}