import Icon from '@/lib/utils/icon';
import Newsletter from '@/app/components/newsletter';

export default function ContactPage() {
  return (
    <div className='flex-col space-y-12'>
      <h1 className='text-3xl font-extrabold sm:text-5xl lg:text-7xl'>
        Big Shout Out
      </h1>
      <div className='grid grid-cols-2 gap-4'>
        <div className='col-span-2 md:col-span-1'>
          <div className='flex flex-col space-y-6'>
            <p className='text-lg xl:text-xl font-light text-zinc-300'>
              We are contactable in the usual ways.
            </p>
            {/* Email */}
            <div className='flex space-x-6 items-center'>
              <Icon icon='envelope' size={24} weight='regular' />
              <a href='mailto:hello@big-pixel.com' className='text-lg xl:text-xl font-medium leading-6 text-zinc-400 transition-colors duration-300 ease-in-out hover:text-primary'>
                hello@big-pixel.com
              </a>
            </div>
            {/* Phone */}
            <div className='flex space-x-6 items-center'>
              <Icon icon='phone' size={24} weight='regular' />
              <a href='tel:+441692774886' className='text-lg xl:text-xl font-medium tracking-wider text-zinc-400 transition-colors duration-300 ease-in-out hover:text-primary'>
                01692 774 886
              </a>
            </div>
          </div>
          <div className='mt-12 flex flex-col space-y-6'>      
            <p className='text-lg xl:text-xl font-light text-zinc-300'>
              And on socials. But not <s>Twitter</s> X (for obvious reasons).
            </p>
            {/* LinkedIn */}
            <div className='flex space-x-6 items-center'>
              <Icon icon='linkedin-in' size={24} weight='brands' />
              <a href='https://www.linkedin.com/company/bigpixeldotcom/' className='text-lg xl:text-xl font-medium leading-6 text-zinc-400 transition-colors duration-300 ease-in-out hover:text-primary'>
                LinkedIn
              </a>
            </div>
            {/* Instagram */}
            <div className='flex space-x-6 items-center'>
              <Icon icon='instagram' size={24} weight='brands' />
              <a href='https://www.instagram.com/bigpixeldotcom/' className='text-lg xl:text-xl font-medium leading-6 text-zinc-400 transition-colors duration-300 ease-in-out hover:text-primary'>
                Instagram
              </a>
            </div>
            {/* Facebook */}
            <div className='flex space-x-6 items-center'>
              <Icon icon='facebook' size={24} weight='brands' />
              <a href='https://www.facebook.com/bigpixeldotcom/' className='text-lg xl:text-xl font-medium leading-6 text-zinc-400 transition-colors duration-300 ease-in-out hover:text-primary'>
                Facebook
              </a>
            </div>
            {/* Threads */}
            <div className='flex space-x-6 items-center'>
              <Icon icon='threads' size={24} weight='brands' />
              <a href='https://threads.com/' className='text-lg xl:text-xl font-medium leading-6 text-zinc-400 transition-colors duration-300 ease-in-out hover:text-primary'>
                Threads
              </a>
            </div>
          </div>
        </div>
        <div className='col-span-2 md:col-span-1'>
          <p className='text-lg xl:text-xl font-light text-zinc-300'>
            We also curate a rather dashing newsletter. 🥸
          </p>
          <Newsletter />
        </div>
      </div>
    </div>
  );
}