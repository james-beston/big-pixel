'use client';

import { useEffect } from 'react';

export default function VideoScroller({
  video,
  id,
} : {
  video: string,
  id: string,
}) {

  useEffect(() => {
    // get video element
    const video: any = document.getElementById(id);
    const container: any = document.getElementById('container');

    // set the container height according to video length
    video.addEventListener('loadedmetadata', function() {
      const speed = 200; // can be any number (adjust to your preference)
      container.style.height = (video.duration * speed) + 'px';
    });

    // play video using scroll values
    // function is attached to scroll event.

    const playVideo = () => {
      // get current scroll progress
      var scrollY = window.scrollY;
      // get total page height and calculate percentage
      var height = 480;
      var percentage = (scrollY / height);
      // set video playback position.
      video.currentTime = video.duration * percentage;
      window.requestAnimationFrame(playVideo);
    };

    window.addEventListener("scroll", playVideo);
  }, []);

  return (
    <div id='container' className='min-w-full min-h-full'>
      <video id={id}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}