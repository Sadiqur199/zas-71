"use client";
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";



const FAQ = () => {
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
    <div className="mb-10">
      <div>
        {/* first question  */}
        <div className="">
          <div
            key={question[0].id}
            className={`flex   w-[320px]  p-3 rounded ${
              question[0].isContentVisible ? "bg-[#F9FAFB]" : "bg-white"
            }`}
          >
            <div
              style={{
                marginLeft: question[0].isContentVisible ? "0px" : "0px",
                marginRight: question[0].isContentVisible ? "0px" : "0px",
              }}
            >
              <button
                className="h-[20px] w-[20px] mr-2 mt-1"
                onClick={() => toggleContent(question[0].id)}
              >
                {question[0].isContentVisible ? <CiCircleMinus size={24}/> : <CiCirclePlus size={24}/>}
              </button>
            </div>
            <div>
              <h1
                className={`font-bold text-[#010101]  ${
                  question[0].isContentVisible ? "text-black" : "text-black"
                }`}
              >
                Is there a free trial available?
              </h1>
              {question[0].isContentVisible && (
                <p>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              )}
            </div>
          </div>

          {/* second Question */}
          <div
            key={question[1].id}
            className={`flex  w-[320px] p-3 ${
              question[1].isContentVisible ? "bg-[#F9FAFB]" : "bg-white"
            }`}
          >
            <div
              style={{
                marginLeft: question[1].isContentVisible ? "0px" : "0px",
                marginRight: question[1].isContentVisible ? "0px" : "0px",
              }}
            >
              <button
                className="h-[20px] w-[20px] mr-2 mt-1 "
                onClick={() => toggleContent(question[1].id)}
              >
                {question[1].isContentVisible ?<CiCircleMinus size={24}/> : <CiCirclePlus size={24}/>}
              </button>
            </div>
            <div>
              <h1
                className={`font-bold text-[#010101] ${
                  question[1].isContentVisible ? "text-black" : "text-black"
                }`}
              >
                Can I change my plan later?
              </h1>
              {question[1].isContentVisible && (
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus, reiciendis!
                </p>
              )}
            </div>
          </div>

          {/* Third Question */}
          <div
            key={question[2].id}
            className={`flex   w-[320px] p-3 ${
              question[2].isContentVisible ? "bg-[#F9FAFB]" : "bg-white"
            }`}
          >
            <div
              style={{
                marginLeft: question[2].isContentVisible ? "0px" : "0px",
                marginRight: question[2].isContentVisible ? "0px" : "0px",
              }}
            >
              <button
                className="h-[20px] w-[20px] mr-2 mt-1 "
                onClick={() => toggleContent(question[2].id)}
              >
                {question[2].isContentVisible ?<CiCircleMinus size={24}/> : <CiCirclePlus size={24}/>}
              </button>
            </div>
            <div>
              <h1
                className={`font-bold text-[#010101] ${
                  question[2].isContentVisible ? "text-black" : "text-black"
                }`}
              >
                What is your cancellation policy?
              </h1>
              {question[2].isContentVisible && (
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus, reiciendis!
                </p>
              )}
            </div>
          </div>

          {/* Fourth Question */}
          <div
            key={question[3].id}
            className={`flex   w-[320px] p-3 ${
              question[3].isContentVisible ? "bg-[#F9FAFB]" : "bg-white"
            }`}
          >
            <div
              style={{
                marginLeft: question[3].isContentVisible ? "0px" : "0px",
                marginRight: question[3].isContentVisible ? "0px" : "0px",
              }}
            >
              <button
                className="h-[20px] w-[20px] mr-2 mt-1 "
                onClick={() => toggleContent(question[3].id)}
              >
                {question[3].isContentVisible ? <CiCircleMinus size={24}/> : <CiCirclePlus size={24}/>}
              </button>
            </div>
            <div>
              <h1
                className={`font-bold text-[#010101] ${
                  question[3].isContentVisible ? "text-black" : "text-black"
                }`}
              >
                Can other info be added to an invoice?
              </h1>
              {question[3].isContentVisible && (
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus, reiciendis!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
