import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import TrialSession from "./components/dashboard_components/mockInterview/cowin_propilot/TrialSession";
import UserRole from "./components/dashboard_components/mockInterview/cowin_propilot/UserRole";
import HelpAndSupport from "./components/footer_components/resources/HelpAndSupport";
import ContactUs from "./components/footer_components/resources/ContactUs";
import TermsConditions from "./components/footer_components/resources/TermsConditions";
import PrivacyPolicy from "./components/footer_components/resources/PrivacyPolicy";
import EULA from "./components/footer_components/about/EULA";
import Disclaimer from "./components/footer_components/about/Disclaimer";
import CookiePolicy from "./components/footer_components/about/CookiePolicy";
import ExploreMentors from "./components/sub_domain_two/ExploreMentors";
import Blogs from "./components/sub_domain_two/Blogs";
import FindMentor from "./components/sub_domain_two/FindMentor";
import InterviewQA from "./components/sub_domain_two/InterviewQA";
import LoginTwo from "./components/LoginTwo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/trialsession" element={<TrialSession/>}/>
      <Route path="/userrole" element={<UserRole/>}/>
      <Route path="/helpandsupport" element={<HelpAndSupport/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/termsandconditions" element={<TermsConditions/>}/>
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}></Route>
      <Route path="/enduserlisenceagreement" element={<EULA/>}></Route>
      <Route path="/disclaimer" element={<Disclaimer/>}/>
      <Route path="/cookiepolicy" element={<CookiePolicy/>}/>
      <Route path='/explorementors' element={<ExploreMentors/>}/>
      <Route path="/home" element={<ExploreMentors/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/findmentor" element={<FindMentor/>}/>
      <Route path="/interviewqa" element={<InterviewQA/>}/>
      <Route path="logintwo" element={<LoginTwo/>}/>
    </Routes>
  );
};

export default App;
