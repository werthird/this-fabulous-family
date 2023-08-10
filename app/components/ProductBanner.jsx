import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getBanner } from '@/sanity/sanity.utils';



const ProductBanner = async () => {

  const [ banner ] = await getBanner();

  return (

    <div className='h-screen md:h-full w-full relative mt-20 md:mt-0'>
      {banner.image && (
        <Image
          src={banner.image}
          alt={banner.name}
          width={10000}
          height={9000}
          className="object-cover md:object-contain md:w-[100%] h-[50%] md:h-[100%] opacity-80"
        />
      )}
      <div className='flex flex-col justify-evenly md:justify-center items-center md:items-start md:absolute top-0 w-full min-h-[40%] md:h-full md:p-16 p-4 bg-[#f6efe4] md:bg-transparent text-white'>
        <p className='md:mt-8'>{banner.smallText}</p>
        <h3 className='text-[20px] md:text-[50px] font-extrabold'>{banner.midText}</h3>
        <h2 className='text-[40px] md:text-[120px] font-extrabold uppercase'>{banner.largeText1}</h2>
        <Link href={`/products/be-still-shirt`}>
          <button type='button' className='text-[16px] md:text-[20px] text-white uppercase font-semibold bg-[#F7882F] p-2 px-4 rounded-xl my-2 md:my-10 hover:scale-110 transition'>{banner.buttonText}</button>
        </Link>
        <div className='md:self-end flex flex-col items-center md:items-end'>
          <h5 className='font-bold text-[18px] underline'>Description</h5>
          <p className='font-semibold md:font-normal max-w-[350px]'>{banner.desc}</p>
        </div>
      </div>
    </div>
  )
};

export default ProductBanner;