import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";



const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="">
            <img
              className="h-[24px] w-[96px]"
              src="https://i.ibb.co/RN6JpSR/Frame-3-1.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar ml-[-250px] hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <li>
              <a>Dashboard</a>
            </li>
            <li>
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered  rounded-full w-24 md:w-[183px] md:h-[36px] hover:bg-white"
                />
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="" className="underline text-blue-600 mr-8">Become a Mentor</a>
          <a href="" className="mr-5"><CiMail  className="h-[25px] w-[25px]"/></a>
          <a href="" className="mr-5"><IoMdNotificationsOutline className="h-[25px] w-[25px]"/></a>
          <a href="" className="mr-5"><CiCircleQuestion className="h-[25px] w-[25px]"/></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
