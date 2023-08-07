import React from 'react'
import { useStateContext } from '../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiFillCloseCircle, AiOutlineClose } from 'react-icons/ai';
import toast from 'react-hot-toast';


const Cart = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <>
      {/* BACKGROUND SHADE DIV */}
      <div 
        className='flex justify-end absolute w-full h-screen z-[60] bg-black opacity-70'
        onClick={() => {setShowCart(false)}}
      ></div>


      {/* CART DIV */}
      <div className='flex flex-col absolute right-0 w-[40%] max-w-[500px] h-screen z-[65] bg-white p-4'>
        <div className='flex items-center'>
          <AiOutlineLeft className='h-[12px]' onClick={() => {setShowCart(false)}} />
          <span className='font-semibold'>Your Cart</span>
          <span className='text-[14px] mx-4 text-red-600'>({totalQuantities} items)</span>
          <button
            type='button'
            className='ml-auto font-semibold flex items-center'
            onClick={() => {setShowCart(false)}}
          >Close<AiFillCloseCircle className='ml-1 h-[20px] w-[20px]' /></button>
        </div>
        
      </div>
    </>
    
  )
}

export default Cart