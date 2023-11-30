'use client';
import React from 'react';
import { useEvents } from '@/context/EventsContext';
import DatePicker from './DatePicker';
import SelectBox from './SelectBox';

const FilterBar = () => {
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

    // Reset the selected dates
    setTimeout(() => {
      dispatch({ type: 'SET_SELECTED_START_DATE', payload: '' });
      dispatch({ type: 'SET_SELECTED_END_DATE', payload: '' });
    }, 5000);
  };
  const getCityFromAddress = (address) => address.split(', ')[2];

  return (
    <div
      className='filter-bar'
    >
      <SelectBox
        title={'Category'}
        onChange={(e) => filterEventsByCategory(e.target.value)}
        typeList={categories}
      />
      <SelectBox
        title={'City'}
        onChange={(e) => filterEventsByCity(e.target.value)}
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
  );
};

export default FilterBar;
