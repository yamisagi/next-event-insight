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
        <Image
          src={event.images[0]}
          alt={event.name}
          width={200}
          height={200}
          content='center'
          className='w-full h-48 object-cover'
        />
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
