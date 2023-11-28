'use client';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Details', href: '/details' },
  { name: 'Projects', href: '#' },
  { name: 'Calendar', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const Navbar = () => {
  const [current, setCurrent] = useState('Home');
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 justify-between'>
            <div className='relative flex h-16 items-center sm:justify-evenly justify-between'>
              {/* // Logo */}
              <div className='flex cursor-pointer text-white mr-16'>
                <Link href='/'>Logo</Link>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex w-full mx-auto items-center sm:items-stretch sm:justify-between'>
                <div className='sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    <div className='relative'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <MagnifyingGlassIcon
                          className='h-5 w-5 text-gray-400'
                          aria-hidden='true'
                        />
                      </div>
                      <input
                        type='text'
                        name='search'
                        id='search'
                        className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        placeholder='Search'
                      />
                    </div>
                  </div>
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link
                        onClick={() => setCurrent(item.name)}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          current === item.name
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
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
