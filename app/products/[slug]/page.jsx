import React from 'react';
import { getProduct, getProducts } from '@/sanity/sanity.utils';

import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Product from '../../components/Product';
import ProductImage from '@/app/components/ProductImage';




const ProductDetails = async ({ params }) => {

  const slug = params.slug;
  const { name, image, details, price } = await getProduct(slug);
  const products = await getProducts();

  const qty = 0;
  

  return (
    <div className='flex flex-wrap justify-evenly w-[80%] mt-[50px]'>

      <ProductImage image={image} name={name} />

      <div className='content-container w-[40%]'>
        <h1 className='text-[40px] font-bold'>{name}</h1>
        <div className='flex text-red-600 items-center mb-[20px]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <p className='ml-2'>(20)</p>
        </div>
        <div className='details my-[20px]'>
          <h4 className='text-[20px] font-bold'>Details:</h4>
          <p>{details}</p>
          <p className='text-[20px] font-bold my-[16px] text-red-600'>${price}</p>
        </div>
        <div className='flex'>
          <h4 className='text-[18px] font-bold mr-[10px]'>Quantity:</h4>
          <span className='w-[40px] p-[8px] border border-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-white transition'>
            <AiOutlineMinus className='m-auto'/>
          </span>
          <span className='w-[34px] p-[4px] text-center border-y border-gray-300 text-gray-500'>
            {qty}
          </span>
          <span className='w-[40px] p-[8px] border border-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-white transition'>
            <AiOutlinePlus className='m-auto' />
          </span>
        </div>
        <div className='flex justify-evenly w-full mt-[40px]'>
          <button 
            type='button' 
            className='w-full max-w-[170px] py-[6px] text-red-600 border border-gray-300 shadow-inner hover:scale-110 transition'
          >
            Add to Cart
          </button>
          <button 
            type='button' 
            className='w-full max-w-[170px] py-[6px] bg-red-600 text-white hover:scale-110 transition'
          >
            Buy Now
          </button>
        </div>
      </div>
      
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
    </div>
  )
};

export default ProductDetails;