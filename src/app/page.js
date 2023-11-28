import EventCard from '@/components/EventCard';
import EventSlider from '@/components/EventSlider';
import React from 'react';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <EventSlider />
      <EventCard />
    </main>
  );
}
