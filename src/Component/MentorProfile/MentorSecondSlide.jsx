import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";

const MentorSecondSlide = () => {
  return (
    <div>
      <div
        className="bg-no-repeat px-5 py-3 w-[393px] h-[213px] bg-[#565fc9]"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/RS71m1W/unsplash-rlb-G0p-n-QOU.png')",
        }}
      >
        <p className="text-sm text-white">Subject name</p>
        <h1 className="text-xl font-bold mt-3 text-white">255 BDT/ Session</h1>
        <button className="btn  mt-1 w-[155px] h-[37px] bg-[#FFFFFF] text-[#5A5BCB] hover:bg-[#FFFFFF]">
          Book a slot
        </button>

        <div className="flex mt-5">
          <img
            className="rounded-full h-[38px] w-[38px]"
            src="https://i.ibb.co/gPKTrB8/impressed-surprised-man-points-away-blank-space-273609-40694-3.png"
            alt=""
          />
          <div className="ml-3">
            <h4 className="font-bold text-white">Mentor Name</h4>
            <p className=" text-sm text-white">Speacialization</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <button className="btn btn-sm mr-3 bg-[#5A5BCB] text-white rounded-full hover:bg-[#5A5BCB]">
          Schedules
        </button>
        <button className="btn btn-sm h-[30px] w-[70px] avatar online rounded-full bg-[#E7E7E7]">
          {" "}
          Details
        </button>
      </div>
      {/* Enrollment */}
      <div className="mt-8">
        <h1 className="text-xl font-bold ">Classes</h1>
        <div>
          <div className="flex mt-5">
            <img
              src="https://i.ibb.co/g44ytXy/unsplash-o-l-Lsd-VTxak.png"
              alt=""
              className="w-[48px] h-[50px]"
            />
            <div className="ml-3">
              <p>09 to 12 to enrollment</p>
              <h3 className="font-bold">Utvaash</h3>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-3">
              <p className="text-[#5A5BCB] font-bold">Physic</p>
              <p className="flex text-xs mt-1">
                <span>
                  <FaStarHalfStroke className="text-blue-500 mr-1" size={15} />
                </span>
                4.5Star
              </p>
            </div>
            <p className="mt-1">Mon to Friday 4.45 AM</p>
            <a className="link text-[#34A770] mt-1">Enroll Now</a>
          </div>
        </div>
        <hr className="mt-3"/>

        {/* Center name here 1 */}
        <div>
          <div className="flex mt-5">
            <img
              src="https://i.ibb.co/g44ytXy/unsplash-o-l-Lsd-VTxak.png"
              alt=""
              className="w-[48px] h-[50px]"
            />
            <div className="ml-3">
              <p>09 to 12 to enrollment</p>
              <h3 className="font-bold">Center name here</h3>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-3">
              <p className="text-[#5A5BCB] font-bold">Course name</p>
              <p className="flex text-xs mt-1">
                <span>
                  <FaStarHalfStroke className="text-blue-500 mr-1" size={15} />
                </span>
                4.5Star
              </p>
            </div>
            <p className="mt-1">Mon to Friday 4.45 AM</p>
            <a className="link text-[#34A770] mt-1">Enroll Now</a>
          </div>
        </div>
        <hr className="mt-3"/>

        {/* Center name here 2*/}
        <div>
          <div className="flex mt-5">
            <img
              src="https://i.ibb.co/g44ytXy/unsplash-o-l-Lsd-VTxak.png"
              alt=""
              className="w-[48px] h-[50px]"
            />
            <div className="ml-3">
              <p>09 to 12 to enrollment</p>
              <h3 className="font-bold">Center name here</h3>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-3">
              <p className="text-[#5A5BCB] font-bold">Course name</p>
              <p className="flex text-xs mt-1">
                <span>
                  <FaStarHalfStroke className="text-blue-500 mr-1" size={15} />
                </span>
                4.5Star
              </p>
            </div>
            <p className="mt-1">Mon to Friday 4.45 AM</p>
            <a className="link text-[#34A770] mt-1">Enroll Now</a>
          </div>
        </div>
        <hr className="mt-3"/>
      </div>
    </div>
  );
};

export default MentorSecondSlide;
