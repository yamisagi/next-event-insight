import React from 'react'

const SelectBox = ({
    title, onChange, typeList
}) => {
  return (
    <div className='flex-grow flex flex-col items-center mb-1 md:flex-row sm:flex-col'>
    <label className='text-gray-300 font-light text-sm mr-2 mb-1 md:mb-0'>
        {title}
    </label>
    <select
      className='border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'
      onChange={onChange}
    >
      <option value=''>Select {title}</option>
      {typeList.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  </div>
  )
}

export default SelectBox