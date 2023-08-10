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
        <div className='flex w-2/5 justify-around text-[14px] font-bold'>
          <Link href={'../category/men'} className='hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>MEN</Link>
          <Link href={'../category/women'} className='hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>WOMEN</Link>
          <Link href={'../category/kids'} className='hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>KIDS</Link>
          <Link href={'../category/merch'} className='hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>HOME</Link>
        </div>
        <button 
          type='button' 
          className='flex justify-between w-fit absolute right-0 hover:scale-110'
          onClick={() => {setShowCart(true)}}
        >
          <BsCart2 className='h-5 w-5 mr-[10px]' />
          <span className='text-[12px] bg-[#F7882F] w-[16px] h-[16px] rounded-full absolute right-0'>{totalQuantities}</span>
        </button>
      </div>
    </>
  )
}

export default NavBar;