'use client';
import React from 'react';
import { useEvents } from '@/context/EventsContext';
import EventCard from './EventCard';
import NoEventsFound from './NoEventsFound';

const ConditonalEvents = () => {
  const { state } = useEvents();
  const today = new Date();
  return (
    <div className='event-page'>
      {/* We could filter events by date but user may want to see out dated */}
      {state.isFiltered
        ? state.filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        : state.events
            .filter((event) => new Date(event.start_date) > today)
            .map((event, index) => <EventCard key={index} event={event} />)}
      {state.isFiltered && state.filteredEvents.length === 0 && (
        <NoEventsFound />
      )}
    </div>
  );
};

export default ConditonalEvents;
