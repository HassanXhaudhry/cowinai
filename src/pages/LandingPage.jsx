import React, { Fragment, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import hand from '../assets/hand.svg'
import lefticonup from '../assets/iconleftup.png'
import iconleft from '../assets/iconleft.png'
import iconright from '../assets/iconright.png'
import { useTheme } from '../contexts/ThemeContext';
import {useTypewriter} from 'react-simple-typewriter';
import lineafter from '../assets/lineafter.svg'
import GoToTop from '../components/GoToTop'
import Slider from '../components/sliders/Slider'
import Slider2 from '../components/sliders/Slider2'
import Slider3 from '../components/sliders/Slider3'
import Slider4 from '../components/sliders/Slider4'
import { RiSearchLine } from "react-icons/ri";
import bgcolor from '../assets/bgcolor.png';
import zoom from '../assets/zoom.png';
import meet from '../assets/meet.png';
import webex from '../assets/webex.png';
import teams from '../assets/teams.svg';
import chrome from '../assets/chrome.png';
import edge from '../assets/edge.png';
import firefox from '../assets/firefox.png';
import tick from '../assets/tick.svg';
import heart from '../assets/heart.svg';
import Pricing from '../components/Pricing'
import MyFooter from '../components/Footer'
import Faq from '../components/faq'
import { NavLink } from 'react-router-dom';
import TopAnimation from '../components/TopAnimation'
import ExploreMentors from '../components/sub_domain_two/ExploreMentors'


const LandingPage = () => {

  
  const { darkMode } = useTheme();


  const tranform3d = useRef();
  useEffect(() => {
    effect3d();
  }, []);
  
  const effect3d = () => {
    tranform3d.current.style.transform = `translate3d(0, 0, 0)`;
  };

  
  const [text]=useTypewriter({
    words: ['Ace-Job-Interviews', 'Crack-Coding-Interviews', 'Part-Time Job & Internships', '1:1 Mentorship', 'Launch-Your-Side-Hustle', 'Grow-Your-Network'],
    loop:{},
    typeSpeed: 120,
    delaySpeed: 800,
    deleteSpeed:100,
  });
  
  return (
    <Fragment>
      <TopAnimation/>
      <GoToTop />
      <Navbar darkMode={darkMode} />

      <div className={` ${darkMode && "dark"}`}>
        <div ref={tranform3d} className="dark:bg-dark overflow-hidden z-[-50]">
        
          <div className='pt-12 font-Roboto flex justify-center z-2'>
            <div className="w-72 h-12 font-bold text-3xl bg-[#4e43fa21] rounded-[30px] flex justify-center items-center ">
              <img src={hand} alt="" className="h-4 w-4 " />
              <span className="text-lightblue font-Roboto">
                &nbsp;What&nbsp;
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
                We do
              </span>
            </div>
          </div>

          <div className="left-44 absolute z-[-1] animate-xc-moveX duration-4000 ease-in-out delay-0 animate-infinite animate-normal animate-none">
            <img
              className="w-[112px] h-[82px] align-middle"
              src={lefticonup}
              alt=""
            />
          </div>
          <div className="left-0 top-80 absolute z-[-1] animate-xc-moveY duration-3000 ease-in-out delay-0 animate-infinite animate-normal animate-none">
            <img
              className="w-[241px] h-[196px] align-middle"
              src={iconleft}
              alt=""
            />
          </div>
          <div className="absolute right-20 z-[-1] animate-xc-moveY duration-3000 ease-in-out delay-0 animate-infinite animate-normal animate-none">
            <img
              className="w-[426px] h-[370px]align-middle"
              src={iconright}
              alt=""
            />
          </div>

          <div className="flex font-Manrope justify-center text-center items-center w-screen">
            <div className="pt-16 text-[#101828] lg:text-[70px] md:text-[50px] text-3xl font-bold dark:text-white px-3">
            Real-Time Interview Answer!! 
              <div className="flex font-Roboto sm:text-[30px] md:text-5xl text-lg text-center justify-center align-middle items-center pt-4 sm:pt-10">To Achieve &nbsp;
            <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradient3 via-gradient4 to-gradient5">
              {" "}
              {text}{" "}
            </span>&nbsp;
            <img src={lineafter} alt="" className='sm:h-20 h-8'/>
          </div>
            </div>
          </div>

          
          <div className="flex font-Roboto justify-center flex-col text-center pt-10">
            <h1 className="text-[#475467] dark:text-white text-[15px] sm:text-[20px]">
              CoWin support Your Career Journey !!
            </h1>

            <div className="font-Manrope pt-12 px-3 sm:text-4xl text-2xl font-semibold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient7 to-gradient8">
                Magical CoPilot!!
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <img className="z-[-12] absolute" src={bgcolor} alt="" />
            
            <div className="relative sm:mx-2 mx-3 w-full sm:w-full md:w-[90%] lg:w-[780px] sm:h-[450px] h-56  my-12 rounded-[40px] overflow-y-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-lightblue via-yellow to-orange border-gradient">
                <div className="sm:h-[400px] h-44 bg-black rounded-[30px] lg:mx-6 mx-4 my-6 "></div>
              </div>
            </div>
            <NavLink to='/login'>
            <button className="w-[200px] font-Inter h-[45px] bg-gradient-to-r from-orange to-yellow rounded-lg text-white font-bold text-lg my-4 sm:my-0">
              Get Started For Free
            </button></NavLink>
          <div className="py-12 font-Inter sm:text-4xl text-2xl flex justify-center flex-col sm:flex-row text-center mx-2">
            <span className="text-lightblue">&nbsp;Direct&nbsp;</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient7 to-gradient8">
            Mentorship and Networking
            </span>
          </div>
          </div>

          {/* Slider */}
          <Slider />

          <div className="flex items-center justify-center font-Inter">
            <div className="relative flex w-full max-w-[45rem] my-10 mx-2 border rounded-xl justify-center align-middle items-center">
              <div className="relative h-10 w-full flex items-center">
                <input
                  className="text-black peer w-full h-full bg-transparent font-normal outline outline-0 focus:outline-0 border-t-transparent focus:border-t-transparent sm:text-sm text-[10px] px-10 py-2.5 rounded-xl bg-white pl-10"
                  placeholder="Search your Mentors by Company, Skills"
                />
                <div className="absolute left-2 top-2 ">
                  <RiSearchLine className="text-xl sm:text-2xl text-[#8D8D8D]" />
                </div>
              </div>
              <button
                disabled
                className="absolute font-Inter right-1 top-1 rounded-lg bg-blue-btn hover:bg-dark-blue py-2 sm:px-4 px-1 text-center align-middle text-xs cursor-pointer text-white"
                type="button">
                <NavLink to="/explorementors">Find Your Mentor</NavLink>
              </button>
            </div>
          </div>

          <div className="py-12 font-Inter sm:text-3xl text-2xl flex justify-center flex-col sm:flex-row text-center mx-2">
            <span className="text-lightblue">&nbsp;CoWin Integrate&nbsp;</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient7 to-gradient8">
              With all Major Meeting Softwares
            </span>
          </div>

          <div className="flex flex-col font-Inter sm:flex-row sm:items-center justify-center items-start gap-4 ml-24 sm:m-l0 sm:ml-0 sm:gap-16 md:gap-6 text-black dark:text-white">
  <div className="flex items-center ">
    <img className="w-8 h-8 mr-2" src={zoom} alt="Zoom" />
    Zoom
  </div>
  <div className="flex items-center">
    <img className="w-8 h-8 mr-2" src={meet} alt="Google meet" />
    Google meet
  </div>
  <div className="flex items-center">
    <img className="w-8 h-8 mr-2" src={webex} alt="WebEx" />
    WebEx
  </div>
  <div className="flex items-center">
    <img className="w-8 h-8 mr-2" src={teams} alt="Microsoft teams" />
    Microsoft teams
  </div>
  <div className="flex font-Inter text-black dark:text-white text-lg">
    and more
  </div>
</div>

          

          <div className="py-12 font-Manrope sm:text-3xl text-2xl flex justify-center flex-col sm:flex-row text-center px-2">
            <span className="text-lightblue">
              &nbsp;CoWin Breakthrough&nbsp;
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient7 to-gradient8">
              AI Dedicated Download Browser Addins
            </span>
          </div>

          <div className="flex font-Inter justify-center gap-4 flex-col sm:flex-row sm:gap-16 text-black dark:text-white items-center">
            <div className="flex items-center">
              <img className="w-8 h-8 mr-2" src={chrome} alt="" />
              Google Chrome
            </div>
            <div className="flex items-center">
              <img className="w-8 h-8 mr-2" src={edge} alt="" />
              Mircosoft Edge
            </div>
            <div className="flex items-center">
              <img className="w-8 h-8 mr-2" src={firefox} alt="" />
              Mozilla Firefox
            </div>
          </div>

          <div className={`pt-12 font-Roboto  flex justify-center z-[-3] mt-2`}>
            <div className="w-72 h-12 font-bold text-3xl bg-[#4e43fa21] rounded-[30px] flex justify-center items-center">
              <img src={hand} alt="" className="h-4 w-4 " />
              <span className="text-lightblue ">
                &nbsp;How&nbsp;
              </span>
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
                We do
              </span>
            </div>
          </div>

          <div className="flex font-Manrope justify-center items-center mt-8">
            <div className="box relative flex justify-center">
              <div className="">
                <div className="slider w-[550px] hidden sm:block absolute top-[67px] h-4 bg-gradient-to-r from-[#F58244] from-40% via-[#407CB5] via-50% to-[#7AD0BD] to-70% z-[-1] rounded-[5px]"></div>
              </div>
              <div className="my-10 text-black dark:text-white">
                <span className="text-2xl sm:text-4xl pl-3 w-64 ">
                  Unleash the Power of HUMAN🦄
                </span>
              </div>
            </div>
          </div>

          <span className="flex font-Roboto justify-center items-center text-[#475467] dark:text-white text-lg mb-10">
            Get Started in 3 easy Steps !!
          </span>

          <div className="flex font-Manrope justify-center items-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10 text-center  ">
              <div className="bg-gray-200 w-64 h-60 rounded-lg text-2xl text-[#475467] dark:text-white dark:bg-[#181d2d] shadow-2xl shadow-indigo-500/35 bg-opacity-20">
                <div className="xc-cta-four__box">
                  <div className="xc-cta-four__icon">
                    <span className="text-blue-btn dark:text-white">1</span>
                  </div>
                </div>
                <div className="pt-16">
                  <p className="hover:text-blue-btn hover:underline">Step1</p>
                  <div className="flex text-sm mx-10 pt-16">
                    <img className="w-4 h-4 mr-2" src={tick} alt="" />
                    Shortlist your Mentor
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 w-64 h-60 rounded-lg text-2xl text-[#475467] dark:text-white dark:bg-[#181d2d] shadow-2xl shadow-indigo-500/35 bg-opacity-20">
                <div className="xc-cta-four__box">
                  <div className="xc-cta-four__icon">
                    <span className="text-blue-btn dark:text-white">2</span>
                  </div>
                </div>
                <div className="pt-16">
                  <p className="hover:text-blue-btn hover:underline">Step2</p>
                  <div className="flex text-sm mx-10 pt-16">
                    <img className="w-4 h-4 mr-2" src={tick} alt="" />
                    Reserve a Session
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 w-64 h-60 rounded-lg text-2xl text-[#475467] dark:text-white dark:bg-[#181d2d] shadow-2xl shadow-indigo-500/35 bg-opacity-20">
                <div className="xc-cta-four__box">
                  <div className="xc-cta-four__icon">
                    <span className="text-blue-btn dark:text-white">3</span>
                  </div>
                </div>
                <div className="pt-16">
                  <p className="hover:text-blue-btn hover:underline">Step3</p>
                  <div className="flex flex-col text-sm mx-12 pt-[60px]">
                    <div className="flex text-sm ">
                      <img className="w-4 h-4 mr-2" src={tick} alt="" />
                      <span>Start 1:1 Mentorship</span>
                    </div>
                    <div className="flex text-sm ">
                      <img className="w-4 h-4 mr-2" src={tick} alt="" />
                      <span>Launch side hustle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex font-Manrope justify-center items-center mt-8">
            <div className="box relative flex justify-center">
              <div className="">
                <div className="slider w-[550px] hidden sm:block absolute top-[67px] h-4 bg-gradient-to-r from-[#F58244] from-40% via-[#407CB5] via-50% to-[#7AD0BD] to-70% z-[-1] rounded-[5px]"></div>
              </div>
              <div className="my-10 text-black dark:text-white">
                <span className="text-2xl sm:text-4xl pl-3 w-64 ">
                  Unleash the Power of AI GOD🦄
                </span>
              </div>
            </div>
          </div>

          <span className="flex font-Roboto justify-center items-center text-[#475467] dark:text-white text-lg">
            Get Started in 3 easy Steps !!
          </span>

          <div className="flex font-Manrope justify-center items-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 text-center">
              <div className="bg-gray-200 w-64 h-60 rounded-lg text-2xl text-[#475467] dark:text-white dark:bg-[#181d2d] shadow-2xl shadow-indigo-500/35 bg-opacity-20">
                <div className="xc-cta-four__box">
                  <div className="xc-cta-four__icon">
                    <span className="text-blue-btn dark:text-white">1</span>
                  </div>
                </div>
                <div className="pt-16 ">
                  <p className="hover:text-blue-btn hover:underline">Step1</p>
                  <div className="flex flex-col text-sm mx-10 pt-[60px]">
                    <div className="flex text-sm ">
                      <img className="w-4 h-4 mr-2" src={tick} alt="" />
                      <span>Resume Builder</span>
                    </div>
                    <div className="flex text-sm ">
                      <img className="w-4 h-4 mr-2" src={tick} alt="" />
                      <span>Cover Letter Builder</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 w-64 h-60 rounded-lg text-2xl text-[#475467] dark:text-white dark:bg-[#181d2d] shadow-2xl shadow-indigo-500/35 bg-opacity-20">
                <div className="xc-cta-four__box">
                  <div className="xc-cta-four__icon">
                    <span className="text-blue-btn dark:text-white">2</span>
                  </div>
                </div>
                <div className="pt-16">
                  <p className="hover:text-blue-btn hover:underline">Step2</p>
                  <div className="flex flex-col text-sm mx-10 pt-[60px]">
                    <div className="flex text-sm ">
                      <img className="w-4 h-4 mr-2" src={tick} alt="" />
                      <span>Flashcard Interviews</span>
                    </div>
                    <div className="flex text-sm ">
                      <img className="w-4 h-4 mr-2" src={tick} alt="" />
                      <span>Mock Interviews</span>
                    </div>
                    <div className="flex text-sm ">
                      <img className="w-4 h-4 mr-2" src={tick} alt="" />
                      <span>Download ADDINS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 w-64 h-60 rounded-lg text-2xl text-[#475467] dark:text-white dark:bg-[#181d2d] shadow-2xl shadow-indigo-500/35 bg-opacity-20">
                <div className="xc-cta-four__box">
                  <div className="xc-cta-four__icon">
                    <span className="text-blue-btn dark:text-white">3</span>
                  </div>
                </div>
                <div className="pt-16">
                  <p className="hover:text-blue-btn hover:underline">Step3</p>
                  <div className="flex flex-col text-sm mx-10 pt-[60px]">
                    <div className="flex text-sm ">
                      <img className="w-4 h-4 mr-2" src={tick} alt="" />
                      <span>Live Interview Copilot</span>
                    </div>
                    <div className="flex text-sm ">
                      <img className="w-4 h-4 mr-2" src={tick} alt="" />
                      <span>Live Coding Copilot</span>
                    </div>
                    <div className="flex text-sm ">
                      <img className="w-4 h-4 mr-2" src={tick} alt="" />
                      <span>Interview Summary</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center font-Manrope text-black text-xl sm:text-3xl my-16 mx-3 dark:text-white">
            Every Industy Every Domain Covered
          </div>

          <img className="z-[-2] absolute" src={bgcolor} alt="" />

          {/* Black Blocks Slider */}
          <Slider2 />

          <div className={`pt-12 font-Roboto  flex justify-center z-[-4] mt-2`}>
            <div className="w-72 h-12 font-bold text-3xl bg-[#4e43fa21] rounded-[30px] flex justify-center items-center">
              <img src={hand} alt="" className="h-4 w-4 " />
              <span className="text-lightblue">
                &nbsp;Why&nbsp;
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
                We do
              </span>
            </div>
          </div>

          <div className="flex font-Manrope justify-center items-center text-center text-lg sm:text-3xl">
            <div className=" text-black my-12 dark:text-white">
              <div className="flex justify-center items-center text-center">
                People are loving CoWin.AI &nbsp;{" "}
                <img src={heart} alt="" className="w-[30px] h-[30px] " />
              </div>
            </div>
          </div>

          {/* People Slider */}
          <div className="mb-16">
            <Slider3 />
            <br />
            <Slider4 />
          </div>

          <div className="w-auto font-Manrope h-auto mb-10 bg-gradient-to-l from-orange to-amber-500">
            <div className="text-center text-black sm:text-2xl text-xl py-3 px-4">
              Think Smarter, Not Harder: Your Second Brain Supercharged with
              Super Intelligence!
            </div>
          </div>

          <div className="flex font-Manrope justify-center text-center">
            <div className="pt-12 text-xl sm:text-3xl w-[950px] px-4">
              <span className="text-lightblue">
                &nbsp;Unlock CoWin&nbsp;
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient7 to-gradient8">
              AI Brilliance on A Budget
              </span>
            </div>
          </div>

          <div className={`pt-12 font-Roboto  flex justify-center z-[-5] my-2`}>
            <div className="w-72 h-12 font-bold text-3xl bg-[#4e43fa21] rounded-[30px] flex justify-center items-center">
              <img src={hand} alt="" className="h-4 w-4 " />

              <span className="text-lightblue">
                &nbsp;Interview&nbsp;
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
                Calls
              </span>
            </div>
            <img className="z-[-2] absolute " src={bgcolor} alt="" />
          </div>

          <div className="text-center font-Manrope items-center text-black sm:text-4xl text-lg px-4 flex justify-center my-8 dark:text-white">
            <div>
              <span>
                350k+
              </span>
            </div>
            &nbsp; ACED Interviews 🤖
          </div>

          <span className="flex font-Roboto justify-center items-center text-[#475467] mx-4 dark:text-white sm:text-base text-xs text-center mb-8">
             What Candidate And Coroperate Executives Like About Cowin AI
          </span>

          <div className="text-center font-Manrope text-black text-2xl sm:text-4xl px-4 flex justify-center my-8 dark:text-white">
            Surprise Surprise $
          </div>

          <Pricing />

          <div className="py-8 font-Inter sm:text-4xl text-3xl flex justify-center flex-col sm:flex-row text-center">
            <span className="text-lightblue">Answers&nbsp;& &nbsp;</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient7 to-gradient8">
              Questions Bla Bla !!
            </span>
          </div>
          <Faq />
          <MyFooter />
        </div>
      </div>
    </Fragment>
  );
}

export default LandingPage
