'use client';
import React, { useCallback, useEffect } from 'react';
import { useEvents } from '@/context/EventsContext';
import DatePicker from './DatePicker';
import SelectBox from './SelectBox';
import ProjectButton from './ProjectButton';

const FilterBar = () => {
  const { state, dispatch } = useEvents();
  const { events, cities, categories, selectedCity, selectedCategory } = state;

  const filterByCategoryAndCity = useCallback(() => {
    const updateFilteredEvents = (filtered) => {
      dispatch({ type: 'SET_FILTERED_EVENTS', payload: filtered });
      dispatch({ type: 'SET_IS_FILTERED', payload: true });
    };
    const filtered = events.filter((event) => {
      const eventCity = getCityFromAddress(event.location.address);
      if (selectedCity !== '' && selectedCategory !== '') {
        return (
          eventCity === selectedCity && event.category === selectedCategory
        );
      }
      if (selectedCity && selectedCategory === '') {
        return eventCity === selectedCity;
      }
      if (selectedCategory && selectedCity === '') {
        return event.category === selectedCategory;
      }
      return true;
    });
    updateFilteredEvents(filtered);
  }, [events, dispatch, selectedCity, selectedCategory]);

  useEffect(() => {
    filterByCategoryAndCity();
  }, [selectedCity, selectedCategory, filterByCategoryAndCity]);

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS'});
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

    // Reset the selected dates
    setTimeout(() => {
      dispatch({ type: 'SET_SELECTED_START_DATE', payload: '' });
      dispatch({ type: 'SET_SELECTED_END_DATE', payload: '' });
    }, 5000);
  };
  const getCityFromAddress = (address) => address.split(', ')[2];

  return (
    <div className='filter-container'>
      <div className='filter-bar'>
        <SelectBox
          title={'Category'}
          onChange={(e) => {
            dispatch({
              type: 'SET_SELECTED_CATEGORY',
              payload: e.target.value,
            });
            filterByCategoryAndCity();
          }}
          typeList={categories}
        />
        <SelectBox
          title={'City'}
          onChange={(e) => {
            dispatch({
              type: 'SET_SELECTED_CITY',
              payload: e.target.value,
            });
            filterByCategoryAndCity();
          }}
          typeList={cities}
        />
        <DatePicker
          title={'From'}
          value={state.selectedStartDate}
          onChange={(e) => {
            dispatch({
              type: 'SET_SELECTED_START_DATE',
              payload: e.target.value,
            });
          }}
        />
        <DatePicker
          title={'To'}
          value={state.selectedEndDate}
          onChange={(e) => {
            dispatch({
              type: 'SET_SELECTED_END_DATE',
              payload: e.target.value,
            });
            filterEventsByDate();
          }}
        />
      </div>
      <ProjectButton
        className='mt-5 mb-0'
        color='blue-gray'
        type='gradient'
        text={'Clear Filters'}
        size='sm'
        onClick={() => {
          clearFilters();
        }}
      />
    </div>
  );
};

export default FilterBar;
