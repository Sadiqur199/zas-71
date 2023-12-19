import React from "react";

const ProfileHeader = () => {
  return (
    <div>
      <div className="flex mx-auto  w-[1200px] justify-between">
        <div>
          <ul className="flex">
            <li className="mt-2">
              <a href="/">
                <img
                  className="h-[24px] w-[96px] mt-2"
                  src="https://i.ibb.co/YfMmPbc/logo.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-5">
          <div className="flex">
            <a href="" className="text-sm text-gray-500">
              Want to make money today{" "}
              <span className="font-bold text-blue-600 md:ml-3">
                Upgrade to pro
              </span>{" "}
            </a>

             <div className="flex ml-8">
             <div>
              <img className=" w-[25px] h-[25px]" src="https://i.ibb.co/3p8ksjF/Ellipse-377.png" alt="" />
            </div>
            <div className="mt-[-15px] ml-[-10px]">
              <ul className="menu border-none">

                <li>
                  <details open>
                    <summary className="font-bold">Akib</summary>
                    <ul>
                      <li>
                        <a>Mentor</a>
                      </li>
                      <li>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
