'use client';
import React from 'react';
import { useEvents } from '@/context/EventsContext';


const FilterBar = ({ open }) => {
  const { state, dispatch } = useEvents();
  const { isFiltered, events, filteredEvents, cities, categories } = state;

  const filterEventsByCategory = (category) => {
    if (category === '') {
      clearFilters();
    } else {
      const filtered = isFiltered
        ? filteredEvents.filter((event) => event.category === category)
        : events.filter((event) => event.category === category);

      updateFilteredEvents(filtered);
    }
  };

  const filterEventsByCity = (city) => {
    if (city === '') {
      clearFilters();
    } else {
      const filtered = isFiltered
        ? filteredEvents.filter(
            (event) => getCityFromAddress(event.location.address) === city
          )
        : events.filter(
            (event) => getCityFromAddress(event.location.address) === city
          );

      updateFilteredEvents(filtered);
    }
  };

  const clearFilters = () => {
    dispatch({ type: 'SET_IS_FILTERED', payload: false });
    dispatch({ type: 'SET_FILTERED_EVENTS', payload: [] });
  };

  const updateFilteredEvents = (filtered) => {
    dispatch({ type: 'SET_IS_FILTERED', payload: true });
    dispatch({ type: 'SET_FILTERED_EVENTS', payload: filtered });
  };

  const getCityFromAddress = (address) => address.split(', ')[2];

  return open ? (
    <div className='flex md:flex-row sm:flex-col items-center w-full h-16 px-6 bg-filterbar'>
      <div className='flex flex-row w-2/6 justify-between items-center flex-wrap p-2'>
        <div className='flex grow flex-row items-center mb-1'>
          <label className='text-gray-300 font-light text-sm mr-2'>
            Categories
          </label>
          <select
            className='border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            onChange={(e) => filterEventsByCategory(e.target.value)}
          >
            <option value=''>Select a Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-row grow items-center'>
          <label className='text-gray-300 font-light text-sm mr-2'>
            Cities
          </label>
          <select
            className='border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            onChange={(e) => filterEventsByCity(e.target.value)}
          >
            <option value=''>Select a City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  ) : null;
};

export default FilterBar;
