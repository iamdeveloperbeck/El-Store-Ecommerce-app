import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import './global.css';

import image from '../constants/image';
import { motion, useCycle } from 'framer-motion';
// import { useDimensions } from '../use-dimensions';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    // const [show, showInput] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

  return (
    <motion.div 
        initial={{ y: '-20px', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={navbar ? 'fixed top-0 flex w-full h-[96px] md:h-[72px] bg-transparent pr-[30px] pl-[20px] items-center z-20 active' : 'fixed z-10 top-0 flex w-full h-[96px] md:h-[72px] bg-transparent pr-[30px] pl-[20px] items-center'}>
        <div className="flex items-center">
            <a href="#" className='mr-[12px] p-[12px] nav-logo'>
                <div id='logo' className='text-[35px] md:text-[24px] leading-[100%] text-white font-[300]'>El</div>
            </a>
            <nav className='flex items-center lg:hidden'>
                <a href="#" id='links' className='mt-[4px] mr-[10px] ml-[10px] pl-[12px] pr-[12px] pt-[5px] pb-[5px] uppercase text-[14px] text-white nav-link'>All products</a>
                <a href="#" id='links' className='mt-[4px] mr-[10px] ml-[10px] pl-[12px] pr-[12px] pt-[5px] pb-[5px] uppercase text-[14px] text-white nav-link'>About Us</a>
                <a href="#" id='links' className='mt-[4px] mr-[10px] ml-[10px] pl-[12px] pr-[12px] pt-[5px] pb-[5px] uppercase text-[14px] text-white nav-link'>Contact Us</a>
                <a href="#" id='links' className='mt-[4px] mr-[10px] ml-[10px] pl-[12px] pr-[12px] pt-[5px] pb-[5px] uppercase text-[14px] text-white nav-link'>Questions</a>
                <a href="#" id='links' className='mt-[4px] mr-[10px] ml-[10px] pl-[12px] pr-[12px] pt-[5px] pb-[5px] uppercase text-[14px] text-white nav-link'>Lookbooks</a>
                <div className='flex items-center w-[30px] form'>
                <input type="text" className='outline-none bg-transparent w-full h-full text-white hidden input' />
                <CiSearch id='links' className='text-[24px] text-white icon' />
            </div>
            </nav>
        </div>
        <div className="flex items-center ml-auto gap-2">
            <img src={image.bag} alt="" className='cursor-pointer bag' />
            <RxHamburgerMenu className='text-[26px] hidden lg:block text-white cursor-pointer' />
        </div>
    </motion.div>
  );
};

export default Navbar;