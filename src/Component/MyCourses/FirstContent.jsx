import React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";

const FirstContent = () => {
  return (
    <div className='mt-[30px]'>
      <img className='w-[700px] h-[236px]' src="https://i.ibb.co/x8Q5vTC/unsplash-o-l-Lsd-VTxak.png" alt="" />
        <div className='m-2'>
        <div className='flex justify-between'>
        <p className='text-xs text-gray-500'>09 to 12 to enrollment</p>
        <p className='flex text-xs'>
        <span className='mt-[2px] mr-1'><FaRegStarHalfStroke /></span>
          4.5 Star
        </p>
      </div>

        <h1 className='font-bold text-xl w-[700px]  text-[#000000]'>Psycological nforcements to our Brain</h1>
          <p className='w-[700px] text-justify'>Laravel is a PHP based web framework for building high-end web applications using Laravel is a PHP based web framework for building high-end web applications using Laravel is a PHP based web framework for building high-end web applications using </p>

           <div className='mt-10'>
            <button className='btn bg-[#5A5BCB] hover:bg-[#5A5BCB] text-white w-[150px] h-[20px] mr-8 rounded-full'>Short Courses</button>
            <button className='btn bg-[#E7E7E7] w-[120px] h-[30px] rounded-full'>Batches</button>
           </div>

        </div>
    </div>
  );
};

export default FirstContent;