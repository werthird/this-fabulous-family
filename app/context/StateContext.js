"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';



const Context = createContext();



export const StateContext = ({ children }) => {

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);



  // ADD TO CART
  const onAdd = () => {
    toast.success(`Added to the cart.`);
  }



  // INCREASE/DECREASE QUALTITY
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }
  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  }


  return (
    <Context.Provider 
      value={{
        showCart,
        setShowCart,
        totalQuantities,
        onAdd,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  )
};

 export const useStateContext = () => useContext(Context);