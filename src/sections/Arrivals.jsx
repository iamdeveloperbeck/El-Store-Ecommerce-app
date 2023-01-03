import React from 'react';

import image from '../constants/image';
import '../container/global.css';

const Arrivals = () => {
  return (
    <div className='w-full h-auto flex pt-[90px] flex-col items-start'>
      <h1 className='text-black text-[57px] md:text-[40px] font-[700] ml-[5%] leading-[1] tracking-[-0.04em]'>Last arrivals</h1>
      <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 w-full mt-[60px] auto-cols-[1fr]'>
        <div className='p-[60px] border border-solid hover:border-black ease-linear duration-75'>
          <a href="#" className='relative flex flex-col items-start text-black'>
            <h2 className='inline-block pb-[3px] pl-[3px] text-[0.9em] leading-[130%] font-normal tracking-[-0.02em]'>YELLOW SUMMER PANTS</h2>
            <div className='relative'>
              <img src={image.arrivals1} alt="arrival" className='w-full h-full object-cover relative z-10 hover:opacity-0 transition-all' />
              <img src={image.arrivals2} alt="arrival" className='w-full h-full object-cover absolute left-0 top-0' />
            </div>
            <div className='relative top-[25px] flex overflow-hidden pr-[5px] justify-between items-center self-stretch font-normal'>
              <div className='relative top-[1px] text-[0.95em] leading-[100%] tracking-[-0.05em] line-through text-slate-500'>$ 49.00 USD</div>
              <div className='product-price'>$ 29.00 USD</div>
            </div>
          </a>
        </div>
        <div className='p-[60px] border border-solid hover:border-black ease-linear duration-75'>
          <a href="#" className='relative flex flex-col items-start text-black'>
            <h2 className='inline-block pb-[3px] pl-[3px] text-[0.9em] leading-[130%] font-normal tracking-[-0.02em]'>GRAY SOFT SWEATER</h2>
            <div className='relative'>
              <img src={image.arrivals3} alt="arrival" className='w-full h-full object-cover relative z-10 hover:opacity-0 transition-all' />
              <img src={image.arrivals4} alt="arrival" className='w-full h-full object-cover absolute left-0 top-0' />
            </div>
            <div className='relative top-[25px] flex overflow-hidden pr-[5px] justify-between items-center self-stretch font-normal'>
              <div className='relative top-[1px] text-[0.95em] leading-[100%] tracking-[-0.05em] line-through text-slate-500'>$ 55.00 USD</div>
              <div className='product-price'>$ 39.00 USD</div>
            </div>
          </a>
        </div>
        <div className='p-[60px] border border-solid hover:border-black ease-linear duration-75'>
          <a href="#" className='relative flex flex-col items-start text-black'>
            <h2 className='inline-block pb-[3px] pl-[3px] text-[0.9em] leading-[130%] font-normal tracking-[-0.02em]'>BABY. YELLOW DRESS</h2>
            <div className='relative'>
              <img src={image.arrivals5} alt="arrival" className='w-full h-full object-cover relative z-10 hover:opacity-0 transition-all' />
              <img src={image.arrivals6} alt="arrival" className='w-full h-full object-cover absolute left-0 top-0' />
            </div>
            <div className='relative top-[25px] flex overflow-hidden pr-[5px] justify-between items-center self-stretch font-normal'>
              <div className='relative top-[1px] text-[0.95em] leading-[100%] tracking-[-0.05em] line-through text-slate-500'>$ 35.00 USD</div>
              <div className='product-price'>$ 19.00 USD</div>
            </div>
          </a>
        </div>
        <div className='p-[60px] border border-solid hover:border-black ease-linear duration-75'>
          <a href="#" className='relative flex flex-col items-start text-black'>
            <h2 className='inline-block pb-[3px] pl-[3px] text-[0.9em] leading-[130%] font-normal tracking-[-0.02em]'>BLACK DRESS PANTS</h2>
            <div className='relative'>
              <img src={image.arrivals7} alt="arrival" className='w-full h-full object-cover relative z-10 hover:opacity-0 transition-all' />
              <img src={image.arrivals8} alt="arrival" className='w-full h-full object-cover absolute left-0 top-0' />
            </div>
            <div className='relative top-[25px] flex overflow-hidden pr-[5px] justify-between items-center self-stretch font-normal'>
              <div className='relative top-[1px] text-[0.95em] leading-[100%] tracking-[-0.05em] line-through text-slate-500'>$ 65.00 USD</div>
              <div className='product-price'>$ 39.00 USD</div>
            </div>
          </a>
        </div>
        <div className='p-[60px] border border-solid hover:border-black ease-linear duration-75'>
          <a href="#" className='relative flex flex-col items-start text-black'>
            <h2 className='inline-block pb-[3px] pl-[3px] text-[0.9em] leading-[130%] font-normal tracking-[-0.02em]'>NICE WIDE PANTS</h2>
            <div className='relative'>
              <img src={image.arrivals9} alt="arrival" className='w-full h-full object-cover relative z-10 hover:opacity-0 transition-all' />
              <img src={image.arrivals10} alt="arrival" className='w-full h-full object-cover absolute left-0 top-0' />
            </div>
            <div className='relative top-[25px] flex overflow-hidden pr-[5px] justify-between items-center self-stretch font-normal'>
              <div className='relative top-[1px] text-[0.95em] leading-[100%] tracking-[-0.05em] line-through text-slate-500'>$ 79.00 USD</div>
              <div className='product-price'>$ 45.00 USD</div>
            </div>
          </a>
        </div>
        <div className='p-[60px] border border-solid hover:border-black ease-linear duration-75'>
          <a href="#" className='relative flex flex-col items-start text-black'>
            <h2 className='inline-block pb-[3px] pl-[3px] text-[0.9em] leading-[130%] font-normal tracking-[-0.02em]'>CHILDREN'S SUIT</h2>
            <div className='relative'>
              <img src={image.arrivals12} alt="arrival" className='w-full h-full object-cover relative z-10 hover:opacity-0 transition-all' />
              <img src={image.arrivals11} alt="arrival" className='w-full h-full object-cover absolute left-0 top-0' />
            </div>
            <div className='relative top-[25px] flex overflow-hidden pr-[5px] justify-between items-center self-stretch font-normal'>
              <div className='relative top-[1px] text-[0.95em] leading-[100%] tracking-[-0.05em] line-through text-slate-500'>$ 85.00 USD</div>
              <div className='product-price'>$ 49.00 USD</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;