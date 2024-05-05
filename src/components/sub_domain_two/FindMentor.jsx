import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import cowin_dark from '../../assets/cowin_dark.png'
import { RiSearchLine } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup, IoIosArrowUp } from "react-icons/io";
import blog from '../../assets/blog.svg';
import mentors from '../../assets/mentors.svg';
import Footer from '../Footer';
import chatbox from '../../assets/chatbox.svg';
import titlelogo from '../../assets/title_logo.png';
import letter from '../../assets/letter.svg';
import { TbClockCheck } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import man1 from '../../assets/man1.png'
import usersetting from '../../assets/usersetting.png'
import ring from '../../assets/ring.svg';
import girl1 from '../../assets/girl1.png'
import man2 from '../../assets/man2.png'
import arrow from '../../assets/arrow-right.png'
import { PiCirclesFour } from "react-icons/pi";
import unicon from '../../assets/unicon.png';
import heart from '../../assets/heart-broken.png';
import star from '../../assets/start.png'
import boy from '../../assets/boy.png'
import emptystar from '../../assets/emptystar.png'
import tick from '../../assets/tick.png'
import person from '../../assets/person.png'
import cam from '../../assets/cam.png'
import chat from '../../assets/chat.png'
import clock from '../../assets/clock.png'
import symbol from '../../assets/symbol.png'
import girl from '../../assets/girl.png'


