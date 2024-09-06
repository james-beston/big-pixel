import Content from './content.mdx';
import Branding from './branding.mdx';
import Image from 'next/image';
import cards from './cards.jpg';
import plates from './plates.jpg';

export default function PrintPage() {
  return (
    <article className='flex-col space-y-8 md:space-y-12'>
      <h1 className='text-3xl font-extrabold sm:text-5xl lg:text-7xl'>
        Big in Print
      </h1>
      <div className='flex flex-col gap-y-16 md:gap-y-24'>
        <div className='flex flex-col xl:flex-row-reverse justify-between gap-y-6 md:gap-y-0 md:gap-x-6'>
          <div className='overflow-hidden h-full w-full md:h-[480px] md:w-[480px] xl:h-[540px] xl:w-[540px] rounded-2xl'>
            <Image
              src={plates}
              alt='CMYK plates'
            />
          </div> 
          <div className='xl:w-1/2'>
            <div className='mx-none prose prose-sm prose-pixel md:prose-base lg:prose-xl prose-th:text-yellow-200'>
              <Content />
            </div>
          </div>
        </div>
        
        <div className='flex flex-col xl:flex-row justify-between align-middle gap-y-6 md:gap-y-0 md:gap-x-6'>
          <div className='overflow-hidden h-full w-full md:h-[480px] md:w-[480px] xl:h-[540px] xl:w-[540px] rounded-2xl'>
            <Image
              src={cards}
              alt='Business cards'
            />
          </div>
          <div className='xl:w-1/2'>
            <div className='mx-none prose prose-sm prose-pixel md:prose-base lg:prose-xl prose-th:text-yellow-200'>
              <Branding />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
