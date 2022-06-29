import React from "react";
import { useGlobalContext } from "../../utils/context";
import style from "../../styles/about.module.css";

const About = () => {
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
      <h2 className={h2Style}>About Us</h2>
      <hr className={line} />
      <div className='grid flex-col gap-x-4 p-4  items-center sm:grid-cols-2'>
        <div className={style.about_img}>
          <img
            className='w-full h-80 object-cover'
            src='images/one.png'
            alt='image'
          />
        </div>
        <div>
          <h4 className={h4Style}>Get to know us</h4>
          <p className={contentStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia accusamus quibusdam! Temporibus repellat cumque, quia animi
            eligendi voluptatibus ipsum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut, quod amet. Illo quam incidunt maxime aperiam
            explicabo magnam, deserunt optio?
          </p>
          <button className={btnStyle}>Read More</button>
        </div>
      </div>
      <div className='-mx-4 bg-orange-100 p-4 py-8 md:flex'>
        <p className='font-bold text-xl w-full md:w-1/2'>
          We provide brilliant ideas for
          <span className='text-orange-600'> brand</span>, you can start with us
          today, we are ready to grow your
          <span className='text-orange-600'> brand</span>.
        </p>
        <div className='bg-white p-2 w-full my-4 md:w-1/2'>
          <form action='' className='flex text-sm items-center'>
            <input
              type='email'
              placeholder='Email'
              className='text-gray-700 w-full p-3'
            />
            <input
              type='submit'
              value='Get started'
              className='w-1/3 bg-orange-600 p-2 text-white font-bold text-sm'
            />
          </form>
        </div>
      </div>
    </main>
  );
};

export default About;
