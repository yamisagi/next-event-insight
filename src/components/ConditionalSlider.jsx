'use strict';
import React from 'react';
import { useEvents } from '@/context/EventsContext';
import EventSlider from './EventSlider';

const ConditionalSlider = () => {
  const { state } = useEvents();
  return (
    <>
      {!state.isFiltered && state.events.length > 0 && (
        <EventSlider events={state.events} />
      )}
      {state.isFiltered && state.filteredEvents.length > 0 && (
        <EventSlider events={state.filteredEvents} />
      )}
    </>
  );
};

export default ConditionalSlider;
