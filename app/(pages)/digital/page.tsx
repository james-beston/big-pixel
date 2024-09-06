import Websites from './websites.mdx';
import SEO from './seo.mdx';
import Image from 'next/image';
import digital from './digital.jpg';
import seo from './seo.jpg';

export default function DigitalPage() {
  return (
    <article className='flex-col space-y-8 md:space-y-12'>
      <h1 className='text-3xl font-extrabold sm:text-5xl lg:text-7xl'>
        Big in Digital
      </h1>
      <div className='flex flex-col gap-y-16 md:gap-y-24'>
        <div className='flex flex-col xl:flex-row-reverse justify-between gap-y-6 md:gap-y-0 md:gap-x-6'>
          <div className='overflow-hidden h-full w-full md:h-[480px] md:w-[480px] xl:h-[540px] xl:w-[540px] rounded-2xl'>
            <Image
              src={digital}
              alt='Laptop with website'
            />
          </div> 
          <div className='xl:w-1/2'>
            <div className='mx-none prose prose-sm prose-pixel md:prose-base lg:prose-xl prose-th:text-yellow-200'>
              <Websites />
            </div>
          </div>
        </div>
        
        <div className='flex flex-col xl:flex-row justify-between align-middle gap-y-6 md:gap-y-0 md:gap-x-6'>
          <div className='overflow-hidden h-full w-full md:h-[480px] md:w-[480px] xl:h-[540px] xl:w-[540px] rounded-2xl'>
            <Image
              src={seo}
              alt='iPhone with website & SEO'
            />
          </div>
          <div className='xl:w-1/2'>
            <div className='mx-none prose prose-sm prose-pixel md:prose-base lg:prose-xl prose-th:text-yellow-200'>
              <SEO />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}