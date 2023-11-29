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
    <main>
      {state.loading && <Spinner />}
      {!state.loading && (
        <>
          {state.filterBarOpen && <FilterBar />}
          <EventSlider events={state.events} />
          <div className='container mx-auto bg-cover bg-center h-96'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 mx-auto'>
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
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 mx-auto my-12'>
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
          </div>
        </>
      )}
    </main>
  );
}
