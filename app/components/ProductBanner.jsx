import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getBanner } from '@/sanity/sanity.utils';



const ProductBanner = async () => {

  const [ banner ] = await getBanner();

  return (

    <div className='min-h-fit w-full relative'>
      {banner.image && (
        <Image
          src={banner.image}
          alt={banner.name}
          style={{ objectFit: "contain", width: "100%", height: '100%' }}
          width={1000}
          height={1000}
          className=""
        />
      )}
      <div className='flex flex-col justify-center absolute top-0 w-full h-full md:p-16 p-4'>
        <p>{banner.smallText}</p>
        <h3 className='text-[20px] md:text-[50px] font-extrabold'>{banner.midText}</h3>
        <h2 className='text-[40px] md:text-[120px] font-extrabold uppercase'>{banner.largeText1}</h2>
        <div>
          <Link href={`/products/${banner.product}`}>
            <button type='button' className='text-[20px] text-white uppercase font-semibold bg-red-500 p-2 rounded-xl md:my-10'>{banner.buttonText}</button>
          </Link>
        </div>
        <div className='self-end flex flex-col items-end'>
          <h5 className='font-bold text-[18px] underline'>Description</h5>
          <p>{banner.desc}</p>
        </div>
      </div>
    </div>
  )
};

export default ProductBanner;