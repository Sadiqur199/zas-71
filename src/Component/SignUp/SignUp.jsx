import Link from 'next/link';
import React from 'react';

const SignUp = () => {
  return (
    <div>
      <div className="flex">
        <div className="bg-[#5A5BCB] w-[600px] text-white h-[966px]">
          <p className="p-20 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            perspiciatis nulla, distinctio id fugit accusamus ipsa aperiam sit,
            ad quasi illo assumenda cumque ex, laborum saepe ullam praesentium
            eum non ducimus eos commodi excepturi. Porro dignissimos nihil sunt,
            illo ipsam libero enim nemo molestias quis fuga, quod itaque in
            tempora!
          </p>
          <img
            className="w-[557px] h-[557px] mt-[110px]"
            src="https://i.ibb.co/chbkbX9/Sign-up-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="ml-[200px] w-auto h-[966px]">
          <div className="flex justify-between text-end ml-[300px] mt-5">
            <p className="mr-5">Want to go back?</p>
            <Link href='/' className="text-[#5A5BCB]">Back To Home</Link>
          </div>

          <div className=" w-[414px]">
            <div className="mt-[100px] mb-5 ">
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

              <input type="submit" value="SignUp"  className="bg-[#5A5BCB] text-white w-[181px] h-[38px] rounded mt-8"/>
            </form>
            <div>
              <p className="flex justify-between w-[414px] mt-5 "><span className="text-gray-500 text-sm">Already have an account?</span>  <span>
                <Link href='/login' className="text-sm text-[#5A5BCB]">SignIn Now</Link>
                </span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;