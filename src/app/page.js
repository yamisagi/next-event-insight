import EventCard from '@/components/EventCard';
import EventSlider from '@/components/EventSlider';
import FilterBar from '@/components/FilterBar';
import React from 'react';

export default function Home() {
  return (
    <main>
      <FilterBar open={true} />
      <h1>Home</h1>
      <EventSlider />
      <EventCard />
    </main>
  );
}
