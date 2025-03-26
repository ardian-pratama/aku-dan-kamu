import { MdPushPin } from 'react-icons/md';

export default function Image({ src, alt, description }) {
  return (
    <div className='p-3 max-w-[250px] rounded-md border shadow w-fit flex flex-col gap-3 relative'>
      <MdPushPin className='w-10 h-10 text-red-500 dark:text-red-600 absolute -top-3 rotate-[15deg] left-1/2 -translate-x-1/2' />
      <img
        src={src}
        alt={alt}
      />
      {description && (
        <p className='text-xs md:text-sm text-center'>{description}</p>
      )}
    </div>
  );
}
