'use client';
import React from 'react';
import { useEvents } from '@/context/EventsContext';
import EventCard from './EventCard';

const OutDatedEvents = () => {
  const { state } = useEvents();
  const today = new Date();
  return (
    <>
      {!state.isFiltered && (
        <div className='event-page mt-5 border-t-2 border-gray-400'>
          <h1 className='col-span-full text-2xl mt-2 font-bold text-center text-black'>
            Out Dated Events
          </h1>
          {state.events
            .filter((event) => new Date(event.start_date) < today)
            .map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
        </div>
      )}
    </>
  );
};

export default OutDatedEvents;
