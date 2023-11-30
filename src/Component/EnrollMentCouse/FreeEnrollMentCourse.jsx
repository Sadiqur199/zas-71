'use client'
import React, { useState } from "react";
import CourseApi from "../data/course";

const FreeEnrollMentCourse = () => {
  const [visibleCards, setVisibleCards] = useState(5);

  const handleSeeAllClick = () => {
    setVisibleCards(CourseApi.length);
  };

  return (
    <div className="mt-12">
      <div className="flex justify-between">
        <div className="mb-5">
          <h1 className="font-bold">Free Enrollments</h1>
          <p className="text-sm text-gray-400">
            Enrolled 12 dec | Completed 31 Dec
          </p>
        </div>
        <div className="pr-5">
          <a href="#!" className="text-[#1B75BB] underline" onClick={handleSeeAllClick}>
            See All
          </a>
        </div>
      </div>
      {/* Course Card */}
      <div className="grid grid-cols-5 gap-2">
        {CourseApi.slice(0, visibleCards).map((courses, id) => (
          <div key={courses.id} className="card card-compact w-[250px] mb-8">
            <figure>
              <img
                src={courses.img1}
                alt=""
                className="w-[200px] h-[149px]"
              />
            </figure>
            <div className="card-body">
              <p className="w-[88px] h-[25px] text-sm text-[#676161] ml-3">{courses.title}</p>
              <h2 className="font-bold text-xl w-[199px] h-[54px] text-[#000000] ml-3">{courses.head}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeEnrollMentCourse;
