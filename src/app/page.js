'use client';

import EventCard from '@/components/EventCard';
import EventSlider from '@/components/EventSlider';
import FilterBar from '@/components/FilterBar';
import React from 'react';
import { useEvents } from '@/context/EventsContext';
import Spinner from '@/components/Spinner';

export default function Home() {
  const { state } = useEvents();

  return (
    <main>
      {state.loading && <Spinner />}
      {!state.loading && (
        <>
          <FilterBar open={true} />
          <EventSlider events={state.events} />
          <div className='container mx-auto bg-cover bg-center h-96'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 mx-auto'>
              {state.isFiltered
                ? state.filteredEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))
                : state.events.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
