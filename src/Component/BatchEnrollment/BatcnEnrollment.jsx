import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Firstcontnet from "./Firstcontnet";
import SecondSlide from "./SecondSlide";

const BatchEnrollment = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[667px] h-[375px]">
          <div className="flex justify-between">
            <div>
              <a href="/mycourse" className="flex">
                <span>
                  <FaLongArrowAltLeft className="mt-1 mr-1" size={20} />
                </span>
                <span className="font-bold text-xl">Course Name here </span>
              </a>
              <p className="text-sm text-gray-400">
                Enrolled 12 dec | Completed 31 Dec
              </p>
            </div>
            <div className="">
              <div className="avatar-group -space-x-4 mt-5 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-[32px] h-[32px] rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-[32px] h-[32px] rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-[32px] h-[32px] rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="placeholder">
                  <div className="w-[120px] ml-4 mt-2">
                    <span className="text-gray-500">+ 25 people</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Firstcontnet></Firstcontnet>
          </div>
        </div>

        {/* second content */}
        <div className="ml-[210px] mt-[40px] ">
          <div>
            <SecondSlide></SecondSlide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchEnrollment;
