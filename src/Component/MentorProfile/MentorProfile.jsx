import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";


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
          <div>
            <h1>sadiq</h1>
          </div>
        </div>

        {/* second content */}
        <div className="ml-[210px] mt-[40px] ">
          <div>
            <h1>Sadiq</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
