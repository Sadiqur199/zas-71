import React from "react";
import { IoIosFlag } from "react-icons/io";
import { GoClockFill } from "react-icons/go";
import FAQ from "../ProfileDetails/FAQ";
import { IoLogoYoutube } from "react-icons/io";




const TaskSection = () => {
  return (
    <div className="w-[832px] mx-auto mt-5 flex">
      <div>
        <h1 className="mb-5 font-semibold">Complete minimum one task</h1>
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
      <div className="w-[400px] h-[150px] bg-[#F4F4F4] mt-10">
        <div className="flex justify-between p-4">
        <IoLogoYoutube size={40} className="text-[#FF3D00]"/>
          <div className="mt-1 ml-5">
           <h1 className="font-bold">Watch a full video</h1>
           <p className="text-sm text-gray-400 my-3">Yes, you can try us for free for 30 days. If you want, we’ll provide </p>
            <a href="" className="font-bold text-xl text-[#5A5BCB] ">Watch</a>
          </div>
        </div>
      </div>


      {/* Third Part */}
      <div>
      <h1 className="font-semibold my-5">Facebook Likes</h1>
      <div className="w-[400px] h-[80px] bg-[#F4F4F4] p-4">
        <div className="flex">
          <img className="w-[40px] h-[40px]" src="https://i.ibb.co/ysbKn8y/YouTube.png" alt="" />
          <div className=" ml-5">
            <h1 className="font-bold">Page Name goes here</h1>
            <a href="" className="font-semibold text-sm text-[#5A5BCB] ">Like Now</a>
          </div>
        </div>
      </div>

      <div className="w-[400px] h-[80px] bg-[#F4F4F4] p-4 mt-5">
        <div className="flex">
          <img className="w-[40px] h-[40px]" src="https://i.ibb.co/ysbKn8y/YouTube.png" alt="" />
          <div className=" ml-5">
            <h1 className="font-bold">Page Name goes here</h1>
            <a href="" className="font-semibold text-sm text-[#5A5BCB] ">Like Now</a>
          </div>
        </div>
      </div>

      <div className="w-[400px] mt-5 flex justify-between mb-5">
       <button className="w-[181px] bg-[#9CA3AF] rounded h-[38px] text-white">Previous</button>
       <button className="w-[181px] bg-[#5A5BCB] rounded h-[38px] text-white">Next</button>
      </div>
      </div>
      </div>



      {/* Task Section Second Part */}
      <div className="ml-[70px] mt-3">
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
       <div className="mt-5">
       <h1 className='font-bold mt-5 mb-3'>FAQ</h1>
       <FAQ></FAQ>
       </div>
      </div>
      
    </div>
  );
};

export default TaskSection;
