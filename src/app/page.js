'use client';

import EventCard from '@/components/EventCard';
import EventSlider from '@/components/EventSlider';
import FilterBar from '@/components/FilterBar';
import React from 'react';
import { useEvents } from '@/context/EventsContext';
import Spinner from '@/components/Spinner';

export default function Home() {
  const { state } = useEvents();
  const today = new Date();

  return (
    <main className='flex flex-col items-center justify-center text-center'>
      {state.loading && <Spinner />}
      {!state.loading && (
        <>
          {state.filterBarOpen && <FilterBar />}
          <EventSlider events={state.events} />
          <div className='container mx-auto bg-cover bg-center h-96'>
            <div className='event-page'>
              {/* We could filter events by date but user may want to see out dated */}
              {state.isFiltered
                ? state.filteredEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))
                : state.events.map((event, index) => {
                    const eventDate = new Date(event.start_date);
                    if (eventDate > today) {
                      return <EventCard key={index} event={event} />;
                    }
                  })}
            </div>
            {/* Out Dated Events */}
            {!state.isFiltered && (
              <div className='event-page'>
                <h1 className='col-span-full text-2xl font-bold text-center text-black'>
                  Out Dated Events
                </h1>
                {state.events.map((event, index) => {
                  const eventDate = new Date(event.start_date);
                  if (eventDate < today) {
                    return <EventCard key={index} event={event} />;
                  }
                })}
              </div>
            )}
          </div>
        </>
      )}
    </main>
  );
}
