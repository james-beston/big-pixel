import AnimatedLaptop from "./animated-laptop";

export default function DigitalPage() {
  return (
    <article className='flex-col space-y-8'>
      <h1 className='text-3xl font-extrabold sm:text-5xl lg:text-7xl'>
        Big in Digital
      </h1>
      <div className='flex flex-col xl:flex-row-reverse justify-center xl:align-middle'>
        <div className='w-screen h-full'>
          <AnimatedLaptop />
        </div>
      </div>
    </article>
  );
}
