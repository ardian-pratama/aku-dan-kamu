import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import music from '../assets/audio/h.mp3';

export default function AudioPlayer() {
  const soundRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    soundRef.current = new Howl({
      src: music,
      preload: true,
      volume: 0,
      loop: true,
      onload: () => {
        setIsLoaded(true);
        soundRef.current?.play();
        soundRef.current?.volume(1.0);
      },
    });

    return () => {
      soundRef.current?.stop();
    };
  }, []);

  return null;
}
