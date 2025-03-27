import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function AboutCard({ title, description, href }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Card className='flex flex-col'>
        <CardHeader>
          <CardTitle className='text-base'>{title}</CardTitle>
        </CardHeader>
        <CardContent className='text-justify text-muted-foreground'>
          <p>{description}</p>
        </CardContent>
        <CardFooter className='mt-auto'>
          <Link
            to={href}
            className={buttonVariants({ className: 'ml-auto' })}
            preventScrollReset={true}
          >
            Lihat
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
