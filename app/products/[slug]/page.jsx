import React from 'react';
import { getProduct, getProducts } from '@/sanity/sanity.utils';
import Product from '@/app/components/Product';
import ProductImage from '@/app/components/prodDetComps/ProductImage';
import ProductInfo from '@/app/components/prodDetComps/ProductInfo';
import RecProducts from '@/app/components/RecProducts';


const ProductDetails = async ({ params }) => {

  const slug = params.slug;
  const product = await getProduct(slug);
  const { name, image, details, price } = product;
  const products = await getProducts();

  return (
    <div className='flex flex-wrap justify-evenly w-[80%] mt-[50px]'>

      <ProductImage image={image} name={name} />

      <ProductInfo product={product} />
      
      <RecProducts products={products} />
      
    </div>
  )
};

export default ProductDetails;