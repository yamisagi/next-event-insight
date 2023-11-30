'use client';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { useEvents } from '@/context/EventsContext';
import GradientButton from './ProjectButton';
import { useRouter } from 'next/navigation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const { state, dispatch } = useEvents();
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Details', href: `/details/${state.lastDetailPage}` },
    { name: 'Place', href: `/place/${state.lastPlacePage}` },
  ];
  const router = useRouter();
  const [current, setCurrent] = useState('Home');
  return (
    <Disclosure as='nav' className='bg-navbar'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl sm:px-4 lg:px-8 justify-between'>
            <div className='relative flex h-16 items-center '>
              {/* // Logo */}
              <div className='flex cursor-pointer text-white mr-6'>
                <Link
                  href='/'
                  onClick={() => {
                    dispatch({ type: 'SET_LAST_DETAIL_PAGE', payload: '1' });
                    dispatch({ type: 'SET_IS_FILTERED', payload: false });
                    dispatch({
                      type: 'SET_SELECTED_START_DATE',
                      payload: null,
                    });
                    dispatch({ type: 'SET_SELECTED_END_DATE', payload: null });
                  }}
                >
                  <Image src='/logo.png' alt='logo' width={200} height={200} />
                </Link>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                <Disclosure.Button className='nav-mobile-button'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 sm:ml-6 sm:items-center w-max gap-2'>
                <SearchBar />
                <GradientButton
                  type={'gradient'}
                  color={'blue-gray'}
                  text={'Filter'}
                  onClick={() => {
                    dispatch({
                      type: 'SET_FILTER_BAR_OPEN',
                      payload: !state.filterBarOpen,
                    });
                  }}
                >
                  Filter
                </GradientButton>
              </div>
              <div className='flex w-full mx-auto items-center sm:items-stretch sm:justify-between'>
                <div className='hidden sm:ml-6 sm:block'></div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <GradientButton
                        key={item.name}
                        type={'gradient'}
                        color={current === item.name ? 'gray' : 'blue-gray'}
                        text={item.name}
                        onClick={() => {
                          setCurrent(item.name);
                          router.push(item.href);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  onClick={() => setCurrent(item.name)}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    current === item.name
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
