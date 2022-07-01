import React from "react";
import Link from "next/link";
import { useGlobalContext } from "../utils/context";

const Footer = () => {
  const { h4Style } = useGlobalContext();
  return (
    <main className='bg-black text-gray-200 p-4'>
      <div className='grid sm:grid-cols-2 my-4 gap-4 sm:flex-row'>
        <img className='w-1/3 sm:w-1/2' src='images/logo3.png' alt='' />
        <div className='grid grid-cols-2'>
          <div>
            <h2 className='text-sm font-bold text-gray-300'>Company</h2>
            <div className='flex flex-col text-gray-200 text-xs gap-2 mt-3'>
              <Link href='/'>Home</Link>
              <Link href='/about'>About</Link>
              <Link href='/'>Services</Link>
              <Link href='/'>Blog</Link>
            </div>
          </div>
          <div>
            <h2 className='text-sm font-bold text-gray-300'>Services</h2>
            <div className='flex flex-col text-gray-200 text-xs gap-2 mt-3'>
              <Link href='/'>Graphics Design</Link>
              <Link href='/'>Web Development</Link>
              <Link href='/'>Product Design</Link>
              <Link href='/'>Content Marketting</Link>
            </div>
          </div>
        </div>
      </div>
      <h4 className='mt-20 text-xs'>
        Subscribe to our newsletters and updates
      </h4>
      <div className='bg-white p-2 my-1 sm:w-1/2'>
        <form action='' className='flex text-sm items-center'>
          <input
            type='email'
            placeholder='Email'
            className='text-gray-700 w-full p-3'
          />
          <input
            type='submit'
            value='Subscribe'
            className='w-1/3 bg-orange-600 p-2 font-bold text-sm'
          />
        </form>
      </div>
      <div className='flex items-center'>
        <hr className='border-1 w-full' />
        <div className='h-5 w-5 bg-white rounded-full'></div>
      </div>
      <p className='text-xs text-center'>
        Sorm Platform {new Date().getFullYear()}. All right reserved
      </p>
    </main>
  );
};

export default Footer;
