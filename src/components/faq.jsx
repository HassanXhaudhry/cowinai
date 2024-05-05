import React,{ useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Faq=()=> {

  const { darkMode } = useTheme();
  
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  
  const linkedText = "https://www.finalroundai.com/blog/how-to-set-up-interview-copilot";
  const url = "https://www.finalroundai.com/blog/how-to-set-up-interview-copilot";
  
  return (
    <div className="h-auto mb-6 sm:mx-32 " id="faq">
      <div className={` ${darkMode && "dark"} h-auto sm:mx-auto bg-silver p-4 md:p-8 `}>
        {[
          {
            open: open1,
            setOpen: setOpen1,
            question: "What Online Meeting Tools are Compatible?",
            answer:
              "For the best experience with CoWin.AI, we advise using the latest version of Chrome Browser. Our CoWin Copilot seamlessly integrates with popular platforms like Zoom, WebEx, Microsoft Teams, and Google Meet, among others. For a step-by-step guide on setting up the Interview Copilot, please explore our tutorial at:",
          },
          {
            open: open2,
            setOpen: setOpen2,
            question: "Are There Special Discounts Available for Educational Institutions?",
            answer:
              "Yes, we provide substantial discounts of up to 30% for student organizations that participate. For comprehensive details, please reach out to your local Student Ambassadors or drop us an email at hi@cowin.ai",
          },
          {
            open: open3,
            setOpen: setOpen3,
            question: "How Can I Pay for Your Services?",
            answer:
              "Our goal is to make transactions as convenient as possible for you. We accept several payment options, such as major credit cards like Visa, MasterCard, American Express, and Discover, as well as Stripe Payments, Paypals, ACH transfers. Additionally, we also accept cryptocurrency payments (please get in touch with customer support hi@cowin.ai)",
          },
          {
            open: open4,
            setOpen: setOpen4,
            question: "What domains/industries do you support?",
            answer:
              "We provide a comprehensive coverage across multiple domains and industries. We are building domain knowledge bases for Interview Copilot, including Finance, Consulting, Marketing, Sales, Product Management, Software Engineering, and more.",
          },
          {
            open: open5,
            setOpen: setOpen5,
            question: "What Industry Sectors Does Your Service Cover?",
            answer:
              "Our service spans a wide array of domains and industries, ensuring extensive coverage. Currently, we specialized knowledge bases for our CoWin Copilot in various fields such as Finance, Consulting, Marketing, Sales, Product Management, Software Engineering, Coding and Maths.",
          },
          {
            open: open6,
            setOpen: setOpen6,
            question: "Is Mentorship Effective in Achieving Results?",
            answer:
            <span>
            We recommend using Final Round AI on the most updated Chrome Browser. The Interview Copilot works with major online meeting platforms such as Zoom, WebEx, Microsoft Teams, Google Meet and more. Visit {'  '}
            <a href={url} className='underline'>{linkedText} </a>for tutorial.
          </span>,  
          },
          {
            open: open7,
            setOpen: setOpen7,
            question: "How Many Sessions Can I Expect with a Mentor?",
            answer:
            <span>
              We recommend using Final Round AI on the most updated Chrome Browser. The Interview Copilot works with major online meeting platforms such as Zoom, WebEx, Microsoft Teams, Google Meet and more. Visit {' '}
              <a href={url} className='underline'>{linkedText} </a>for tutorial.
            </span>,
          },
        ].map((section, index) => (
          <div
            key={index}
            className=" font-Manrope h-auto before:border-solid mb-6 text-black dark:text-white shadow-2xl shadow-indigo-500/20 bg-opacity-50 rounded-md">
            <div className=" px-4 text-[17px]">
              <div className={` ${section.open ? "text-blue-btn dark:text-white font-semibold" : ""}`}>
                {section.question}
                <div
                className="cursor-pointer absolute ml-6 sm:mr-44 z-20 mr-8 right-0 text-white inline-block  sm:mt-4 mt-0 text-xl rounded-full bg-gradient-to-b shadow-xl shadow-gradient4 bg-opacity-20 from-gradient1 to-gradient8"
                onClick={() => {
                  section.setOpen(!section.open);
                }}
              >
                {section.open ? <IoIosArrowUp /> : <IoIosArrowDown/>}
              </div>
              </div>

              
            </div>
            <div
              className={`px-5 md:px-10 py-4 ${
                section.open ? "text-sm mt-12 md:mt-4 opacity-100 visible transform translate-y-0 transition-transform duration-5000"
                  : "opacity-0 invisible transform -translate-y-5 transition-transform duration-5000 overflow-hidden h-0"
              }`}
            >
              {section.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
