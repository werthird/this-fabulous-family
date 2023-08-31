'use client';

import React from 'react';
import { useStateContext } from '@/app/context/StateContext';
import Review from './components/Review';
import Details from './components/Details';
import Quantity from './components/Quantity';
import Type from './components/Type';
import toast from 'react-hot-toast';

const ProductInfo = ({ product }) => {

  const { name, description, price } = product;
  const { decQty, incQty, qty, onAdd, setShowCart, phoneCaseType, setPhoneCaseType  } = useStateContext();

  const handleAddToCart = () => {
    if (phoneCaseType === '') {
      toast.error('You need to select a Phone Case Type');
      return;
    };
    onAdd(product, qty, phoneCaseType);
  };

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  const handleCaseType = (value) => {
    setPhoneCaseType(value);
  };


  return (
    <div className='mx-auto md:mx-0 content-container w-[90%] md:w-[40%]'>

      {/* TITLE */}
      <div className='flex justify-between items-between w-[90%] md:w-full'>
        <h1 className='text-[40px] font-bold'>{name}</h1>
        <p className='text-[25px] font-bold my-[16px] text-[#F7882F]'>${price}</p>
      </div>
        

      {/* REVIEW */}
      <Review />


      {/* DETAILS */}
      <Details description={description} />


      {/* QUANTITY */}
      <Quantity decQty={decQty} incQty={incQty} qty={qty}  />
      

      {/* STYLE */}
      <Type setPhoneCaseType={handleCaseType} />


      {/* CART/BUY BUTTONS */}
      <div className='flex justify-evenly w-full mt-[50px]'>
        <button 
          type='button' 
          className='w-full max-w-[170px] py-[6px] text-[#F7882F] border border-gray-300 shadow-inner hover:scale-110 transition'
          onClick={handleAddToCart}
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