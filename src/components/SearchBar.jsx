import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className='w-[160px] lg:flex flex-row justify-between sm:ml-6 place-items-center'>
      <div className='flex'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <MagnifyingGlassIcon
              className='h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </div>
          <input
            type='text'
            name='search'
            id='search'
            className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Search'
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
