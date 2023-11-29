'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const EventCard = ({ event }) => {
  const router = useRouter();
  return (
    <div
      className='max-w-sm h-[600px] rounded overflow-hidden shadow-lg md:w-64 m-5'
      onClick={() => {
        router.push(`/details/${event.id}`);
      }}
    >
      {/* // TODO: add image */}
      {/* <Image
        src='/img/card-top.jpg'
        alt='Sunset in the mountains'
        width={500}
        height={500}
      /> */}
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{event.name}</div>
        <p className='text-gray-700 text-base'>
          {event.description.substring(0, 120)}...
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {event.start_date.substring(0, 10).split('-').reverse().join('/')}{' '}
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {event.location.address}{' '}
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {event.category}{' '}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
