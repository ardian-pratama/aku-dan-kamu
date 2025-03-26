import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'motion/react';

const cards = [
  {
    title: 'Album',
    description:
      'Semua hal apapun itu kalau ada kamu di dalamnya nya akan menjadi spesial dan aku selalu menyimpannya karena kamu cantik bangeeet',
    href: '/album',
  },
  {
    title: 'Tentang Kamu',
    description:
      'Semua hal yang aku ketahui tentang kamu, walaupun aku masih belum mengenal kamu sepenuhnya tetapi kamu sangat spesial bagiku',
    href: '/tentang-kamu',
  },
];

export default function HomePage() {
  return (
    <div className='grid md:grid-cols-2 gap-5'>
      {cards.map((card, index) => (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <Card
            key={index}
            className='flex flex-col'
          >
            <CardHeader>
              <CardTitle className='text-base'>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground text-justify'>
              <p>{card.description}</p>
            </CardContent>
            <CardFooter className='mt-auto'>
              <Link
                to={card.href}
                className={buttonVariants({ className: 'ml-auto' })}
              >
                Lihat
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
