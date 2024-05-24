import React, { Fragment, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import cowin_dark from '../assets/cowin_dark.png';
import setting from '../assets/setting.svg';
import signout from '../assets/signout.svg';
import key from '../assets/key.svg';
import usersquare from '../assets/user-square.svg';
import square from '../assets/square.svg';
import wallet from '../assets/wallet.svg';
import chat from '../assets/chat.svg';
import question from '../assets/question.svg';
import gift from '../assets/gift.png';
import ManageAccount from "../components/dashboard_components/ManageAccount";
import CreateGoals from "../components/dashboard_components/setGoals/CreateGoals";
import ResumeCoverLetter from "../components/dashboard_components/uploadCV/ResumeCoverLetter";
import FlashCard from "../components/dashboard_components/aiInterview/FlashCard";
import { NavLink } from "react-router-dom";
import MockInterview from "../components/dashboard_components/mockInterview/MockInterview";
import AiPropilot from "../components/dashboard_components/aiPropilot/AiPropilot";
import ReferalRewards from "../components/dashboard_components/ReferalRewards";
import PricingPlan from "../components/dashboard_components/PricingPlan";
import { useDispatch, useSelector } from "react-redux";
import { setUser,setToken,setUserNull } from '../reducers/user.reducer';
import { useNavigate } from "react-router";
import { apiWithToken } from "../api/index";
import { API_URLS } from "../utils/API_URLS";


const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allGoals = useSelector(state => state.goals.users);

  // const user = useSelector((state) => state.user.token);
  // useEffect(()=>{
  //   if(!user){
  //     navigate("/login");
  //   }else{
  //     getGoalFunc();
  //   }
  // },[])

  // const getGoalFunc=()=>{
  //   apiWithToken(user).get(API_URLS.user.getGoals).then(res=>{
  //     console.log(JSON.stringify(res))
  //   })
  // }

  const [showModel, setShowModel]=useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);
  const [isGoalsOpen, setIsGoalsOpen] = useState(false);
  const [isUploadCvOpen, setIsUploadCvOpen] = useState(false);
  const [isAiInterviewsOpen, setIsAiInterviewsOpen] = useState(false);
  const [isMockInterviewsOpen, setIsMockInterviewsOpen] = useState(false);
  const [isAiPropilotOpen, setIsAiPropilotOpen] = useState(false);
  
  const [isRewardsOpen, setIsRewardsOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

 

  const handleDashBoard = () => {
    setIsDashboardOpen(true);
    setIsGoalsOpen(false)
    setIsUploadCvOpen(false);
    setIsAiInterviewsOpen(false);
    setIsMockInterviewsOpen(false);
    setIsAiPropilotOpen(false);
    setIsPricingOpen(false);
  };
  const handleSetGoals = () => {
    setIsDashboardOpen(false);
    setIsGoalsOpen(true)
    setIsUploadCvOpen(false);
    setIsAiInterviewsOpen(false);
    setIsMockInterviewsOpen(false);
    setIsAiPropilotOpen(false);
    setIsPricingOpen(false);
  };
  const handleUploadCv = () => {
    setIsDashboardOpen(false);
    setIsGoalsOpen(false)
    setIsUploadCvOpen(true);
    setIsAiInterviewsOpen(false);
    setIsMockInterviewsOpen(false);
    setIsAiPropilotOpen(false);
    setIsPricingOpen(false);
  };
  const handleAiInterviews = () => {
    setIsDashboardOpen(false);
    setIsGoalsOpen(false)
    setIsUploadCvOpen(false);
    setIsAiInterviewsOpen(true);
    setIsMockInterviewsOpen(false);
    setIsAiPropilotOpen(false);
    setIsPricingOpen(false);
  };
  const handleMockInterviews = () => {
    setIsDashboardOpen(false);
    setIsGoalsOpen(false)
    setIsUploadCvOpen(false);
    setIsAiInterviewsOpen(false);
    setIsMockInterviewsOpen(true);
    setIsAiPropilotOpen(false);
    setIsPricingOpen(false);
  };
  const handleAiPropilot = () => {
    setIsDashboardOpen(false);
    setIsGoalsOpen(false)
    setIsUploadCvOpen(false);
    setIsAiInterviewsOpen(false);
    setIsMockInterviewsOpen(false);
    setIsAiPropilotOpen(true);
    setIsPricingOpen(false);
  };
   
  const handlePricingPlan = () =>{
    setIsDashboardOpen(false);
    setIsGoalsOpen(false)
    setIsUploadCvOpen(false);
    setIsAiInterviewsOpen(false);
    setIsMockInterviewsOpen(false);
    setIsAiPropilotOpen(false);
    setIsPricingOpen(true);
  }
  const handleTogglePopup = () => {
    setShowModel(!showModel);
  };
  const handleSignOut=()=>{
    debugger
    dispatch(setUserNull(""));
    navigate("/");
  }
  return (
    <Fragment>
      <div className="flex h-screen">

        <div className="w-[280px] bg-neutral-700 flex flex-col items-center h-screen">
          <div className="text-white my-3" >
          <NavLink to='/'>
            <img src={cowin_dark} alt="" className="h-10 w-26" />
            </NavLink>
          </div>
          <br />
          <div className="flex items-center gap-2 flex-col mx-3 text-white font-Poppins text-xs cursor-pointer">
            <div
              className={`flex items-center w-[220px] h-[40px] rounded-lg ${
                isDashboardOpen ? "bg-gradient-to-r from-gradient7 to-gradient8" : ""
              }`}
              onClick={handleDashBoard}
            >
              <img src={key} alt="" className="h-6 w-6 ml-4" />
              <div className="ml-2">Dashboard</div>
            </div>

            <div
              className={`flex items-center w-[220px] h-[40px] rounded-lg ${
                isGoalsOpen ? "bg-gradient-to-r from-gradient7 to-gradient8" : ""
              }`}
              onClick={handleSetGoals}
            >
              <img src={square} alt="" className="h-6 w-6 ml-4" />
              <div className="ml-2" onClick={() => setIsGoalsOpen(true)}>Set Goals ({allGoals.length})</div>
            </div>

            <div
              className={`flex items-center w-[220px] h-[40px] rounded-lg ${
                isUploadCvOpen ? "bg-gradient-to-r from-gradient7 to-gradient8" : ""
              }`}
              onClick={handleUploadCv}
            >
              <img src={usersquare} alt="" className="h-6 w-6 ml-4" />
              <div className="ml-2" onClick={()=>isUploadCvOpen(true)}>Upload CV</div>
            </div>

            <div
              className={`flex items-center w-[220px] h-[40px] rounded-lg ${
                isAiInterviewsOpen ? "bg-gradient-to-r from-gradient7 to-gradient8" : ""
              }`}
              onClick={handleAiInterviews}
            >
              <img src={wallet} alt="" className="h-6 w-6 ml-4" />
              <div className="ml-2" onClick={() => setIsAiInterviewsOpen(true)}>AI Interviews FlashCard</div>
            </div>

            <div
              className={`flex items-center w-[220px] h-[40px] rounded-lg ${
                isMockInterviewsOpen ? "bg-gradient-to-r from-gradient7 to-gradient8" : ""
              }`}
              onClick={handleMockInterviews}
            >
              <img src={chat} alt="" className="h-6 w-6 ml-4" />
              <div className="ml-2" onClick={() => setIsMockInterviewsOpen(true)}>Free Mock Interview</div>
            </div>

            <div
              className={`flex items-center w-[220px] h-[40px] rounded-lg ${
                isAiPropilotOpen ? "bg-gradient-to-r from-gradient7 to-gradient8" : ""
              }`}
              onClick={handleAiPropilot}
            >
              <img src={question} alt="" className="h-6 w-6 ml-4" />
              <div className="ml-2" onClick={() => setIsAiPropilotOpen(true)}>AI Interview Propilot</div>
            </div>

          </div>

          <div className="flex mt-1" onClick={()=>setIsRewardsOpen(true)}>
            <img src={gift} alt="" className="h-4 w-4 mr-2 my-[10px]" />
            <div className=" text-white text-sm cursor-pointer my-2 hover:text-gradient7">
              Refferal Rewards
            </div>
          </div>
          {isRewardsOpen && <ReferalRewards setIsRewardsOpen={setIsRewardsOpen}/>}

          <div className="flex flex-col w-[195px] h-[90px] rounded-lg bg-gradient-to-r mt-2 from-gradient7 to-gradient8 mb-3">
            <div className="ml-2 text-white text-xs text-center pt-2 pr-2">
              Upgrade to PRO to get access all Features!
            </div>
            <div className="pt-2 font-Roboto flex justify-center z-2" onClick={handlePricingPlan}>
              <div className="w-40 h-7 bg-white rounded-[30px] flex justify-center items-center cursor-pointer" onClick={() => setIsPricingOpen(true)}>
                <span className="text-lightblue font-bold text-md">
                  &nbsp;Get&nbsp;
                </span>
                <span className="font-bold text-md text-transparent  bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
                  Pro Now!
                </span>
              </div>
            </div>
          </div>
        </div>

    <div className="flex flex-col w-full">

    <div className="flex justify-between">
      <div className="py-4 pl-8 text-black text-[12px] font-Poppins font-medium">
          Good evening 🎑 Let's nail this interview with excellent preparation. 🎯
      </div>
      <div>
        <FaUserCircle
            onClick={handleTogglePopup}
            className="h-7 w-7 text-user-color mt-3 mr-6 cursor-pointer"
          />
          {showModel && (
            <div
              className="absolute z-10 w-[330px] h-[187px] border border-gray-300/100 right-10 top-10 rounded-lg bg-white"
              style={{ animation: "dropTop1 .3s linear"}}>
          <div className="text-center pt-2 text-md font-Roboto">
            Choose an Account
          </div>
          <div className="flex flex-col mt-2 mx-10 text-sm cursor-pointer">
            <div className="my-2 flex">
            <FaUserCircle src="" alt="" className="w-5 h-5 rounded-full bg-slate-600 mt-2 mr-3"/>
              <div className="text-sm">
              UI August
              <p className="text-xs">usernam@gmail.com</p>
              </div>
            </div>
            <hr className="w-full border-gray-300"/>
            <div className="flex my-3">
              <div className="flex w-52 my-[3px]" onClick={setIsOpenPopup.bind(this, true)}>
              <img src={setting} alt="" className="h-4 w-4 mr-3"/>
              <p className="text-xs" >Manage Account</p></div>
            </div>
            
            {isOpenPopup && <ManageAccount setIsOpenPopup={setIsOpenPopup}  />} 
            <hr className="w-full border-gray-300"/>

            <div className="flex my-3 mt-[15px]" onClick={handleSignOut}>
              <img src={signout} alt="" className="h-4 w-4 mr-3" />
              <p className="text-xs">Sign out</p>
            </div>
          </div>
        </div>)}
      </div>
    </div>

    <hr className="w-full border-gray-300"/>

        {isGoalsOpen && <CreateGoals setIsGoalsOpen={setIsGoalsOpen}/>}
        {isUploadCvOpen && <ResumeCoverLetter setIsUploadCvOpen={setIsUploadCvOpen}/>}
        {isAiInterviewsOpen && <FlashCard setIsAiInterviewsOpen={setIsAiInterviewsOpen}/>}
        {isMockInterviewsOpen && <MockInterview setIsMockInterviewsOpen={setIsMockInterviewsOpen}/>}
        {isAiPropilotOpen && <AiPropilot setIsAiPropilotOpen={setIsAiPropilotOpen}/>}
        {isPricingOpen && <PricingPlan setIsPricingOpen={setIsPricingOpen}/>}
        {(!isGoalsOpen && !isUploadCvOpen && !isAiInterviewsOpen && !isMockInterviewsOpen && !isAiPropilotOpen && !isPricingOpen &&(
          
          <div className="font-Manrope h-screen ">
            <div className="text-xl pt-2 pl-4 text-neutral-700 font-semibold font-Roboto">
              DashBoard
              <h2 className="text-[12px] font-Inter font-light pl-3">
                Last 30 days
              </h2>
            </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 my-3 text-center ml-[110px]">
              <div className="w-52 h-40 rounded-lg text-2xl text-[#475467] shadow-lg shadow-indigo-500/40 bg-opacity-30">
                <div className="pt-4">
                  <p className="text-sm mx-6 text-slate-600 font-semibold">
                    Total Aced Interviews
                  </p>
                  <div className="flex text-sm mx-12 pt-16"></div>
                </div>
              </div>

              <div className="w-52 h-40 rounded-lg text-2xl text-[#475467] shadow-lg shadow-indigo-500/40 bg-opacity-30">
                <div className="pt-4">
                  <p className="text-sm mx-6 text-slate-600 font-semibold">
                    Total Goals Set
                  </p>
                  <div className="flex text-sm mx-12 pt-16"></div>
                </div>
              </div>

              <div className="w-52 h-40 rounded-lg text-2xl text-[#475467] shadow-lg shadow-indigo-500/40 bg-opacity-30">
                <div className="pt-4">
                  <p className="text-sm mx-4 text-slate-600 font-semibold">
                    Total Resume Generated
                  </p>
                  <div className="flex text-sm mx-12 pt-16"></div>
                </div>
              </div>
              </div>
        
          <p className="pl-5 text-neutral-700 text-sm font-semibold font-Manrope">
            How To Get Started
          </p>

        <div className="flex flex-col items-center">
          <div className="flex font-Manrope">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-2 bg-white ">
              <div className="flex items-center justify-start w-72 h-24 rounded-lg text-2xl text-[#475467] shadow-2xl shadow-indigo-500/40 bg-opacity-30">
                <div className="p-3">
                  <p className="text-sm font-semibold pt-3 text-slate-600">
                    Step 1: Set Goals
                  </p>
                  <p className="text-xs font-light py-1">
                  Arm the AI with a treasure map of job must haves so it can embark on an epic quest to uncover the Holy Grail of interview goals. 🗺️🚀🏰
                  </p>
                </div>
              </div>

              <div className="flex items-center w-72 h-24 rounded-lg text-2xl text-[#475467] shadow-2xl shadow-indigo-500/40 bg-opacity-30">
                <div className="p-3">
                  <p className="text-sm pt-3 font-semibold text-slate-600">
                    Step 2: Upload CV
                  </p>
                  <div className="text-xs font-light py-1">
                  Time to send in your resume , cover letters and any other secret dossiers you've got hiding up your sleeve! 📁🔍
                  </div>
                </div>
              </div>

              <div className="flex items-center w-72 h-24 rounded-lg text-2xl text-[#475467] shadow-2xl shadow-indigo-500/40 bg-opacity-30">
                <div className="p-3">
                  <p className="text-sm pt-3 font-semibold text-slate-600">
                    Step 3: AI Interview Flashcard
                  </p>
                  <div className="text-xs font-light py-1">
                  Your personalized wingman, armed with tailor-made flashcards to help soar through any Q&A turbulence! ✈️🃏👍
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex font-Manrope">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-3 bg-white">
              <div className="flex w-72 h-24 items-center rounded-lg text-2xl text-[#475467] shadow-2xl shadow-indigo-500/40 bg-opacity-30">
                <div className="p-3">
                  <p className="text-sm pt-1 font-semibold text-slate-600">
                    Step 4: AI Interview Propilot
                  </p>
                  <p className="text-xs font-light py-1">
                  Offering customized, real-time backup just when you need it, like a ... superhero swooping in on the big day! 🦸‍♂️⏰🚀
                  </p>
                </div>
              </div>

              <div className="flex items-center w-72 h-24 rounded-lg text-2xl text-[#475467] shadow-2xl shadow-indigo-500/40 bg-opacity-30">
                <div className="p-3">
                  <p className="text-sm pt-1 font-semibold text-slate-600">
                    Step 5: AI Coding & Maths
                  </p>
                  <div className="text-xs font-light py-1">
                  CoWin is like having a math wizard and coding guru in your corner dishing out custom code solutions, walkthroughs, test cases, and solving math puzzles faster than you can say "Eureka!"
                  </div>
                </div>
              </div>

              <div className="flex items-center w-72 h-24 rounded-lg text-2xl text-[#475467] shadow-2xl shadow-indigo-500/40 bg-opacity-30 border-2 border-gradient7 to-gradient8">
                <div className="pl-3">
                  <p className="text-md pt-1 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gradient7 to-gradient8">
                    Subscribe
                  </p>
                  <div className="text-xs font-medium pt-y pr-2">
                    Embark on a Digital Exploration of CoWIN's full list of
                    Features
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          </div>
        ))}
        </div>

      </div>
    </Fragment>
  );
};
export default Dashboard;
