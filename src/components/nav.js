import React from "react";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

function Nav() {
  const [nav, setNav] = React.useState(false);
  return (
    <nav className='p-4 capitalize w-full flex flex-col md:flex-row md:justify-between'>
      <div className='flex justify-between items-center w-full md:w-1/3'>
        <img className='w-1/3 md:w-1/2' src='./images/logo2.png' alt='logo' />
        <i onClick={() => setNav(!nav)}>
          {nav ? (
            <IoMdClose className='text-red-300 text-3xl md:hidden' />
          ) : (
            <MdMenu className='text-red-300 text-3xl md:hidden' />
          )}
        </i>
      </div>
      <div
        className={`${
          nav ? "flex" : "hidden"
        } md:flex text-sm gap-5 flex-col my-4 md:flex-row md:items-center`}
      >
        <Link href='/'>Home</Link>
        <hr className='md:hidden border-b-1 border-solid border-red-200' />
        <Link href='/'>Services</Link>
        <hr className='md:hidden border-b-1 border-solid border-red-200' />
        <Link href='/'>About Us</Link>
        <hr className='md:hidden border-b-1 border-solid border-red-200' />
        <Link href='/'>Contact us</Link>
        <hr className='md:hidden border-b-1 border-solid border-red-200' />
        <Link href='/'>
          <button className='rounded bg-orange-600 text-white py-2 px-4 w-fit'>
            get started
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
