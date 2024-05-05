import React, { Fragment, useState } from 'react';
import settings from '../../../assets/settings.svg';
import Settings from './Settings';
import PropilotSession from './PropilotSession';
import rocket from '../../../assets/rocket.svg'
import dot from '../../../assets/dot.svg';
import TrailPopup from './TrailPopup';

const MockInterview = ({handleCreateClick}) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isActiveOpen, setIsActiveOpen] = useState(true);
  const [isCompletedOpen, setIsCompletedOpen] = useState(false);
  const [isPropilotSessionOpen, setIsPropilotSessionOpen] = useState(false);
  const [isLastDivVisible, setIsLastDivVisible] = useState(false);
  const [isTrailOpen, setIsTrailOpen] = useState(false);

  const toggleActiveCompleted = (button) => {
    if (button === 'Completed') {
      setIsCompletedOpen(true);
      setIsActiveOpen(false);
    } else if (button === 'Active') {
      setIsActiveOpen(true);
      setIsCompletedOpen(false);
    }
  };




  return (
    <Fragment>
      <div className='font-Roboto w-full'>
      <div className='w-full h-9 flex bg-gradient-to-r from-lightblue via-yellow to-orange justify-center items-center gap-3'>
      <p className='font-semibold'>“Subscribe now to Explore Unlimited sessions”</p>
      <button className='h-7 px-5 bg-[#4E43FA] text-sm rounded-md font-medium text-white'>Subscribe</button>
      </div>
        <div className="text-xl font-semibold pt-3 pl-4" >
          <p className='text-transparent bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2'>Free Mock Interview</p>
          <h2 className="text-[12px] font-Inter font-light pl-3 text-[#475467]">
            The one and only real-time AI Interview Copilot
          </h2>
        </div>
        <div className='flex justify-between mt-6 mx-9'>
          <div className='flex rounded-sm bg-[#D9D9D9] border border-[#475467] text-[#475467] text-sm font-semibold'>
            <button className={`px-3 flex-1 ${isActiveOpen ? 'bg-gradient-to-r from-yellow to-orange text-white' : ''}`} onClick={() => toggleActiveCompleted('Active')}>Active</button>
            <div className="border-l border-[#475467]"></div>
            <button className={`px-3 flex-1 ${isCompletedOpen ? 'bg-gradient-to-r from-orange to-yellow text-white' : ''}`} onClick={() => toggleActiveCompleted('Completed')}>Completed</button>
          </div>
          <div className='flex gap-3'>
            <button
              className="px-3 h-7 text-xs cursor-pointer rounded-[5px] text-white bg-gradient-to-r from-yellow to-orange"
              onClick={() => setIsUploadResumeOpen(true)}
            >
              <div className='flex justify-center gap-1' onClick={() => setIsSettingsOpen(true)}>
                <img src={settings} alt="" className='w-5 h-5' />
                <p className='font-semibold text-sm'>Settings</p>
              </div>
            </button>
            <button
              className="font-semibold px-3 h-7 text-xs cursor-pointer rounded-[5px] text-white bg-gradient-to-r from-yellow to-orange"
              onClick={()=>setIsPropilotSessionOpen(true)} 
            >
              LAUNCH ProPilot Sessions
            </button>
          </div>
        </div>

        {isSettingsOpen && <Settings setIsSettingsOpen={setIsSettingsOpen} />}
        
        
        {isPropilotSessionOpen && <PropilotSession setIsPropilotSessionOpen={setIsPropilotSessionOpen} setIsLastDivVisible={setIsLastDivVisible} />}

        {isTrailOpen && <TrailPopup setIsTrailOpen={setIsTrailOpen} />}

        <div className='font-Manrope flex flex-col justify-start mx-8 my-4 rounded-lg h-auto md:shadow-2xl shadow-indigo-500/40 bg-opacity-30'>

         
          {isActiveOpen && !isLastDivVisible &&(
            <div>
              <div className='flex text-sm gap-16 font-semibold justify-between border-b text-[#475467] border-[#475467] border-opacity-40 py-5 pt-6 px-6'>
                <p>Position</p>
                <p>Company Name</p>
                <p>Interview Time</p>
                <p className="ml-auto mr-12">In Progress</p>
              </div>
              <div className="flex flex-col overflow-y-auto max-h-screen">
                <div className="flex gap-16 text-[#475467] text-xs mx-8 items-center py-4 border-b border-[#475467] border-opacity-40 pb-4">
                  <p>Data engineer</p>
                  <p>IBM</p>
                  <p>Mon, 25 Dec 2023 09:31:10 GMT</p>
                  <div className="flex flex-grow justify-end gap-3 text-white">
                    <button className='w-16 h-7 bg-[#49E400] rounded-md'>Join</button>
                    <div>
                      <button className='w-20 h-7 bg-[#FE3003] rounded-md px-3'>Terminate</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isCompletedOpen && !isLastDivVisible &&(
            <div>
              <div className='flex text-sm gap-16 font-semibold justify-start border-b text-[#475467] border-[#475467] border-opacity-40 py-5 pt-6 px-6'>
                <p>Position</p>
                <p>Company Name</p>
                <p>Interview Time</p>
              </div>
              <div className="flex flex-col overflow-y-auto max-h-screen">
                <div className="flex gap-16 text-[#475467] text-xs mx-8 items-center py-6 border-b border-[#475467] border-opacity-40 pb-4">
                  <p>Data engineer</p>
                  <p>IBM</p>
                  <p>Mon, 25 Dec 2023 09:31:10 GMT</p>
                </div>
              </div>
            </div>
          )}

          {isLastDivVisible &&(
            <div>
              <div className='flex text-sm gap-16 font-semibold justify-start border-b text-[#475467] border-[#475467] border-opacity-40 py-5 pt-6 px-6'>
                <p>Position</p>
                <p>Company Name</p>
                <p>Interview Time</p>
              </div>
              <div className="flex flex-col overflow-y-auto max-h-screen">
                <div className="flex text-[#475467] justify-between text-xs mx-8 items-center py-6 border-b border-[#475467] border-opacity-40 pb-4">
                <div className='flex gap-16'>  
                <p>Data engineer</p>
                  <p>IBM</p>
                  <p>Mon, 25 Dec 2023 09:31:10 GMT</p>
                  </div>
                  <div className="flex cursor-pointer gap-3 text-[#6C6C6C] h-7
                  bg-[#D9D9D9] rounded-md px-3" onClick={()=>setIsTrailOpen(true)}>
                  <img src={rocket} alt="" className='w-6 h-6 pt-1'/>
                    <button className='text-sm '>Launch</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default MockInterview;
