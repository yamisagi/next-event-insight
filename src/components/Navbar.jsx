'use client';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { useEvents } from '@/context/EventsContext';
import GradientButton from './ProjectButton';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const params = usePathname();
  const { state, dispatch } = useEvents();
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Details', href: `/details/${state.lastDetailPage}` },
    { name: 'Place', href: `/place/${state.lastPlacePage}` },
  ];
  const router = useRouter();
  useEffect(() => {
    const capitalizedPath = params.split('/')[1];
    const capitalized =
      capitalizedPath === ''
        ? 'Home'
        : capitalizedPath.charAt(0).toUpperCase() + capitalizedPath.slice(1);

    console.log(capitalized);
    dispatch({ type: 'SET_CURRENT_NAV', payload: capitalized });
  }, [dispatch, params]);

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
                    dispatch({ type: 'SET_CURRENT_NAV', payload: 'Home' });
                    dispatch({ type: 'CLEAR_FILTERS' });
                  }}
                >
                  <Image src='/logo.png' alt='logo' width={200} height={200} />
                </Link>
              </div>
              <div className='absolute inset-y-0 right-2 flex items-center sm:hidden'>
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
                        color={
                          state.currentNav === item.name ? 'gray' : 'blue-gray'
                        }
                        text={item.name}
                        onClick={() => {
                          dispatch({
                            type: 'SET_CURRENT_NAV',
                            payload: item.name,
                          });
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
                  onClick={() => {
                    dispatch({ type: 'SET_CURRENT_NAV', payload: item.name });
                  }}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    state.currentNav === item.name
                      ? 'bg-[#78909c] text-white'
                      : 'text-gray-300 hover:bg-[#6699cc] hover:text-white',
                    'mobile-nav-buttons'
                  )}
                  aria-current={state.currentNav ? 'page' : undefined}
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
