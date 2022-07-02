import React from "react";
import style from "../styles/about.module.css";
import { useGlobalContext } from "../utils/context";
const About = () => {
  const { h4Style, line } = useGlobalContext();
  return (
    <main>
      <div className={style.about_header}>
        <h2 className='text-5xl font-bold leading-normal capitalize text-center'>
          A result-oriented, customer-centric <br /> creative digital agency.
        </h2>

        <p className='text-xl my-4 text-center'>
          SORM Technologies is a digital marketing & web design agency in
          Nigeria. Think creativity. Think leverage. Think growth, Think SORM
          Technologies!
        </p>
      </div>
      <div className='my-8 flex flex-col gap-0 sm:gap-8 p-4 py-8 sm:flex-row-reverse sm:w-5/6 mx-auto shadow-lg'>
        <div className={style.about_img}>
          <img
            className='w-full h-80 object-cover'
            src='images/nine.png'
            alt=''
          />
        </div>
        <div className='p-4 sm:w-full text-justify'>
          <h2 className={`${h4Style} capitalize`}>Who we are</h2>
          <hr className='w-1/6 my-2 border-2 border-orange-600 rounded-lg' />
          <p className='my-4 text-sm text-gray-700'>
            We are a digital marketing & tech agency hybrid in Nigeria committed
            to taking your business to the next level.
          </p>
          <p className='my-4 text-sm text-gray-700'>
            We are a team of experienced talents dedicated to the use of
            technology and proven marketing strategies for brand growth and
            business development.
          </p>
          <p className='my-4 text-sm text-gray-700'>
            At SORM Technologies, we are highly motivated and ever ready to
            deliver top of the line services, come rain or shine.
          </p>
          <p className='my-4 text-sm text-gray-700'>
            We provide you with all the required tools and services to grow your
            business and stand tall amidst competition!
          </p>
        </div>
      </div>
      <div className='grid gap-0 sm:gap-8 p-4  sm:grid-cols-2 py-8 my-8 sm:w-5/6 mx-auto shadow-lg'>
        <div className={style.about_img}>
          <img
            className='w-full h-80 object-cover'
            src='images/ten.png'
            alt=''
          />
        </div>
        <div className='text-justify'>
          <h2 className={`${h4Style} capitalize`}>How we work</h2>
          <hr className='w-1/6 my-2 border-2 border-orange-600 rounded-lg' />
          <p className='my-4 text-sm text-gray-700'>
            With months of collective experience, we are your best bet for
            creating and managing digital tools optimized for your business.
          </p>
          <p className='my-4 text-sm text-gray-700'>
            We believe that every business is unique and should be treated as
            such. Keeping this in mind, we make it a priority to fully
            understand your business and its peculiarities.
          </p>
          <p className='my-4 text-sm text-gray-700'>
            Your business matters, Think of us as your brand doctor-using
            top-notch tools to effect relevant changes through the best of
            methods. Ensuring that your business is better off and in the best
            shape possible at the end of the day, In the midst of this, brand
            growth and sustainability remains our core focus.
          </p>
          <p className='my-4 text-sm text-gray-700'>
            With a full grasp of your industry dynamics, we offer effective
            digital solutions designed with your brand's needs in mind. A trial
            will convince you.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
