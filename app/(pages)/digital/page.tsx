import Websites from './websites.mdx';
import SEO from './seo.mdx';
import ImageScroller from '@/app/components/image-scroller';

export default function DigitalPage() {
  return (
    <article className='flex-col space-y-8'>
      <h1 className='text-3xl font-extrabold sm:text-5xl lg:text-7xl'>
        Big in Digital
      </h1>
      <div className='flex flex-col xl:flex-row-reverse justify-center xl:align-middle'>
        <div className='flex xl:w-3/5 align-middle justify-center overflow-clip'>
          <ImageScroller
              id='laptop'
              folder='/images/laptop'
              count={76}
            />
        </div> 
        <div className='xl:w-1/2'>
          <div className='prose prose-sm prose-pixel md:prose-base lg:prose-xl prose-th:text-yellow-200'>
            <Websites />
          </div>
        </div>
      </div>
      
      <div className='flex flex-col xl:flex-row justify-center xl:align-middle'>
        
        <div className='h-96 w-96 md:h-[480px] md:w-[480px] xl:h-[640px] xl:w-1/2'>
          <ImageScroller
            id='iphone'
            folder='/images/iphone'
            count={69}
          />
        </div>
        <div className='xl:w-1/2'>
          <div className='prose prose-sm prose-pixel md:prose-base lg:prose-xl prose-th:text-yellow-200'>
            <SEO />
          </div>
        </div>
      </div>
    </article>
  );
}
