import Lyric from '../components/Lyric.jsx';
import Image from '../components/Image.jsx';
import image from '../assets/image/IMG-20250303-WA0042.jpg';
import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import music from '../assets/audio/h.mp3';

export default function MainPage() {
  const soundRef = useRef(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    soundRef.current = new Howl({
      src: music,
      preload: true,
      volume: 0,
      loop: true,
      onload: () => {
        setloading(false);
        soundRef.current?.play();
        soundRef.current?.volume(1.0);
      },
    });

    return () => {
      soundRef.current?.stop();
    };
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className='flex flex-col gap-5'>
          <Lyric></Lyric>
          <Lyric></Lyric>
          <Image
            src={image}
            description='Lorem ipsum dolor sit amet'
          />
          <Lyric></Lyric>
          <Image
            src={image}
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora consequuntur, in. Excepturi, autem suscipit nam!'
          />
        </div>
      )}
    </>
  );
}
