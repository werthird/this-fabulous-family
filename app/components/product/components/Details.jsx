import React from 'react';

const Details = ({ description }) => {
  return (
    <section className='my-[20px]'>
      <h4 className='text-[20px] font-bold mb-2'>Details:</h4>
      <article className='ml-4 max-h-[200px] overflow-y-scroll overscroll-contain border border-gray-200 rounded-xl p-2 text-[14px]'>
        {description.map((desc) =>
          <p className='mb-4'>{desc.children[0].text}</p>
        )}
      </article>
    </section>
  )
};

export default Details;