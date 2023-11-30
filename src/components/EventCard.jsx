'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEvents } from '@/context/EventsContext';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from '@material-tailwind/react';
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  LocationIcon,
  MoneyIcon,
  FavIcon,
  StarIcon,
  WifiIcon,
} from '@/constants/icons';

const EventCard = ({ event }) => {
  const { dispatch } = useEvents();
  const router = useRouter();
  const randomRating = () => {
    const rating = Math.floor(Math.random() * 5) + 1;
    return rating.toFixed(1);
  };
  const today = new Date();

  return (
    <Card className='card'>
      <CardHeader floated={false} color='blue-gray'>
        <Image
          src={event.images[0]}
          alt={event.name}
          width={200}
          height={200}
          content='center'
          className='w-full h-48 object-cover'
        />
        <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60' />
        <IconButton
          size='sm'
          color='red'
          variant='text'
          className='!absolute top-4 right-4 rounded-full'
        >
          <FavIcon />
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className='mb-3 flex items-center justify-between'>
          <Typography variant='h5' color='blue-gray' className='font-medium'>
            {event.name}
          </Typography>
          <Typography
            color='blue-gray'
            className='flex items-center gap-1.5 font-normal'
          >
            <StarIcon />
            {randomRating()}
          </Typography>
        </div>
        <Typography color='gray'>
          {event.description.substring(0, 120)}...
        </Typography>
        <div className='group mt-8 inline-flex flex-wrap items-center gap-3'>
          <Tooltip content={`VIP Entrance \n $${event.ticket_prices.vip}`}>
            <span className='tooltip-span'>
              <MoneyIcon />
            </span>
          </Tooltip>
          <Tooltip
            content={`Standard Entrance \n $${event.ticket_prices.standard}`}
          >
            <span className='tooltip-span'>
              <MoneyIcon />
            </span>
          </Tooltip>
          <Tooltip content='Free wifi'>
            <span className='tooltip-span'>
              <WifiIcon />
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className='pt-3'>
        <Typography
          color='blue-gray'
          className='flex items-center text-center justify-center mb-2 font-semibold gap-1.5'
          onClick={() => {
            router.push(`/place/${event.location.address.split(', ')[0]}`);
            dispatch({
              type: 'SET_LAST_PLACE_PAGE',
              payload: `${event.location.address.split(', ')[0]}`,
            });
          }}
        >
          {event.location.address.split(', ')[2]}
          <LocationIcon />
        </Typography>
        {/* Social Media Share */}
        <div className='flex flex-row justify-center items-center gap-2 mb-2'>
          <IconButton
            color='blue'
            variant='outline'
            size='regular'
            ripple='light'
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color='gray'
            variant='outline'
            size='regular'
            ripple='light'
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color='red'
            variant='outline'
            size='regular'
            ripple='light'
          >
            <InstagramIcon />
          </IconButton>
        </div>

        <Button
          disabled={new Date(event.start_date) < today}
          size='lg'
          fullWidth={true}
          onClick={() => {
            router.push(`/details/${event.id}`);
            dispatch({ type: 'SET_LAST_DETAIL_PAGE', payload: event.id });
          }}
        >
          Reserve
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
