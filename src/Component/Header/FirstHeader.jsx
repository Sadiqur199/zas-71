import React from "react";
import { FaViadeo } from "react-icons/fa";
import { FaDiscourse } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCog } from "react-icons/fa";

const FirstHeader = () => {
  return (
    <div>
      <a href="/">
        <img
          className="h-[24px] w-[96px] mt-2"
          src="https://i.ibb.co/YfMmPbc/logo.png"
          alt=""
        />
      </a>
      <ul>
        <li className="mt-[50px]">
          <a
            href=""
            className="flex hover:text-[#5A5BCB] hover:font-bold hover:border-b-2 hover:border-[#5A5BCB]"
          >
            <span>
              <FaViadeo className="mr-2 mt-1 text-[#959595] hover:text-[#5A5BCB]" />
            </span>
            Dashboard
          </a>
        </li>

        <li className="mt-[50px]">
          <a
            href=""
            className="flex hover:text-[#5A5BCB] hover:font-bold hover:border-b-2 hover:border-[#5A5BCB]"
          >
            <span>
              <FaDiscourse className="mr-2 mt-1 text-[#959595] hover:text-[#5A5BCB]" />
            </span>
            My Course
          </a>
        </li>

        <li className="mt-[50px] ">
          <a
            href=""
            className="flex hover:text-[#5A5BCB] hover:font-bold hover:border-b-2 hover:border-[#5A5BCB]"
          >
            <span>
              <FaToolbox className="mr-2 mt-1 text-[#959595] hover:text-[#5A5BCB]" />
            </span>
            Explore
          </a>
        </li>

        <li className="mt-[50px] ">
          <a
            href=""
            className="flex hover:text-[#5A5BCB] hover:font-bold hover:border-b-2 hover:border-[#5A5BCB]"
          >
            <span>
              <FaCalendarCheck className="mr-2 mt-1 text-[#959595] hover:text-[#5A5BCB]" />
            </span>
            Classes
          </a>
        </li>

        <li className="mt-[50px] ">
          <a
            href=""
            className="flex hover:text-[#5A5BCB] hover:font-bold hover:border-b-2 hover:border-[#5A5BCB]"
          >
            <span>
              <FaCog className="mr-2 mt-1 text-[#959595] hover:text-[#5A5BCB]" />
            </span>
            Setting
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FirstHeader;
