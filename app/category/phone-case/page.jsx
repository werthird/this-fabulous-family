import Product from '@/app/components/Product';
import { getPhoneCases } from '@/sanity/sanity.utils';
import React from 'react';

export default async function PhoneCase() {

  const phoneCases = await getPhoneCases();

  return (
    <main className='flex flex-col justify-center w-full md:w-[80%]'>
      <h2 className='w-full text-center text-[30px] md:text-[50px] font-semibold md:font-normal mt-[100px] my-[30px]'>Phone Cases</h2>

      <div className='flex justify-center flex-wrap w-full md:w-full'>
        {console.log(phoneCases)}
        {phoneCases.map((phoneCase) => 
          <div className='w-[200px] md:w-[250px] h-[200px] md:h-[250px] p-2 my-2 md:mb-[60px] md:hover:scale-110 transition'>
            <Product key={phoneCase._id} product={phoneCase} />
          </div>
        )}
      </div>
    </main>
  )
};