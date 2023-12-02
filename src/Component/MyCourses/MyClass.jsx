import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import FirstContent from "./FirstContent";

const MyClass = () => {
  return (
    <div>
      <div className="flex">
        <div>
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
            <FirstContent></FirstContent>
          </div>
        </div>

        {/* second content */}
        <div className="ml-[200px]">
          <h1 className="font-bold text-xl">Our professional teachers</h1>
          <p className="text-sm text-gray-400">
            Enrolled 12 dec | Completed 31 Dec
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default MyClass;
