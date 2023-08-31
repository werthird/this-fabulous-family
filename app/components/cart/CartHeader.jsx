import React from 'react';
import { AiFillCloseCircle, AiOutlineLeft } from 'react-icons/ai';

const CartHeader = ({ setShowCart, totalQuantities }) => {
  return (
    <section className='flex items-center'>
      <AiOutlineLeft className='h-[12px] hover:h-[16px] hover:w-[16px] hover:cursor-pointer' onClick={() => {setShowCart(false)}} />
      <span className='font-semibold'>Your Cart</span>
      <span className='text-[14px] mx-4 text-[#F7882F]'>({totalQuantities} items)</span>
      <button
        type='button'
        className='ml-auto font-semibold flex items-center hover:scale-110'
        onClick={() => {setShowCart(false)}}
      >Close<AiFillCloseCircle className='ml-1 h-[20px] w-[20px]' /></button>
    </section>
  )
};

export default CartHeader;