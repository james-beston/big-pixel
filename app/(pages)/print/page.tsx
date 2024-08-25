import Content from './content.mdx';
import Branding from './branding.mdx';
import ImageScroller from '@/app/components/image-scroller';

export default function PrintPage() {
  return (
    <article className='flex-col space-y-8'>
      <h1 className='text-3xl font-extrabold sm:text-5xl lg:text-7xl'>
        Big in Print
      </h1>
      <div className='flex flex-col xl:flex-row-reverse justify-center xl:align-middle'>
        <div className='h-96 w-96 md:h-[480px] md:w-[480px] xl:h-[640px] xl:w-1/2'>
          <ImageScroller
            id='print'
            folder='/images/cmyk'
            count={75}
          />
        </div> 
        <div className='xl:w-1/2'>
          <div className='prose prose-sm prose-pixel md:prose-base lg:prose-xl prose-th:text-yellow-200'>
            <Content />
          </div>
        </div>
      </div>
      
      <div className='flex flex-col xl:flex-row justify-center xl:align-middle'>
        
        <div className='h-96 w-96 md:h-[480px] md:w-[480px] xl:h-[640px] xl:w-1/2'>
          <ImageScroller
            id='branding'
            folder='/images/cards'
            count={72}
          />
        </div>
        <div className='xl:w-1/2'>
          <div className='prose prose-sm prose-pixel md:prose-base lg:prose-xl prose-th:text-yellow-200'>
            <Branding />
          </div>
        </div>
      </div>
    </article>
  );
}
