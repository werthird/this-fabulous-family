import Link from 'next/link';
import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import Cart from './Cart';
import { useStateContext } from '@/app/context/StateContext';
import MerchDropMenu from './MerchDropMenu';
import { IoMdArrowDropdown } from 'react-icons/io';




const NavBar = () => {

  const { setShowCart, totalQuantities } = useStateContext();
  const [ dropMenuDisplay, setDropMenuDisplay ] = useState(false);

  const dropMenuButton = () => {
    setDropMenuDisplay(!dropMenuDisplay);
  }

  return (
    <>
      <div className='flex justify-center items-center w-full mb-4 relative'>
        <div className='flex w-2/5 justify-around text-[14px] font-bold'>
          <Link href={'/category/men'} className='hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>MEN</Link>
          <Link href={'/category/women'} className='hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>WOMEN</Link>
          <Link href={'/category/kids'} className='hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>KIDS</Link>
          {/* <Link href={''} className='hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>HOME</Link> */}
          <div className='relative flex justify-center'>
            <button 
              type='button' 
              onClick={dropMenuButton} 
              // onMouseEnter={dropMenuButton}              
              className='flex items-center hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>
                MERCH
                <IoMdArrowDropdown className='w-[20px] h-[20px]' />
            </button>
            <MerchDropMenu dropMenuDisplay={dropMenuDisplay} dropMenuButton={dropMenuButton} />
          </div>
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