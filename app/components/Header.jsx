'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu';
import NavBar from './NavBar';
import { logoFont, logoFont2, outlineFont2 } from '../fonts';
import Cart from './Cart';
import { useStateContext } from '@/app/context/StateContext';
import { VscDebugBreakpointLog } from 'react-icons/vsc';


const Header = () => {

  const { showCart } = useStateContext();

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
    <>
      <header className='flex flex-col justify-between items-between w-full md:w-[80%] pt-4 mb-6 px-1 fixed top-0 rounded-b-2xl z-50 bg-white bg-opacity-80 shadow-lg shadow-white/80'>

          <Link href={'/'} className='flex flex-col items-center absolute z-10 text-[25px] top-2'>
            <span className={`${logoFont.className} font-outline-2`}>This <span className='text-[30px]'>FAB</span>ulous Family</span>
            <span className='w-[90%] border-b border-[#F7882F] -mt-2'></span>
            <span className=' flex items-center text-[12px] text-black font-semibold'>Foster <VscDebugBreakpointLog className='mx-[5px] text-[#F7882F]' /> Adoptive <VscDebugBreakpointLog className='mx-[5px] text-[#F7882F]' /> Biological</span>
          </Link>

          {width < breakpoint ? <BurgerMenu /> : <NavBar />}

      </header>

      {showCart && <Cart />}
    </>
  )
};

export default Header;