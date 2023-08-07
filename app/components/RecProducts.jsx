import React from 'react';
import Product from './Product';


const RecProducts = ({ products }) => {
  return (
    <div className='flex flex-col items-center w-full mt-[70px]'>
      <h2 className='text-[30px] font-bold mb-[20px]'>You may also like</h2>
      <div className='flex justify-evenly w-full'>
        {products.map((product) => 
          <div className='w-[200px] h-[200px] hover:scale-110 transition'>
            <Product key={product._id} product={product} />
          </div>
        )}
      </div>
    </div>
  )
}

export default RecProducts;