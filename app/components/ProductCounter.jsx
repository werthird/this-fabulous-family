import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '@/app/context/StateContext';


const ProductCounter = ({ quantity }) => {

  const { decQty, incQty, qty } = useStateContext();

  const displayedQuantity = quantity !== undefined ? quantity : qty;

  return (
    <div className='flex items-center'>
      <span 
        className='w-[40px] p-[8px] border border-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-white transition'
        onClick={decQty}
      >
        <AiOutlineMinus className='m-auto'/>
      </span>
      <span className='w-[34px] p-[4px] text-center border-y border-gray-300 text-gray-500'>
        {displayedQuantity}
      </span>
      <span 
        className='w-[40px] p-[8px] border border-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-white transition'
        onClick={incQty}
      >
        <AiOutlinePlus className='m-auto' />
      </span>
    </div>
  )
};

export default ProductCounter;