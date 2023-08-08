import React from 'react'
import { useStateContext } from '../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiFillCloseCircle, AiOutlineShopping, AiOutlineClose } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs'
import toast from 'react-hot-toast';
import Link from 'next/link';
import ProductCounter from './ProductCounter';


const Cart = () => {

  const { setShowCart, totalQuantities, cartItems } = useStateContext();

  return (
    <>
      {/* BACKGROUND SHADE DIV */}
      <div 
        className='flex justify-end w-full h-screen z-[60] bg-black opacity-70 fixed'
        onClick={() => {setShowCart(false)}}
      ></div>


      {/* CART DIV */}
      <div className='flex flex-col fixed right-0 w-[40%] max-w-[500px] h-screen z-[65] bg-white p-4'>
        <div className='flex items-center'>
          <AiOutlineLeft className='h-[12px] hover:h-[16px] hover:w-[16px] hover:cursor-pointer' onClick={() => {setShowCart(false)}} />
          <span className='font-semibold'>Your Cart</span>
          <span className='text-[14px] mx-4 text-red-600'>({totalQuantities} items)</span>
          <button
            type='button'
            className='ml-auto font-semibold flex items-center'
            onClick={() => {setShowCart(false)}}
          >Close<AiFillCloseCircle className='ml-1 h-[20px] w-[20px]' /></button>
        </div>


        {/* IF EMPTY CART */}
        {cartItems.length < 1 && (
          <div className='flex flex-col items-center mt-20'>
            <BsCart2 size={150} className='mb-6'/>
            <h3 className=''>Your Shopping Cart is Empty</h3>
            <Link href='/' className='mt-14'>
              <button 
                type='button'
                onClick={() => {setShowCart(false)}}
                className='p-[6px] bg-red-600 text-white rounded-lg hover:scale-110'
              >Continue Shopping</button>
            </Link>
          </div>
        )}

        {/* IF ITEMS IN CART */}
        <div className='mt-16'>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className='flex' key={item._id}>
              <img
                src={(item.image && item.image[0].url)}
                alt={item.name}
                width={1000}
                height={1000}
                className='w-[100px] h-[100px] rounded-xl object-cover'
              />
              <div className='flex justify-between flex-wrap w-full mr-4 p-2 font-semibold'>
                <h5 className=''>{item.name}</h5>
                <p className=''>${item.price}</p>
                <div className='w-full self-end'>
                  <ProductCounter className='' quantity={item.quantity} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    
  )
}

export default Cart;