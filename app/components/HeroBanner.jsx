import React from 'react';
import { outlineFont2, logoFont } from '../fonts';

const HeroBanner = () => {

  return (
    <div className='flex justify-center w-full relative top-0'>
      <div 
        className='flex justify-center w-full h-full md:w-[1000px] md:h-[450px]'>
        <img
            src='/bg-banner-image.png'
            alt={'Background Image of Family'}
            width={20000}
            height={20000}
            className='w-fit h-full object-cover self-center'
          />
      </div>
      <div className='absolute flex flex-col justify-evenly w-full px-20 h-full'>
        <p className='text-[80px] md:text-[100px] font-extrabold self-center md:self-start md:-mt-10 md:-mb-6'>
          <span className={outlineFont2.className}>
            <span className='text-[100px] md:text-[150px]'>F</span>OSTER</span>
        </p>
        <p className='text-[100px] md:text-[120px] self-center md:self-center md:-my-20'>
          <span className='font-outline'><span className='md:text-[170px]'>A</span>doptive</span>
        </p>
        <p className='text-[80px] md:text-[100px] font-extrabold self-center md:self-end md:-mt-4'>
          <span className={outlineFont2.className}><span className='text-[100px] md:text-[150px]'>B</span>IOLOGICAL</span>
        </p>
      </div>
    </div>
  )
}

export default HeroBanner