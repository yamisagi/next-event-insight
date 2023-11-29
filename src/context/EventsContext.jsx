import React, { createContext, useReducer } from 'react';
import { eventReducer } from '@/reducer/eventReducer';

const initialState = {
  events: [],
  filteredEvents: [],
  cities: [],
  categories: [],
  selectedCity: '',
  selectedCategory: '',
  selectedDate: '',
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

export const useEvents = () => useContext(EventsContext);

export default EventsProvider;
