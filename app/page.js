import { getProjects, getProducts } from '@/sanity/sanity.utils';
import HeroBanner from './components/HeroBanner';
import Infographic from './components/Infographic';
import ProductBanner from './components/ProductBanner';
import Image from 'next/image';
import Product from './components/Product';


export default async function Home() {

  const products = await getProducts();

  return (
    <main className='flex flex-col items-center w-full md:absolute'>

      <ProductBanner />

      <Infographic />

      <div className='w-full border-b border-black my-4 md:my-10'></div>

      <h2 className='w-full text-center text-[30px] md:text-[50px] font-semibold md:font-normal my-[30px]'>Best Selling Products</h2>

      <div className='flex justify-evenly flex-wrap w-full md:w-[80%]'>
        {products.slice(0, 4).map((product) => 
          <div className='w-[200px] md:w-[250px] h-[200px] md:h-[250px] p-2 my-2 md:mb-[120px] md:hover:scale-110 transition'>
            <Product key={product._id} product={product} />
          </div>
        )}
      </div>

      

    </main>
  )
};
