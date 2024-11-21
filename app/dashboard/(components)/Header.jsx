"use client";
import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  const [path, setPath] = useState('/dashboard');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (pathname) => {
    setPath(pathname);
    toggleMenu(); // Close the menu after navigation
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
          <Link href={'/'}><Image src="/logo.svg" alt="Logo" height={100} width={160} className="h-12 w-auto" /></Link>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            className="h-6 w-6 text-gray-600 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <nav className={`w-full md:w-auto mt-4 md:mt-0 md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium">
          <li
            className={`cursor-pointer ${path === '/dashboard' ? 'font-bold border-b-2 border-primary text-primary dark:border-primary dark:text-primary' : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary'}`}
            onClick={() => navigateTo('/dashboard')}
          >
            <Link href={'/dashboard'}>Dashboard</Link>
          </li>
          <li
            className={`cursor-pointer ${path === '/dashboard/questions' ? 'font-bold border-b-2 border-primary text-primary dark:border-primary dark:text-primary' : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary'}`}
            onClick={() => navigateTo('/dashboard/questions')}
          >
            <Link href={'/dashboard/questions'}>Questions</Link>
          </li>
          <li
            className={`cursor-pointer ${path === '/dashboard/how-it-works' ? 'font-bold border-b-2 border-primary text-primary dark:border-primary dark:text-primary' : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary'}`}
            onClick={() => navigateTo('/dashboard/how-it-works')}
          >
            <Link href={'/dashboard/how-it-works'}>How It Works?</Link>
          </li>
          <li className="mt-4 md:mt-0 flex items-center md:hidden">
          <span className='flex flex-col gap-5 justify-center items-center'>
          <UserButton />
          <ThemeToggleButton />
        </span>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex items-center">
        <span className='flex gap-5 justify-center items-center'>
          <ThemeToggleButton />
          <UserButton />
        </span>
      </div>
    </header>
  );
};

export default Header;
