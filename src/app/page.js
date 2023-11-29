import EventCard from '@/components/EventCard';
import EventSlider from '@/components/EventSlider';
import FilterBar from '@/components/FilterBar';
import React from 'react';
import { data } from '@/__mocks__/data';


export default function Home() {
  return (

      <main>
        <FilterBar open={true} />
        <EventSlider events={data} />
        <div className='container mx-auto bg-cover bg-center h-96'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 mx-auto'>
            {data.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </main>

  );
}
