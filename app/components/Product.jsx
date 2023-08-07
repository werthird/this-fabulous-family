import React from 'react';
import Link from 'next/link';


const Product = ({ product: { image, name, slug, price } }) => {

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='overflow-hidden relative w-full h-full'>
        <Link href={`/products/${slug}`} className=''>
          <img
            src={(image && image[0].url)}
            alt={name}
            width={1000}
            height={1000}
            className="rounded-xl object-cover w-full h-full absolute top-0 left-0"
          />
        </Link>
      </div>
      <p>{name}</p>
      <p className='font-bold'>${price}</p>
    </div>
  )
};

export default Product;