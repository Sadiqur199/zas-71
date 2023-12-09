import React from "react";

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
        <p className="text-sm text-white">
        Subject name
        </p>
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
      <button className="btn btn-sm mr-3 bg-[#5A5BCB] text-white rounded-full hover:bg-[#5A5BCB]">Schedules</button>
      <button className="btn btn-sm h-[30px] w-[70px] avatar online rounded-full bg-[#E7E7E7]"> Details</button>
      </div>

    </div>
  );
};

export default MentorSecondSlide;
