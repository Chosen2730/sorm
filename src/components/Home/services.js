import { BiDevices } from "react-icons/bi";
import { VscSymbolInterface } from "react-icons/vsc";
import { MdDesignServices } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { AiFillMobile } from "react-icons/ai";
import { SiAzuredevops } from "react-icons/si";
import Link from "next/link";
import { services } from "../../utils/data";
import { useGlobalContext } from "../../utils/context";
import { useEffect, useRef } from "react";

const Services = () => {
  const serve = useRef(null);

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
      <h2 className={h2Style}>Our Services</h2>
      <hr className={line} />
      <div
        className='my-10 grid sm:grid-cols-3 gap-6 gap-y-10 w-full md:w-5/6 md:mx-auto'
        ref={serve}
      >
        <div className={serviceContainer}>
          <i className={iconStyle}>
            <BiDevices />
          </i>
          <h4 className={h4Style}>{services[0].title}</h4>
          <p className={contentStyle}>{services[0].content}</p>
        </div>
        <div className={serviceContainer}>
          <i className={iconStyle}>
            <VscSymbolInterface />
          </i>
          <h4 className={h4Style}>{services[1].title}</h4>
          <p className={contentStyle}>{services[1].content}</p>
        </div>

        <div className={serviceContainer}>
          <i className={iconStyle}>
            <AiFillMobile />
          </i>
          <h4 className={h4Style}>{services[4].title}</h4>
          <p className={contentStyle}>{services[4].content}</p>
        </div>
      </div>
      <div className='sm:w-5/6 mx-auto -mt-8'>
        <Link href='services'>
          <button className={`${btnStyle}`}>See More Services</button>
        </Link>
      </div>
    </main>
  );
};

export default Services;
