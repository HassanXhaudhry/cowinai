import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Data from './Languages.json';
import orange_dot from '../../../assets/orange_dot.svg';

const Settings = ({ setIsSettingsOpen }) => {

    const [isFirstOpen, setIsFirstOpen] = useState(false);

    const [isCompressOpen, setIsCompressOpen] = useState(false);
    const [isDefaultOpen, setIsDefaultOpen] = useState(true);
    const [isExtendedOpen, setIsExtendedOpen] = useState(false);

    const handleClosePopup = () => {
        setIsSettingsOpen(false);
    };

    const toggleFirstDropdown = () => {
        setIsFirstOpen(!isFirstOpen);
    };

    const toggleDropdown = (dropdown) => {
        if (dropdown === 'Compress') {
            setIsCompressOpen(true);
            setIsDefaultOpen(false);
            setIsExtendedOpen(false);
        } else if (dropdown === 'Default') {
            setIsDefaultOpen(true);
            setIsCompressOpen(false);
            setIsExtendedOpen(false);
        } else if (dropdown === 'Extended') {
            setIsExtendedOpen(true);
            setIsDefaultOpen(false);
            setIsCompressOpen(false);
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-popup_bg font-Roboto" onClick={handleClosePopup}>
            <div className="fixed top-[65px] left-[310px] flex justify-center right-0 flex-row bg-white rounded-xl h-[420px] w-[940px] z-100" onClick={(e) => e.stopPropagation()} style={{ animation: 'dropTop .3s linear' }}>
                <div className="flex-1 flex-col mx-6 my-4">
                    <p className='font-semibold text-lg'>ProPilot Settings</p>
                    <p className='font-semibold text-sm pt-5 pb-1'>Verbosity</p>
                    <p className='text-[#475467] text-xs py-2 font-light'>The length and complexity of your propilot responses</p>
                    <div className='flex rounded-sm h-7 mr-10 my-1 border border-[#475467] text-sm font-semibold'>
                        <button className={`px-3 flex-1 ${isCompressOpen ? 'bg-gradient-to-r from-yellow to-orange text-white' : ''}`} onClick={() => toggleDropdown('Compress')}>Compress</button>
                        <div className="border-l border-[#475467] h-full"></div>
                        <button className={`px-3 flex-1 ${isDefaultOpen ? 'bg-gradient-to-r from-orange via-yellow to-orange text-white' : ''}`} onClick={() => toggleDropdown('Default')}>Default</button>
                        <div className="border-l border-[#475467] h-full"></div>
                        <button className={`px-3 flex-1 ${isExtendedOpen ? 'bg-gradient-to-r from-orange to-yellow text-white' : ''}`} onClick={() => toggleDropdown('Extended')}>Extended</button>
                    </div>
                    <p className='font-semibold text-sm pt-4 pb-1'>Language</p>
                    <p className='text-[#475467] text-xs py-2 font-light'>Determines the extent and intricacy of the responses from your Copilot</p>

                    <div className='relative'>
                        <div className='w-auto px-3 h-8 gap-72 text-xs font-semibold items-center flex cursor-pointer rounded-[4px] border border:[#475467]'  onClick={toggleFirstDropdown}>
                            <div className='flex gap-2'><div className='flex gap-1 text-[#475467] font-light'><p>English</p> <p> (US)</p></div><p className='text-black'>Default</p></div>
                           <div className='float-right'> {isFirstOpen ? <IoMdArrowDropup className='text-lg ml-1' /> : <IoMdArrowDropdown className='text-lg ml-1' />}</div>
                        </div>
                        {isFirstOpen && (
                            <div className='absolute text-[#475467] text-xs top-full left-0 w-full bg-white border border-gray-200 shadow-lg rounded-b-sm overflow-y-auto max-h-40 h-36'>
                            {
                                Data.map(post=>{
                                    return(
                                        <div className='p-2 cursor-pointer hover:text-white hover:bg-[#475467]'>{post.name}</div>
                                    )
                                })
                            }
                        </div>                        
                        )}</div>

                    {isDefaultOpen && (
                        <div className='flex flex-col pt-5 pb-1'>
                            <p className='font-semibold text-sm'>Default</p>
                            <p className='text-xs font-light'>Determines the extent and intricacy of the responses from your Copilot</p>
                            <div className='flex pl-3 items-start pt-[2px] pr-1'>
                                <img src={orange_dot} alt="" className='pt-1' />
                                <p className='text-xs font-light pl-1'>At Google, led microservices development enhancing data retrieval, scalability,
                                    and market responsiveness using SpringCloud, integrating key technologies for
                                    security and communication, significantly improving user experience and setting
                                    industry benchmarks.</p>
                            </div>
                        </div>
                    )}
                    {isCompressOpen && (
                        <div className='flex flex-col pt-4 pb-1'>
                            <p className='font-semibold text-sm'>ProPilot Verbosity</p>
                            <p className='text-xs font-light'>Determines the extent and intricacy of the responses from your Copilot</p>
                            <div className='flex pl-3 items-start pt-[2px] pr-1'>
                                <img src={orange_dot} alt="" className='pt-1' />
                                <p className='text-[11px] font-light pl-1'>At Google, led microservices development enhancing data retrieval,
                                    Led design and development of microservices for exchange data retrieval and
                                    user services at Google
                                    .</p>
                            </div>
                            <div className='flex pl-3 items-start pt-[2px] pr-1'>
                                <img src={orange_dot} alt="" className='pt-1' />
                                <p className='text-[11px] font-light pl-1'>Enhanced application scalability and responsiveness to market demands.</p>
                            </div>
                            <div className='flex pl-3 items-start pt-[2px] pr-1'>
                                <img src={orange_dot} alt="" className='pt-1' />
                                <p className='text-[11px] font-light pl-1'>Utilized Spring Cloud and integrate API to construct a robust backend system.</p>
                            </div>
                            <div className='flex pl-3 items-start pt-[2px] pr-1'>
                                <img src={orange_dot} alt="" className='pt-1' />
                                <p className='text-[11px] font-light pl-1'>Boosted user experience and established new standards for industry excellence.</p>
                            </div>
                        </div>
                    )}
                    {isExtendedOpen && (
                        <div className='flex flex-col pt-4 pb-1'>
                            <p className='font-semibold text-sm'>Extended</p>
                            <p className='text-xs font-light'>Determines the extent and intricacy of the responses from your Copilot</p>
                            <div className='flex pl-3 items-start pt-[2px] pr-1'>
                                <img src={orange_dot} alt="" className='pt-1' />
                                <p className='text-[11px] font-light pl-1'>As a Software Engineer at Google, I led the design and development of microservices
                                    aimed at improving exchange data retrieval and user services, enhancing application
                                    scalability and market responsiveness. Utilizing SpringCloud, I built a robust backend
                                    system, integrating API gateways, authentication services, and service discovery to
                                    ensure smooth microservice communication, security, and transparency. These
                                    efforts boosted user experience and set industry excellence standards..</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="border-r border-gray-400 h-full"></div>

                <div className="flex-1 flex-col my-8 mx-10">
                    <p className='text-md font-semibold'>Transcription Delay </p>
                    <p className='text-[#475467] text-xs py-2 font-light'>The interval from the moment audio is captured
                    to the initiation of the transcription procedure.</p>
                    <div className='flex rounded-sm h-7 mr-32 my-1 border border-[#475467] text-sm font-semibold'>
                        <button className='px-3 flex-1 hover:bg-gradient-to-r from-yellow to-orange' >Min</button>
                        <div className="border-l border-[#475467] h-full"></div>
                        <button className='px-3 flex-1 hover:bg-gradient-to-r from-orange via-yellow to-orange'>Default</button>
                        <div className="border-l border-[#475467] h-full"></div>
                        <button className='px-3 flex-1 hover:bg-gradient-to-r from-orange to-yellow'>Max</button>
                    </div>

                    <p className='text-md font-semibold pt-5'>Propilot Temperature</p>
                    <p className='text-[#475467] text-xs py-2 font-light'>A high temperature setting introduces more unpredictability, akin to sprinkling 
                    in some randomness. Whereas a low temperature setting ensures a closer adherence 
                    to familiar concepts and knowledge. Cowin recommends to use Default.</p>
                    <div className='flex rounded-sm h-7 mr-32 my-1 border border-[#475467] text-sm font-semibold'>
                        <button className='px-3 flex-1 hover:bg-gradient-to-r from-yellow to-orange'>Min</button>
                        <div className="border-l border-[#475467] h-full"></div>
                        <button className='px-3 flex-1 hover:bg-gradient-to-r from-orange via-yellow to-orange'>Default</button>
                        <div className="border-l border-[#475467] h-full"></div>
                        <button className='px-3 flex-1 hover:bg-gradient-to-r from-orange to-yellow'>Max</button>
                    </div>
                    <p className='text-md font-semibold pt-4'>Advance Setting</p>
                    <p className='text-[#475467] text-xs py-2 font-light'>Modify these parameters, which may not be directly applicable for the 
                    general user but are valuable for individuals seeking greater customization and control.</p>
                </div>


            </div>
        </div>
    )
}

export default Settings
