import Link from 'next/link';
import Icon from '@/lib/utils/icon';

export default function Footer() {
  
  var year = new Date().getFullYear();

  const socials = [
    {
      key: 1,
      title: 'Instagram',
      icon: 'instagram',
      href: 'https://www.instagram.com/bigpixeldotcom/',
    },
    {
      key: 2,
      title: 'LinkedIn',
      icon: 'linkedin-in',
      href: 'https://www.linkedin.com/company/bigpixeldotcom/',
    },
    {
      key: 3,
      title: 'Threads',
      icon: 'threads',
      href: 'https://www.threads.net/@bigpixeldotcom',
    },
  ];

  return (
    <footer className='lg:mt-12 flex items-center h-24 lg:max-w-7xl mx-6 xl:mx-auto justify-between'>
        <p className='text-zinc-400 text-xs sm:text-sm'>
          &copy; {year} Big Pixel. All rights reserved.
        </p>
        <div className='flex space-x-4'>
          {socials.map((social) => (
            <Link
              key={social.key}
              href={social.href}
              target='_blank'
              className='flex items-center justify-center bg-zinc-800 hover:bg-zinc-900 w-8 h-8 rounded text-zinc-200 hover:text-white transition-all duration-300 ease-in-out'
            >
              <span className='sr-only'>{social.title}</span>
              <span>
                <Icon icon={social.icon} size={18} weight='brands' />
              </span>
            </Link>
          ))}
        </div>
    </footer>
  );
}