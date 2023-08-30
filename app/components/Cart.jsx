import React from 'react'
import { useStateContext } from '../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiFillCloseCircle, AiOutlineShopping, AiOutlineClose } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';
import toast from 'react-hot-toast';
import getStripe from '../lib/getStripe';


const Cart = () => {

  const { setShowCart, totalQuantities, cartItems, totalPrice, toggleCartItemQuantity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  };


  return (
    <>
      {/* BACKGROUND SHADE DIV */}
      <div 
        className='hidden md:flex justify-end w-full h-screen z-[60] bg-black opacity-70 fixed'
        onClick={() => {setShowCart(false)}}
      ></div>


      {/* CART DIV */}
      <div className='flex flex-col fixed right-0 w-[40%] w-full md:max-w-[500px] h-screen z-[65] bg-white p-4'>
        <div className='flex items-center'>
          <AiOutlineLeft className='h-[12px] hover:h-[16px] hover:w-[16px] hover:cursor-pointer' onClick={() => {setShowCart(false)}} />
          <span className='font-semibold'>Your Cart</span>
          <span className='text-[14px] mx-4 text-[#F7882F]'>({totalQuantities} items)</span>
          <button
            type='button'
            className='ml-auto font-semibold flex items-center hover:scale-110'
            onClick={() => {setShowCart(false)}}
          >Close<AiFillCloseCircle className='ml-1 h-[20px] w-[20px]' /></button>
        </div>


        {/* IF EMPTY CART */}
        {cartItems.length < 1 && (
          <div className='flex flex-col items-center mt-20'>
            <BsCart2 size={150} className='mb-6'/>
            <h3 className=''>Your Shopping Cart is Empty</h3>
            <button 
              type='button'
              onClick={() => {setShowCart(false)}}
              className='p-[6px] bg-[#F7882F] text-white rounded-lg hover:scale-110 mt-[50px]'
            >Continue Shopping</button>
          </div>
        )}


        {/* IF ITEMS IN CART */}
        <div className='mt-16 h-[70%] overflow-y-auto'>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div key={item._id}>
              <div className='flex my-2'>
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
                  <div className='w-[80%] self-end flex items-center'>
                    <span 
                      className='w-[40px] p-[8px] border border-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-white transition'
                      onClick={() => toggleCartItemQuantity(item._id, 'dec') }
                    >
                      <AiOutlineMinus className='m-auto'/>
                    </span>
                    <span className='w-[34px] p-[4px] text-center border-y border-gray-300 text-gray-500'>
                      {item.quantity}
                    </span>
                    <span 
                      className='w-[40px] p-[8px] border border-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-white transition'
                      onClick={() => toggleCartItemQuantity(item._id, 'inc') }
                    >
                      <AiOutlinePlus className='m-auto' />
                    </span>
                  </div>
                  <button 
                    type='button'
                    className='self-end mb-[5px]'
                    onClick={() => onRemove(item)}
                  ><TiDelete className='h-[25px] w-[25px] hover:scale-110'/></button>
                </div>
              </div>
              <div className='w-full border-b border-gray-300'></div>
            </div>
          ))}
        </div>


        {/* CART SUBTOTAL AND CHECKOUT */}
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
      </div>
    </>
    
  )
}

export default Cart;