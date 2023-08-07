import { getProjects, getProducts } from '@/sanity/sanity.utils';
import HeroBanner from './components/HeroBanner';
import Infographic from './components/Infographic';
import ProductBanner from './components/ProductBanner';
import Image from 'next/image';
import Product from './components/Product';


export default async function Home() {

  const products = await getProducts();

  return (
    <main className='flex flex-col items-center w-full'>

      <HeroBanner />

      <Infographic />
      
      <h2 className='w-full text-center text-[50px] my-[30px]'>Best Selling Products</h2>

      <div className='flex justify-evenly flex-wrap w-[80%]'>
        {products.map((product) => 
          <div className='w-[250px] h-[250px] p-2 my-4 mb-[120px] hover:scale-110 transition'>
            <Product key={product._id} product={product} />
          </div>
        )}
      </div>

      <ProductBanner />

    </main>
  )
};
