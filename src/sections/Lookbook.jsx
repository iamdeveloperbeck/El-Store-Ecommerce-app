import React from 'react';

import image from '../constants/image';
import '../container/global.css';

const Lookbook = () => {
  return (
    <div className='lookbook'>
      <h3 className='lookbook-heading text-[40px] md:text-[30px] font-[700] tracking-[-0.03em] leading-[1]'>Lookbook</h3>
      <a href="#" className='lookboks-link'>
        <img src={image.lookbook1} alt="lookbook" className='w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0 z-0' />
        <div className='absolute text-white text-[2em] md:text-[1.5em] font-[300] tracking-[0.2em] uppercase leading-[140%]'>Seriousness</div>
      </a>
      <a href="#" className='lookboks-link link-second'>
        <img src={image.lookbook2} alt="lookbook" className='w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0 z-0' />
        <div className='absolute text-black text-[2em] md:text-[1.5em] font-[300] tracking-[0.2em] uppercase leading-[140%]'>Kids Territory</div>
      </a>
    </div>
  );
};

export default Lookbook;