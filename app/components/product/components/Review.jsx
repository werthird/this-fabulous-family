import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Review = () => {
  return (
    <section className='flex text-[#F7882F] items-center mb-[20px]'>
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiOutlineStar />
      <p className='ml-2'>(20)</p>
    </section>
  )
};

export default Review;