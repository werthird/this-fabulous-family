'use client';

import React, { useState } from 'react';



const ProductImage = ({image, name}) => {

  const [index, setIndex] = useState(0);

  return (
    <div className='image-container w-full md:w-[50%]'>
      <img
        src={(image && image[index].url)}
        alt={name}
        width={1000}
        height={1000}
        className="w-[500px] h-[400px] rounded-xl object-cover"
      />
      <div className='flex'>
        {image?.map((item, i) => (
          <img
            key={i}
            src={(item && image[i].url)}
            alt={name}
            width={1000}
            height={1000}
            className='w-[80px] h-[80px] m-2 rounded-xl object-cover hover:scale-110 transition'
            onMouseEnter={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductImage;