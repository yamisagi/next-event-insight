'use client';
import React, { createContext, useReducer, useContext } from 'react';
import { eventReducer } from '@/reducer/eventReducer';

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
    'Royale Town',
    'Cinema City',
    'Salsa City',
    'Indie Town',
    'Folk Town',
    'Modern City',
    'Futuristic City',
    'Salsa City',
    'Indie Town',
  ],
  categories: ['Dance', 'Concert', 'Film', 'Theater'],
  selectedCity: '',
  selectedCategory: '',
  selectedDate: '',
  lastDetailPage: '1',
};

export const EventsContext = createContext();

const EventsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);
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
