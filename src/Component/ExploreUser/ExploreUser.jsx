import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ExploreUserSubject from "./ExploreUserSubject";

const ExploreUser = () => {
  return (
    <div>
      <div className="flex">
        <img
          src="https://i.ibb.co/44yBnCv/Rectangle-212.png"
          className="w-[377px]h-[377px]"
          alt=""
        />
        <div>
          <div className="flex justify-between mt-3 ml-8">
            <div>
              <p className="text-black text-sm mb-1">Type of subject</p>
              <h1 className="font-bold text-2xl mb-4  text-[#383838]">
                Mst <br /> Liza Ahmed (PHD)
              </h1>
              <p className="w-[594px]">
                Selena comments on your posts about Algorithm tasksSelena
                comments on your posts about Algorithm tasksSelena comments on
                your posts about Algorithm tasks
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between mb-2">
              <div className="flex">
                <FaCheckCircle
                  className="text-gray-400 mt-1 ml-8 mr-1"
                  size={15}
                />
                <h1 className="text-[#34A770]">Course Name</h1>
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="flex">
                <FaCheckCircle
                  className="text-gray-400 mt-1 ml-8 mr-1"
                  size={15}
                />
                <h1 className="text-[#34A770]">Course Name</h1>
              </div>
            </div>
            <a className="link link-primary ml-8">View profile</a>
          </div>
        </div>
      </div>

      <div>
         <ExploreUserSubject></ExploreUserSubject>
      </div>
    </div>
  );
};

export default ExploreUser;
