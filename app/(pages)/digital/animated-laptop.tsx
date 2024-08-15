import Spline from '@splinetool/react-spline/next';

export default function AnimatedLaptop() {
  return (
    <div className='w-[320px] md:w-[640px] h-[320px] md:h-[640px]'>
      <Spline
        scene='/splines/laptop.spline'
      />
    </div>
  );
}
