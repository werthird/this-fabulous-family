import React from 'react';
import Link from 'next/link';


const Product = ({ product: { image, name, slug, price } }) => {

  return (
    <div className='flex flex-col items-center'>
      <p>{name}</p>
      <p>Slug: {slug}</p>
      <p>Price: ${price}</p>
      <Link href={`/product/${slug.current}`}>
        <div className=''>
          <img
            src={(image && image[0].url)}
            alt={name}
            style={{ objectFit: "contain", width: "100%", height: '100%' }}
            width={1000}
            height={1000}
            className=""
          />
        </div>
      </Link>
    </div>
  )
};

export default Product;