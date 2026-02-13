'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

const MusicButton = () => {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [play, setPlay] = useState(false);

  const handlePlay = async () => {
    if (!ref.current) return;

    setPlay(prev => {
      if (!prev) {
        ref.current!.play();
      } else {
        ref.current!.pause();
      }
      return !prev;
    });
  };

  return (
    <div>
      <Image
        src={play ? '/stop-button.svg' : '/playIcon.svg'}
        width={40}
        height={40}
        onClick={handlePlay}
        alt="icon"
      />

      <audio ref={ref} loop preload="auto">
        <source src="/audio/jjlin.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MusicButton;
