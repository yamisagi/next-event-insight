import React from 'react';
import Image from 'next/image';

const EventCard = () => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg md:w-64 m-5'>
      {/* <Image
        src='/img/card-top.jpg'
        alt='Sunset in the mountains'
        width={500}
        height={500}
      /> */}
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
        <p className='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #photography
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #travel
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #winter
        </span>
      </div>
    </div>
  );
};

export default EventCard;
