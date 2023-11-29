'use client';

import Spinner from '@/components/Spinner';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DetailsPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <main className='flex flex-col justify-center items-center w-full h-screen'>
      <div className='container flex flex-col justify-center items-center w-full h-full'>
        <Spinner />
      </div>
    </main>
  );
};

export default DetailsPage;
