'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu';
import NavBar from './NavBar';
import { logoFont, logoFont2, outlineFont2 } from '../fonts';


const Header = () => {

  const [width, setWidth] = useState(null);
  const breakpoint = 620;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className='flex flex-col justify-between items-between w-full md:w-[80%] pt-4 mb-6 px-1 sticky top-0 bg-inherit rounded-b-2xl z-50'>

      
      <Link href={'/'} className='absolute z-10 text-[25px] font-[700]'><span className={logoFont.className}>This FABulous Family</span></Link>

      {width < breakpoint ? <BurgerMenu /> : <NavBar />}

      <div className='w-[98%] border-b border-black self-center'></div>

    </div>
  )
};

export default Header;