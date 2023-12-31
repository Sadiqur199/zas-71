import React from "react";

const Navbar = () => {
  return (
    <div className="mt-[20px]">
      <div className="navbar">
        <div className="flex-none">
          <ul className="flex">
            <li className="mr-5">
              <a className="text-[#959595] hover:text-[#5A5BCB] hover:font-bold hover:border-b-2 hover:border-[#5A5BCB]">Mentors</a>
            </li>
            <li className="mr-5">
              <a className="text-[#959595] hover:text-[#5A5BCB] hover:font-bold hover:border-b-2 hover:border-[#5A5BCB]">Cleasses</a>
            </li>
            <li className="mr-5">
              <a className="text-[#959595] hover:text-[#5A5BCB] hover:font-bold hover:border-b-2 hover:border-[#5A5BCB]">Institutions</a>
            </li>
          </ul>

          <div className="join md:ml-[370px]">
            <div>
              <div>
                <input
                  className="input input-bordered rounded-full mr-5 w-[285px] h-[36px]"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select select-bordered w-[200px] h-[36px] mr-5 rounded-full">
              <option value="" defaultValue="">
                Filter
              </option>
              <option value="Sci-fi">Sci-fi</option>
              <option value="Drama">Drama</option>
              <option value="Action">Action</option>
            </select>

            <div className="">
              <button className="btn bg-[#5A5BCB] text-white w-[100px] h-[20px]">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
