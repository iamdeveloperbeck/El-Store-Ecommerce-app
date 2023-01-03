import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import image from '../constants/image';
import '../container/global.css';


const Header = () => {
  return (
    <motion.div 
      initial={{ scale: '-1', opacity: 0}}
      whileInView={{ scale: '1', opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      className='relative w-full h-screen'>
      <Swiper 
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        effect="fade"
        speed={800}
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000 }}
        className='w-full h-screen relative'
      > 
        <SwiperSlide className='relative'>
          <img src={image.heroImage1} alt="" className='w-full h-full object-cover' />
          <div className='slider-backdrop'></div>
          <div className='absolute z-10 top-[25vh] flex flex-col justify-center text-right items-center justify-items-start w-full h-[50vh]'>
            <div>
              <motion.h1   initial={{ opacity: 0, x: '-100px', }} transition={{ delay: 0.3, duration: 0.7 }}
  whileInView={{ opacity: 1, x: 0 }} variants={fadeIn('up', 'spring', 0.5, 1)} className='text-[18vw] font-extrabold leading-[1.1] text-white'>Elegant</motion.h1>
              <motion.p
                initial={{ x: '50px', opacity: 0 }}
                whileInView={{ x: '0', opacity: 1 }}
                transition={{ delay: 0.3, duration: 2 }}
                className='text-[20px] text-white leading-[1.3] text-right'>just life, just your feeling.</motion.p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={image.heroImage2} alt="" className='w-full h-full object-cover' />
          <div className='slider-backdrop'></div>
          <div className='absolute z-10 top-[25vh] flex flex-col justify-center text-left items-start pl-[7%] justify-items-start w-full h-[50vh]'>
            <div>
              <motion.h1 variants={fadeIn('up', 'spring', 0.5, 1)} className='text-[18vw] font-extrabold leading-[1.1] text-white'>Daily</motion.h1>
              <motion.p
                initial={{ x: '50px', opacity: 0 }}
                whileInView={{ x: '0', opacity: 1 }}
                transition={{ delay: 0.3, duration: 3 }}
                className='text-[20px] text-white leading-[1.3] text-left ml-4 md:ml-1'>Casual elegance for everyday.</motion.p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={image.heroImage3} alt="" className='w-full h-full object-cover' />
          <div className='slider-backdrop'></div>
          <div className='absolute z-10 top-[25vh] flex flex-col justify-center text-left items-center justify-items-start w-full h-[50vh]'>
            <div>
              <motion.p className='text-[20px] text-white leading-[1.3] text-left ml-4 md:ml-1'>Comfortable children's collection.</motion.p>
              <motion.h1 className='text-[18vw] font-extrabold leading-[1.1] text-white'>Little one</motion.h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Header;