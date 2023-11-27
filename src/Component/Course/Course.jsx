import React from 'react';

const Course = () => {
  return (
    <div>
            <div className="navbar">
        <div className="navbar ml-[-250px]">
          <ul className="menu menu-horizontal ">
            <li>
              <a className="font-bold">Dashboard</a>
            </li>
            <li>
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered  rounded-full w-24 md:w-[183px] md:h-[36px] hover:bg-white"
                />
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="" className="underline text-blue-600 md:mr-8">Become a Mentor</a>
          <a href="" className="md:mr-5"><CiMail  className="h-[25px] w-[25px]"/></a>
          <a href="" className="md:mr-5"><IoMdNotificationsOutline className="h-[25px] w-[25px]"/></a>
          <a href="" className="md:mr-5"><CiCircleQuestion className="h-[25px] w-[25px]"/></a>
        </div>
      </div>
    </div>
  );
};

export default Course;