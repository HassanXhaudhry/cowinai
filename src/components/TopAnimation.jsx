import React, { Fragment } from "react";
import star from '../assets/star.svg';

const TopAnimation = () => {
  return (
    <Fragment>
      <div className="z-1 font-Roboto relative items-center sm:relative overflow-hidden bg-gradient-to-r from-lightblue via-yellow to-orange text-center sm:text-xl text-md h-16 hidden lg:flex">
        <div className="animate-scrolling-text ">
          <div className="scroll-text text-black flex items-center justify-center font-semibold">
            Use "Newyear20" for a one-time 20% discount on Yearly and Quarterly
            Deal. &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={star} alt="" className="h-6 w-6 right-0 mb-1" />
          </div>
        </div>

        <div className="animate-scrolling-text animate-scrolling-text2 ">
          <div className="scroll-text text-black flex items-center justify-center font-semibold">
            Use "Newyear20" for a one-time 20% discount on Yearly and Quarterly
            Deal. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={star} alt="" className="h-6 w-6 right-0 mb-1" />&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TopAnimation;
