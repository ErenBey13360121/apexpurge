import React from 'react';

const Footer = () => {
  return (
    <footer className='mt-24 flex h-32 flex-col items-center justify-between bg-gradient-to-b from-transparent to-primary/20'>
      <div className='p-5 text-center'>
        <span className='font-bold italic text-primary brightness-150'>Eren Akdeniz</span> tarafından{' '}
        <span className='font-bold italic text-primary brightness-150'>
          TypeScript, JavaScript, React, TSX, Next.js, Tailwind CSS ve shadcn/ui
        </span>{' '}
        kullanılarak geliştirildi.{' '}
        <span className='whitespace-nowrap'>
          <a
            href='mailto:erenakdeniz@icloud.com'
            className='font-bold italic text-primary brightness-150 hover:brightness-150'
          >
            erenakdeniz@icloud.com
          </a>{' '}
          🔥
        </span>
      </div>
      <div className='mt-auto h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent'></div>
    </footer>
  );
};

export default Footer;