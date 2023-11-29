'use client';

import EventCard from '@/components/EventCard';
import EventSlider from '@/components/EventSlider';
import FilterBar from '@/components/FilterBar';
import React, { useEffect } from 'react';
import { data } from '@/__mocks__/data';
import { useEvents } from '@/context/EventsContext';

export default function Home() {
  const { state, dispatch } = useEvents();

  return (
    <main>
      <FilterBar open={true} />
      <EventSlider events={data} />
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
    </main>
  );
}
