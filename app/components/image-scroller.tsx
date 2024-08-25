'use client';

import { useEffect } from 'react';

export default function ImageScroller({
  id,
  folder,
  count,
} : {
  id: string,
  folder: string,
  count: number,
}) {

  useEffect(() => {
    const html = document.documentElement;
    const canvas: any = document.getElementById(id);
    const context = canvas.getContext("2d");
    const frameCount: number = count;
    const currentFrame = (i: number) => (
      `${folder}/${(i).toString().padStart(3, '0')}.jpg`
    )

   const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image()
    img.src = currentFrame(1);
    canvas.width=640;
    canvas.height=640;
    img.onload=function(){
      context.drawImage(img, 0, 0);
    }

    const updateImage = (index: number) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    }

    window.addEventListener('scroll', () => {  
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * Number(frameCount))
      );
      
      requestAnimationFrame(() => updateImage(frameIndex + 1))
    });

    preloadImages()
  }, []);

  return (
    <div>
      <canvas
        id={id}
        className='h-96 w-96 md:h-[480px] md:w-[480px] xl:h-[640px] xl:w-[640px]'
      />
    </div>  
  )
}