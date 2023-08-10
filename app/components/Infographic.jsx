import React from 'react';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import { logoFont } from '../fonts';

const Infographic = () => {
  return (
    <div className='flex flex-col items-center w-full min-h-[550px] -mt-10 md:mt-0 md:p-12'>
      <span className={`${logoFont.className} font-outline-2 text-[40px] md:text-[50px]`}>This <span className='text-[45px] md:text-[60px]'>FAB</span>ulous Family</span>
      <span className=' flex items-center text-[20px] text-black font-semibold'>
        Foster 
        <VscDebugBreakpointLog className='mx-[5px] text-[#F7882F]' /> 
        Adoptive <VscDebugBreakpointLog className='mx-[5px] text-[#F7882F]' /> 
        Biological
      </span>

      <div className='flex flex-col md:flex-row justify-evenly w-[90%] min-h-[300px] mt-6 md:mt-10'>

        <div className='flex flex-col items-center justify-evenly w-full md:w-[30%] h-[300px] rounded-xl my-2 md:my-0 px-2 bg-[#f6efe4]'>
          <img
            src={'/awareness_image.png'}
            alt={'megaphone awareness image'}
            width={1000}
            height={1000}
            className='w-[150px] h-[100px] object-cover mt-2'
          />
          <p className='text-[30px] w-[80%] border-b border-black text-center mt-6'>Awareness</p>
          <p className='text-center'>Bringing awareness to all those who are on this FABulous family journey! Our FAB swag says it all!</p>
        </div>

        <div className='flex flex-col items-center justify-evenly w-full md:w-[30%] h-[300px] rounded-xl my-2 md:my-0 bg-[#f6efe4]'>
          <img
            src={'/support_image_2.png'}
            alt={'megaphone awareness image'}
            width={1000}
            height={1000}
            className='w-[200px] h-[100px] object-cover mt-2'
          />
          <p className='text-[30px] w-[80%] border-b border-black text-center'>Support</p>
          <p className='text-center'>Proceeds from all purchases go to supporting families in foster care.</p>
        </div>

        <div className='flex flex-col items-center justify-evenly w-full md:w-[30%] h-[300px] rounded-xl my-2 md:my-0 px-2 bg-[#f6efe4]'>
          <img
            src={'/comfort_image.png'}
            alt={'megaphone awareness image'}
            width={1000}
            height={1000}
            className='w-[110px] h-[120px] object-cover mt-2'
          />
          <p className='text-[30px] w-[80%] border-b border-black text-center'>Comfort</p>
          <p className='text-center'>Sometimes, as FAB families, we just want a little comfort. Our products are top quality and super comfortable.</p>
        </div>
      </div>
    </div>
  )
};

export default Infographic;