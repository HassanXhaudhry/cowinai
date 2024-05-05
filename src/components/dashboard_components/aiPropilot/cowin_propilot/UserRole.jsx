import React, { Fragment, useState } from "react";
import dot from "../../../../assets/green_dot.svg";

const UserRole = () => {
  const [isSpeechOpen, setIsSpeechOpen] = useState(true);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isCodeOpen, setIsCodeOpen] = useState(false);
  const [firstLine, setFirstLine] = useState(false);
  const [secondLine, setSecondLine] = useState(true);

  const toggleSpeech = () => {
    setIsSpeechOpen(true);
    setFirstLine(false);
    setSecondLine(true);
    setIsImageOpen(false);
    setIsCodeOpen(false);
  };
  const toggleImage = () => {
    setIsImageOpen(true);
    setFirstLine(false);
    setSecondLine(false);
    setIsSpeechOpen(false);
    setIsCodeOpen(false);
  };
  const toggleCode = () => {
    setIsCodeOpen(true);
    setFirstLine(false);
    setSecondLine(false);
    setIsImageOpen(false);
    setIsSpeechOpen(false);
  };

  return (
    <Fragment>
    <div className="font-Manrope sm:mx-7 mx-4">
      <div className="flex mt-2 justify-between">
        <p className="text-xl font-semibold">User Role @ Company Name</p>
        <button
          className="h-8 sm:px-6 px-3 cursor-pointer rounded-[5px] text-white
          sm:text-xs text-[10px] font-semibold bg-gradient-to-r from-yellow to-orange mt-2"
        >
          Complete
        </button>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:mx-4 mx-1 justify-between">
        <div className="flex gap-4 sm:text-xs text-[10px] text-[#A3A3A3] font-semibold sm:mt-2 mt-4">
          <div className="flex gap-1 sm:mb-4 mb-2">
            <img src={dot} alt="" className="h-3 w-3 pt-1" />
            <p>Paid or free</p>
          </div>
          <div className="flex gap-1 sm:mb-4 mb-2">
            <img src={dot} alt="" className="h-3 w-3 pt-1" />
            <p>Time Remaining: 4 minutes</p>
          </div>
          <div className="flex gap-1 sm:mb-4 mb-2">
            <img src={dot} alt="" className="h-3 w-3 pt-1" />
            <p>Copilot Ready</p>
          </div>
        </div>

        <div className="sm:mt-2 mt-4">
          {isCodeOpen && (
            <div className="flex sm:gap-4 gap-2 text-white sm:text-xs text-[10px] font-semibold">
              <button
                className="h-8 sm:px-6 px-3 cursor-pointer rounded-[5px] bg-gradient-to-r from-yellow to-orange"
              >
                Idea
              </button>
              <button
                className="h-8 sm:px-6 px-3 cursor-pointer rounded-[5px] bg-gradient-to-r from-yellow to-orange"
              >
                Code
              </button>
              <button
                className="h-8 sm:px-8 px-3 cursor-pointer rounded-[5px] bg-[#475467]"
              >
                Walk Through
              </button>
              <button
                className="h-8 sm:px-7 px-3 cursor-pointer rounded-[5px] bg-[#475467]"
              >
                Text Code
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 my-3 sm:mx-4 mx-2">
        <div className="h-[438px] bg-[#475467] rounded-[9px] border border-black flex flex-col">
          <div className="flex py-1 text-sm text-white px-2 font-semibold">
              Interview Questions
          </div>
          <div className="h-[420px] text-[#A3A3A3] justify-center items-center text-sm flex bg-white rounded-lg mt-auto">
            Meeting speech to text here
          </div>
        </div>

        <div className="h-[438px] bg-gradient-to-r from-lightblue via-yellow to-orange rounded-[9px] border border-l-gradient3 border-r-gradient2 flex flex-col">
          <div className="flex px-2 py-1 text-sm text-white px-2 font-semibold">
            Copilot
          </div>
          {isSpeechOpen && (
            <div className="h-[420px] flex items-center justify-center text-center text-sm text-[#A3A3A3] bg-white mt-auto">
              Click on add-ins to import: Speech Answers
            </div>
          )}
          {isImageOpen && (
            <div className="h-[420px] flex items-center justify-center text-center text-sm text-[#A3A3A3] bg-white mt-auto">
              Click on add-ins to import: image questions
            </div>
          )}
          {isCodeOpen && (
            <div className="h-[420px] flex items-center justify-center text-center text-sm text-[#A3A3A3] bg-white mt-auto">
              Click on add-ins to import: Coding Questions
            </div>
          )}

          <div className="w-full h-[32.5px] py-[px] lg:text-sm md:text-xs sm-text-[14px] text-[9px] font-semibold text-white bg-[#475467] rounded-b-md flex items-center justify-center text-center relative">
            <button
              className={`px-4 ${
                isSpeechOpen
                  ? "text-[#FF600A] border rounded-b-md bg-white lg:h-8 md:h-7 sm:h-7 xs:h-7 h-7 mb-1"
                  : ""
              }`}
              onClick={toggleSpeech}
            >
              Speech Answers
            </button>
            <div
              className={`${
                firstLine ? "h-full border-[1px] border-white" : ""
              }`}
            ></div>
            <button
              className={`px-4 ${
                isImageOpen
                  ? "text-[#FF600A] border rounded-b-md bg-white lg:h-8 md:h-7 sm:h-7 xs:h-7 h-7 mb-1"
                  : ""
              }`}
              onClick={toggleImage}
            >
              Image Answers
            </button>
            <div
              className={`${
                secondLine ? "h-full border-[1px] border-white" : ""
              }`}
            ></div>
            <button
              className={`px-4 ${
                isCodeOpen
                  ? "text-[#FF600A] border rounded-b-md bg-white lg:h-8 md:h-7 sm:h-7 xs:h-7 h-7 mb-1"
                  : ""
              }`}
              onClick={toggleCode}
            >
              Code Answers
            </button>
          </div>
        </div>
      </div>
    </Fragment>  
  );
};

export default UserRole;
