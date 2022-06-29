import React from "react";
import { useGlobalContext } from "../../utils/context";

const Case = () => {
  const { line, h2Style } = useGlobalContext();
  const imgStyle = "w-full hover:scale-90 transition ";

  return (
    <main className='px-4 py-8'>
      <h2 className={h2Style}>Case Study</h2>
      <hr className={line} />
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 my-6 sm:w-5/6 mx-auto'>
        <img className={imgStyle} src='images/two.png' alt='' />
        <img className={imgStyle} src='images/three.png' alt='' />
        <img className={imgStyle} src='images/four.png' alt='' />
        <img className={imgStyle} src='images/five.png' alt='' />
        <img className={imgStyle} src='images/six.png' alt='' />
        <img className={imgStyle} src='images/seven.png' alt='' />
      </div>
    </main>
  );
};

export default Case;
