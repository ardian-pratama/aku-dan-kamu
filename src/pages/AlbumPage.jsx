import AlbumCard from '../components/AlbumCard.jsx';
import Section from '../components/Section.jsx';

const albums = [
  {
    title: 'Aku dan kamu',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    src: '/aku-dan-kamu.png',
    date: '2025-03-27T15:00:00Z',
  },
  {
    title: 'Bersama',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    src: '/aku-dan-kamu.png',
    date: '2025-03-27T15:00:00Z',
  },
];

export default function AlbumPage() {
  return (
    <div className='flex flex-col gap-16'>
      <Section title='Album Kita' className='grid gap-5 md:grid-cols-2'>
        <p className='md:col-span-2'>
          Semua kenangan tentang indahnya hari-hari yang sudah kita lewati
          bersama.
        </p>
        {albums.map((album, index) => (
          <AlbumCard
            key={index}
            title={album.title}
            description={album.description}
            src={album.src}
            date={album.date}
          />
        ))}
      </Section>
    </div>
  );
}
