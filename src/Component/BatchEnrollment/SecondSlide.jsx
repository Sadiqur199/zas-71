"use client";
import React, { useState } from "react";

const SecondSlide = () => {
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
      <div
        className="bg-no-repeat px-5 py-3 w-[450px] h-[250px]"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/T4T3YgN/unsplash-75x-PHEQBmv-A.png')",
        }}
      >
        <p className="text-sm text-gray-500">
          Course satrted from 31 st Jan 2021
        </p>
        <h1 className="text-xl font-bold mt-3">255 BDT/ Month</h1>
        <button className="btn  mt-1 w-[155px] h-[37px] bg-[#5A61CA] text-white hover:bg-[#5A61CA]">
          Enroll Now
        </button>

        <div className="flex mt-5">
          <img
            className="rounded-full h-[38px] w-[38px]"
            src="https://i.ibb.co/gPKTrB8/impressed-surprised-man-points-away-blank-space-273609-40694-3.png"
            alt=""
          />
          <div className="ml-3">
            <h4 className="font-bold">Mentor Name</h4>
            <p className="text-gray-500 text-sm">Speacialization</p>
          </div>
        </div>
      </div>
       
      <div>
        <h1 className="font-bold text-xl">Instructions</h1>
        <p className="text-sm text-gray-400">
          Enrolled 12 dec | Completed 31 Dec
        </p>{" "}
        
        {/* first question  */}
        <div className="">
        <div key={question[0].id} className="flex mt-8">
            <div>
              <h1 className={`font-bold text-[#010101] underline ${question[0].isContentVisible ? 'text-blue-500' : 'text-black'}`}>What are the updates?</h1>
              {question[0].isContentVisible && (
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus, reiciendis!
                </p>
              )}
            </div>
            <div style={{ marginLeft: question[0].isContentVisible  ? '0px' : '200px', marginRight: question[0].isContentVisible  ? '60px' : '0px' }}>
              <button onClick={() => toggleContent(question[0].id)}>
                {question[0].isContentVisible ? "-" : "+"}
              </button>
            </div>
          </div>

          {/* second Question */}
          <div key={question[1].id} className="flex mt-8">
            <div>
              <h1 className={`font-bold text-[#010101] underline ${question[1].isContentVisible ? 'text-blue-500' : 'text-black'}`}>How to create a schedule?</h1>
              {question[1].isContentVisible && (
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus, reiciendis!
                </p>
              )}
            </div>
            <div style={{ marginLeft: question[1].isContentVisible  ? '0px' : '170px', marginRight: question[1].isContentVisible  ? '60px' : '0px' }}>
              <button onClick={() => toggleContent(question[1].id)}>
                {question[1].isContentVisible ? "-" : "+"}
              </button>
            </div>
          </div>


          {/* Third Question */}
          <div key={question[2].id} className="flex mt-8">
            <div>
              <h1 className={`font-bold text-[#010101] underline ${question[2].isContentVisible ? 'text-blue-500' : 'text-black'}`}>How to create a schedule?</h1>
              {question[2].isContentVisible && (
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus, reiciendis!
                </p>
              )}
            </div>
            <div style={{ marginLeft: question[2].isContentVisible  ? '0px' : '170px', marginRight: question[2].isContentVisible  ? '60px' : '0px' }}>
              <button onClick={() => toggleContent(question[2].id)}>
                {question[2].isContentVisible ? "-" : "+"}
              </button>
            </div>
          </div>

          {/* Fourth Question */}
          <div key={question[3].id} className="flex mt-8">
            <div>
              <h1 className={`font-bold  text-[#010101] underline ${question[3].isContentVisible ? 'text-blue-500' : 'text-black'}`}>How to create a schedule?</h1>
              {question[3].isContentVisible && (
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus, reiciendis!
                </p>
              )}
            </div>
            <div style={{ marginLeft: question[3].isContentVisible  ? '0px' : '170px', marginRight: question[3].isContentVisible  ? '60px' : '0px' }}>
              <button onClick={() => toggleContent(question[3].id)}>
                {question[3].isContentVisible ? "-" : "+"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSlide;
