import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays } from 'lucide-react';
import { formatDate } from '../lib/utils.js';

export default function AlbumCard({ title, description, src, date }) {
  return (
    <div className='p-4 rounded-md border shadow flex flex-col gap-4'>
      <Avatar className='w-full h-auto'>
        <AvatarImage
          src={src}
          alt={title}
          className='rounded-md'
        />
        <AvatarFallback className='rounded-md' />
      </Avatar>
      <h2 className='font-bold text-primary'>{title}</h2>
      <p>{description}</p>
      <div className='flex gap-2 items-center text-xs mt-auto'>
        <CalendarDays className='w-5 h-5' /> {formatDate(date)}
      </div>
    </div>
  );
}
