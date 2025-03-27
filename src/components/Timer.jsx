import { useEffect, useState } from 'react';

export default function Timer() {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const startTime = new Date('2024-10-30T00:00:00').getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      setElapsedTime(Math.floor((now - startTime) / 1000));
    };
    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(elapsedTime / 86400);
  const hours = Math.floor((elapsedTime % 86400) / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;

  return (
    <div className='flex flex-wrap items-center gap-2 rounded-md border p-2 shadow'>
      <div className='flex flex-1 flex-col rounded-md border bg-primary p-4 text-center text-primary-foreground'>
        <span className='font-bold'>{String(days).padStart(2, '0')}</span>
        <span>Hari</span>
      </div>
      <span className='font-bold text-primary'>&#58;</span>
      <div className='flex flex-1 flex-col rounded-md border bg-primary p-4 text-center text-primary-foreground'>
        <span className='font-bold'>{String(hours).padStart(2, '0')}</span>
        <span>Jam</span>
      </div>
      <span className='font-bold text-primary'>&#58;</span>
      <div className='flex flex-1 flex-col rounded-md border bg-primary p-4 text-center text-primary-foreground'>
        <span className='font-bold'>{String(minutes).padStart(2, '0')}</span>
        <span>Menit</span>
      </div>
      <span className='font-bold text-primary'>&#58;</span>
      <div className='flex flex-1 flex-col rounded-md border bg-primary p-4 text-center text-primary-foreground'>
        <span className='font-bold'>{String(seconds).padStart(2, '0')}</span>
        <span>Detik</span>
      </div>
    </div>
  );
}
