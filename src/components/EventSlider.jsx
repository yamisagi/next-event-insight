'use client';
import React from 'react';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

const EventSlider = () => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='flex flex-col justify-center items-center w-6/12 h-96 rounded-lg shadow-lg'
      >
        <SwiperSlide
          className='bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg'
          effect='cards'
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          className='bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg'
          effect='cards'
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          className='bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg'
          effect='cards'
        >
          Slide 3
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default EventSlider;
