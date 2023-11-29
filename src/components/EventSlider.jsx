'use client';
import React from 'react';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from '@/__mocks__/data';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

const EventSlider = () => {
  return (
    <div className='container p-3 mx-auto my-5'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='flex flex-col justify-center items-center w-9/12 sm:w-6/12 h-96 '
      >
        {data.map((event) => (
          <SwiperSlide
            key={event.id}
            className='bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg'
            effect='cards'
             content='center'
          >
           <Image src={event.images[0]} alt='Sunset in the mountains' fill /> 
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default EventSlider;
