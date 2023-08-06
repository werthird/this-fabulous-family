import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';

const BurgerMenu = () => {

  const [display, setDisplay] = useState(true);

  return (
    <div className='flex justify-end'>

      {/* OPEN MENU */}
      <button onClick={() => setDisplay(!display)}><FiMenu className='h-8 w-8'/></button>


      {/* CLOSE MENU */}
      <div 
        className='flex flex-col h-screen absolute right-0 top-0 w-3/5 bg-color-main border border-black z-20' 
        style={{ display: display ? "none" : "block" }}>

        <button className='absolute right-4 top-4' 
          onClick={() => setDisplay(!display)}>
          <AiOutlineClose className='h-8 w-8 hover:rotate-3' />
        </button>

        <div className='flex flex-col text-[26px] mt-[8px] p-2'>
          <Link href={'../'} className='mb-[80px]' onClick={() => setDisplay(!display)}>Home</Link>
          <Link href={'../category/men'} className='py-2 font-semibold' onClick={() => setDisplay(!display)}>Men</Link>
          <Link href={'../category/women'} className='py-2 font-semibold' onClick={() => setDisplay(!display)}>Women</Link>
          <Link href={'../category/kids'} className='py-2 font-semibold' onClick={() => setDisplay(!display)}>Kids</Link>
          <Link href={'../category/merch'} className='py-2 font-semibold' onClick={() => setDisplay(!display)}>Merch</Link>
          <Link href={'../cart'} className='flex mt-[200px] ' onClick={() => setDisplay(!display)}>
            <p>Cart</p>
            <BsCart2 className='mt-[4px] ml-3 h-7 w-7' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu