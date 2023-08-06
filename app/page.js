import { getProjects, getProducts } from '@/sanity/sanity.utils';
import HeroBanner from './components/HeroBanner';
import Infographic from './components/Infographic';
import ProductBanner from './components/ProductBanner';
import Image from 'next/image';
import Product from './components/Product';




export default async function Home() {

  const projects = await getProjects();
  const products = await getProducts();

  return (
    <main className='flex flex-col items-center w-full'>

      <HeroBanner />

      <Infographic />

      {/* <ProductBanner /> */}

      <Product />

      {/* RECOMMENDED PRODUCTS */}
      <div className='w-[80%]'>
        <h2 className='w-full text-center text-[50px] my-[30px]'>Best Selling Products</h2>
        <div className='flex justify-evenly flex-wrap w-full'>
          <div className='border border-black w-[200px] h-[200px] mb-4'></div>
          <div className='border border-black w-[200px] h-[200px] mb-4'></div>
          <div className='border border-black w-[200px] h-[200px] mb-4'></div>
          <div className='border border-black w-[200px] h-[200px] mb-4'></div>
        </div>
      </div>


      {/* <div>
        {projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
        {projects[0].image && (
            <Image
              src={projects[0].image}
              alt={projects[0].name}
              width={750}
              height={300}
              className="border border-black rounded-lg"
            />
          )}
      </div>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <p>{product.name}</p>
            <p>{product.details}</p>
          </div>
        ))}
      </div> */}
    </main>
  )
};
