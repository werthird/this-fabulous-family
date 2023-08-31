import React from 'react'
import { useStateContext } from '../context/StateContext';
import toast from 'react-hot-toast';
import getStripe from '../lib/getStripe';
import EmptyCart from './cart/EmptyCart';
import CartHeader from './cart/CartHeader';
import CartItems from './cart/CartItems';
import CartCheckout from './cart/CartCheckout';


const Cart = () => {

  const { setShowCart, totalQuantities, cartItems, totalPrice, toggleCartItemQuantity, onRemove, phoneCaseType } = useStateContext();

  console.log(cartItems);

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


        {/* CART HEADER */}
        <CartHeader setShowCart={setShowCart} totalQuantities={totalQuantities} />


        {/* IF EMPTY CART */}
        <EmptyCart cartItems={cartItems} setShowCart={setShowCart} />


        {/* IF ITEMS IN CART */}
        <CartItems cartItems={cartItems} toggleCartItemQuantity={toggleCartItemQuantity} onRemove={onRemove} phoneCaseType={phoneCaseType} />
        


        {/* CART SUBTOTAL AND CHECKOUT */}
        <CartCheckout cartItems={cartItems} totalPrice={totalPrice} handleCheckout={handleCheckout} />


      </div>
    </>
    
  )
}

export default Cart;