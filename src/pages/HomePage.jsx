import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AboutCard from '../components/AboutCard.jsx';
import Section from '../components/Section.jsx';
import Timer from '../components/Timer.jsx';

const cards = [
  {
    title: 'Album Kita',
    description:
      'Semua kenangan tentang indahnya hari-hari yang sudah kita lewati bersama.',
    href: '/album',
  },
  {
    title: 'Petualangan Kita',
    description:
      'Semua cerita seru dari perjalanan dan petualangan yang telah kita lalui bersama.',
    href: '/petualangan',
  },
];

export default function HomePage() {
  return (
    <div className='flex flex-col gap-16'>
      <Section className='grid gap-5 md:grid-cols-5'>
        <div className='flex flex-col gap-5 md:col-span-3'>
          <div className='relative flex flex-col self-center font-agbalumo text-5xl text-primary'>
            <h1>Aku</h1>
            <h1 className='absolute left-[86px] top-7 text-blue-500'>&amp;</h1>
            <h1 className='ml-[120px]'>Kamu</h1>
          </div>
          <p className='text-justify'>
            Seperti halnya waktu yang terus berjalan, begitu banyak momen yang
            telah kita lewati bersama. Setiap detik yang kita habiskan selalu
            terasa begitu berharga dan indah.
          </p>
          <Timer />
        </div>
        <Avatar className='h-auto w-full md:col-span-2'>
          <AvatarImage
            src='/aku-dan-kamu.png'
            alt='Aku dan Kamu'
            className='rounded-none'
          />
          <AvatarFallback className='rounded-md' />
        </Avatar>
      </Section>
      <Section title='Tentang Kita'>
        <div className='grid gap-5 md:grid-cols-2'>
          {cards.map((card, index) => (
            <AboutCard
              key={index}
              title={card.title}
              description={card.description}
              href={card.href}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
