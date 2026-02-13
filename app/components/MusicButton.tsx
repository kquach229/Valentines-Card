'use client';

import  { useContext, useRef, useState } from 'react';
import Image from 'next/image';


const MusicButton = () => {

  const ref = useRef(null);
  const [play, setPlay] = useState(true);

  const handlePlay = () => {
    setPlay(!play);

    if (!play) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <div>
      <Image
       
        src={play ? '/stop-button.svg' : '/playIcon.svg'}
  
        width={40}
        height={40}
        onClick={handlePlay}
        alt='icon'
      />
      <audio src='/audio/jjlin.mp3' ref={ref} loop />
    </div>
  );
};

export default MusicButton;