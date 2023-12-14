import React, { useState } from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";


const MentorFirstSlide = () => {

  const [question, setQuestions] = useState([
    { id: 1, isContentVisible: false },
    { id: 2, isContentVisible: false },
    { id: 3, isContentVisible: false },
    { id: 4, isContentVisible: false },
    // Add more questions as needed
  ]);

  const toggleContent = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? { ...question, isContentVisible: !question.isContentVisible }
          : question
      )
    );
  };


  return (
    <div>
       <div className="flex">
          <img src="https://i.ibb.co/44yBnCv/Rectangle-212.png" className="w-[267px]h-[267px]" alt="" />
        <div>
        <div className="flex justify-between mt-3 ml-8">
             <div>
             <p className="font-bold text-xl text-[#383838]">Mentor Name</p>
             <p className="text-[#898989] text-sm">Subject name</p>
             </div>
              <p className="flex text-xs mt-1 ml-[150px]">
                <span>
                  <FaStarHalfStroke className="text-blue-500 mr-1" size={15} />
                </span>
                4.5Star
              </p>
            </div>

         <div className="mt-8">
         <div className="flex justify-between mb-2">
               <div className="flex">
                  <FaCheckCircle  className="text-gray-400 mt-1 ml-8 mr-1" size={15}/>
                    <h1 className="text-[#5A5BCB]">Course Name</h1>
               </div>
               <div>
                 <p className="font-bold text-sm">Mon to Friday 4.45 AM</p>
               </div>
            </div>
            <div className="flex justify-between mb-2">
               <div className="flex">
                  <FaCheckCircle  className="text-gray-400 mt-1 ml-8 mr-1" size={15}/>
                    <h1 className="text-[#5A5BCB]">Course Name</h1>
               </div>
               <div>
                 <p className="font-bold text-sm">Mon to Friday 4.45 AM</p>
               </div>
            </div>
            <div className="flex justify-between">
               <div className="flex">
                  <FaCheckCircle  className="text-gray-400 mt-1 ml-8 mr-1" size={15}/>
                    <h1 className="text-[#5A5BCB]">Course Name</h1>
               </div>
               <div>
                 <p className="font-bold text-sm">Mon to Friday 4.45 AM</p>
               </div>
            </div>
         </div>
        </div>
       </div>

       <div className="my-5">
          <p className="md:text-justify">Laravel is a PHP based web framework for building high-end web applications using Laravel is a PHP based web framework for building high-end web applications using Laravel is a PHP based web framework for building high-end web applications using </p>
         </div>

         <div>
         <div className="artboard artboard-horizontal phone-2 bg-black ">
          <iframe
            width="667"
            height="375"
            src="https://www.youtube.com/embed/HcOc7P5BMi4?si=0J6PP7986RKQ3-Y-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
         </div>
    </div>
  );
};

export default MentorFirstSlide;
