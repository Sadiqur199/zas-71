"use client";
import React from "react";
import ProfileDetailsSecondpart from "./ProfileDetailsSecondpart";

const ProfileDetails = () => {
  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected File:", selectedFile);
  };
  return (
    <div className="w-[832px] mx-auto mt-5">
      <div className="flex">
        <div className="h-[730px] w-[414px]">
          <h1 className="font-bold text-sm mb-5">Upload Profile Details</h1>
          <div>
            <label htmlFor="fileInput">
              <img
                className="text-black"
                src="https://i.ibb.co/MfbS6TY/Frame-562.png"
                alt=""
              />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
          </div>
          <div>
            <form action="">
              <label className="form-control  w-[414px]">
                <div className="label">
                  <span className="label-text">UserName</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  className="input input-bordered w-[414px] h-[40px]"
                />
              </label>

              <label className="form-control  w-[414px]">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-[414px] h-[40px]"
                />
              </label>

              <label className="form-control  w-[414px]">
                <div className="label">
                  <span className="label-text">FullName</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Your FullName"
                  className="input input-bordered w-[414px] h-[40px]"
                />
              </label>

              <label className="form-control  w-[414px]">
                <div className="label">
                  <span className="label-text">MobileNo</span>
                </div>
                <input
                  type="number"
                  placeholder="Enter Your MobileNo"
                  className="input input-bordered w-[414px] h-[40px]"
                />
              </label>

              <label className="form-control  w-[414px]">
                <div className="label">
                  <span className="label-text-alt">Password</span>
                </div>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-[414px] h-[40px]"
                />
              </label>

              <label className="form-control  w-[414px]">
                <div className="label">
                  <span className="label-text-alt">Retype Password</span>
                </div>
                <input
                  type="password"
                  placeholder="Enter Your ReTypePassword"
                  className="input input-bordered w-[414px] h-[40px]"
                />
              </label>

              <input
                type="submit"
                value="Next"
                className="bg-[#5A5BCB] text-white w-[181px] h-[38px] rounded mt-8"
              />
            </form>
          </div>
        </div>

       <div>
       <ProfileDetailsSecondpart></ProfileDetailsSecondpart>
       </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
