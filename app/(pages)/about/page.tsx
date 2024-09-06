import Image from 'next/image';
import Adrian from './adrian.mdx';

export default function AboutPage() {
  return (
    <article className='flex-col space-y-16'>
      <h1 className='text-3xl font-extrabold sm:text-5xl lg:text-7xl'>
        Meet the Team
      </h1>
      <div className='flex flex-col xl:flex-row space-y-12 xl:space-y-0 xl:space-x-12 align-middle'>
        <div className='w-48 xl:w-1/3'>
          <Image
            src='/images/me-2024.jpg'
            width={320}
            height={320}
            alt='Adrian'
            className='rounded-full border-4 border-zinc-200'
          />
        </div> 
        <div className='xl:w-2/3'>
          <div className='prose prose-sm prose-pixel md:prose-base lg:prose-xl prose-th:text-yellow-200'>
            <Adrian />
          </div>
        </div>
      </div>
    </article>
  );
}
