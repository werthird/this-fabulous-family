import Link from 'next/link';
import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import Cart from './Cart';
import { useStateContext } from '@/app/context/StateContext';




const NavBar = () => {

  const { setShowCart, totalQuantities } = useStateContext();

  return (
    <>
      <div className='flex justify-center items-center w-full mb-4 relative'>
        <div className='flex w-2/5 justify-around text-[18px]'>
          <Link href={'../category/men'}>Men</Link>
          <Link href={'../category/women'}>Women</Link>
          <Link href={'../category/kids'}>Kids</Link>
          <Link href={'../category/merch'}>Merch</Link>
        </div>
        <button 
          type='button' 
          className='flex justify-between w-[68px] absolute right-0'
          onClick={() => {setShowCart(true)}}
        >
          <p>Cart</p>
          <BsCart2 className='h-5 w-5 mr-[10px]' />
          <span className='text-[12px] bg-red-600 w-[16px] h-[16px] rounded-full absolute right-0'>{totalQuantities}</span>
        </button>
      </div>
    </>
  )
}

export default NavBar;