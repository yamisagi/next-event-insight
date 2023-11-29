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

  const filterEventsByDate = () => {
    const filteredEventsbyDate = state.events.filter((event) => {
      const eventDate = new Date(event.start_date);
      const startDate = new Date(state.selectedStartDate);
      const endDate = new Date(state.selectedEndDate);
      const eventEndDate = new Date(event.end_date);
      return eventDate >= startDate && eventEndDate <= endDate;
    });
    dispatch({
      type: 'SET_FILTERED_EVENTS',
      payload: filteredEventsbyDate,
    });
    dispatch({ type: 'SET_IS_FILTERED', payload: true });
  };
  const getCityFromAddress = (address) => address.split(', ')[2];

  return open ? (
    <div
      className='bg-filterbar grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-8 place-items-center w-full 
    md:w-3/4 lg:w-2/3  mx-auto  md:my-4 md:rounded-md md:shadow-md 
    '
    >
      <div className='flex-grow flex flex-col items-center mb-1 md:flex-row sm:flex-col'>
        <label className='text-gray-300 font-light text-sm mr-2 mb-1 md:mb-0'>
          Categories
        </label>
        <select
          className='border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'
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

      <div className='flex flex-col grow items-center mb-1 md:flex-row sm:flex-col'>
        <label className='text-gray-300 font-light text-sm mr-2 mb-1 md:mb-0'>
          Cities
        </label>
        <select
          className='border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'
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

      <div className='flex flex-col items-center gap-4 md:flex-row sm:flex-col'>
        <label className='text-gray-300 font-light text-sm mr-2 mb-1 md:mb-0'>
          Date
        </label>
        <input
          type='date'
          onChange={(e) => {
            dispatch({
              type: 'SET_SELECTED_START_DATE',
              payload: e.target.value,
            });
            console.log(e.target.value);
          }}
          className='border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'
        />
      </div>
      <div className='flex flex-col items-center gap-4 md:flex-row sm:flex-col'>
        <label className='text-gray-300 font-light text-sm mx-2 mb-1 md:mb-0'>
          To
        </label>
        <input
          onChange={(e) => {
            dispatch({
              type: 'SET_SELECTED_END_DATE',
              payload: e.target.value,
            });
            filterEventsByDate();
          }}
          type='date'
          className='border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'
        />
      </div>
    </div>
  ) : null;
};

export default FilterBar;
