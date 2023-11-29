'use client'
import React, { useState } from 'react';
import CourseDesign from './CourseDesign';
import CourseApi from '../data/course';

const Course = () => {

  return (
    <>
      <div className='relative flex items-center group'>

         <div  className='w-full h-full'>
             {
              CourseApi.map((courses,id)=>(
                <CourseDesign key={id} course={courses}></CourseDesign>
              ))
             }
         </div>

      </div>
    </>
  );
};


export default Course;