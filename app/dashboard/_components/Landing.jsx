import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { ModeToggle } from './DarkLight';
import { Pause, PauseCircle, Play, PlayCircle, PlayCircleIcon } from 'lucide-react';

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
    <div className='md:ml-64 flex justify-center flex-col items-center h-[80vh]  p-5 gap-[10px]'>
      <div className='rounded-lg bg-blue-300 shadow-lg text-center  w-full h-full flex-col justify-center items-center shadow-slate-500 md:h-[100%] md:w-[100%]'>
        <video
          ref={videoRef}
          playsInline={true}
          className='rounded-lg shadow-lg shadow-slate-500 h-[100%] w-fit md:h-full md:w-full md:object-cover object-fill'
          preload="none"
          autoPlay
          loop
          muted
        >
          <source src="/SYNTAXSOCIETY.mp4" type="video/mp4" />
        </video>
        <button
          onClick={togglePlay}
          className='self-center mt-4 text-white font-bold px-4 '
        >
          {isPlaying ? <PauseCircle className=' bg-black rounded-full shadow-slate-900 shadow-lg h-9 w-9 focus:outline-none focus:shadow-outline' /> : <PlayCircle className=' bg-black rounded-full h-9 w-9' />}
        </button>
      </div>
    </div>
  );
}

export default Landing;




   {/* <Link href="#mainpage" scroll={true} legacyBehavior>
        <a className="text-lg font-semibold text-black hover:text-blue-800 hover:underline transition duration-300 ease-in-out">
          Learn More...
        </a>
      </Link> */}
  
