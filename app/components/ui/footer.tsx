import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@awesome.me/kit-5cfa867163/icons';

export default function Footer() {
  
  var year = new Date().getFullYear();

  const socials = [
    {
      key: 1,
      title: 'Instagram',
      icon: fab.faInstagram,
      href: 'https://www.instagram.com/bigpixeldotcom/',
    },
    {
      key: 2,
      title: 'LinkedIn',
      icon: fab.faLinkedinIn,
      href: 'https://www.linkedin.com/company/bigpixeldotcom/',
    },
    {
      key: 3,
      title: 'Threads',
      icon: fab.faThreads,
      href: 'https://www.threads.net/@bigpixeldotcom',
    },
  ];

  return (
    <footer className='lg:mt-12 flex flex-col lg:flex-row items-center h-24 lg:max-w-7xl mx-6 xl:mx-auto justify-between'>
        <div className='flex flex-col space-y-2'>
          <p className='text-zinc-400 text-xs sm:text-sm'>
            &copy; {year} Big Pixel Consulting Ltd. All rights reserved.
          </p>
          <p className='text-zinc-400 text-xs'>
            Registered in England and Wales No. 15928040 < br />
            Hardwick House, Agricultural Hall Plain, Norwich, England, NR1 3FS
          </p>
        </div>
        <div className='py-4 md:py-0 flex space-x-4'>
          {socials.map((social) => (
            <Link
              key={social.key}
              href={social.href}
              target='_blank'
              className='flex items-center justify-center bg-zinc-800 hover:bg-zinc-900 w-8 h-8 rounded text-zinc-200 hover:text-white transition-all duration-300 ease-in-out'
            >
              <span className='sr-only'>{social.title}</span>
              <span>
              <FontAwesomeIcon icon={social.icon} fixedWidth />
              </span>
            </Link>
          ))}
        </div>
    </footer>
  );
}