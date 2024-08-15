import Spline from '@splinetool/react-spline/next';

export default function AnimatedIphone() {
  return (
    <div className='w-[320px] md:w-[640px] h-[400px] md:h-[640px]'>
       <Spline
        scene='/splines/iphone.spline'
      />
    </div>
  );
}
