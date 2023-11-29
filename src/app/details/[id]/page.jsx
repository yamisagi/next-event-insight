import React from 'react';
import dynamic from 'next/dynamic';
import { data } from '@/__mocks__/data';
import Spinner from '@/components/Spinner';

const DynamicMap = dynamic(() => import('@/components/MapView'), {
  ssr: false,
  loading: () => <Spinner />,
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
