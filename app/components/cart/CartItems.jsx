import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';



const CartItems = ({ cartItems, toggleCartItemQuantity, onRemove }) => {
  
  return (
    <section className='mt-16 h-[70%] overflow-y-auto'>
      {cartItems.length >= 1 && cartItems.map((item) => (
        <div key={item._id}>
          <div className='flex my-2'>


            {/* PRODUCT IMAGE */}
            <img
              src={(item.image && item.image[0].url)}
              alt={item.name}
              width={1000}
              height={1000}
              className='w-[100px] h-[100px] rounded-xl object-cover'
            />


            {/* PRODUCT INFO */}
            <div className='flex justify-between flex-wrap w-full mr-4 p-2 font-semibold'>


              {/* PRODUCT NAME */}
              <h5 className=''>{item.name}</h5>


              {/* PRODUCT PRICE */}
              <p className=''>${item.price}</p>


              {/* PRODUCT TYPE */}
              <div className='w-full text-gray-500 text-[14px]'>
                <p className='w-fit my-[4px] px-[4px] py-[2px] border border-gray-300'>
                  {item.phoneCaseType && item.phoneCaseType}
                </p>
              </div>


              {/* QUANTITY COUNTER */}
              <div className='w-[80%] self-end flex items-center'>
                <span 
                  className='w-[30px] p-[6px] border border-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-white transition'
                  onClick={() => toggleCartItemQuantity(item._id, 'dec') }
                >
                  <AiOutlineMinus className='m-auto'/>
                </span>
                <span className='w-[30px] p-[2px] text-center border-y border-gray-300 text-gray-500'>
                  {item.quantity}
                </span>
                <span 
                  className='w-[30px] p-[6px] border border-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-white transition'
                  onClick={() => toggleCartItemQuantity(item._id, 'inc') }
                >
                  <AiOutlinePlus className='m-auto' />
                </span>
              </div>


              {/* DELETE ITEM */}
              <button 
                type='button'
                className='self-end mb-[5px]'
                onClick={() => onRemove(item)}
              >
                <TiDelete className='h-[25px] w-[25px] hover:scale-110'/>
              </button>


            </div>
          </div>


          {/* DIVIDER */}
          <div className='w-full border-b border-gray-300'></div>


        </div>
      ))}
    </section>
  )
};

export default CartItems;