import React from 'react';

import { getProducts } from '@/sanity/sanity.utils';
import Image from 'next/image';

const Product = async () => {

  const [ products ] = await getProducts();
  console.log(products)

  return (
    <div>
      <p>{products.name}</p>
      <p>{products.price}</p>
      <p>{products.details}</p>
      <div>
        {products.image && (
          <Image
            src={products.image}
            alt={products.name}
            style={{ objectFit: "contain", width: "100%", height: '100%' }}
            width={500}
            height={500}
            className="border border-black"
          />
        )}
      </div>
    </div>
  )
};

export default Product;