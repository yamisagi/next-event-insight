'use client';
import React from 'react';
import { useEvents } from '@/context/EventsContext';
import FilterBar from '@/components/FilterBar';
import Spinner from '@/components/Spinner';
import ConditionalSlider from '@/components/ConditionalSlider';
import ConditonalEvents from '@/components/ConditonalEvents';
import OutDatedEvents from '@/components/OutDatedEvents';

export default function Home() {
  const { state } = useEvents();
  return (
    <main className='flex flex-col items-center justify-center text-center'>
      {state.loading && <Spinner />}
      {!state.loading && (
        <>
          {state.filterBarOpen && <FilterBar />}
          <ConditionalSlider />
          <div className='container mx-auto bg-cover bg-center h-96'>
            <ConditonalEvents />
            {/* Out Dated Events */}
            <OutDatedEvents />
          </div>
        </>
      )}
    </main>
  );
}
