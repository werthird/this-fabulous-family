import React from 'react';
import { BsCart2 } from 'react-icons/bs';

const EmptyCart = ({ cartItems, setShowCart }) => {
  return (
    <>
      {cartItems.length < 1 && (
        <section className='flex flex-col items-center mt-20'>
          <BsCart2 size={150} className='mb-6'/>
          <h3 className=''>Your Shopping Cart is Empty</h3>
          <button 
            type='button'
            onClick={() => {setShowCart(false)}}
            className='p-[6px] bg-[#F7882F] text-white rounded-lg hover:scale-110 mt-[50px]'
          >Continue Shopping</button>
        </section>
      )}
    </>
  )
};

export default EmptyCart;