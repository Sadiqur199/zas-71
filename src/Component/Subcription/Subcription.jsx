import React from "react";
import { TbPointFilled } from "react-icons/tb";

const Subcription = () => {
  return (
    <div className="w-[981px] border border-solid border-gray-500 h-[556px]  mx-auto">
      <div className="grid grid-cols-3">
        <div className="w-[327px] h-[556px] p-10 shadow-xl">
          <h1 className="font-bold text-xl">Monthly Pack</h1>
          <p className="text-xs text-gray-400">membership</p>
          <div className="mt-5 mb-10">
            <span className="font-bold text-3xl">$11</span>
            <span className="font-light text-sm mt-2 ml-2">/month</span>
          </div>
          <hr className="w-[200px]"/>
          <ul className="mt-5">
            <li className="flex mb-2"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>All 18 Lesson</span></li>
            <li className="flex mb-2"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>Source file</span></li>
            <li className="flex"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>Life time access</span></li>
          </ul>
          <button className="w-[236px] h-[50px] rounded-full bg-[#5A5BCB] text-white mt-[200px]">Choose Plan</button>
        </div>
{/* second Card */}
        <div className="w-[327px] h-[556px] p-10 shadow-xl">
          <h1 className="font-bold text-xl">Monthly Pack</h1>
          <p className="text-xs text-gray-400">membership</p>
          <div className="mt-5 mb-10">
            <span className="font-bold text-3xl">$351</span>
            <span className="font-light text-sm mt-2 ml-2">/month</span>
            <p className="text-xs text-gray-400 mt-5">Save $30</p>
          </div>
          <hr className="w-[200px]"/>
          <ul className="mt-5">
            <li className="flex mb-2"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>All 18 Lesson</span></li>
            <li className="flex mb-2"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>Source file</span></li>
            <li className="flex mb-2"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>Life time access</span></li>
            <li className="flex mb-2"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>Split Payment</span></li>
            <li className="flex"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>Commercial License</span></li>
          </ul>
          <button className="w-[236px] h-[50px] rounded-full bg-[#5A5BCB] text-white mt-[100px]">Choose Plan</button>
        </div>
{/* Third Card */}
<div className="w-[327px] h-[556px] p-10 shadow-xl">
          <h1 className="font-bold text-xl">Yearly Plan</h1>
          <p className="text-xs text-gray-400">membership</p>
          <div className="mt-5 mb-10">
            <span className="font-bold text-3xl">$351</span>
            <span className="font-light text-sm mt-2 ml-2">/yearly</span>
            <p className="text-xs text-gray-400 mt-5">Save $30</p>
          </div>
          <hr className="w-[200px]"/>
          <ul className="mt-5">
            <li className="flex mb-2"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>All 18 Lesson</span></li>
            <li className="flex mb-2"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>Source file</span></li>
            <li className="flex mb-2"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>Life time access</span></li>
            <li className="flex mb-2"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>Split Payment</span></li>
            <li className="flex"> <TbPointFilled className="mt-[6px] mr-1" size={12}/> <span>Commercial License</span></li>
          </ul>
          <button className="w-[236px] h-[50px] rounded-full bg-[#5A5BCB] text-white mt-[100px]">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Subcription;
