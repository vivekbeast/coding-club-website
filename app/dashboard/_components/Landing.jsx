import React, { useRef, useState } from 'react';
import { PauseCircle, PlayCircle } from 'lucide-react';

function Landing() {
  const [isPlaying, setIsPlaying] = useState(true); // Track video playing state
  const videoRef = useRef(null); // Reference to the video element

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className='md:ml-64 flex justify-center mb-6 flex-col items-center h-[80vh] p-4 gap-[10px]'>
      <div className='relative rounded-lg bg-blue-300 shadow-lg text-center w-[100%] h-full flex-col justify-center items-center shadow-slate-500 md:h-[100%] md:w-[100%]'>
        <video
          ref={videoRef}
          playsInline={true}
          className='rounded-lg shadow-lg shadow-slate-400 h-[100%] w-screen md:h-full md:w-full md:object-cover object-fill'
          preload="none"
          autoPlay
          loop
          muted
        >
          <source src="/SYNTAXSOCIETY.mp4" type="video/mp4" />
        </video>
        <button
          onClick={togglePlay}
          className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white hidden md:block font-bold px-4 z-20'
        >
          {isPlaying ? (
            <PauseCircle className='bg-black rounded-full shadow-slate-900 shadow-lg h-9 w-9 focus:outline-none focus:shadow-outline' />
          ) : (
            <PlayCircle className='bg-black rounded-full h-9 w-9' />
          )}
        </button>
      </div>
    </div>
  );
}

export default Landing;
