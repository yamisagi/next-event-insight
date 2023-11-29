import Spinner from '@/components/Spinner';
import React from 'react';

const DetailsPage = () => {
  return (
    <main className='flex flex-col justify-center items-center w-full h-screen'>
      <div className='container flex flex-col justify-center items-center w-full h-full'>
        <Spinner />
      </div>
    </main>
  );
};

export default DetailsPage;
