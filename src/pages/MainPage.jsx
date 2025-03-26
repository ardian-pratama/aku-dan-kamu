import Lyric from '../components/Lyric.jsx';
import Image from '../components/Image.jsx';
import image from '../assets/image/IMG-20250303-WA0042.jpg';
import AudioPlayer from '../components/AudioPlayer.jsx'

export default function MainPage() {
  return (
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
      <AudioPlayer></AudioPlayer>
    </div>
  );
}
