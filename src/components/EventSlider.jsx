'use client';
import React from 'react';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEvents } from '@/context/EventsContext';

const EventSlider = ({ events, isDetailed }) => {
  const router = useRouter();
  const { dispatch } = useEvents();
  return (
    <div className='container mx-auto my-5 px-14'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        modules={[EffectCards]}
        className='swiper'
      >
        {events.map((event) => (
          <div key={event.id}>
            <SwiperSlide
              zoom={true}
              className='swiper-slide'
              effect='cards'
              content='center'
              onClick={() => {
                router.push(`/details/${event.id}`);
                dispatch({ type: 'SET_LAST_DETAIL_PAGE', payload: event.id });
              }}
            >
              <Image src={event.images[0]} alt='Sunset in the mountains' fill />

              <div className='absolute bottom-0 left-0 right-0 px-6 py-4 z-10 text-white'>
                <div className='font-bold text-xl mb-2 text-white'>
                  {event.name}
                </div>
                <p className='text-white text-base'>
                  {event.description.substring(0, 120)}...
                </p>
              </div>
            </SwiperSlide>
            {isDetailed && (
              <SwiperSlide
                zoom={true}
                className='swiper-slide'
                effect='cards'
                content='center'
              >
                <Image src={event.images[1]} alt={event.name} fill />
              </SwiperSlide>
            )}
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSlider;
