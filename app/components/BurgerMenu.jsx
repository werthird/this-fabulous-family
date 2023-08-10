import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillCloseCircle, AiOutlineClose, AiOutlineLeft } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { useStateContext } from '../context/StateContext';

const BurgerMenu = () => {

  const [display, setDisplay] = useState(true);
  const { setShowCart, totalQuantities, cartItems, totalPrice, toggleCartItemQuantity, onRemove } = useStateContext();

  return (
    <div className='flex justify-end'>

      {/* OPEN MENU */}
      <button onClick={() => setDisplay(!display)}><FiMenu className='h-8 w-8'/></button>


      {/* CLOSE MENU */}
      <div className='flex flex-col h-[600px] absolute right-0 top-0 w-3/5 bg-[#f6efe4] z-20 rounded-bl-[400px] px-4' 
        style={{ display: display ? "none" : "block" }}>

        <div className='flex justify-between items-center mt-6'>
          <Link href={'../'} 
            className='text-[26px]' 
            onClick={() => setDisplay(!display)}>
            Home
          </Link>
          <button className='' 
            onClick={() => setDisplay(!display)}>
            <AiFillCloseCircle className='h-8 w-8 hover:rotate-3' />
          </button>
        </div>
        

        <div className='flex flex-col text-[26px] mt-[8px] ml-[10px] p-2'>
          <Link href={'../category/men'} className='py-2 font-semibold' onClick={() => setDisplay(!display)}>Men</Link>
          <Link href={'../category/women'} className='py-2 font-semibold' onClick={() => setDisplay(!display)}>Women</Link>
          <Link href={'../category/kids'} className='py-2 font-semibold' onClick={() => setDisplay(!display)}>Kids</Link>
          <Link href={'../category/merch'} className='py-2 font-semibold' onClick={() => setDisplay(!display)}>Home</Link>
        </div>

        <button 
          type='button'
          className='flex text-[26px] mt-[14px]' 
          onClick={() => {
            setDisplay(!display)
            setShowCart(true)
          }}>
          <p>Cart</p>
          <div className='flex relative w-[50px] mt-[4px]'>
            <BsCart2 className='ml-3 h-7 w-7' />
            <span className='flex justify-center items-center w-[20px] h-[20px] text-[16px] bg-[#F7882F] rounded-full absolute right-0'>{totalQuantities}</span>
          </div>
        </button>

      </div>
    </div>
  )
}

export default BurgerMenu