import React from "react";
import { IoIosFlag } from "react-icons/io";
import { GoClockFill } from "react-icons/go";
import FAQ from "../ProfileDetails/FAQ";
import { IoLogoYoutube } from "react-icons/io";




const TaskSection = () => {
  return (
    <div className="w-[832px] mx-auto mt-5 flex">
      <div>
      <div className="bg-[#F4F4F4] w-[400px] h-[150px] rounded">
        <div className="flex p-4">
          <h1>Introduction to Laravel 8.0</h1>
          <div className="avatar-group -space-x-2 ml-2 ">
            <div className="avatar">
              <div className="w-4">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-4">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <button className="ml-10">Enroll Now</button>
        </div>
        {/* second line */}
        <div className="flex px-4 pb-3">
          <div className="flex">
          <IoIosFlag  className="mt-[3px] text-[#C4CAD3]" size={15}/>
           <p className="text-xs text-[#C4CAD3]">Due to 15 July 2021</p>
          </div>
          <div className="flex ml-3">
          <GoClockFill  className="mt-[3px] text-[#C4CAD3]" size={15}/>
           <p className="text-xs text-[#C4CAD3]">10:00 AM</p>
          </div>
        </div>

        {/* Third line */}
        <div className="px-3">
          <div className="flex justify-between">
          <h1>Project Progress</h1>
          <p>70%</p>
          </div>
          <progress className="progress progress-[#5A5BCB] w-full" value="70" max="100"></progress>

        </div>
      </div>


      {/* second card */}
      <div className="w-[400px] h-[150px] bg-[#F4F4F4]">
        <div>
        <IoLogoYoutube />
          
        </div>
      </div>
      </div>

      {/* Task Section Second Part */}
      <div>
      <div className='bg-[#5A5BCB] h-auto rounded '>
      <div className=" p-5 text-white">
         <div className=' flex '>
         <img
            className="rounded-full h-[38px] w-[38px]"
            src="https://i.ibb.co/3p8ksjF/Ellipse-377.png"
            alt=""
          />
            <h4 className="font-bold text-sm text-white mt-2 ml-3">Ahsanul Akib</h4>
         </div>
         <p className='mt-3 text-xs'>Email:ahsanulakib@gmail.com</p>
         <p className='mt-3 text-xs'>Phone:75216858136</p>
        </div>
      </div>
        <FAQ></FAQ>
      </div>
      
    </div>
  );
};

export default TaskSection;
