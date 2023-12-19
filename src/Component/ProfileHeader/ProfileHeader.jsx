import React from 'react';
import { CiMail } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";


const ProfileHeader = () => {
  return (
    <div>
      <div className="flex mx-auto  w-[969px] justify-between">
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

      <div className="">
      <div className="flex">
          <a href="" className="underline text-blue-600 md:mr-8">Become a Mentor</a>
          <a href="" className="md:mr-5"><CiMail  className="h-[25px] w-[25px]"/></a>
          <a href="" className="md:mr-5"><IoMdNotificationsOutline className="h-[25px] w-[25px]"/></a>
          <a href="" className="md:mr-5"><CiCircleQuestion className="h-[25px] w-[25px]"/></a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfileHeader;