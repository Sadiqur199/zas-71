import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex">
        <div className="bg-[#5A5BCB] w-[600px] text-white h-[966px]">
          <p className="px-14 py-20 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            perspiciatis nulla, distinctio id fugit accusamus ipsa aperiam sit,
            ad quasi illo assumenda cumque ex, laborum saepe ullam praesentium
            eum non ducimus eos commodi excepturi. Porro dignissimos nihil sunt,
            illo ipsam libero enim nemo molestias quis fuga, quod itaque in
            tempora!
          </p>
          <img
            className="w-[557px] h-[557px]"
            src="https://i.ibb.co/k0vMsFk/bitcoin.png"
            alt=""
          />
        </div>
        <div className="ml-[200px] w-auto h-[966px]">
          <div className="flex justify-between text-end ml-[300px] mt-5">
            <p className="mr-5">Want to go back?</p>
            <p className="text-[#5A5BCB]">Back To Home</p>
          </div>
          <div>
            <div className="mt-[150px] ">
              <a href="/">
                <img
                  className="h-[24px] w-[96px] mt-2"
                  src="https://i.ibb.co/YfMmPbc/logo.png"
                  alt=""
                />
              </a>
              <p className="text-[#121212] font-bold">Welcome to ZAS71</p>
            </div>
            <form action="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">UserName</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text-alt">Password</span>
                  <span className="label-text-alt text-[#5A5BCB]">
                    Forget Password
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        checked=""
                        className="checkbox mr-[2px]"
                      />
                      <span className="label-text ml-1">Remember me</span>
                    </label>
                  </div>
                </div>
              </label>
              <input type="submit" value="Singin"  className="bg-[#5A5BCB] text-white w-[181px] h-[38px] rounded mt-8"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
