import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTypewriter } from 'react-simple-typewriter';
import lineafter from '../../assets/lineafter.svg'
import cowin_dark from '../../assets/cowin_dark.png'
import { PiCirclesFour } from "react-icons/pi";
import blog from '../../assets/blog.svg';
import mentors from '../../assets/mentors.svg';
import chatbox from '../../assets/chatbox.svg';
import titlelogo from '../../assets/title_logo.png';
import usersetting from '../../assets/usersetting.png'
import letter from '../../assets/letter.svg';
import { TbClockCheck } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import man1 from '../../assets/man1.png'
import girl1 from '../../assets/girl1.png'
import man2 from '../../assets/man2.png'
import arrow from '../../assets/arrow-right.png'
import { RiSearchLine } from "react-icons/ri";
import heart from '../../assets/heart-broken.png';
import laptop from '../../assets/laptop.jpg';
import arrowdown from '../../assets/arrow-down.png';
import insta from '../../assets/insta.png';
import fb from '../../assets/fb.png';
import twitter from '../../assets/twitter.png';


const ExploreMentors = () => {

  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  const [isMentorOpen, setIsMentorOpen] = useState(false);
  const [isAiInterviewsOpen, setIsAiInterviewsOpen] = useState(false);
  const [isSessionOpen, setIsSessionOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isTestimonialOpen, setIsTestimonialOpen] = useState(false);


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

  const [text] = useTypewriter({
    words: ['Ace-Job-Interviews', 'Crack-Coding-Interviews', 'Part-Time Job & Internships', '1:1 Mentorship', 'Launch-Your-Side-Hustle', 'Grow-Your-Network'],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 800,
    deleteSpeed: 100,
  });

  return (
    <Fragment>
      <div className="flex justify-center font-Manrope">

        <div className="w-1/4 lg:block hidden">
          <div className='fixed'>
            <div className="w-[280px] bg-[#353535] flex flex-col items-center h-screen fixed">
              <div className="text-white mt-3 mb-2" >
                <NavLink to='/'>
                  <img src={cowin_dark} alt="" className="h-9 w-24" />
                </NavLink>
              </div>
              <div className="flex gap-[7px] flex-col mx-3 text-white font-Poppins text-xs cursor-pointer">
             <div
                  className={`flex items-center w-[220px] h-[40px] rounded-lg ${isHomeOpen ? "bg-white text-[#292638]" : ""
                    }`}
                  onClick={handleHome}
                >
                  <PiCirclesFour className='h-6 w-6 ml-4' />
                  <div className="ml-2">Home</div>
                </div>

               <NavLink to='/blogs'> <div
                  className={`flex items-center w-[220px] h-[40px] rounded-lg ${isBlogsOpen ? "bg-white text-[#292638]" : ""
                    }`}
                  onClick={handleBlogs}
                >
                  <img src={blog} alt="" className="h-6 w-6 ml-4" />
                  <div className="ml-2" onClick={() => setIsBlogsOpen(true)}>Blog</div>
                </div></NavLink>

                <NavLink to='/findmentor'> <div
                  className={`flex items-center w-[220px] h-[40px] rounded-lg ${isMentorOpen ? "bg-white text-[#292638]" : ""
                    }`}
                  onClick={handleMentors}
                >
                  <img src={mentors} alt="" className="h-6 w-6 ml-4" />
                  <div className="ml-2" onClick={() => setIsMentorOpen(true)}>Mentor Community</div>
                </div></NavLink>

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


        <div className="w-3/4 h-auto overflow-y-auto flex flex-col justify-center items-center">
          <div className='grid md:grid-cols-2 grid-flow-col-1 justify-between mx-10 my-3 sm:gap-32 gap-5'>
            <div className="font-Poppins">
              <div className="relative flex w-full max-w-[24rem] border rounded-md">
                <div className=" h-8 w-full flex items-center">
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
             <NavLink to='/findmentor'><button className='border border-solid border-[#4E43FA] p-[6px] rounded-md text-[#4E43FA] font-semibold text-xs'>Find Your Mentor</button></NavLink>
              <button className='text-xs font-semibold'>Interview Q&A</button>
            <NavLink to='/blogs'><button className='text-xs font-semibold'>Blogs</button></NavLink>
            </div>
          </div>

          <div className="border-b border-[#ECEEF0] h-px w-full"></div>

          <p className='flex justify-center py-5 text-3xl font-semibold text-center'>10x Better Interview Answers using AI</p>
          <div className="flex font-Roboto sm:text-[20px] md:text-2xl text-md text-center justify-center align-middle items-center">
            <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradient3 via-gradient4 to-gradient5">
              {" "}
              {text}{" "}
            </span>&nbsp;
            <img src={lineafter} alt="" className='sm:h-8 h-5' />
          </div>
          <p className='text-sm py-2 text-[#475467] flex justify-center'>CoWin Support your Career Journey !!</p>

          <div className="py-3 font-Inter sm:text-xl text-lg flex justify-center flex-col sm:flex-row text-center font-semibold">
            <span className="text-lightblue">&nbsp;Real-Time&nbsp;</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient7 to-gradient8">
              Interview  Answer!! Magical CoPilot!!
            </span>
          </div>

          <div className="flex justify-center items-center flex-col text-cenetr align-middle">
            <div className="relative ml-6 w-full sm:w-full md:w-[500px] lg:w-[600px] sm:h-[360px] h-40 my-6 rounded-[40px] overflow-y-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-lightblue via-yellow to-orange border-gradient">
                <div className="sm:h-[310px] h-40 bg-black rounded-[30px] lg:mx-4 mx-3 my-6 "></div>
              </div>
            </div>
            <NavLink to='/login'>
              <button className="w-[200px] font-Inter h-[40px] bg-gradient-to-r from-orange to-yellow rounded-lg text-white font-bold text-lg my-4 sm:my-2">
                Get Started For Free
              </button></NavLink>
          </div>

          <div className="border-b border-[#ECEEF0] h-px w-full my-4"></div>

          <div className='flex flex-col ml-11 mr-5 justify-center items-center'>
            <div className='flex border border-solid border-gray-200 p-1 rounded-md'>
              <div className='w-[60%] py-6 flex flex-col gap-3 relative'>
                <img src={heart} alt="" className='h-7 w-7 absolute top-0 right-0' />
                <p className='text-xl font-Manrope font-semibold px-6'>Regression Testing: A Fun and Informative Guide</p>
                <p className='text-xs px-6'>1. Customize Your URL
                  Instead of using your default LinkedIn URL, take a few minutes to personalize it with your name. For example, use firstNameLastName or FirstName_LastName. A customized URL is cleaner and easier for potential connections to find and remember you.more ....</p>
              </div>
              <div className='w-[40%] flex justify-center items-center border-l border-gray-200 mx-1'>
                <img src={laptop} alt="" className='ml-2 w-[250px] h-[190px]' />
              </div>
            </div>
          </div> <br />

          <div className='flex flex-col ml-11 mr-5 justify-center items-center'>
            <div className='flex border border-solid border-gray-200 p-1 rounded-md'>
              <div className='w-[60%] py-6 flex flex-col gap-3 relative'>
                <img src={heart} alt="" className='h-7 w-7 absolute top-0 right-0' />
                <p className='text-xl font-Manrope font-semibold px-6'>Regression Testing: A Fun and Informative Guide</p>
                <p className='text-xs px-6'>1. Customize Your URL
                  Instead of using your default LinkedIn URL, take a few minutes to personalize it with your name. For example, use firstNameLastName or FirstName_LastName. A customized URL is cleaner and easier for potential connections to find and remember you.more ....</p>
              </div>
              <div className='w-[40%] flex justify-center items-center border-l border-gray-200 mx-1'>
                <img src={laptop} alt="" className='ml-2 w-[250px] h-[190px]' />
              </div>
            </div>
          </div> <br />
          <button className='flex border border-solid border-[#4E43FA] py-1 rounded-md text-[#4E43FA] justify-center items-center px-3 gap-1 my-3'>More <img src={arrowdown} alt="" className='mt-1' /></button>
          <br />
          <div className="border-b border-[#ECEEF0] h-px w-full"></div> <br />

          <div className='grid sm:grid-cols-2 grid-cols-1 justify-center items-center gap-4 my-2 ml-6'>
            <div className='flex flex-col border border-solid border-gray-200 p-1 rounded-md gap-5 h-auto w-[300px]'>
              <div className='flex items-center p-3 gap-2'>
                <img src={insta} alt="" className='w-12 h-12' />
                <p className='text-lg font-semibold'>Instagram</p></div>
              <div className="border-b border-[#ECEEF0] w-full px-3"></div>
              <div>
                <p className='text-xs font-light font-Manrope text-[#7C7A84] px-4'>Contact us to get updated with CoWin and latest News. </p>
                <div className='px-2 py-1 w-[90px] mx-2 my-2 border border-solid border-gray-200 p-1 rounded-md'>@cowinai</div>
              </div>
            </div>
            <div className='flex flex-col border border-solid border-gray-200 p-1 rounded-md gap-5 h-auto w-[300px]'>
              <div className='flex items-center p-3 gap-2'>
                <img src={fb} alt="" className='w-12 h-12' />
                <p className='text-lg font-semibold'>Facebook</p></div>
              <div className="border-b border-[#ECEEF0] w-full px-3"></div>
              <div>
                <p className='text-xs font-light font-Manrope text-[#7C7A84] px-4'>Contact us to get updated with CoWin and latest News. </p>
                <div className='px-2 py-1 w-[90px] mx-2 my-2 border border-solid border-gray-200 p-1 rounded-md'>@cowinai</div>
              </div>
            </div>
            <div className='flex flex-col border border-solid border-gray-200 p-1 rounded-md gap-5 h-auto w-[300px]'>
              <div className='flex items-center p-3 gap-2'>
                <img src={twitter} alt="" className='w-12 h-12' />
                <p className='text-lg font-semibold'>Twitter</p></div>
              <div className="border-b border-[#ECEEF0] w-full px-3"></div>
              <div>
                <p className='text-xs font-light font-Manrope text-[#7C7A84] px-4'>Contact us to get updated with CoWin and latest News. </p>
                <div className='px-2 py-1 w-[90px] mx-2 my-2 border border-solid border-gray-200 p-1 rounded-md'>@cowinai</div>
              </div>
            </div>
          </div> <br />


        </div>


        <div className="w-1/4 relative lg:block hidden h-auto">
          <div className='fixed'>
            <div className='fixed top-4 right-5'>
              <div className='flex justify-end gap-4 items-center'>
              <NavLink to='/logintwo'><button className='border border-solid border-[#4E43FA] p-[6px] rounded-sm text-white font-semibold text-xs bg-[#4E43FA]'>Dashboard</button></NavLink>
                {/* <div><img src={ring} alt="" className='h-9 w-9 border border-solid border-gray-200 p-1 rounded-md cursor-pointer' /></div>
                <div><img src={letter} alt="" className='h-9 w-9 border border-solid border-gray-200 p-1 rounded-md cursor-pointer' /></div> */}
                <div><img src={usersetting} alt="" className='h-9 w-9 cursor-pointer' /></div>
              </div>
            </div>
            <div className="absolute h-screen left-0 top-0">
              <div className="h-full border-l border-[#C4C4C4]"></div>
            </div>
            <br /><br /><br />
            <div className='flex flex-col gap-5 relative font-Manrope'>
              <div className='h-[200px] w-[225px] ml-4 border border-solid border-gray-200 p-1 rounded-md cursor-pointer'>
                <div className='flex flex-col px-1 gap-1'>
                  <p className='text-lg font-semibold'>15%</p>
                  <p className='text-xs font-medium'>Profile Completed</p>
                  <div className='w-full h-2 bg-[#ECEEF0] rounded-lg'>
                    <div className='w-[30%] h-2 bg-gradient-to-r from-[#00B5F2] to-[#FEB749] rounded-lg'></div>
                  </div>
                  <p className='text-[#F04C18] text-[9px] font-medium'>Complete your profile setup up to Maximize your Profile setup,Follow the steps Bellow.</p>
                  <div className='flex flex-col gap-2 text-xs'>
                    <p>Personal</p>
                    <p>How Could You Help</p>
                    <p>How To Deliver Mentorship</p>
                    <p>How Can Join Mentorship</p>
                  </div>
                </div>
              </div>
              <div className='h-[240px] w-[225px] ml-4 border border-solid border-gray-200 p-1 rounded-md cursor-pointer'>
                <div className='flex flex-col m-1'>
                  <p className='text-sm font-semibold'>Top Blogs of this Month</p>
                  <p className='text-[9px] font-light'>Lorem ipsum dolor sit amet, consectetur</p>
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

    </Fragment>
  )
}

export default ExploreMentors
