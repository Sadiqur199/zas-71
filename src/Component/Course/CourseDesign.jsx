"use client";
import React from "react";

const CourseDesign = ({ course }) => {
  return (
    <div className=" inline-block cursor-pointer relative p-2">
      <div
        data-aos="fade-left"
        key={course.id}
        className="hero rounded-lg h-[150px] w-[200px]"
        style={{
          backgroundImage: `url(${course.img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-lg"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="text-start">
            <h1 className=" text-white text-sm mb-5">{course.title}</h1>
            <h1 className=" font-bold text-white text-sm">{course.head}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDesign;
