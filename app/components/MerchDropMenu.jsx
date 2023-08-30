import Link from 'next/link';
import React from 'react';
import { BsFillBagFill, BsFillPhoneFill } from 'react-icons/bs';
import { FaMugHot, FaRedhat } from 'react-icons/fa';

const MerchDropMenu = ({ dropMenuDisplay, dropMenuButton }) => {


  return (
    <div className='absolute top-[20px]' style={{display: dropMenuDisplay ? 'flex' : 'none'}}>
      {/* <div className='w-[20px] h-[40px] relative overflow-hidden'>
        <div className='right-0 h-[80px] w-[40px] shadow-[20px_-20px_rgb(255,255,255)] absolute rounded-[50%]'></div>
      </div> */}
      <div className='flex justify-center flex-col rounded-b-xl min-w-[175px] min-h-[175px] px-4 pt-4 bg-gradient-to-t from-white from-90% to-transparent'>
        <Link 
          href={'/category/phone-case'} 
          onClick={dropMenuButton} 
          className='flex my-auto hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>
            <BsFillPhoneFill className='mr-2' />
            PHONE CASES
        </Link>
        <Link 
          href={'/category/mugs'} 
          onClick={dropMenuButton}
          className='flex my-auto hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>
            <FaMugHot className='mr-2' />
            MUGS
        </Link>
        <Link 
          href={'/category/hats'} 
          onClick={dropMenuButton}
          className='flex my-auto hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>
            <FaRedhat className='mr-2' />
            HATS
        </Link>
        <Link 
          href={'/category/bags'} 
          onClick={dropMenuButton}
          className='flex my-auto hover:scale-110 hover:text-[#F7882F] hover:border-b hover:border-[#F7882F] transition'>
            <BsFillBagFill className='mr-2' />
            BAGS
        </Link>
      </div>
      {/* <div className='w-[20px] h-[40px] relative overflow-hidden'>
        <div className='h-[80px] w-[40px] shadow-[-20px_-20px_rgb(255,255,255)] absolute rounded-[50%]'></div>
      </div> */}
    </div>
    
  )
};

export default MerchDropMenu;