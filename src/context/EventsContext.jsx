'use client';
import React, { createContext, useReducer, useContext, useEffect } from 'react';
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
    'Cinema City',
    'Folk Town',
    'Modern City',
    'Futuristic City',
  ],
  categories: ['Dance', 'Concert', 'Film', 'Theater'],
  selectedCity: '',
  selectedCategory: '',
  selectedStartDate: '',
  selectedEndDate: '',
  lastDetailPage: '1', // Default to page 1
  isFiltered: false,
  loading: true,
  filterBarOpen: false,
  lastPlacePage: 'Rock Arena', // Default to Rock Arena
  currentNav: 'Home',
};

export const EventsContext = createContext();

const EventsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_API_KEY
        );
        const data = await res.json();
        console.log(data);
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_EVENTS', payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
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
