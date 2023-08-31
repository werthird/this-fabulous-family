import React from 'react';

const CartCheckout = ({ cartItems, totalPrice, handleCheckout }) => {
  return (
    <>
      {cartItems.length >= 1 && (
        <div className='flex flex-col mr-4 mt-4'>
          <div className='flex justify-between font-semibold'>
            <h3>Subtotal:</h3>
            <h3>${totalPrice}</h3>
          </div>
          <button 
            type='button'
            className='my-4 self-center text-[20px] w-[50%] p-[2px] rounded-xl bg-[#F7882F] text-white'
            onClick={handleCheckout}
          >Pay With Strip</button>
        </div>
      )}
    </>
  )
};

export default CartCheckout;