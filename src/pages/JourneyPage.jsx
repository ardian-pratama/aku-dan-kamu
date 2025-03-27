import AlbumCard from '../components/AlbumCard.jsx';
import Section from '../components/Section.jsx';

const journeys = [
  {
    title: 'Beli Mixue',
    description:
      'Kali kedua kita beli es krim sama-sama terus makannya tengah hari di danau sambil panas-panasan. Pertama kalinya juga kita post tentang kita berdua dan semuanya langsung terkejut dan ga percayaa 😄',
    src: '/album-satu.png',
    date: '2024-11-11',
    className: 'aspect-square',
  },
  {
    title: 'Masuk Rumah Hantu',
    description:
      'Salah satu keinginan ku di masa kecil untuk masuk ke rumah hantu akhirnya kesampaian jugaa, tambah spesial lagi karena perginya kita sama-sama walaupun harus hujan-hujannan untuk pergi ke sini sambil harus bolos latihan padus. Terima kasih karena telah mewujudkan keinginan masa kecilku',
    src: '/journey-satu.jpg',
    date: '2024-11-21',
    className: 'aspect-square object-top',
  },
  {
    title: 'Nonton Bioskop',
    description:
      'Di hari ini banyak first experience yang ku dapatkan, salah satu nya bisa nonton bioskop berdua sama kamu tanpa di ganggu sama yang lain. Dan banyak kejadian ga terduga sampai-sampai kena tipang sama polisi, seriuss... polosinyq ga seru kali hari itu padahal lagi asik-asik tapi tiba-tiba di tilang 😭. Tapi ga papaa karena hal ini semua yang kita lakukan hari ini akan sulit untuk dilupakan',
    src: '/journey-dua.jpg',
    date: '2024-12-05',
    className: 'aspect-square',
  },
  {
    title: 'Pergi Jalan-jalan',
    description:
      'Pergi keliling sambil nyari jajan ternyata seruu kali yaa, dan akhirnya aku bisa ketemu sama semua teman dekat kamu yang udah kamu anggap kaya kekuarga. Tapi kamu ga mau beli jajan padahal kita jalan-jalan karena pengen nyari jajan',
    src: '/journey-tiga.jpg',
    date: '2025-01-13',
    className: 'aspect-square',
  },
  {
    title: 'Pergi Makan Steak',
    description:
      'Akhirnya salah satu keinginan kita sebelum bersama dulu adalah masuk organisasi akhirnya terwujud juga. Sebagai hadiah nya aku ajak kamu pergi makan keluar dan ternyata tanggalnya pas pula yaa.. udah 3 bulan aja hari ituu 😄',
    src: '/journey-empat.png',
    date: '2025-01-30',
    className: 'aspect-square object-bottom',
  },
];

export default function JourneyPage() {
  return (
    <div className='flex flex-col gap-16'>
      <Section title='Petualangan Kita' className='grid gap-5 md:grid-cols-2'>
        <p className='md:col-span-2'>
          Semua cerita seru dari perjalanan dan petualangan yang telah kita
          lalui bersama.
        </p>
        {journeys.map((journey, index) => (
          <AlbumCard
            key={index}
            title={journey.title}
            description={journey.description}
            src={journey.src}
            date={journey.date}
            className={journey.className}
          />
        ))}
      </Section>
    </div>
  );
}
