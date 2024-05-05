import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FlashCard = () => {
    
    const [selectedDropdown, setSelectedDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setSelectedDropdown(selectedDropdown === index ? null : index);
    };

    const sections = [
        {
            question: "What Online Meeting Tools are Compatible?",
            answer: "For the best experience with CoWin.AI, we advise using the latest version of Chrome Browser. Our CoWin Copilot seamlessly integrates with popular platforms like Zoom, WebEx, Microsoft Teams, and Google Meet, among others. For a step-by-step guide on setting up the Interview Copilot, please explore our tutorial at:",
        },
        {
            question: "Are There Special Discounts Available for Educational Institutions?",
            answer:
                "Yes, we provide substantial discounts of up to 30% for student organizations that participate. For comprehensive details, please reach out to your local Student Ambassadors or drop us an email at hi@cowin.ai",

        },
        {
            question: "How Can I Pay for Your Services?",
            answer:
                "Our goal is to make transactions as convenient as possible for you. We accept several payment options, such as major credit cards like Visa, MasterCard, American Express, and Discover, as well as Stripe Payments, Paypals, ACH transfers. Additionally, we also accept cryptocurrency payments (please get in touch with customer support hi@cowin.ai)",
        },
        {
            question: "What domains/industries do you support?",
            answer:
                "We provide a comprehensive coverage across multiple domains and industries. We are building domain knowledge bases for Interview Copilot, including Finance, Consulting, Marketing, Sales, Product Management, Software Engineering, and more.",
        },
        {
            question: "What Industry Sectors Does Your Service Cover?",
            answer:
                "Our service spans a wide array of domains and industries, ensuring extensive coverage. Currently, we specialized knowledge bases for our CoWin Copilot in various fields such as Finance, Consulting, Marketing, Sales, Product Management, Software Engineering, Coding and Maths.",
        },
        {
            question: "Is Mentorship Effective in Achieving Results?",
            answer:
                "We recommend using Final Round AI on the most updated Chrome Browser. The Interview Copilot works with major online meeting platforms such as Zoom, WebEx, Microsoft Teams, Google Meet and more. Visit https://www.finalroundai.com/blog/how-to-set-up-interview-copilot for tutorial.",
        },
        {
            question: "How Many Sessions Can I Expect with a Mentor?",
            answer: "Im good"
        },
    ]

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);

    const [isZeroOpen, setIsZeroOpen] = useState(true)
    const [isFirstOpen, setIsFirstOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);
    const [isThirdOpen, setIsThirdOpen] = useState(false);
    const [isForthOpen, setIsForthOpen] = useState(false);

    const toggleZeroDropdown = () => {
        setIsZeroOpen(!isZeroOpen);
        setIsFirstOpen(false);
        setIsSecondOpen(false);
        setIsThirdOpen(false);
        setIsForthOpen(false);
    }
    const toggleFirstDropdown = () => {
        setIsFirstOpen(!isFirstOpen);
        setIsZeroOpen(false);
        setIsSecondOpen(false);
        setIsThirdOpen(false);
        setIsForthOpen(false);
    };
    const toggleSecondDropdown = () => {
        setIsSecondOpen(!isSecondOpen);
        setIsZeroOpen(false);
        setIsFirstOpen(false);
        setIsThirdOpen(false);
        setIsForthOpen(false);
    };
    const toggleThirdDropdown = () => {
        setIsThirdOpen(!isThirdOpen);
        setIsZeroOpen(false);
        setIsFirstOpen(false);
        setIsSecondOpen(false);
        setIsForthOpen(false);
    };
    const toggleForthDropdown = () => {
        setIsForthOpen(!isForthOpen);
        setIsZeroOpen(false);
        setIsFirstOpen(false);
        setIsSecondOpen(false);
        setIsThirdOpen(false);
    };

    return (
        <div className='font-Roboto w-full'>
            <div className="text-xl font-semibold pt-3 pl-4 text-neutral-700">
                AI Interviews FlashCard
                <h2 className="text-[12px] font-Inter font-light pl-3 text-[#475467]">
                    Share your job position and company details with the AI to create intelligent interview plans.
                </h2>
            </div>

                <div className='flex gap-5 mx-5 my-4'>
                    <div className={`w-auto px-3 h-8 text-xs font-semibold items-center flex justify-center cursor-pointer rounded-[4px] ${isZeroOpen ? 'text-white bg-gradient-to-r from-yellow to-orange' : 'text-white bg-[#8e8e8e]'}`} onClick={toggleZeroDropdown}>
                        Classic Questions
                    </div>
                    <div className='relative'>
                        <div className={`w-auto px-3 h-8 text-xs font-semibold items-center flex justify-center cursor-pointer rounded-[4px] ${isFirstOpen ? 'text-white bg-gradient-to-r from-yellow to-orange' : 'text-white bg-[#8e8e8e]'}`} onClick={toggleFirstDropdown}>
                            Technical Interview
                            {isFirstOpen ? <IoMdArrowDropup className='text-lg ml-1' /> : <IoMdArrowDropdown className='text-lg ml-1' />}
                        </div>
                        {isFirstOpen && (
                            <div className='absolute text-[#475467] text-xs top-full left-0 w-full bg-white border border-gray-200 shadow-lg rounded-b-sm'>
                                <div className='p-2 cursor-pointer hover:text-black'>Account and Finance</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Backend Developer</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Data Analyst</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Consulting</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Cyber security</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Frontend Developer</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Full Stack</div>
                                <div className='p-2 cursor-pointer hover:text-black'>IT and Networking</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Quant research</div>
                                <div className='p-2 flex flex-col cursor-pointer hover:text-black'>Design, Software, Mech, Telecom</div>
                            </div>
                        )}
                    </div>
                    <div className='relative'>
                        <div className={`w-auto px-3 h-8 text-xs font-semibold items-center flex justify-center cursor-pointer rounded-[4px] ${isSecondOpen ? 'text-white bg-gradient-to-r from-yellow to-orange' : 'text-white bg-[#8e8e8e]'}`} onClick={toggleSecondDropdown}>
                            Management Interview
                            {isSecondOpen ? <IoMdArrowDropup className='text-lg ml-1' /> : <IoMdArrowDropdown className='text-lg ml-1' />}
                        </div>
                        {isSecondOpen && (
                            <div className='absolute text-[#475467] text-xs top-full left-0 w-full bg-white border border-gray-200 shadow-lg rounded-b-sm'>
                                <div className='p-2 cursor-pointer hover:text-black'>Sales and Marketing</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Quality Assurance</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Project Management</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Program Management</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Business Analyst</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Product Management</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Public Relation PR</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Human Reources</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Operations</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Customer Success</div>
                            </div>
                        )}
                    </div>
                    <div className='relative'>
                        <div className={`w-auto px-3 h-8 text-xs font-semibold items-center flex justify-center cursor-pointer rounded-[4px] ${isThirdOpen ? 'text-white bg-gradient-to-r from-yellow to-orange' : 'text-white bg-[#8e8e8e]'}`} onClick={toggleThirdDropdown}>
                            HR Interview
                            {isThirdOpen ? <IoMdArrowDropup className='text-lg ml-1' /> : <IoMdArrowDropdown className='text-lg ml-1' />}
                        </div>
                        {isThirdOpen && (
                            <div className='absolute text-[#475467] text-xs top-full left-0 w-full bg-white border border-gray-200 shadow-lg rounded-b-sm'>
                                <div className='p-2 cursor-pointer hover:text-black'>Analytical</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Behaviorial</div>
                            </div>
                        )}
                    </div>
                    <div className='relative'>
                        <div className={`w-24 px-3 h-8 text-xs font-semibold items-center flex justify-center cursor-pointer rounded-[4px] ${isForthOpen ? 'text-white bg-gradient-to-r from-yellow to-orange' : 'text-white bg-[#8e8e8e]'}`} onClick={toggleForthDropdown}>
                            Others
                            {isForthOpen ? <IoMdArrowDropup className='text-lg ml-1' /> : <IoMdArrowDropdown className='text-lg ml-1' />}
                        </div>
                        {isForthOpen && (
                            <div className='absolute text-[#475467] text-xs top-full left-0 w-full bg-white border border-gray-200 shadow-lg rounded-b-sm'>
                                <div className='p-2 cursor-pointer hover:text-black'>Administrative</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Arts and Media</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Beauty and Fashion</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Beauty and Fashion</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Design and Creative</div>
                                <div className='p-2 cursor-pointer hover:text-black'>Legal Service</div>
                            </div>
                        )}
                    </div>
                  </div>

            <div className='cursor-pointer z-[-5]'>
                <div className="mb-2 sm:mx-8 text-[#475467]">
                    <div className="sm:mx-auto bg-silver p-4 md:p-3 overflow-y-auto max-h-[340px]">
                        {sections.map((section, index) => (
                            <div key={index} className="font-Manrope h-auto before:border-solid mb-6 shadow-xl shadow-indigo-500/20 bg-opacity-50 rounded-md">
                              
                                <div onClick={() => toggleDropdown(index)} className="flex justify-between items-center px-4 text-[14px] font-semibold py-1 pb-2">
                                    {section.question}
                                    <div className="cursor-pointer text-white inline-block text-lg rounded-full bg-gradient-to-b shadow-xl shadow-gradient4 bg-opacity-20 from-gradient1 to-gradient8">
                                        {selectedDropdown === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                                </div>
                                {selectedDropdown === index && (
                                    <div className='px-5 pr-12 pb-2 text-xs mt-10 md:mt-4 z-[-6] opacity-100 visible'>
                                        {section.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FlashCard
