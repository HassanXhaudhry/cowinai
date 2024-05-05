import React, { Fragment, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const PropilotSession = ({setIsPropilotSessionOpen, setIsLastDivVisible}) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCoverletterOpen, setIsCoverletterOpen] = useState(false);
  const [isPositionOpen, setIsPositionOpen] = useState(false);

  const ResumeDropdown = () => {
    setIsResumeOpen(!isResumeOpen);
  };
  
  const CoverletterDropdown = () => {
    setIsCoverletterOpen(!isCoverletterOpen);
  };
  
  const PositionDropdown = () => {
    setIsPositionOpen(!isPositionOpen);
  };

  const handleClosePopup = () => {
    setIsPropilotSessionOpen(false);
  };

  const handleCreateClick = () => {
    setIsLastDivVisible(true); 
    setIsPropilotSessionOpen(false); 
  };

  return (
    <Fragment>
      {(
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-popup_bg" onClick={handleClosePopup}>
        <div className="fixed top-[50px] left-[500px] right-0 flex flex-col bg-white rounded-xl h-[450px] w-[500px] z-100" onClick={(e) => e.stopPropagation()} style={{ animation: 'dropTop .3s linear' }}>
          <div className='flex flex-col mx-8 my-5'>
            <p className='font-semibold font-Manrope text-xl'>ProPilot Launcher</p>
            <p className='text-xs font-Roboto font-light pt-3'>Please select the company you wish to apply to and provide your resume or an optional cover letter.
              Copilot will then deliver personalized support.</p>

            <p className='font-semibold text-xs pt-4 pb-1'>Add Resume</p>
            <div className='relative z-30'>
              <div className='w-[330px] px-3 h-8 gap-72 text-xs font-semibold items-center flex cursor-pointer rounded-[4px] border border-[#475467]' onClick={ResumeDropdown}>
                <div className='flex'></div>
                <div className='float-right'> {isResumeOpen ? <IoMdArrowDropup className='text-lg ml-1' /> : <IoMdArrowDropdown className='text-lg ml-1' />}</div>
              </div>
              {isResumeOpen && (
                <div className='absolute text-[#475467] text-xs top-full left-0 w-[330px] bg-white border border-gray-200 shadow-lg rounded-b-sm overflow-y-auto max-h-40 h-36'>
                  {/* {
                    Data.map(post => {
                      return (
                        <div className='p-2 cursor-pointer hover:text-white hover:bg-[#475467]'>{post.name}</div>
                      )
                    })
                  } */}
                </div>
              )}</div>

            <p className='font-semibold text-xs pt-4 pb-1'>Add Cover Letter</p>
            <div className='relative z-20'>
              <div className='w-[330px] px-3 h-8 gap-72 text-xs font-semibold items-center flex cursor-pointer rounded-[4px] border border-[#475467]' onClick={CoverletterDropdown}>
                <div className='flex'></div>
                <div className='float-right'> {isCoverletterOpen ? <IoMdArrowDropup className='text-lg ml-1' /> : <IoMdArrowDropdown className='text-lg ml-1' />}</div>
              </div>
              {isCoverletterOpen && (
                <div className='absolute text-[#475467] text-xs top-full left-0 w-[330px] bg-white border border-gray-200 shadow-lg rounded-b-sm overflow-y-auto max-h-40 h-36'>
                  {/* {
                    Data.map(post => {
                      return (
                        <div className='p-2 cursor-pointer hover:text-white hover:bg-[#475467]'>{post.name}</div>
                      )
                    })
                  } */}
                </div>
              )}</div>

            <p className='font-semibold text-xs pt-4 pb-1'>Add Position</p>
            <div className='relative z-10'>
              <div className='w-[330px] px-3 h-8 gap-72 text-xs font-semibold items-center flex cursor-pointer rounded-[4px] border border-[#475467]' onClick={PositionDropdown}>
                <div className='flex'></div>
                <div className='float-right'> {isPositionOpen ? <IoMdArrowDropup className='text-lg ml-1' /> : <IoMdArrowDropdown className='text-lg ml-1' />}</div>
              </div>
              {isPositionOpen && (
                <div className='absolute text-[#475467] text-xs top-full left-0 w-[330px] bg-white border border-gray-200 shadow-lg rounded-b-sm overflow-y-auto max-h-40 h-36'>
                  {/* {
                    Data.map(post => {
                      return (
                        <div className='p-2 cursor-pointer hover:text-white hover:bg-[#475467]'>{post.name}</div>
                      )
                    })
                  } */}
                </div>
              )}</div>

            <p className='font-semibold text-sm pt-4 pb-1'>Additional Details</p>
            <input type="text" placeholder='Optional' className='w-full h-9 focus:ring-0 focus:border-current rounded-sm text-xs border border-[#475467]' />

            <p className='text-[#F04C18] text-[9.4px] pt-1 font-semibold'>“Please note your session expires after 1 hour. Remember to terminate the session after you are done”.</p>
            <div className="flex justify-end px-6 my-3 gap-2 font-semibold">
              <button type="button" className="w-[100px] h-7 text-[12px] flex items-center justify-center rounded-[5px] text-[#6C6C6C] bg-[#D9D9D9]" onClick={handleClosePopup}>
                Cancel
              </button>
                <button type="submit" className="w-[100px] h-7 text-[12px] flex items-center justify-center rounded-[5px] text-[#6C6C6C] bg-[#D9D9D9]" onClick={handleCreateClick}>
                  Create
                </button>
            </div>
          </div>
        </div>
        </div>
      )}  
  </Fragment>
)}

export default PropilotSession