const FindMentor = () => {

  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  const [isMentorOpen, setIsMentorOpen] = useState(true);
  const [isAiInterviewsOpen, setIsAiInterviewsOpen] = useState(false);
  const [isSessionOpen, setIsSessionOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isTestimonialOpen, setIsTestimonialOpen] = useState(false);

  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false)
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isMentorPricingOpen, setIsMentorPricingOpen] = useState(false);
  const [isRecommendedOpen, setIsRecommendedOpen] = useState(false);


  const handleHome = () => {
    setIsHomeOpen(true);
    setIsBlogsOpen(false)
    setIsMentorOpen(false);
    setIsAiInterviewsOpen(false);
    setIsSessionOpen(false);
    setIsMessageOpen(false);
    setIsAvailabilityOpen(false);
    setIsPricingOpen(false);
    setIsTestimonialOpen(false)
  };
  const handleBlogs = () => {
    setIsHomeOpen(false);
    setIsBlogsOpen(!isBlogsOpen)
    setIsMentorOpen(false);
    setIsAiInterviewsOpen(false);
    setIsSessionOpen(false);
    setIsMessageOpen(false);
    setIsAvailabilityOpen(false);
    setIsPricingOpen(false);
    setIsTestimonialOpen(false)
  };
  const handleMentors = () => {
    setIsHomeOpen(false);
    setIsBlogsOpen(false)
    setIsMentorOpen(!isMentorOpen);
    setIsAiInterviewsOpen(false);
    setIsSessionOpen(false);
    setIsMessageOpen(false);
    setIsAvailabilityOpen(false);
    setIsPricingOpen(false);
    setIsTestimonialOpen(false)
  };
  const handleInterviews = () => {
    setIsHomeOpen(false);
    setIsBlogsOpen(false)
    setIsMentorOpen(false);
    setIsAiInterviewsOpen(!isAiInterviewsOpen);
    setIsSessionOpen(false);
    setIsMessageOpen(false);
    setIsAvailabilityOpen(false);
    setIsPricingOpen(false);
    setIsTestimonialOpen(false)
  };
  const handleSession = () => {
    setIsHomeOpen(false);
    setIsBlogsOpen(false)
    setIsMentorOpen(false);
    setIsAiInterviewsOpen(false);
    setIsSessionOpen(!isSessionOpen);
    setIsMessageOpen(false);
    setIsAvailabilityOpen(false);
    setIsPricingOpen(false);
    setIsTestimonialOpen(false)
  };
  const handleMessage = () => {
    setIsHomeOpen(false);
    setIsBlogsOpen(false)
    setIsMentorOpen(false);
    setIsAiInterviewsOpen(false);
    setIsSessionOpen(false);
    setIsMessageOpen(!isMentorOpen);
    setIsAvailabilityOpen(false);
    setIsPricingOpen(false);
    setIsTestimonialOpen(false)
  };
  const handleAvailability = () => {
    setIsHomeOpen(false);
    setIsBlogsOpen(false)
    setIsMentorOpen(false);
    setIsAiInterviewsOpen(false);
    setIsSessionOpen(false);
    setIsMessageOpen(false);
    setIsAvailabilityOpen(!isAvailabilityOpen);
    setIsPricingOpen(false);
    setIsTestimonialOpen(false)
  };
  const handlePricing = () => {
    setIsHomeOpen(false);
    setIsBlogsOpen(false)
    setIsMentorOpen(false);
    setIsAiInterviewsOpen(false);
    setIsSessionOpen(false);
    setIsMessageOpen(false);
    setIsAvailabilityOpen(false);
    setIsPricingOpen(!isPricingOpen);
    setIsTestimonialOpen(false)
  }
  const handleTestimonial = () => {
    setIsHomeOpen(false);
    setIsBlogsOpen(false)
    setIsMentorOpen(false);
    setIsAiInterviewsOpen(false);
    setIsSessionOpen(false);
    setIsMessageOpen(false);
    setIsAvailabilityOpen(false);
    setIsPricingOpen(false);
    setIsTestimonialOpen(!isTestimonialOpen)
  }

  const companiesDropdown = () => {
    setIsCompaniesOpen(!isCompaniesOpen);
    setIsExperienceOpen(false);
    setIsMentorPricingOpen(false);
    setIsSkillsOpen(false);
    setIsRecommendedOpen(false);
  }
  const skillsDropdown = () => {
    setIsCompaniesOpen(false);
    setIsExperienceOpen(false);
    setIsMentorPricingOpen(false);
    setIsSkillsOpen(!isSkillsOpen);
    setIsRecommendedOpen(false);
  };
  const experienceDropdown = () => {
    setIsCompaniesOpen(false);
    setIsExperienceOpen(!isExperienceOpen);
    setIsMentorPricingOpen(false);
    setIsSkillsOpen(false);
    setIsRecommendedOpen(false);
  };
  const mentorPricingDropdown = () => {
    setIsCompaniesOpen(false);
    setIsExperienceOpen(false);
    setIsMentorPricingOpen(!isMentorPricingOpen);
    setIsSkillsOpen(false);
    setIsRecommendedOpen(false);
  };
  const recommendedDropdown = () => {
    setIsCompaniesOpen(false);
    setIsExperienceOpen(false);
    setIsMentorPricingOpen(false);
    setIsSkillsOpen(false);
    setIsRecommendedOpen(!isRecommendedOpen);
  };



  return (
    <Fragment>
      <div className="flex justify-center">

        <div className="w-1/4 xl:block hidden">
          <div className='fixed'>
            <div className="w-[280px] bg-[#353535] flex flex-col items-center h-screen fixed">
              <div className="text-white mt-3 mb-2" >
                <NavLink to='/'>
                  <img src={cowin_dark} alt="" className="h-9 w-24" />
                </NavLink>
              </div>
              <div className="flex gap-[7px] flex-col mx-3 text-white font-Poppins text-xs cursor-pointer">
                <NavLink to='/explorementors'> <div
                  className={`flex items-center w-[220px] h-[40px] rounded-lg ${isHomeOpen ? "bg-white text-[#292638]" : ""
                    }`}
                  onClick={handleHome}
                >
                  <PiCirclesFour className='h-6 w-6 ml-4' />
                  <div className="ml-2">Home</div>
                </div></NavLink>

                <NavLink to='/blogs'> <div
                  className={`flex items-center w-[220px] h-[40px] rounded-lg ${isBlogsOpen ? "bg-white text-[#292638]" : ""
                    }`}
                  onClick={handleBlogs}
                >
                  <img src={blog} alt="" className="h-6 w-6 ml-4" />
                  <div className="ml-2" onClick={() => setIsBlogsOpen(true)}>Blog</div>
                </div></NavLink>

                <div
                  className={`flex items-center w-[220px] h-[40px] rounded-lg ${isMentorOpen ? "bg-white text-[#292638]" : ""
                    }`}
                  onClick={handleMentors}
                >
                  <img src={mentors} alt="" className="h-6 w-6 ml-4" />
                  <div className="ml-2" onClick={() => setIsMentorOpen(true)}>Mentor Community</div>
                </div>

                <div
                  className={`flex items-center w-[220px] h-[40px] rounded-lg ${isAiInterviewsOpen ? "bg-white text-[#292638]" : ""
                    }`}
                  onClick={handleInterviews}
                >
                  <img src={chatbox} alt="" className="h-6 w-6 ml-4" />
                  <div className="ml-2" onClick={() => setIsAiInterviewsOpen(true)}>Interview QA</div>
                </div>

                <div className="border-b border-[#949494] h-px w-full"></div>
                <p className='py-[1px] font-Poppins'>Mentee Related</p>
                <div
                  className={`flex items-center w-[220px] h-[40px] rounded-lg ${isSessionOpen ? "bg-white text-[#292638]" : ""
                    }`}
                  onClick={handleSession}
                >
                  <img src={titlelogo} alt="" className="h-6 w-6 ml-4" />
                  <div className="ml-2" onClick={() => setIsSessionOpen(true)}>My Sessions</div>
                </div>

                <div
                  className={`flex items-center w-[220px] h-[40px] rounded-lg ${isMessageOpen ? "bg-white text-[#292638]" : ""
                    }`}
                  onClick={handleMessage}
                >
                  <img src={letter} alt="" className="h-6 w-6 ml-4" />
                  <div className="ml-2" onClick={() => setIsMessageOpen(true)}>Messages</div>
                </div>
                <div className="border-b border-[#949494] h-px w-full"></div>
                <p className='py-[1px] font-Poppins'>Mentor Related</p>

                <div
                  className={`flex items-center w-[220px] h-[40px] rounded-lg ${isAvailabilityOpen ? "bg-white text-[#292638]" : ""
                    }`}
                  onClick={handleAvailability}
                >
                  <TbClockCheck alt="" className="h-6 w-6 ml-4" />
                  <div className="ml-2" onClick={() => setIsAvailabilityOpen(true)}>My Availability</div>
                </div>
                <div
                  className={`flex items-center w-[220px] h-[40px] rounded-lg ${isPricingOpen ? "bg-white text-[#292638]" : ""
                    }`}
                  onClick={handlePricing}
                >
                  <IoWalletOutline alt="" className="h-6 w-6 ml-4" />
                  <div className="ml-2" onClick={() => setIsPricingOpen(true)}>Pricing</div>
                </div>
                <div
                  className={`flex items-center w-[220px] h-[40px] rounded-lg ${isTestimonialOpen ? "bg-white text-[#292638]" : ""
                    }`}
                  onClick={handleTestimonial}
                >
                  <FaRegStar alt="" className="h-6 w-6 ml-4" />
                  <div className="ml-2" onClick={() => setIsTestimonialOpen(true)}>Testimonial & Reviews</div>
                </div>

              </div>
            </div>
          </div>
        </div>


      <div className="sm:w-3/4 h-auto overflow-y-auto flex flex-col justify-center items-center font-Manrope">
          
        <div className='flex flex-col justify-center items-center w-full'>
          <div className='grid md:grid-cols-2 grid-flow-col-1 justify-between lg:mx-10 md:mx-3 mx-2 my-3 lg:gap-28 md:gap-10 gap-5'>
            <div className="font-Poppins">
              <div className="relative flex w-full max-w-[24rem] border rounded-md">
                <div className=" h-8 w-full flex items-center mx-3">
                  <input
                    className="peer w-full bg-transparent font-normal outline outline-0 focus:outline-0 border-t-transparent focus:border-t-transparent sm:text-[10px] text-[7px] py-1 rounded-xl bg-white pl-8"
                    placeholder="Search your Mentors by Company, Skills"
                  />
                  <div className="absolute left-2 top-2">
                    <RiSearchLine className="text-md sm:text-lg text-[#8D8D8D] pb-[3px]" />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex gap-5 text-sm justify-center items-center '>
              <NavLink to='/findmentor'><button className='border border-solid border-[#4E43FA] p-[6px] rounded-md text-white font-semibold text-xs bg-[#4E43FA]'>Find Your Mentor</button></NavLink>
              <NavLink to='/interviewqa'><button className='text-xs font-semibold'>Interview Q&A</button></NavLink>
              <NavLink to='/blogs'><button className='text-xs font-semibold'>Blogs</button></NavLink>
            </div>
          </div>

          <div className="border-b border-[#ECEEF0] h-px w-[98%]"></div>

          <p className='py-10 text-xl font-semibold text-center'>Book a Mentor of your Choice</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-1 font-medium text-sm lg:ml-6 md:ml-3 sm:ml-2'>
              <div className='flex justify-center items-center'>
                <button className='border border-solid border-gray-200 rounded-md px-2 my-4 py-1 flex gap-3' onClick={companiesDropdown}>
                  Companies
                  {isCompaniesOpen ? <IoMdArrowDropup className='h-5 w-5' /> : <IoMdArrowDropdown className='h-5 w-5' />}
                </button>
                {isCompaniesOpen && (
                  <div className="absolute bg-white border border-gray-200 rounded-md shadow-md z-10 mt-40">
                    <ul className="py-2">
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Company 1</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Company 2</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Company 3</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className='flex justify-center items-center'>
                <button className='border border-solid border-gray-200 rounded-md px-2 my-4 py-1 flex gap-3' onClick={skillsDropdown}>
                  Skills (All)
                  {isSkillsOpen ? <IoMdArrowDropup className='h-5 w-5' /> : <IoMdArrowDropdown className='h-5 w-5' />}
                </button>
                {isSkillsOpen && (
                  <div className="absolute bg-white border border-gray-200 rounded-md shadow-md z-10 mt-40">
                    <ul className="py-2">
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Skill 1</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Skill 2</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Skill 3</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className='flex justify-center items-center'>
                <button className='border border-solid border-gray-200 rounded-md px-2 my-4 py-1 flex gap-3' onClick={experienceDropdown}>
                  Experience
                  {isExperienceOpen ? <IoMdArrowDropup className='h-5 w-5' /> : <IoMdArrowDropdown className='h-5 w-5' />}
                </button>
                {isExperienceOpen && (
                  <div className="absolute bg-white border border-gray-200 rounded-md shadow-md z-10 mt-40">
                    <ul className="py-2">
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Experience 1</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Experience 2</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Experience 3</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className='flex justify-center items-center'>
                <button className='border border-solid border-gray-200 rounded-md px-2 my-4 py-1 flex gap-3' onClick={mentorPricingDropdown}>
                  Pricing
                  {isMentorPricingOpen ? <IoMdArrowDropup className='h-5 w-5' /> : <IoMdArrowDropdown className='h-5 w-5' />}
                </button>
                {isMentorPricingOpen && (
                  <div className="absolute bg-white border border-gray-200 rounded-md shadow-md z-10 mt-40">
                    <ul className="py-2">
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Pricing 1</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Pricing 2</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Pricing 3</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="border-b border-[#ECEEF0] h-px w-[98%]"></div>

            <div className='grid md:grid-cols-2 grid-flow-col-1 justify-between lg:mx-10 md:mx-3 mx-[1px] my-3 sm:gap-10 gap-5'>
              <div className="font-Poppins">
                <div className="relative flex w-full max-w-[24rem] border rounded-md">
                  <div className=" h-8 w-full flex items-center mx-3">
                    <input
                      className="peer w-full bg-transparent font-normal outline outline-0 focus:outline-0 border-t-transparent focus:border-t-transparent sm:text-[10px] text-[7px] py-1 rounded-xl bg-white pl-8"
                      placeholder="Search your Mentors by Company, Skills"
                    />
                    <div className="absolute left-2 top-2">
                      <RiSearchLine className="text-md sm:text-lg text-[#8D8D8D] pb-[3px]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex gap-3 text-sm justify-center items-center '>
                <div className='flex flex-col justify-center items-center text-center'>
                  <button className='border border-solid border-gray-200 rounded-md px-2 py-1 pt-1 flex gap-1 sm:text-xs items-center' onClick={recommendedDropdown}>
                    Sort By:  Recommended
                    {isRecommendedOpen ? <IoMdArrowDropup className='sm:h-5 sm:w-5 h-6 w-6 ' /> : <IoMdArrowDropdown className='sm:h-5 sm:w-5 h-6 w-6 ' />}
                  </button>
                  {isRecommendedOpen && (
                    <div className="absolute bg-white border border-gray-200 rounded-md shadow-md z-10 sm:mt-40 mt-44">
                      <ul className="py-2">
                        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Recommended 1</li>
                        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Recommended 2</li>
                        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Recommended 3</li>
                      </ul>
                    </div>
                  )}</div>
                <button className='border border-solid border-[#ECEEF0] p-[6px] rounded-md text-[#E31D1C] font-semibold text-xs flex gap-1 items-center'>Reset Filters
                  <img src={unicon} alt="" className='sm:w-4 sm:h-4 h-6 w-6' /> </button>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 border border-solid border-gray-200 my-3 rounded-md w-[95%] xl:ml-5 lg-ml-2 md:ml-1'>

                  <div className='flex flex-col py-6 relative px-2'>
                    <img src={boy} alt="" className='w-[90%] h-[90%]' />
                    <div className='flex gap-2 py-2 items-center'><img src={star} alt="" className='h-3 w-3' /><img src={emptystar} alt="" className='h-3 w-3' /><p className='text-[11px] text-[#545454]'>3.0 <span className='text-[#7C7A84]'>/ 24 Reviews</span></p></div>
                    <div className='flex justify-center items-center mt-1 mb-2 w-[80%] h-[20%]'><button className='px-4 py-[6px] bg-[#4E43FA] rounded-sm text-white text-xs'>View Profile</button></div>
                    <p className='text-[9px] text-[#F97316] pt-1'>Available today in 19.15 - 21.00 </p>
                  </div>

                  <div className='flex flex-col relative sm:px-[1px] px-2'>
                    <img src={heart} alt="" className='h-7 w-7 absolute top-0 right-0 mt-3 mr-3' />
                    <div className='flex gap-1 pt-10 items-center mb-1'><p className='text-lg font-bold'>Johan Muthu </p><img src={tick} alt="" className='w-4 h-4' /></div>
                    <div className='flex text-xs justify-between'><p>DevOps | Data Analyst <br />
                      Currently working at: IBM </p><div><div className='flex text-white bg-gradient-to-r from-[#38E0EB] via-[#FEB749] to-[#F04C18] rounded-2xl h-6 w-24 items-center gap-1 mr-4 text-[11px] justify-center'><img src={emptystar} alt="" className='w-3 h-3' />Top Mentor</div></div></div>
                    <div className='flex text-[7px] gap-1 my-2 flex-wrap justify-start'>
                      <p className='h-5 w-auto sm:w-24 px-2 flex justify-center items-center text-white rounded-xl bg-[#FEB749]'>11+ Years of experience</p>
                      <p className='h-5 w-auto sm:w-8 px-2 flex justify-center items-center text-white rounded-xl bg-[#F04C18]'>DSA</p>
                      <p className='h-5 w-auto sm:w-12 px-2 flex justify-center items-center text-white rounded-xl bg-[#38E0EB]'>Python</p>
                      <p className='h-5 w-auto sm:w-12 px-2 flex justify-center items-center text-white rounded-xl bg-[#4E43FA]'>More + </p>
                      <p className='h-5 w-auto sm:w-16 px-2 flex justify-center items-center text-white rounded-xl bg-[#FEB749]'>System Design</p>
                      <p className='h-5 w-auto sm:w-6 px-2 flex justify-center items-center text-white rounded-xl bg-[#F04C18]'>ML</p>
                      <p className='h-5 w-auto sm:w-12 px-2 flex justify-center items-center text-white rounded-xl bg-[#38E0EB]'>Python</p>
                    </div>
                    <p className='text-[10px] text-[#7C7A84] px-2 py-1'>Hello, my name is Leandre and I am a South African currently living in France. I am a recently certified TEFL teacher, passionate and enthusiastic about meeting <span className='text-[#4E43FA]'>more ...</span></p>
                    <div className='flex text-[11px] gap-2 px-2 items-center py-1'><img src={person} alt="" /><p>For: Experienced Professional</p></div>
                    <div className='flex text-[11px] gap-2 px-2 items-center pb-1'><img src={titlelogo} alt="" className='h-3 w-3' /><p>Targeting: Backend Developer</p></div>
                  </div>

                {/* <div className="h-full border-l border-[#C4C4C4]"></div> */}

                <div className='flex flex-col'>
                  <div className='flex justify-end pr-8 relative p-2 text-transparent bg-clip-text bg-gradient-to-r font-semibold from-[#38E0EB] to-[#FEB749] text-xs'><p>Send message</p>
                    <img src={letter} alt="" className='h-5 w-5 absolute top-0 right-0 m-2' /></div>
                  <p className='text-[10px] font-semibold pl-2 my-2 text-[#292638]'><span className='text-xl'>$45</span>/per session</p>
                  <div className='flex justify-center items-center pt-2'>
                    <button className='px-2 py-[6px] w-[70%] bg-[#4E43FA] rounded-sm text-white flex justify-center text-xs'>Book 1:1 Mentorship</button>
                  </div>

                  <div className="border-[#C4C4C4] border-b my-4"></div>
                  <p className='text-[12px] font-semibold pl-2 pb-2'>Every Month Of Mentorship Includes</p>
                  <div className='flex text-xs gap-1 pl-2 pb-2 items-center'><img src={cam} alt="" className='h-3 w-4' /><p className='text-[9px]'>1 session/week (1:1 Sessions)</p></div>
                  <div className='flex text-xs gap-1 pl-2 pb-2 items-center'><img src={chat} alt="" className='h-3 w-[14px]' /><p className='text-[9px]'>Almost Immediately (Chat Support)</p></div>
                  <div className='flex text-xs gap-1 pl-2 pb-2 items-center'><img src={clock} alt="" className='h-[14px] w-[14px]' /><p className='text-[9px]'>Everyday (Tasks & Followup)</p></div>
                  <div className='flex text-xs gap-1 pl-2 pb-2 items-center'><img src={symbol} alt="" className='h-4 w-4' /><p className='text-[9px]'>Community Lead (Job Referrals)</p></div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 border border-solid border-gray-200 my-3 rounded-md w-[95%] xl:ml-5 lg-ml-2 md:ml-1'>

                  <div className='flex flex-col py-6 relative px-2'>
                    <img src={girl} alt="" className='w-[90%] h-[90%]' />
                    <div className='flex gap-2 py-2 items-center'><img src={star} alt="" className='h-3 w-3' /><img src={emptystar} alt="" className='h-3 w-3' /><p className='text-[11px] text-[#545454]'>3.0 <span className='text-[#7C7A84]'>/ 24 Reviews</span></p></div>
                    <div className='flex justify-center items-center mt-1 mb-2 w-[80%] h-[20%]'><button className='px-4 py-[6px] bg-[#4E43FA] rounded-sm text-white text-xs'>View Profile</button></div>
                    <p className='text-[9px] text-[#F97316] pt-1'>Available today in 19.15 - 21.00 </p>
                  </div>

                  <div className='flex flex-col relative sm:px-[1px] px-2'>
                    <img src={heart} alt="" className='h-7 w-7 absolute top-0 right-0 mt-3 mr-3' />
                    <div className='flex gap-1 pt-10 items-center mb-1'><p className='text-lg font-bold'>Elizabeth S. Cipolla</p><img src={tick} alt="" className='w-4 h-4' /></div>
                    <div className='flex text-xs justify-between'><p>DevOps | Data Analyst <br />
                      Currently working at: IBM </p><div><div className='flex text-white bg-gradient-to-r from-[#38E0EB] via-[#FEB749] to-[#F04C18] rounded-2xl h-6 w-24 items-center gap-1 mr-4 text-[11px] justify-center'><img src={emptystar} alt="" className='w-3 h-3' />Top Mentor</div></div></div>
                    <div className='flex text-[7px] gap-1 my-2 flex-wrap justify-start'>
                      <p className='h-5 w-auto sm:w-24 px-2 flex justify-center items-center text-white rounded-xl bg-[#FEB749]'>11+ Years of experience</p>
                      <p className='h-5 w-auto sm:w-8 px-2 flex justify-center items-center text-white rounded-xl bg-[#F04C18]'>DSA</p>
                      <p className='h-5 w-auto sm:w-12 px-2 flex justify-center items-center text-white rounded-xl bg-[#38E0EB]'>Python</p>
                      <p className='h-5 w-auto sm:w-12 px-2 flex justify-center items-center text-white rounded-xl bg-[#4E43FA]'>More + </p>
                      <p className='h-5 w-auto sm:w-16 px-2 flex justify-center items-center text-white rounded-xl bg-[#FEB749]'>System Design</p>
                      <p className='h-5 w-auto sm:w-6 px-2 flex justify-center items-center text-white rounded-xl bg-[#F04C18]'>ML</p>
                      <p className='h-5 w-auto sm:w-12 px-2 flex justify-center items-center text-white rounded-xl bg-[#38E0EB]'>Python</p>
                    </div>
                    <p className='text-[10px] text-[#7C7A84] px-2 py-1'>Hello, my name is Leandre and I am a South African currently living in France. I am a recently certified TEFL teacher, passionate and enthusiastic about meeting <span className='text-[#4E43FA]'>more ...</span></p>
                    <div className='flex text-[11px] gap-2 px-2 items-center py-1'><img src={person} alt="" /><p>For: Experienced Professional</p></div>
                    <div className='flex text-[11px] gap-2 px-2 items-center pb-1'><img src={titlelogo} alt="" className='h-3 w-3' /><p>Targeting: Backend Developer</p></div>
                  </div>

                {/* <div className="h-full border-l border-[#C4C4C4]"></div> */}

                <div className='flex flex-col'>
                  <div className='flex justify-end pr-8 relative p-2 text-transparent bg-clip-text bg-gradient-to-r font-semibold from-[#38E0EB] to-[#FEB749] text-xs'><p>Send message</p>
                    <img src={letter} alt="" className='h-5 w-5 absolute top-0 right-0 m-2' /></div>
                  <p className='text-[10px] font-semibold pl-2 my-2 text-[#292638]'><span className='text-xl'>$45</span>/per session</p>
                  <div className='flex justify-center items-center pt-2'>
                    <button className='px-2 py-[6px] w-[70%] bg-[#4E43FA] rounded-sm text-white flex justify-center text-xs'>Book 1:1 Mentorship</button>
                  </div>

                  <div className="border-[#C4C4C4] border-b my-4"></div>
                  <p className='text-[12px] font-semibold pl-2 pb-2'>Every Month Of Mentorship Includes</p>
                  <div className='flex text-xs gap-1 pl-2 pb-2 items-center'><img src={cam} alt="" className='h-3 w-4' /><p className='text-[9px]'>1 session/week (1:1 Sessions)</p></div>
                  <div className='flex text-xs gap-1 pl-2 pb-2 items-center'><img src={chat} alt="" className='h-3 w-[14px]' /><p className='text-[9px]'>Almost Immediately (Chat Support)</p></div>
                  <div className='flex text-xs gap-1 pl-2 pb-2 items-center'><img src={clock} alt="" className='h-[14px] w-[14px]' /><p className='text-[9px]'>Everyday (Tasks & Followup)</p></div>
                  <div className='flex text-xs gap-1 pl-2 pb-2 items-center'><img src={symbol} alt="" className='h-4 w-4' /><p className='text-[9px]'>Community Lead (Job Referrals)</p></div>
                </div>
            </div>

          </div>

        </div>

        <div className="w-1/4 relative xl:block hidden h-auto">
          <div className='fixed'>
            <div className='fixed right-5'>
              <div className='flex justify-end gap-4 mt-4 items-center'>
              <NavLink to='/logintwo'><button className='border border-solid border-[#4E43FA] p-[6px] rounded-sm text-white font-semibold text-xs bg-[#4E43FA]'>Dashboard</button></NavLink>
                {/* <div><img src={ring} alt="" className='h-9 w-9 border border-solid border-gray-200 p-1 rounded-md cursor-pointer' /></div>
                <div><img src={letter} alt="" className='h-9 w-9 border border-solid border-gray-200 p-1 rounded-md cursor-pointer' /></div> */}
                <div><img src={usersetting} alt="" className='h-9 w-9 cursor-pointer' /></div>
              </div> <br />
              <div className="absolute h-screen left-0 top-0">
                <div className="h-full border-l border-[#C4C4C4]"></div>
              </div>
              <div className='h-[240px] w-[225px] ml-4 border border-solid border-gray-200 p-1 rounded-md cursor-pointer'>
                <div className='flex flex-col m-1'>
                  <p className='text-sm font-semibold'>Top Members</p>
                  <div className='flex border border-solid border-gray-200 p-1 rounded-md my-2 justify-between'>
                    <img src={man1} alt="" className='w-7 h-7 mr-1' />
                    <div className='flex flex-col'>
                      <p className='text-[10px] font-medium'>Andrew James</p>
                      <p className='text-[8px] font-light text-[#4E43FA]'>Senior Frontend Engineer</p>
                    </div>
                    <p className='text-[10px] font-semibold flex justify-center items-center mx-[1px]'>Book Mentor
                      <img src={arrow} alt="" className='h-3' />
                    </p>
                  </div>
                  <div className='flex border border-solid border-gray-200 p-1 rounded-md my-2 justify-between'>
                    <img src={girl1} alt="" className='w-7 h-7 mr-1' />
                    <div className='flex flex-col'>
                      <p className='text-[10px] font-medium'>Stela Megan</p>
                      <p className='text-[8px] font-light text-[#4E43FA]'>Full Stack Developer</p>
                    </div>
                    <p className='text-[10px] font-semibold flex justify-center items-center mx-[1px]'>Book Mentor
                      <img src={arrow} alt="" className='h-3' />
                    </p>
                  </div>
                  <div className='flex border border-solid border-gray-200 p-1 rounded-md my-2 justify-between'>
                    <img src={man2} alt="" className='w-7 h-7 mr-1' />
                    <div className='flex flex-col'>
                      <p className='text-[10px] font-medium'>Anderson Clove </p>
                      <p className='text-[8px] font-light text-[#4E43FA]'>Data Scientist</p>
                    </div>
                    <p className='text-[10px] font-semibold flex justify-center items-center mx-[1px]'>Book Mentor
                      <img src={arrow} alt="" className='h-3' />
                    </p>
                  </div>
                  <button className='text-xs font-semibold text-[#4E43FA] mt-2'>View more</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* <Footer /> */}
    </Fragment>
  )
}

export default FindMentor
