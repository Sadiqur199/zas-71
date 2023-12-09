import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-[1280px] h-[580px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src='https://i.ibb.co/qjxyyHW/unsplash-m-7p45-Jf-XQo-1.png' className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0  top-0  ">
            <div className="text-white space-y-4 pl-16 w-1/2">
              <h1 className="w-[196px] h-[32px] mb-10">Trending topics</h1>
              <h1 className="w-[100px] h-[25px] text-sm mt-10">Free course</h1>
              <h2 className="text-4xl font-semibold">
              Psycological nforcements to our Brain
              </h2>
              <p className="text-sm">
              Popular and trending
              </p>
              <div>
              <button className="btn border-none w-[188px] h-[44px] bg-[#FF2E63] text-white mr-5">
                  Join This Course
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 bottom-0 ml-12">
            <a href="#slide4" className=" mr-5 text-white w-[40px] h-[35px]">
            <FaArrowLeft />
            </a>
            <a href="#slide2" className="text-white w-[40px] h-[35px]">
            <FaArrowRight />
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src='https://i.ibb.co/qjxyyHW/unsplash-m-7p45-Jf-XQo-1.png' className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0  top-0 ">
          <div className="text-white space-y-4 pl-16 w-1/2">
              <h1 className="w-[196px] h-[32px] mb-10">Trending topics</h1>
              <h1 className="w-[100px] h-[25px] text-sm mt-10">Free course</h1>
              <h2 className="text-4xl font-semibold">
              Psycological nforcements to our Brain
              </h2>
              <p className="text-sm">
              Popular and trending
              </p>
              <div>
              <button className="btn border-none w-[188px] h-[44px] bg-[#FF2E63] text-white mr-5">
                  Join This Course
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 bottom-0 ml-12">
            <a href="#slide1" className="text-white mr-5 w-[40px] h-[35px]">
            <FaArrowLeft />
            </a>
            <a href="#slide3" className="text-white w-[40px] h-[35px]">
            <FaArrowRight />
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src='https://i.ibb.co/qjxyyHW/unsplash-m-7p45-Jf-XQo-1.png' className="w-full rounded-xl" />

          <div className="absolute rounded-xl flex items-center h-full left-0  top-0 ">
          <div className="text-white space-y-4 pl-16 w-1/2">
              <h1 className="w-[196px] h-[32px] mb-10">Trending topics</h1>
              <h1 className="w-[100px] h-[25px] text-sm mt-10">Free course</h1>
              <h2 className="text-4xl font-semibold">
              Psycological nforcements to our Brain
              </h2>
              <p className="text-sm">
              Popular and trending
              </p>
              <div>
              <button className="btn border-none w-[188px] h-[44px] bg-[#FF2E63] text-white mr-5">
                  Join This Course
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 bottom-0 ml-12">
            <a href="#slide2" className="text-white mr-5 w-[40px] h-[35px]">
            <FaArrowLeft />
            </a>
            <a href="#slide4" className="text-white w-[40px] h-[35px]">
            <FaArrowRight />
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src='https://i.ibb.co/qjxyyHW/unsplash-m-7p45-Jf-XQo-1.png' className="w-full rounded-xl" />

          <div className="absolute rounded-xl flex items-center h-full left-0  top-0 ">
          <div className="text-white space-y-4 pl-16 w-1/2">
              <h1 className="w-[196px] h-[32px] mb-10">Trending topics</h1>
              <h1 className="w-[100px] h-[25px] text-sm mt-10">Free course</h1>
              <h2 className="text-4xl font-semibold">
              Psycological nforcements to our Brain
              </h2>
              <p className="text-sm">
              Popular and trending
              </p>
              <div>
              <button className="btn border-none w-[188px] h-[44px] bg-[#FF2E63] text-white mr-5">
                  Join This Course
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 bottom-0 ml-12">
            <a href="#slide3" className="text-white mr-5 w-[40px] h-[35px]">
            <FaArrowLeft />
            </a>
            <a href="#slide1" className="text-white w-[40px] h-[35px]">
            <FaArrowRight />
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Banner;
