import React from 'react';
import dynamic from 'next/dynamic';
import { data } from '@/__mocks__/data';
import Spinner from '@/components/Spinner';
import EventSlider from '@/components/EventSlider';

const DynamicMap = dynamic(() => import('@/components/MapView'), {
  ssr: false,
  loading: () => <Spinner />,
});

const DetailsPage = ({ params }) => {
  const event = data.find((event) => event.id === Number(params.id));
  const filtered = data.filter((event) => event.id === Number(params.id));
  return (
    <main className='flex flex-col justify-center items-center w-full h-screen'>
      <EventSlider events={filtered} isDetailed={true} />

      <div className='container p-3 mx-auto my-5 text-center'>
        <h1 className='font-bold text-xl mb-2'>{event.name}</h1>
        <p className='text-gray-700 text-base'>{event.description}</p>
      </div>
      <DynamicMap
        latlong={[event.location.latitude, event.location.longitude]}
        popUp={event.location.address}
      />
    </main>
  );
};

export default DetailsPage;
