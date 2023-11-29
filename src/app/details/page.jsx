import React from 'react';
import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner';

const DynamicMap = dynamic(() => import('@/components/MapView'), {
  ssr: false,
  loading: () => <Spinner />,
});

const DetailsPage = () => {
  return (
    <main className='flex flex-col justify-center items-center w-full h-screen'>
      <DynamicMap />
    </main>
  );
};

export default DetailsPage;
