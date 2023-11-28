import React from 'react';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('@/components/MapView'), {
  ssr: false,
  loading: () => <p>A map is loading</p>,
});

const DetailsPage = () => {
  return (
    <main className='flex flex-col justify-center items-center w-full h-screen'>
      <DynamicMap />
    </main>
  );
};

export default DetailsPage;
