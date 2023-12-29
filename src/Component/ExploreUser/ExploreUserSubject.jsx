import React from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const ExploreUserSubject = () => {
  return (
    <div>
             <div className="flex">
          <img src="https://i.ibb.co/44yBnCv/Rectangle-212.png" className="w-[267px]h-[267px]" alt="" />
        <div>
        <div className="flex justify-between mt-3 ml-8">
             <div>
             <p className="font-bold text-xl text-[#383838]">Mentor Name</p>
             <p className="text-[#898989] text-sm">Subject name</p>
             </div>
              <p className="flex text-xs mt-[12px] ml-[150px]">
                <span>
                  <FaStarHalfStroke className="text-blue-500 mr-1" size={15} />
                </span>
                4.5Star
              </p>
            </div>

         <div className="mt-8">
         <div className="flex justify-between mb-2">
               <div className="flex">
                  <FaCheckCircle  className="text-gray-400 mt-1 ml-8 mr-1" size={15}/>
                    <h1 className="text-[#5A5BCB]">Course Name</h1>
               </div>
            </div>
            <div className="flex justify-between mb-2">
               <div className="flex">
                  <FaCheckCircle  className="text-gray-400 mt-1 ml-8 mr-1" size={15}/>
                    <h1 className="text-[#5A5BCB]">Course Name</h1>
               </div>
            </div>
            <div className="flex justify-between">
               <div className="flex">
                  <FaCheckCircle  className="text-gray-400 mt-1 ml-8 mr-1" size={15}/>
                    <h1 className="text-[#5A5BCB]">Course Name</h1>
               </div>
            </div>
         </div>
         <div className='flex justify-between'>
          <div>
            <h1></h1>
          </div>
          <div>
            <p className='underline text-[#5A5BCB]'>3+See All</p>
          </div>
         </div>
        </div>
       </div>

    </div>
  );
};

export default ExploreUserSubject;