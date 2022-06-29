import { BiDevices } from "react-icons/bi";
import { VscSymbolInterface } from "react-icons/vsc";
import { MdDesignServices } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { AiFillMobile } from "react-icons/ai";
import { SiAzuredevops } from "react-icons/si";
import Link from "next/link";
import { services } from "../data/data";

const Services = () => {
  // ********STYLES********
  const styles = {
    serviceContainer:
      "bg-white p-4 rounded-sm shadow flex flex-col justify-between",
    iconStyle:
      "bg-orange-100 rounded text-orange-600 text-3xl h-30 w-fit flex p-2 px-4 flex-col my-3",
    h4Style: "text-gray-700 text-2xl font-bold my-2",
    contentStyle: "text-sm text-gray-700 my-3",
    btnStyle:
      "bg-orange-600 rounded text-white text-sm w-fit p-2 px-4 my-3 hover:bg-orange-700 transition hover:text-gray-200",
  };
  const { serviceContainer, iconStyle, h4Style, contentStyle, btnStyle } =
    styles;
  // **********************btnStyle

  return (
    <main className='px-4 py-8'>
      <h2 className='text-center font-bold text-3xl md:text-4xl'>
        Our Services
      </h2>
      <hr className='w-1/3 my-2  mx-auto border-2 border-orange-600 rounded-lg' />
      <div className='my-10 grid sm:grid-cols-3 gap-6 gap-y-10 w-full md:w-5/6 md:mx-auto'>
        <div className={serviceContainer}>
          <i className={iconStyle}>
            <BiDevices />
          </i>
          <h4 className={h4Style}>{services[0].title}</h4>
          <p className={contentStyle}>{services[0].content}</p>
          <Link href=''>
            <button className={btnStyle}>View More</button>
          </Link>
        </div>
        <div className={serviceContainer}>
          <i className={iconStyle}>
            <VscSymbolInterface />
          </i>
          <h4 className={h4Style}>{services[1].title}</h4>
          <p className={contentStyle}>{services[1].content}</p>
          <Link href=''>
            <button className={btnStyle}>View More</button>
          </Link>
        </div>
        <div className={serviceContainer}>
          <i className={iconStyle}>
            <MdDesignServices />
          </i>
          <h4 className={h4Style}>{services[2].title}</h4>
          <p className={contentStyle}>{services[2].content}</p>
          <Link href=''>
            <button className={btnStyle}>View More</button>
          </Link>
        </div>
        <div className={serviceContainer}>
          <i className={iconStyle}>
            <BsLaptop />
          </i>
          <h4 className={h4Style}>{services[3].title}</h4>
          <p className={contentStyle}>{services[3].content}</p>
          <Link href=''>
            <button className={btnStyle}>View More</button>
          </Link>
        </div>
        <div className={serviceContainer}>
          <i className={iconStyle}>
            <AiFillMobile />
          </i>
          <h4 className={h4Style}>{services[4].title}</h4>
          <p className={contentStyle}>{services[4].content}</p>
          <Link href=''>
            <button className={btnStyle}>View More</button>
          </Link>
        </div>
        <div className={serviceContainer}>
          <i className={iconStyle}>
            <SiAzuredevops />
          </i>
          <h4 className={h4Style}>{services[5].title}</h4>
          <p className={contentStyle}>{services[5].content}</p>
          <Link href=''>
            <button className={btnStyle}>View More</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Services;
