import React from 'react';

const FilterBar = ({ open }) => {
  return open ? (
    <div className='flex flex-row justify-between items-center w-full h-16 px-6 bg-filterbar'>
      <div className='flex flex-row w-2/6 justify-between items-center'>
        <div className='flex grow flex-row items-center'>
          <label className='text-gray-300 font-light text-sm mr-2'>
            Categories
          </label>
          <select className='border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
            <option value=''>Select a Category</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
        </div>
        <div className='flex flex-row grow items-center'>
          <label className='text-gray-300 font-light text-sm mr-2'>
            Cities
          </label>
          <select className='border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
            <option value=''>Select a City</option>
            <option>City 1</option>
            <option>City 2</option>
            <option>City 3</option>
          </select>
        </div>
      </div>
    </div>
  ) : null;
};

export default FilterBar;
