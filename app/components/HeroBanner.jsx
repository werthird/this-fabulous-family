import React from 'react';
import { outlineFont2, outlineFont3 } from '../fonts';

const HeroBanner = () => {

  return (
    <div className='flex justify-center w-full relative'>
      <div 
        className='w-full h-[270px] md:w-[1000px] md:h-[490px] opacity-60'
        style={{backgroundImage: `url('/banner_kids_img.png')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: 'center',
      }}></div>
      <div className='absolute flex flex-col w-full px-20'>
        <p className='text-[60px] md:text-[100px] font-extrabold self-center md:self-start md:-mt-10 md:-mb-6'>
          <span className={outlineFont2.className}>
            <span className='md:text-[150px]'>F</span>OSTER</span>
        </p>
        <p className='text-[60px] md:text-[90px] font-normal self-center md:self-center md:-my-10'>
          <span className={outlineFont3.className}><span className='md:text-[150px]'>A</span>doptive</span>
        </p>
        <p className='text-[60px] md:text-[100px] font-extrabold self-center md:self-end md:-mt-4'>
          <span className={outlineFont2.className}><span className='md:text-[150px]'>B</span>IOLOGICAL</span>
        </p>
      </div>
    </div>
  )
}

export default HeroBanner