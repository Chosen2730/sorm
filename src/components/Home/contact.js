import React from "react";
import { useGlobalContext } from "../../utils/context";
import style from "../../styles/about.module.css";

const Contact = () => {
  const {
    serviceContainer,
    iconStyle,
    h4Style,
    contentStyle,
    btnStyle,
    line,
    h2Style,
  } = useGlobalContext();
  return (
    <main className='px-4 py-8'>
      <h2 className={h2Style}>Contact Us</h2>
      <hr className={line} />
      <div className='grid gap-x-9 p-4  items-center sm:grid-cols-2'>
        <div className={style.about_img}>
          <img
            className='w-full h-80 object-cover'
            src='images/eight.png'
            alt='image'
          />
        </div>
        <div>
          <h5 className='text-sm font-bold'>
            <span className='text-orange-600'>Email: </span>
            sormtechnologies@gmail.com.
          </h5>
          <h5 className='text-sm font-bold'>
            <span className='text-orange-600'>Phone No: </span> +234 815 852
            1432.
          </h5>
          <h5 className='text-sm font-bold'>
            <span className='text-orange-600'>Address: </span>No 7, New Estate
            Ijebu ode, Ogun state.
          </h5>
          <form action='' className='my-4 text-sm'>
            <div className='grid grid-cols-2 gap-3 my-4'>
              <input
                className='border-2 p-2 rounded'
                type='text'
                placeholder='First Name'
              />
              <input
                type='text'
                className='border-2 p-2 rounded'
                placeholder='Last Name'
              />
            </div>
            <label htmlFor='message' className='text-gray-400'>
              Your Message
            </label>
            <textarea
              className='border-2 p-2 rounded block w-full'
              name=''
              id=''
              cols='30'
              rows='10'
            ></textarea>
            <button type='submit' className={btnStyle}>
              Read More
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
