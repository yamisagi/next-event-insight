import React, { useEffect, useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEvents } from '@/context/EventsContext';

const SearchBar = () => {
  const { state, dispatch } = useEvents();
  const searchRef = useRef(' ');

  useEffect(() => {
    const searchEvents = (searchTerm) => {
      if (searchTerm.trim() !== '') {
        const filtered = state.events.filter((event) =>
          event.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        dispatch({ type: 'SET_IS_FILTERED', payload: true });
        dispatch({ type: 'SET_FILTERED_EVENTS', payload: filtered });
      } else {
        dispatch({ type: 'SET_IS_FILTERED', payload: false });
        dispatch({ type: 'SET_FILTERED_EVENTS', payload: [] });
      }
    };

    const handleInputChange = () => {
      const searchTerm = searchRef.current.value.trim();
      if (searchTerm !== '') {
        const timeoutId = setTimeout(() => {
          searchEvents(searchTerm);
        }, 200);

        return () => {
          clearTimeout(timeoutId);
        };
      } else {
        dispatch({ type: 'CLEAR_FILTERS' });
      }
    };

    searchRef.current.addEventListener('input', handleInputChange);

    return () => {};
  }, [searchRef, state.events, dispatch]);

  return (
    <div className='search-bar'>
      <div className='flex'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <MagnifyingGlassIcon
              className='h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </div>
          <input
            ref={searchRef}
            type='text'
            name='search'
            id='search'
            className='search-input'
            placeholder='Search'
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
