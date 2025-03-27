import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDate } from '@/lib/utils';
import { CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export default function AlbumCard({
  title,
  description,
  src,
  date,
  className,
}) {
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
      className='flex flex-col gap-4 rounded-md border p-4 shadow'
    >
      <Avatar>
        <AvatarImage
          src={src}
          alt={title}
          className={`h-auto w-full rounded-md ${className}`}
        />
        <AvatarFallback className='rounded-md' />
      </Avatar>
      <h2 className='font-bold text-primary'>{title}</h2>
      <p className='text-justify'>{description}</p>
      <div className='mt-auto flex items-center gap-2 text-xs'>
        <CalendarDays className='h-5 w-5' /> {formatDate(date)}
      </div>
    </motion.div>
  );
}
