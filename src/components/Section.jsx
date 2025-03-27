import { cn } from '@/lib/utils';

export default function Section({ id, title, className, children }) {
  return (
    <section className='flex flex-col gap-5'>
      {title && <h1 className='text-xl font-bold text-primary'>{title}</h1>}
      <div className={cn(className)}>{children}</div>
    </section>
  );
}
