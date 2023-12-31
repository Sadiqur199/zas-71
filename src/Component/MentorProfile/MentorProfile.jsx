import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import MentorSecondSlide from "./MentorSecondSlide";
import MentorFirstSlide from "./MentorFirstSlide";


const MentorProfile = () => {
  return (
    <div>
      <div className="flex">
      <div className="w-[667px]h-[375px]">
        <a href="/" className="flex">
            <span>
              <FaLongArrowAltLeft className="mt-1 mr-1" size={20}/>
            </span>
            <span className="font-bold text-xl">
              Back To Home 
            </span>
          </a>
          <p className="text-sm text-gray-400">
            Enrolled 12 dec | Completed 31 Dec
          </p>
          <div className="mt-[32px] h-[375px] w-[667px]">
            <MentorFirstSlide></MentorFirstSlide>
          </div>
        </div>

        {/* second content */}
        <div className="mt-[35px] ml-[200px] ">
          <div className=""> 
          <MentorSecondSlide></MentorSecondSlide>
          </div>
        </div>
      </div>
    </div>


  );
};

export default MentorProfile;
