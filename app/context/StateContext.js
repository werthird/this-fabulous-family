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
  const [phoneCaseType, setPhoneCaseType] = useState('');


  let foundProduct;
  let index;


  // ADD TO CART
  const onAdd = (product, quantity, phoneCaseType) => {

    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    const productPrice = product.price * quantity;

    setTotalPrice((prevTotalPrice) => parseFloat((prevTotalPrice + productPrice).toFixed(2)));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      const newCartItem = { ...product, phoneCaseType };
      setCartItems([...cartItems, newCartItem]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  }



  // INCREASE/DECREASE QUALTITY
  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  }
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }
  

  // INCREASE/DECREASE CART PRODUCT QUANTITY
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => parseFloat((prevTotalPrice + foundProduct.price).toFixed(2)));
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => parseFloat((prevTotalPrice - foundProduct.price).toFixed(2)));
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
      }
    }
  }


  // REMOVE FROM CART
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }


  return (
    <Context.Provider 
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalQuantities,
        totalPrice,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        qty,
        incQty,
        decQty,
        phoneCaseType,
        setPhoneCaseType,
      }}
    >
      {children}
    </Context.Provider>
  )
};

 export const useStateContext = () => useContext(Context);