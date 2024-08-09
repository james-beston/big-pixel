'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, DialogPanel } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightEndOnRectangleIcon,
} from '@heroicons/react/24/outline';
import clsx from '@/app/lib/utils/clsx';

const navigation = [
  { name: 'print', href: '/print' },
  { name: 'web', href: '/web' },
  { name: 'about', href: '/about' },
  { name: 'news', href: '/news' },
  { name: 'contact', href: '/contact' },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header>
      <nav
        aria-label='Global'
        className='flex items-center justify-between p-6 lg:px-8'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Big Pixel</span>
            <div className='h-8 w-8 bg-primary' />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='h-6 w-6' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-24'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'px-2 py-1.5 font-semibold leading-6',
                pathname === item.href
                  ? 'pointer-events-none border-b-2 border-primary text-white'
                  : 'text-zinc-500 transition-colors duration-300 ease-in-out hover:text-white'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link
            href='#'
            className='flex gap-x-2 font-semibold leading-6 text-zinc-500 transition-colors duration-300 ease-in-out hover:text-white'
          >
            Client Portal
            <span aria-hidden='true'>
              <ArrowRightEndOnRectangleIcon className='h-6 w-6' />
            </span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Big Pixel</span>
              <div className='h-8 w-8 bg-primary' />
            </Link>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-white'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-zinc-100/50'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-200 hover:bg-zinc-800'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <Link
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-zinc-200 hover:bg-zinc-800'
                >
                  <div className='flex items-center gap-x-2'>
                    Client Portal
                    <span aria-hidden='true'>
                      <ArrowRightEndOnRectangleIcon className='h-6 w-6' />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
