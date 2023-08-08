'use client';

import React from 'react';
import { useStateContext } from '@/app/context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import ProductCounter from '../ProductCounter';

const ProductInfo = ({ product }) => {

  const { name, details, price } = product;
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
        <div className='flex items-center'>
          <h4 className='font-bold mr-[10px]'>Quantity:</h4><ProductCounter />
        </div>


        {/* BUTTONS */}
        <div className='flex justify-evenly w-full mt-[50px]'>
          <button 
            type='button' 
            className='w-full max-w-[170px] py-[6px] text-red-600 border border-gray-300 shadow-inner hover:scale-110 transition'
            onClick={() => onAdd(product, qty)}
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