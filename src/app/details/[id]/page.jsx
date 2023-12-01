'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner';
import EventSlider from '@/components/EventSlider';
import { useEvents } from '@/context/EventsContext';
import EventDetailsCard from '@/components/EventDetailsCard';

const DynamicMap = dynamic(() => import('@/components/MapView'), {
  ssr: false,
  loading: () => <Spinner />,
});

const DetailsPage = ({ params }) => {
  const { state, dispatch } = useEvents();
  const event = state.events.find((event) => event.id === Number(params.id));
  const filtered = state.events.filter(
    (event) => event.id === Number(params.id)
  );

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

  return state.loading ? (
    <Spinner />
  ) : (
    <main className='flex flex-col justify-center items-center w-full'>
      <EventSlider events={filtered} isDetailed={true} />
      <div className='container p-3 mx-auto my-5 text-center'>
        <h1 className='font-bold text-2xl mb-2'>{event?.name}</h1>
        <p className='text-gray-700 text-lg'>{event?.description}</p>
      </div>
      <h1 className='font-bold text-2xl mb-2 text-center'>
        Ticket Prices for {event?.name} on{' '}
        {new Date(event?.start_date).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </h1>
      <div className='flex flex-col items-center md:flex-row justify-center md:items-stretch w-full gap-5 p-5 mx-auto my-5 text-center'>
        <EventDetailsCard
          type={'VIP'}
          color={'red'}
          price={event?.ticket_prices?.vip}
          benefits={[
            'VIP Entrance',
            'VIP Lounge',
            'Free Drinks',
            'Free Food',
            'Free Parking',
          ]}
          event={event}
        />
        <EventDetailsCard
          type={'Standard'}
          color={'gray'}
          price={event?.ticket_prices?.standard}
          benefits={['Standard Entrance', 'Free Drinks']}
          event={event}
        />
      </div>
      <div className='flex flex-col justify-center items-center w-full p-5 mx-auto my-5 text-center'>
        <h1 className='font-bold text-2xl mb-2 text-center'>Location</h1>
        <>
          <DynamicMap
            latlong={[event?.location?.latitude, event?.location?.longitude]}
            popUp={event?.location?.address}
          />
        </>
      </div>
    </main>
  );
};

export default DetailsPage;
