import React from 'react';
import { FaViadeo } from "react-icons/fa";
import { FaDiscourse } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCog } from "react-icons/fa";


const FirstHeader = () => {
  return (
    <div>
      <img className="h-[24px] w-[96px] mt-2" src="https://i.ibb.co/RN6JpSR/Frame-3-1.png" alt="" />
      <ul>
        <li className='mt-[50px]'><a href="" className='flex'> <span><FaViadeo className='mr-2 mt-1 text-[#959595]'/></span> Dashboard</a></li>
        <li className='mt-[20px]'><a href="" className='flex'> <span><FaDiscourse className='mr-2 mt-1 text-[#959595]'/></span> My Course</a></li>
        <li className='mt-[20px]'><a href="" className='flex'> <span><FaToolbox  className='mr-2 mt-1 text-[#959595]'/></span> Explore</a></li>
        <li className='mt-[20px]'><a href="" className='flex'><span><FaCalendarCheck className='mr-2 mt-1 text-[#959595]'/></span> Classes</a></li>
        <li className='mt-[20px]'><a href="" className='flex'><span><FaCog className='mr-2 mt-1 text-[#959595]'/></span> Setting</a></li>
      </ul>

    </div>
  );
};

export default FirstHeader;