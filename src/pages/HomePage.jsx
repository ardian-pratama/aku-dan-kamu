import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Card className='max-w-sm'>
        <CardHeader>
          <CardTitle className='text-base'>Note</CardTitle>
        </CardHeader>
        <CardContent className='text-muted-foreground grid gap-4'>
          <p>
            Siapapun kamu yang membuka website ini, sebelumnya mohon mmaaf
            karena website ini di buat khusus hanya untuk{' '}
            <strong className='text-primary'>Silvana Nabila Shyifa</strong>.
            Selamat menyaksikan
          </p>
        </CardContent>
        <CardFooter>
          <Link
            to='/main'
            className={buttonVariants({ className: 'ml-auto' })}
          >
            Next
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
