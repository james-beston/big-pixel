'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from './components/ui/footer';

const disciplines = [
  {
    key: 1,
    name: 'print',
    face: 'top',
    href: '/print',
  },
  {
    key: 2,
    name: 'digital',
    face: 'right',
    href: '/digital',
  },
  {
    key: 3,
    name: 'about',
    face: 'back',
    href: '/about',
  },
  {
    key: 4,
    name: 'news',
    face: 'bottom',
    href: '/news',
  },
  {
    key: 5,
    name: 'contact',
    face: 'left',
    href: '/contact',
  },
];

export default function Home() {
  const [face, setFace] = useState('front');

  return (
    <>
    <main className='flex min-h-screen flex-col items-center'>
      <div className='flex justify-around mt-12 text-sm md:text-base text-center lg:mb-0 w-full lg:max-w-5xl'>
        {disciplines.map((discipline) => (
          <Link
            key={discipline.key}
            href={discipline.href}
            onFocus={() => setFace(discipline.face)}
            onMouseEnter={() => setFace(discipline.face)}
            onMouseLeave={() => setFace('front')}
            className='rounded-lg bg-white/0 px-4 py-2 text-center text-zinc-500 transition-all duration-300 ease-in-out hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
          >
            {discipline.name}
          </Link>
        ))}
      </div>
      <div className='flex flex-1 flex-col items-center justify-center lg:flex-row lg:space-x-12'>
        <h1 className='text-center text-8xl font-extrabold tracking-tight lg:text-9xl'>
          Big pixel
        </h1>
        <div className='scene'>
          <div className='absolute'>
            <div className='h-48 w-48 bg-primary/15 blur-3xl' />
          </div>
          <div className={`cube show-` + face}>
            <div className='cube__face cube__face--front' />
            <div className='cube__face cube__face--back'>about</div>
            <div className='cube__face cube__face--right'>digital</div>
            <div className='cube__face cube__face--left'>contact</div>
            <div className='cube__face cube__face--top'>print</div>
            <div className='cube__face cube__face--bottom'>news</div>
          </div>
        </div>
      </div>
      <div className='flex-0 flex items-center justify-center py-12'>
        <p className='text-center text-xl text-zinc-300'>
          A small, yet perfectly formed design agency
        </p>
      </div>
    </main>
    <Footer />
    </>
  );
}
