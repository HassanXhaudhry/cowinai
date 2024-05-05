import React, { Fragment } from "react";
import mdi_tick from '../assets/mdi_tick.svg'
import { useTheme } from '../contexts/ThemeContext';


const Pricing = () => {

  const { darkMode } = useTheme();

  const Plan = [
    {
      id: 1,
      type: 'Test',
      type1: 'Drive',
      fee: 'Free',
      offers: ' 5 mins Interview Copilot <br/> 1 Resume Generator <br/> 1 Cover Letter Generator <br/> 1:1 Mentorship <br/> Basic AI+LLM',
      button: 'Start For FREE',
    },
    {
      id: 2,
      type: 'Gear',
      type1: 'Up',
      fee: '59$/ mo.',
      offers: ' 60 mins Interview Copilot <br/> Unlimited <br/> Unlimited <br/> 1:1 Mentorship <br/> Advance AI+LLM',
      button: 'Start For FREE',
    },
    {
      id: 3,
      type: 'Take',
      type1: '-Off',
      fee: '49$/ mo.',
      offers: ' 180 mins Interview Copilot <br/> Unlimited <br/> Unlimited <br/> 1:1 Mentorship <br/> Advance AI+LLM',
      button: 'Start For FREE',
    },
    {
        id: 4,
        type: 'God',
        type1: 'Up',
        fee: '39$/ mo.',
        offers: ' Unlimited Interview Copilot <br/> Unlimited <br/> Unlimited <br/> 1:1 Mentorship <br/> Advance AI+LLM',
        button: 'Start For FREE',
      }
  ];

  const renderOffers = (offers) => {
    return offers.split("<br/>").map((offer, index) => (
      <Fragment key={index}>
        {(index === 0 || index === 1 || index === 2 || index === 3 || index === 4) && <img src={mdi_tick} alt="Tick" className="inline-block mr-2" />}
        <span dangerouslySetInnerHTML={{ __html: offer }} style={{ marginBottom: '8px' }} />
        <br />
      </Fragment>
    ));
  };
  
  


  return (
    <Fragment>
      <div
        className={` ${darkMode && "dark"} bg-silver flex justify-center align-middle gap-6 h-auto my-20 shadow-black z-[-6]`}
        id="pricing"
      >
        <div className="relative grid lg:grid-cols-4 md:grid-cols-2 gap-6 sm:grid-cols-2 grid-cols-1 md:align-middle md:items-center">
          {Plan.map((plan) => (
            <div
              key={plan.id}
              className={` bg-white dark:bg-[#181d2d] h-auto md:w-[260px] w-60 transition-all duration-300 rounded-lg hover:-translate-y-6 hover:border-b-4 hover:border-lightblack ${
                plan.id === 3 ? "relative" : ""
              }`}
            >
              {plan.id === 3 && (
                <div className="h-12 font-Manrope bg-blue-btn top-0 rounded-t-md text-center items-center flex justify-center text-white text-lg font-semibold">
                  Most Popular
                </div>
              )}
              <div className="flex font-Manrope justify-center items-center">
                <h1 className="font-semibold text-[26px]  py-6 text-center text-lightblue">
                  {plan.type}
                </h1>{" "}
                &nbsp;
                <h1 className="font-semibold text-[26px]  text-transparent bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
                  {plan.type1}
                </h1>
              </div>
              <h1 className="text-3xl font-bold text-center dark:text-white text-blue-btn">
                {plan.fee}
              </h1>
              <br className="text-black" />
              <div className="flex font-Roboto justify-center items-center">
              <p
                className="text-sm mt-8 text-[#475467] dark:text-white"
              >
                {renderOffers(plan.offers)}
              </p>
            </div>
              <div className="w-40 font-Inter h-10 my-8 py-2 px-2 text-md bg-[#4e43fa21] dark:text-white text-blue-btn cursor-pointer bg-opacity-10 rounded-md cursor-pointer-6 text-center mx-auto flex items-center justify-center">
                {plan.button}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Pricing;

