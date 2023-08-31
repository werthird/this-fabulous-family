import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Quantity = ({ decQty, incQty, qty }) => {
  return (
    <section className='flex justify-between items-center w-full'>

      {/* HEADING */}
      <h4 className='font-bold'>Quantity:</h4>

      {/* COUNTER */}
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
    </section>
  )
};

export default Quantity;