import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const FirstContent = () => {
  return (
    <div className="mt-[30px]">
      <img
        className="w-[700px] h-[236px]"
        src="https://i.ibb.co/x8Q5vTC/unsplash-o-l-Lsd-VTxak.png"
        alt=""
      />
      <div className="m-2">
        <div className="flex justify-between">
          <p className="text-xs text-gray-500">09 to 12 to enrollment</p>
          <p className="flex text-xs mr-[50px]">
            <span className="mt-[2px] mr-1">
              <FaRegStarHalfStroke />
            </span>
            4.5 Star
          </p>
        </div>

        <h1 className="font-bold text-xl w-[700px]  text-[#000000]">
          Psycological nforcements to our <br /> Brain
        </h1>
        <p className="w-[700px] text-justify">
          Laravel is a PHP based web framework for building high-end web
          applications using Laravel is a PHP based web framework for building
          high-end web applications using Laravel is a PHP based web framework
          for building high-end web applications using{" "}
        </p>

        <div className="mt-10 ml-[-8px]">
          <button className="btn bg-[#5A5BCB] hover:bg-[#5A5BCB] text-white w-[150px] h-[20px] mr-5 rounded-full">
            Short Courses
          </button>
          <button className="btn bg-[#E7E7E7] w-[120px] h-[30px] rounded-full">
            Batches
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-xl">Short Courses</h1>
        <p className="text-sm text-gray-400">
          Enrolled 12 dec | Completed 31 Dec
        </p>{" "}
        <div className="mt-8">
          <div className="flex justify-between">
            <h3 className="underline text-[#010101]">01 to 05 Courses</h3>
            <FaPlus className="text-gray-500 mr-8" />
          </div>

          <div className="flex justify-between mt-7">
            <h3 className="underline text-[#010101]">05 Courses</h3>
            <FaPlus className="text-gray-500 mr-8" />
          </div>

          <div className="flex justify-between mt-7">
            <h3 className="underline text-[#5A5BCB]">PSC Schedule test</h3>
            <FaMinus className="text-[#5A5BCB] mr-8" />
          </div>
        </div>
      </div>
      {/* card section */}
      <div className="grid grid-cols-3 mt-8 ">
        <div className="card card-compact w-[250px] mb-8 ml-[-25px]">
          <figure>
            <img
              src="https://i.ibb.co/QvtV71K/unsplash-F6-Da4r2x5to.png"
              alt=""
              className="w-[200px] h-[149px]"
            />
          </figure>
          <div className="card-body">
            <p className="w-[88px] h-[25px] text-sm text-[#676161] ml-3">
              Free Course
            </p>
            <h2 className="font-bold text-xl w-[199px] h-[54px] text-[#000000] ml-3">
              Psycological nforcements to our Brain
            </h2>
          </div>
        </div>

        <div className="card card-compact w-[250px] mb-8">
          <figure>
            <img
              src="https://i.ibb.co/QvtV71K/unsplash-F6-Da4r2x5to.png"
              alt=""
              className="w-[200px] h-[149px]"
            />
          </figure>
          <div className="card-body">
            <p className="w-[88px] h-[25px] text-sm text-[#676161] ml-3">
              Free Course
            </p>
            <h2 className="font-bold text-xl w-[199px] h-[54px] text-[#000000] ml-3">
              Psycological nforcements to our Brain
            </h2>
          </div>
        </div>

        <div className="card card-compact w-[250px] mb-8">
          <figure>
            <img
              src="https://i.ibb.co/QvtV71K/unsplash-F6-Da4r2x5to.png"
              alt=""
              className="w-[200px] h-[149px]"
            />
          </figure>
          <div className="card-body">
            <p className="w-[88px] h-[25px] text-sm text-[#676161] ml-3">
              Free Course
            </p>
            <h2 className="font-bold text-xl w-[199px] h-[54px] text-[#000000] ml-3">
              Psycological nforcements to our Brain
            </h2>
          </div>
        </div>
      </div>

      {/* last content */}
      <div>
        <div className="flex justify-between mt-7">
          <h3 className="underline text-[#010101]">09 Courses</h3>
          <FaPlus className="text-gray-500 mr-8" />
        </div>

        <div className="flex justify-between mt-7">
          <h3 className="underline text-[#010101]">09 to 10 Courses</h3>
          <FaPlus className="text-gray-500 mr-8" />
        </div>
      </div>
    </div>
  );
};

export default FirstContent;
