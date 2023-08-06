import Link from 'next/link';
import React from 'react';
import { BsCart2 } from 'react-icons/bs';




const NavBar = () => {
  return (
    <div className='flex justify-center items-center w-full mb-4 relative'>
      <div className='flex w-2/5 justify-around text-[18px]'>
        <Link href={'../category/men'}>Men</Link>
        <Link href={'../category/women'}>Women</Link>
        <Link href={'../category/kids'}>Kids</Link>
        <Link href={'../category/merch'}>Merch</Link>
      </div>
      <Link href={'../cart'} className='flex justify-between w-[60px] absolute right-0'>
        <p>Cart</p>
        <BsCart2 className='h-5 w-5' />
      </Link>
    </div>
  )
}

export default NavBar;