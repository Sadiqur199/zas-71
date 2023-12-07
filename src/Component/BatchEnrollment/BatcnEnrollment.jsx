import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const BatchEnrollment = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <div className="flex justify-between">
            <div>
              <a href="/" className="flex">
                <span>
                  <FaLongArrowAltLeft className="mt-1 mr-1" size={20} />
                </span>
                <span className="font-bold text-xl">Back To Home</span>
              </a>
              <p className="text-sm text-gray-400">
                Enrolled 12 dec | Completed 31 Dec
              </p>
            </div>
            <div>
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1>sadiq</h1>
          </div>
        </div>

        {/* second content */}
        <div className="ml-[170px]">
          <h1 className="font-bold text-xl">Our professional teachers</h1>
          <p className="text-sm text-gray-400">
            Enrolled 12 dec | Completed 31 Dec
          </p>{" "}
          <div>
            <h1>sadiq</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchEnrollment;
