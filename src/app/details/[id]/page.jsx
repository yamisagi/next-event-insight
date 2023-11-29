import React from 'react';
import dynamic from 'next/dynamic';
import { data } from '@/__mocks__/data';

const DynamicMap = dynamic(() => import('@/components/MapView'), {
  ssr: false,
  loading: () => <p>A map is loading</p>,
});

const DetailsPage = ({ params }) => {
  const event = data.find((event) => event.id === Number(params.id));

  return (
    <main className='flex flex-col justify-center items-center w-full h-screen'>
      <DynamicMap
        latlong={[event.location.latitude, event.location.longitude]}
      />
    </main>
  );
};

export default DetailsPage;
