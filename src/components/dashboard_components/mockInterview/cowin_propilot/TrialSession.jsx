import React, { Fragment, useState } from "react";
import mic from "../../../../assets/mic.svg";
import pc from "../../../../assets/computer.svg";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { NavLink } from "react-router-dom";

const TrialSession = () => {

  const [audioDropdown, setAudioDropdown] = useState(false);

  const AudioDropdown = () => {
    setAudioDropdown(!audioDropdown);
  };

  return (
    <Fragment>
      <div className="bg-[#F3F3F3] h-screen flex justify-center items-center ">
        <div
          className="bg-white font-Manrope sm:w-[750px] px-10 py-6 sm:h-[425px] w-[270px] h-[510px]
          rounded-xl shadow-2xl shadow-indigo-500/30 bg-opacity-10 flex flex-col"
        >
          <p className="text-lg font-semibold pb-3">
            Welcome to CoWin Propilot, Ace your real-time interviews & meetings
            now.
          </p>
          <div className="py-1 ml-5">
            <p className="text-md font-semibold">
              Step 1: Microphone Access - Enable
            </p>
            <p className="text-xs font-medium pl-10 py-2">
              For first time only, Enable microphone sharing. Please click
              "Allow" and refresh the page to proceed.
            </p>
          </div>
          <div className="py-1 ml-5">
            <p className="text-md font-semibold">
              Step 2: Configure System Audio
            </p>
            <p className="text-xs font-medium pl-10 py-2">
              Choose the microphone or headphone you'll be using.
            </p>
          </div>
          <div className="py-1 ml-5">
            <p className="text-md font-semibold">
              Step 3: Share Interview Browser
            </p>
            <p className="text-xs font-medium pl-10 py-2">
              Enable sharing browser tab and share tab audio from Google Meet,
              Zoom, Teams, Webex.
            </p>
          </div>

          <div className="flex gap-16 py-4">
            <div className="w-full h-[85px] bg-[#475467] rounded-[9px] border border-black flex flex-col">
              <div className="flex px-2 py-1">
                <img src={mic} alt="" className="h-5 w-5" />
                <p className=" text-xs text-white px-2 font-medium pt-[1.5px]">
                  Select Audio Device
                </p>
              </div>
              <div className="flex items-center justify-center bg-white rounded-lg mt-auto h-16">
                <div className="relative z-30">
                  <div
                    className="w-[240px] px-3 h-6 gap-44 text-xs font-semibold items-center flex cursor-pointer rounded-md border border-[#475467]"
                    onClick={AudioDropdown}
                  >
                    <div className="flex gap-16 font-light">
                    Default - Kimera (1767)
                    
                    <div className="float-right">
                      {" "}
                      {audioDropdown ? (
                        <IoMdArrowDropup className="text-lg ml-1" />
                      ) : (
                        <IoMdArrowDropdown className="text-lg ml-1" />
                      )}
                    </div></div>
                  </div>
                  {audioDropdown && (
                    <div className="absolute text-[#475467] text-xs top-full w-[240px] bg-white border border-gray-200 shadow-lg rounded-b-md overflow-y-auto max-h-40 h-20">
                      {/* {
                    Audio.map(post => {
                      return (
                        <div className='p-2 cursor-pointer hover:text-white hover:bg-[#475467]'>{post.name}</div>
                      )
                    })
                  } */}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full h-[85px] bg-[#475467] rounded-[9px] border border-black flex flex-col">
              <div className="flex px-2 py-1">
                <img src={pc} alt="" className="h-5 w-5" />
                <p className=" text-xs text-white px-2 font-medium pt-[1.5px]">
                  Browser Tab Audio
                </p>
              </div>
              <div className="flex items-center justify-center bg-white rounded-lg mt-auto h-16">
                <button className="w-44 h-6 bg-[#00D248] rounded-md text-sm font-semibold text-white">
                  Configure
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
          <NavLink to='/userrole'>
            <button
              className="w-24 h-7 text-xs font-medium cursor-pointer rounded-[5px] text-white
          bg-gradient-to-r from-yellow to-orange"
            >
              Start
            </button></NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TrialSession;
