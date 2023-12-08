import React from "react";
import { GoCircle } from "react-icons/go";
import { FaCircle } from "react-icons/fa6";

const Firstcontnet = () => {
  return (
    <div className="mt-[30px]">
      <div>
        <div className="artboard artboard-horizontal phone-2 bg-black ">
          <iframe
            width="667"
            height="375"
            src="https://www.youtube.com/embed/HcOc7P5BMi4?si=0J6PP7986RKQ3-Y-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <p className="md:text-justify mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          doloremque nemo porro sit, qui voluptate consequatur quam, aliquid vel
          non velit culpa quibusdam? Expedita aliquid suscipit, nam eos eligendi
          mollitia deleniti, dignissimos deserunt nostrum atque amet dolores
          assumenda consequatur ad harum, adipisci repellat sint recusandae iure
          excepturi minus rerum quam!
        </p>
      </div>
      <div>
        <h1 className="font-bold text-xl w-[600px]  text-[#000000] mt-8 mb-5">
          Shyllabus for this course
        </h1>

        {/* step */}
        <div>
          <div className="flex items-center relative mb-4">
            <div className="mr-4">
              <GoCircle className="text-[#5A5BCB]" size={30} />
            </div>
            <div className="flex-grow md:mb-[-20px]">
              <h2 className=" text-sm">
                <span className="font-bold">Selena</span> comments on your posts
                about <br /> Algorithm tasks
              </h2>
              <p className="text-xs text-[#41475E]">20 minutes ago</p>
            </div>
            <div className="border-l border-gray-300 absolute h-[65px] mt-[85px] left-[15px]"></div>
          </div>
          
          {/* second step */}
          <div className="flex items-center relative">
            <div className="ml-1">
              <FaCircle className="text-[#E0E0E0]" size={20} />
            </div>
            <div className="flex-grow ml-5 mt-8">
              <h2 className="w-[400] text-sm">
                <span className="font-bold">Well done!</span> You have submitted
                your tasks of <br /> Javascript 1
              </h2>
              <p className="text-xs text-[#41475E]">Yesterday</p>
            </div>
            <div className="border-l border-gray-300 absolute h-[87px] mt-[107px] left-[15px]"></div>
          </div>

          {/* third step */}
          <div className="flex items-center relative ">
            <div className="ml-1">
              <FaCircle className="text-[#E0E0E0]" size={20} />
            </div>
            <div className="flex-grow ml-5 mt-8">
              <h2 className="w-[400] text-sm">
                Your task is overdue for <br />
                <span className="font-bold">13 hours and 25 minutes</span>{" "}
              </h2>
              <p className="text-xs text-[#41475E]">23 June 2021</p>
            </div>
            <div className="border-l border-gray-300 absolute h-[87px] mt-[107px] left-[15px]"></div>
          </div>

          {/* fourth step */}
          <div className="flex items-center relative">
            <div className="ml-1">
              <FaCircle className="text-[#E0E0E0]" size={20} />
            </div>
            <div className="flex-grow ml-5 mt-8">
              <h2 className="w-[400] text-sm">
                <span className="font-bold">Mr. Dika</span> add new quiz and
                some taks on PHP <br /> course
              </h2>
              <p className="text-xs text-[#41475E]">28 May 2021</p>
            </div>
            <div className="border-l border-gray-300 absolute h-[65px] mt-[85px] left-[15px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstcontnet;
