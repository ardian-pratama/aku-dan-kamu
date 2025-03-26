import { cn } from '@/lib/utils';

export default function Section({ id, title, className, children }) {
  return (
    <section className={cn(`flex flex-col gap-5 ${className}`)}>
      {title && <h1 className='text-xl font-bold text-primary'>{title}</h1>}
      {children}
    </section>
  );
}
