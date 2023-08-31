import React from 'react';
import { getPhoneCase, getPhoneCases } from '@/sanity/sanity.utils';
import Product from '@/app/components/Product';
import ProductImage from '@/app/components/product/ProductImage';
import ProductInfo from '@/app/components/product/ProductInfo';


const ProductDetails = async ({ params }) => {

  console.log(params, 'params here');

  const slug = params.slug;
  const phoneCase = await getPhoneCase(slug);
  const { name, image, description, price } = phoneCase;
  const phoneCases = await getPhoneCases();

  return (
    <div className='flex flex-wrap flex-col md:flex-row justify-evenly w-full md:w-[80%] mt-[100px]'>

      <ProductImage image={image} name={name} />

      <ProductInfo product={phoneCase} />
      
      
      <div className='flex flex-col items-center w-full md:mt-[120px]'>
        <h2 className='text-[30px] font-bold mb-[20px]'>You may also like</h2>
        <div className='flex justify-evenly flex-wrap w-full'>
          {phoneCases.slice(0, 4).map((phoneCase) => 
            <div className='w-[200px] h-[200px] md:hover:scale-110 transition'>
              <Product key={phoneCase._id} product={phoneCase} />
            </div>
          )}
        </div>
      </div>
      
    </div>
  )
};

export default ProductDetails;