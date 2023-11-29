import React from 'react'

const DatePicker = ({title,onChange,value}) => {
  return (
    <div className='flex flex-col items-center gap-4 md:flex-row sm:flex-col'>
    <label className='text-gray-300 font-light text-sm mr-2 mb-1 md:mb-0'>
      {title}
    </label>
    <input
    value={value}
      type='date'
      onChange={onChange}
      className='border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'
    />
  </div>
  )
}

export default DatePicker