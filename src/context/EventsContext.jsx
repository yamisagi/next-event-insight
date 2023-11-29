'use client';
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { eventReducer } from '@/reducer/eventReducer';
import { data } from '@/__mocks__/data';

const initialState = {
  events: [],
  filteredEvents: [],
  cities: [
    'Rock City',
    'Royale Town',
    'Metro City',
    'Urban City',
    'Groovy Town',
    'Show City',
    'Mystery Town',
    'Salsa City',
    'Indie Town',
    'Ballet City',
    'Melody Town',
    'Cinema City',
    'Folk Town',
    'Modern City',
    'Futuristic City',
  ],
  categories: ['Dance', 'Concert', 'Film', 'Theater'],
  selectedCity: '',
  selectedCategory: '',
  selectedDate: '',
  lastDetailPage: '1',
  isFiltered: false,
};

export const EventsContext = createContext();

const EventsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);
  useEffect(() => {
    const fetchEvents = () => {
      dispatch({ type: 'SET_EVENTS', payload: data });
    };
    fetchEvents();
    console.log('We are fetching events');
  }, [state.isFiltered]);

  return (
    <EventsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventsContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within a EventsProvider');
  }
  return context;
};

export default EventsProvider;
