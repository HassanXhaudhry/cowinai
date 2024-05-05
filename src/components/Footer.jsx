import React from 'react'
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import cowin_light from '../assets/cowin_light.png';
import cowin_dark from '../assets/cowin_dark.png';
import tiktok from '../assets/tiktok.jpg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import discord from '../assets/discord.svg'
import youtube from '../assets/youtube.svg'
import twitter from '../assets/twitter.svg'
import { useTheme } from '../contexts/ThemeContext';


const MyFooter = () => {

  const { darkMode } = useTheme();

  return (
    <Footer
      container
      className={` ${
        darkMode && "dark"
      } bg-[#B9B8CA] rounded-none dark:!bg-[#181d2d]`}
    >
      <div className="w-full h-auto mr-4 py-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 z-[-1] justify-center align-middle ml-3 sm:ml-10">
          <div className="text-[#475467] dark:text-white mb-4 ">
              <div className='ml-1'>
                    {darkMode ? <img src={cowin_dark} alt="" className='h-10 w-30' /> : <img src={cowin_light} alt="" className='h-10 w-30' />}
               </div>
            <p className='font-Roboto my-6 pl-2'>Server status</p>
            <div className="flex gap-3">
              <Link to="/">
                <img src={twitter} alt="" className="h-8 w-8 mb-4" />
              </Link>
              <Link to="/">
                <img src={tiktok} alt="" className="h-[31px] w-[31px] rounded-full" />
              </Link>
              <Link to="/">
                <img src={discord} alt="" className="h-8 w-8" />
              </Link>
              <Link to="/">
                <img src={youtube} alt="" className="h-8 w-8" />
              </Link>
              <Link to="/">
              <img src={facebook} alt="" className="h-[33px] w-[33px] mb-1" />
            </Link>
            <Link to="/">
              <img src={instagram} alt="" className="h-8 w-8" />
            </Link>
            </div>
          </div>

          <div className=" grid grid-cols-2 sm:mt-4 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-48 ml-4 lg:ml-16">
            <div>
              <Footer.Title title="Product" className="text-black" />
              <ul className="text-[#475467] font-Roboto text-sm dark:text-white w-full sm:w-32  text-xs">
                <li className=" hover:text-blue-btn mb-2">
                  <Link to="/">Ace Any Interviews</Link>
                </li>
                <li className=" hover:text-blue-btn mb-2">
                  <Link to="/">Crack Any Meetings</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">Find Your 1:1 Mentor</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">Start a side Hustle</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">Pricing</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">FAQs</Link>
                </li>
              </ul>
            </div>
            <div>
              <Footer.Title title="Resources" className="text-black" />
              <div className="flex"></div>
              <ul className="text-[#475467] font-Roboto text-sm dark:text-white w-full sm:w-32 text-xs">
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">Press Release</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">Tutorials and Blogs</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">Success Stories</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/helpandsupport">Help and Support</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">Interview Q&A</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <Footer.Title title="Download" className="text-black" />

              <ul className="text-[#475467] font-Roboto text-sm dark:text-white w-full sm:w-32 text-xs">
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">Chrome Extension</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">Firefox Entension</Link>
                </li>
                <li className="text-black font-xl py-3 font-bold dark:text-white mb-2">
                  <Link to="/">News Letter</Link>
                </li>
                <li>
                  <input
                    className="bg-input-clr dark:bg-white text-black  w-full sm:w-40 h-8 text-sm py-2.5 rounded-md pl-2 font-normal border-none focus:border-transparent focus:outline-none"
                    placeholder="hi@cowinai.com"
                  />
                </li>
                <li>
                  <button className="w-28 h-8 mt-2 rounded-md bg-input-clr dark:bg-white text-black font-semibold mb-2">
                    Subscribe
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <Footer.Title title="About" className="text-black " />
              <ul className="text-[#475467] font-Roboto text-sm dark:text-white w-full sm:w-32 text-xs">
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">Affliate Partnership</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/enduserlisenceagreement">Enduser Lisence Agreement</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/termsandconditions">Terms and Conditions</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">Legal</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/">Security</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/disclaimer">Disclaimer</Link>
                </li>
                <li className="  hover:text-blue-btn mb-2">
                  <Link to="/cookiepolicy">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer.Divider />

        <div className="w-full font-Roboto flex justify-center items-center text-center dark:text-white">
          <Footer.Copyright
            to="/"
            by="Cowin ai.com All Rights Reserved™"
            year={2024}
          />
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;
