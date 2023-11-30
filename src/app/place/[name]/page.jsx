'use client';

import EventCard from '@/components/EventCard';
import EventSlider from '@/components/EventSlider';
import React, { useEffect } from 'react';
import { useEvents } from '@/context/EventsContext';
import Spinner from '@/components/Spinner';

const PlaceDetailPage = ({ params }) => {
  const { state, dispatch } = useEvents();
  const filteredEvents = state.events.filter((event) => {
    const name = params.name.replaceAll(/%20/g, ' ');
    const eventName = event.location.address.split(', ')[0];
    return eventName === name;
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + process.env.NEXT_PUBLIC_API_KEY
        );
        const data = await res.json();
        console.log(data);
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_EVENTS', payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className='flex flex-col items-center justify-center text-center'>
      {state.loading && <Spinner />}
      {!state.loading && (
        <>
          <EventSlider events={filteredEvents} />
          <div className='container mx-auto bg-cover bg-center h-96'>
            <div className='event-page'>
              {filteredEvents.map((event, index) => {
                return <EventCard key={index} event={event} />;
              })}
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default PlaceDetailPage;
