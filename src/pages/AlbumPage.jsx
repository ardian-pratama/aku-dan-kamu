import AlbumCard from '../components/AlbumCard.jsx';
import Section from '../components/Section.jsx';

const albums = [
  {
    title: 'Denganmu (pertama)',
    description:
      'Kali kedua kita beli es krim sama-sama terus makannya tengah hari di danau sambil panas-panasan.',
    src: '/album-satu.png',
    date: '2024-11-11',
  },
  {
    title: 'Denganmu (kedua)',
    description:
      'Walaupun hari lagi hujan ternyata tetap bisa juga kita pergi ke rumah hantu dan foto berdua.',
    src: '/album-dua.jpg',
    date: '2024-11-21',
  },
  {
    title: 'Denganmu (ketiga)',
    description:
      'Dari awalnya iseng-iseng pengen ke tempat kamu sekalian jalan-jalan, akhirnya kita jumpa juga terus foto berdua lagi.',
    src: '/album-tiga.jpg',
    date: '2024-11-23',
  },
  {
    title: 'Denganmu (keempat)',
    description:
      'Pagi-pagi langsung sempat-sempatin foto sama kamu dulu karena aku ga bisa kemana-mana setelahnyaa.',
    src: '/album-empat.jpg',
    date: '2024-12-14',
  },
  {
    title: 'Denganmu (kelima)',
    description:
      'Hari yang selalu ku nanti-nanti bahkan sebelum kita bersama, tapi aku ga tau mau pose apa aja semalam, karena aku jadinya ga bagus dehh.. maaf ya sayaaang.',
    src: '/album-lima.jpg',
    date: '2025-02-10',
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
            className='aspect-square'
          />
        ))}
      </Section>
    </div>
  );
}
