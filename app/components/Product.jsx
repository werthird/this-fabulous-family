import React from 'react';
import Link from 'next/link';


const Product = ({ product: { image, name, slug, price, category } }) => {

  console.log(category)

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='overflow-hidden relative w-full h-full'>
        <Link 
          href={`/products/${category}/${slug}`}
          className=''>
          <img
            src={(image && image[0].url)}
            alt={name}
            width={1000}
            height={1000}
            className="rounded-xl object-cover w-full h-full absolute top-0 left-0"
          />
        </Link>
      </div>
      <p className='whitespace-nowrap overflow-hidden max-text-[16px]'>{name}</p>
      <p className='font-bold'>${price}</p>
    </div>
  )
};

export default Product;