'use client'

import { useEffect } from "react"
import { useStateContext } from "./context/StateContext";



const localStorage = () => {
  // Set the value received from the local storage to a local state
  const { cartItems, setCartItems, onAdd } = useStateContext();

  let array;

  useEffect(() => {
    if ( localStorage.getItem('cartItems') ) {
      const stringArray = localStorage.getItem('cartItems');
      setCartItems = JSON.parse(stringArray);
      console.log('no local storage')
    } else {
      console.log('yes local storage')
    };
  }, [])

  // When user submits the form, save the favorite number to the local storage
  const saveToLocalStorage = e => {
    e.preventDefault()
    localStorage.setItem("favoriteNumber", favoriteNumber)
  }

  return (
    <></>
  )
};

export default localStorage;