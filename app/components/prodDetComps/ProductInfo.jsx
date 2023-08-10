'use client';

import React from 'react';
import { useStateContext } from '@/app/context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ProductInfo = ({ product }) => {

  const { name, details, price } = product;
  const { decQty, incQty, qty, onAdd, setShowCart  } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }


  return (
    <div className='mx-auto md:mx-0 content-container w-[90%] md:w-[40%]'>
      <div className='flex justify-between items-between w-[90%] md:w-full'>
        <h1 className='text-[40px] font-bold'>{name}</h1>
        <p className='text-[25px] font-bold my-[16px] text-[#F7882F]'>${price}</p>
      </div>
        

      {/* REVIEW */}
      <div className='flex text-[#F7882F] items-center mb-[20px]'>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <p className='ml-2'>(20)</p>
      </div>
      <div className='my-[20px]'>
        <h4 className='text-[20px] font-bold'>Details:</h4>
        <p>{details}</p>
      </div>


      {/* QUANTITY */}
      <div className='flex items-center'>
        <h4 className='font-bold mr-[10px]'>Quantity:</h4>
        <div className='flex items-center'>
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
      </div>


      {/* CART/BUY BUTTONS */}
      <div className='flex justify-evenly w-full mt-[50px]'>
        <button 
          type='button' 
          className='w-full max-w-[170px] py-[6px] text-[#F7882F] border border-gray-300 shadow-inner hover:scale-110 transition'
          onClick={() => onAdd(product, qty)}
        >
          Add to Cart
        </button>
        <button 
          type='button' 
          className='w-full max-w-[170px] py-[6px] bg-[#F7882F] text-white hover:scale-110 transition'
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default ProductInfo;