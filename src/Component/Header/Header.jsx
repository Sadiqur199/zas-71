import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";



const Header = () => {
  return (
    <div className="flex">
      <div>
        <ul className="flex">
        <li className="mt-2">
              <a className="font-bold mr-5 ">Dashboard</a>
            </li>
            <li>
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered  rounded-full  md:w-[183px] md:h-[36px] hover:bg-white"
                />
            </li>
        </ul>
      </div>

      <div className="md:ml-[700px]">
      <div className="flex">
          <a href="" className="underline text-blue-600 md:mr-8">Become a Mentor</a>
          <a href="" className="md:mr-5"><CiMail  className="h-[25px] w-[25px]"/></a>
          <a href="" className="md:mr-5"><IoMdNotificationsOutline className="h-[25px] w-[25px]"/></a>
          <a href="" className="md:mr-5"><CiCircleQuestion className="h-[25px] w-[25px]"/></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
