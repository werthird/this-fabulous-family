import React from 'react';
import { getProduct, getProducts, getPhoneCase } from '@/sanity/sanity.utils';
import Product from '@/app/components/Product';
import ProductImage from '@/app/components/product/ProductImage';
import ProductInfo from '@/app/components/product/ProductInfo';


const ProductDetails = async ({ params }) => {

  console.log(params, 'params here');

  const slug = params.slug;
  const product = await getProduct(slug);
  const { name, image, details, price } = product;
  const products = await getProducts();

  return (
    <div className='flex flex-wrap flex-col md:flex-row justify-evenly w-full md:w-[80%] mt-[100px]'>

      <ProductImage image={image} name={name} />

      <ProductInfo product={product} />
      
      
      <div className='flex flex-col items-center w-full mt-[120px] md:mt-[70px]'>
        <h2 className='text-[30px] font-bold mb-[20px]'>You may also like</h2>
        <div className='flex justify-evenly flex-wrap w-full'>
          {products.map((product) => 
            <div className='w-[200px] h-[200px] md:hover:scale-110 transition'>
              <Product key={product._id} product={product} />
            </div>
          )}
        </div>
      </div>
      
    </div>
  )
};

export default ProductDetails;