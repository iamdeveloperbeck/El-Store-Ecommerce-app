import React from 'react';

import image from '../constants/image';
import './global.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="about-us">
        <h6 className='mb-[30px] text-[1em] font-[500]'>about us</h6>
        <p className='max-w-[440px] mb-[20px] text-[0.9em] leading-[160%] font-[300] tracking-[-0.01em]'>Inspired by modern nature, furious "60s and elegant beauty, brand founders offer designs, which not only reflect the aesthetics, but also are going to become statement elements in the wardrobe of a modern boys and girls.</p>
        <a href="#" className='pt-[2px] pb-[2px] text-[#777] flex items-center gap-[20px] hover:text-[#000]'>
          <img src={image.instagram} alt="instagram" className='' />
          instagram
        </a>
      </div>
      <nav className='footer-nav'>
        <h6 className='mb-[30px] text-[1em] font-[500]'>navigation</h6>
        <a href="#" className='footer-link'>Home</a>
        <a href="#" className='footer-link'>Products <br /></a>
        <a href="#" className='footer-link'>About Us</a>
        <a href="#" className='footer-link'>Contact Us <br /></a>
        <a href="#" className='footer-link'>Questions <br /></a>
        <a href="#" className='footer-link'>Lookbooks</a>
        <a href="#" className='footer-link'>Privacy Policy</a>
        <a href="#" className='footer-link'>Style Guide <br /></a>
        <a href="#" className='footer-link'>License <br /></a>
        <a href="#" className='footer-link'>Changelog <br /></a>
      </nav>
      <div className='mb-[15px]'>
        <h6 className='mb-[30px] text-[1em] font-[500]'>be first</h6>
        <div className="footer-subs">
          <input type="text" placeholder='Email to Subscribe' className='input-field' required />
          <input type="submit" value="Submit" className='button' />
          <p className='footer-paragraph'>Be the first to know about our private sales, new arrivals and seasonal.</p>
        </div>
      </div>
      <div className="footer-links">
        <div className='flex flex-col items-start'>
          <h6 className='mb-[30px] text-[1em] font-[500]'>collection</h6>
          <a href="#" className='footer-link'>Casual Style</a>
          <a href="#" className='footer-link'>Daily Trend <br /></a>
          <a href="#" className='footer-link'>New Feel</a>
        </div>
        <div className='flex flex-col items-start'>
          <h6 className='mb-[30px] text-[1em] font-[500]'>lookbook</h6>
          <a href="#" className='footer-link'>Freedom Inside</a>
          <a href="#" className='footer-link'>Kids Territory <br /></a>
          <a href="#" className='footer-link'>S.O.T.</a>
        </div>
      </div>
      <p className='text-[0.8em] font-[300] tracking-[-0.01em]'>
        Powered by Webflow <br />
        Created by Beck Sattorov
      </p>
    </div>
  );
};

export default Footer;