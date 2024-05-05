import React, { Fragment, useState } from 'react'
import Plan from './PricingMockData'

const PricingPlan = () => {
    const [showBillingHistory, setShowBillingHistory] = useState(false);
    const [isCopilotUsedOpen, setIsCopilotUsedOpen] = useState(true);
    const [isCreditOpen, setIsCreditOpen] = useState(false);

    const handleBillingHistoryClick = () => {
        setShowBillingHistory(true);
    };

    const toggleButtons = (data) => {
        if (data === 'Copilot_used') {
            setIsCopilotUsedOpen(true);
            setIsCreditOpen(false);
        } else if (data === 'Credit') {
            setIsCreditOpen(true);
            setIsCopilotUsedOpen(false);
        }
    };

    const renderOffers = (offers) => {
        return offers.split("<br/>").map((offer, index) => (
            <Fragment key={index}>
                {(index === 1 || index === 2 || index === 3 || index === 4 || index === 5)}
                <span dangerouslySetInnerHTML={{ __html: offer }} style={{ display: 'inline-table', padding: '2.4px' }} />
                <br />
            </Fragment>
        ));
    };


    return (
        <Fragment>
            {!showBillingHistory && (
                <div>
                    <div className='flex font-DMSans my-1 gap-32 items-center justify-end mr-8'>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-[#4E43FA] bg-[#dedcff] text-xs font-medium px-2'>S U R P R I S E</p>
                            <p className='text-2xl font-semibold'>Pricing Plans</p>
                            <p className='text-xs text-[#666666]'>Nail interviews with AI—Spend Less, Impress More</p>
                        </div>
                        <div className='flex gap-3 text-white'>
                            <button className='py-[6px] px-2 bg-[#4E43FA] text-xs font-medium rounded-sm'>Manage Subscription</button>
                            <button className='py-[6px] px-2 bg-[#4E43FA] text-xs font-medium rounded-sm' onClick={handleBillingHistoryClick}>Billing history</button>
                        </div>
                    </div>

                    <div
                        className='flex justify-center items-center z-[-6]'
                        id="pricing">
                        <div className="relative grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:align-middle md:items-center">
                            {Plan.map((plan) => (
                                <div key={plan.id} className={plan.id === 4 ? "border border-[#4E43FA] rounded-2xl px-2 mx-2 pt-2" : ""}>
                                    <div className="flex font-Manrope items-center justify-start">
                                        <p className="font-semibold text-sm text-center text-lightblue uppercase">
                                            {plan.type}
                                        </p>{" "}
                                        &nbsp;
                                        <p className="font-semibold uppercase text-sm text-transparent bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
                                            {plan.type1}
                                        </p>
                                        <p className='text-[10px] mx-2 px-1 bg-[#4E43FA] text-white rounded-sm'>
                                            {plan.suggestion}
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <p>
                                            {plan.currency}
                                        </p>
                                        <p className="text-3xl font-bold font-DMSans">
                                            {plan.fee}
                                        </p>
                                        <p className='text-[#666666] font-DMSans'>
                                            {plan.duration}
                                        </p>
                                    </div>
                                    <p className='text-xs font-DMSans font-medium mb-1'>
                                        {plan.model}
                                    </p>

                                    {plan.id === 1 && (
                                        <div className="mt-[20px]">
                                        </div>
                                    )}

                                    <hr className="w-full border-gray-300 font-DMSans" />
                                    <p className='text-center text-[#4E43FA] text-xs font-medium mt-2'>
                                        {plan.title}
                                    </p>
                                    <div className="text-center font-DMSans flex flex-col ">
                                        <p className="text-[10px] text-[#666666] bg-[#e3e3e3]">
                                            {renderOffers(plan.offers)}
                                        </p>
                                        <p className="text-[10px] text-[#666666]">
                                            {renderOffers(plan.offers1)}
                                        </p>
                                        <p className="text-[10px] text-[#666666] bg-[#e3e3e3]">
                                            {renderOffers(plan.offers2)}
                                        </p>
                                        <p className="text-[10px] text-[#666666]">
                                            {renderOffers(plan.offers3)}
                                        </p>
                                        <p className="text-[10px] text-[#666666] bg-[#e3e3e3]">
                                            {renderOffers(plan.offers4)}
                                        </p>
                                        <p className="text-[10px] text-[#666666]">
                                            {renderOffers(plan.offers5)}
                                        </p>
                                        <p className="text-[10px] text-[#666666] bg-[#e3e3e3]">
                                            {renderOffers(plan.offers6)}
                                        </p>
                                        <p className="text-[10px] text-[#666666]">
                                            {renderOffers(plan.offers7)}
                                        </p>
                                        <p className="text-[10px] text-[#666666] bg-[#e3e3e3]">
                                            {renderOffers(plan.offers8)}
                                        </p>
                                        <p className="text-[10px] text-[#666666]">
                                            {renderOffers(plan.offers9)}
                                        </p>
                                        <p className="text-[10px] text-[#666666] bg-[#e3e3e3]">
                                            {renderOffers(plan.offers10)}
                                        </p>
                                        <p className="text-[10px] text-[#666666]">
                                            {renderOffers(plan.offers11)}
                                        </p>
                                        <p className="text-[10px] text-[#666666] bg-[#e3e3e3]">
                                            {renderOffers(plan.offers12)}
                                        </p>
                                    </div>

                                    <hr className="w-full border-gray-300 font-DMSans mb-1" />
                                    {plan.id === 2 && (
                                        <div className="h-9">
                                        </div>
                                    )}
                                    {plan.id === 3 && (
                                        <div className="h-8 mt-2 font-DMSans border border-gray-300 cursor-pointer rounded-lg text-center items-center flex justify-center text-black text-xs font-semibold">
                                            Subscribe
                                        </div>
                                    )}
                                    {plan.id === 4 && (
                                        <div className="h-8 my-2 font-DMSans bg-[#4E43FA] cursor-pointer rounded-lg text-center items-center flex justify-center text-white text-xs font-semibold">
                                            Subscribe
                                        </div>
                                    )}
                                    {plan.id === 5 && (
                                        <div className="h-8 mt-2 font-DMSans border cursor-pointer border-gray-300 rounded-lg text-center items-center flex justify-center text-black text-xs font-semibold">
                                            Subscribe
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        {showBillingHistory && (
            <div>
                <div className="text-xl font-semibold pt-3 pl-4 text-neutral-700 " >
                    <p className='font-Roboto'>Billing History</p>
                    <h2 className="text-[12px] font-Inter font-light pl-3 text-[#475467]">
                    Show your billing and interview history 
                    </h2>
                </div>
                <div className='flex gap-3 ml-4 mt-3 mb-1 font-Roboto'>
                    <button className={`text-xs bg-[#D9D9D9] text-[#6C6C6C] px-3 py-1 rounded-[4px] font-medium ${isCopilotUsedOpen ? 'bg-gradient-to-r from-yellow to-orange text-white' : ''}`} onClick={() => toggleButtons('Copilot_used')}>Copilot Used</button>
                    <button className={`text-xs bg-[#D9D9D9] text-[#6C6C6C] px-3 py-1 rounded-[4px] font-medium ${isCreditOpen ? 'bg-gradient-to-r from-orange to-yellow text-white' : ''}`} onClick={() => toggleButtons('Credit')}>Credit</button>
                </div>
                {isCopilotUsedOpen && (
                    <div className='font-Manrope flex flex-col justify-start mx-8 my-4 rounded-lg h-auto md:shadow-2xl shadow-indigo-500/40 bg-opacity-30'>
                            <div className='flex text-sm font-medium justify-between border-b text-[#475467] border-[#475467] border-opacity-40 py-3 pt-6 px-20'>
                                <p>Credit Time</p>
                                <p>Type</p>
                                <p>Duration</p>
                            </div>
                        <div className="flex flex-col overflow-y-auto max-h-screen">
                    {/*Returned data*/}
                        </div>
                    </div>
                )}
                {isCreditOpen &&(    
                    <div className='font-Manrope flex flex-col justify-start mx-8 my-4 rounded-lg h-auto md:shadow-2xl shadow-indigo-500/40 bg-opacity-30'>
                            <div className='flex text-sm font-medium justify-between border-b text-[#475467] border-[#475467] border-opacity-40 py-3 pt-6 px-20'>
                                <p>Description</p>
                                <p>Transaction ID</p>
                                <p>Credit Amount</p>
                            </div>
                        <div className="flex flex-col overflow-y-auto max-h-screen">
                    {/*Returned data*/}
                        </div>
                    </div>
                )}    
            </div>
        )}
    </Fragment>
)}

export default PricingPlan