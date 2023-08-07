'use client';

import React from 'react';
import { useStateContext } from '@/app/context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ProductInfo = ({ name, details, price }) => {

  const { decQty, incQty, qty, onAdd } = useStateContext();


  return (
    <div className='content-container w-[40%]'>
        <h1 className='text-[40px] font-bold'>{name}</h1>

        {/* REVIEW */}
        <div className='flex text-red-600 items-center mb-[20px]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <p className='ml-2'>(20)</p>
        </div>
        <div className='details my-[20px]'>
          <h4 className='text-[20px] font-bold'>Details:</h4>
          <p>{details}</p>
          <p className='text-[20px] font-bold my-[16px] text-red-600'>${price}</p>
        </div>


        {/* QUANTITY */}
        <div className='flex'>
          <h4 className='text-[18px] font-bold mr-[10px]'>Quantity:</h4>
          <span 
            className='w-[40px] p-[8px] border border-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-white transition'
            onClick={decQty}
          >
            <AiOutlineMinus className='m-auto'/>
          </span>
          <span className='w-[34px] p-[4px] text-center border-y border-gray-300 text-gray-500'>
            {qty}
          </span>
          <span 
            className='w-[40px] p-[8px] border border-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-white transition'
            onClick={incQty}
          >
            <AiOutlinePlus className='m-auto' />
          </span>
        </div>


        {/* BUTTONS */}
        <div className='flex justify-evenly w-full mt-[40px]'>
          <button 
            type='button' 
            className='w-full max-w-[170px] py-[6px] text-red-600 border border-gray-300 shadow-inner hover:scale-110 transition'
            onClick={() => onAdd()}
          >
            Add to Cart
          </button>
          <button 
            type='button' 
            className='w-full max-w-[170px] py-[6px] bg-red-600 text-white hover:scale-110 transition'
          >
            Buy Now
          </button>
        </div>
      </div>
  )
}

export default ProductInfo;