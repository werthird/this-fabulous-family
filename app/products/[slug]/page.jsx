import React from 'react';
import { getProduct, getProducts } from '@/sanity/sanity.utils';
import Product from '@/app/components/Product';
import ProductImage from '@/app/components/prodDetComps/ProductImage';
import ProductInfo from '@/app/components/prodDetComps/ProductInfo';
import RecProducts from '@/app/components/RecProducts';


const ProductDetails = async ({ params }) => {

  const slug = params.slug;
  const { name, image, details, price } = await getProduct(slug);
  const products = await getProducts();

  return (
    <div className='flex flex-wrap justify-evenly w-[80%] mt-[50px]'>

      <ProductImage image={image} name={name} />

      <ProductInfo name={name} details={details} price={price} />
      
      <RecProducts products={products} />
      
    </div>
  )
};

export default ProductDetails;