import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import cowin_dark from '../../assets/cowin_dark.png'
import heart from '../../assets/heart-broken.png';
import laptop from '../../assets/laptop.jpg';
import material from '../../assets/material.png';
import engineering from '../../assets/engineering.png';
import game from '../../assets/game.png';
import streamline from '../../assets/streamline.png';
import Footer from '../Footer';


const Blogs = () => {


  return (
    <Fragment>
      <div className="flex justify-center">

        <div className="w-1/4 lg:block hidden">
          <div className='flex justify-center items-center'>
              <div className="text-white mt-3" >
                <NavLink to='/'>
                  <img src={cowin_dark} alt="" className="h-9 w-24" />
                </NavLink>
              </div>
          </div>
        </div>


        <div className="w-3/4 h-auto overflow-y-auto flex flex-col justify-center items-center font-Manrope">
            <div className='flex gap-10 text-md justify-center items-center mt-4'>
              <NavLink to='/findmentor'><button className='font-semibold'>Find Your Mentor</button></NavLink>
              <button className='font-semibold'>Interview Q&A</button>
              <button className='font-semibold text-[#4E43FA]'>Blogs</button>
            </div>
            <p className='py-10 text-xl font-semibold'>Mentors Blogs</p>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex gap-4 font-medium'>
                <button className='border border-solid border-gray-200 rounded-md px-6 my-4 py-1 flex gap-2'>
                    <img src={material} alt="" className='h-5 w-4 pt-1'/>All</button>
                <button className='border border-solid border-gray-200 rounded-md px-6 my-4 py-1 flex gap-2'>
                <img src={engineering} alt="" className='h-5 w-4 pt-1'/>Engineering</button>
                <button  className='border border-solid border-gray-200 rounded-md px-6 my-4 py-1 flex gap-2'>
                <img src={game} alt="" className='h-5 w-4 pt-1'/>Data Science</button>
                <button  className='border border-solid border-gray-200 rounded-md px-6 my-4 py-1 flex gap-2'>
                <img src={streamline} alt="" className='h-5 w-4 pt-1'/>Business</button>
            </div>
            
            <div className='flex border border-solid border-gray-200 my-10 rounded-md'>
              <div className='w-[60%] py-6 flex flex-col gap-3 relative'>
                <img src={heart} alt="" className='h-7 w-7 absolute top-0 right-0 mt-1 mr-1' />
                <p className='text-xl font-Manrope font-semibold px-6'>Regression Testing: A Fun and Informative Guide</p>
                <p className='text-xs px-6'>1. Customize Your URL
                  Instead of using your default LinkedIn URL, take a few minutes to personalize it with your name. For example, use firstNameLastName or FirstName_LastName. A customized URL is cleaner and easier for potential connections to find and remember you.more ....</p>
              </div>
              <div className='w-[40%] flex justify-center items-center border-l border-gray-200 mx-1'>
                <img src={laptop} alt="" className='ml-2 w-[250px] h-[190px]' />
              </div>
            </div>
            <div className='flex border border-solid border-gray-200 my-10 rounded-md'>
              <div className='w-[60%] py-6 flex flex-col gap-3 relative'>
                <img src={heart} alt="" className='h-7 w-7 absolute top-0 right-0 mt-1 mr-1' />
                <p className='text-xl font-Manrope font-semibold px-6'>Regression Testing: A Fun and Informative Guide</p>
                <p className='text-xs px-6'>1. Customize Your URL
                  Instead of using your default LinkedIn URL, take a few minutes to personalize it with your name. For example, use firstNameLastName or FirstName_LastName. A customized URL is cleaner and easier for potential connections to find and remember you.more ....</p>
              </div>
              <div className='w-[40%] flex justify-center items-center border-l border-gray-200 mx-1'>
                <img src={laptop} alt="" className='ml-2 w-[250px] h-[190px]' />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/4 relative lg:block hidden h-auto">
          <div className='flex justify-center items-center'>
            <NavLink to='/logintwo'><button className='border border-solid border-[#4E43FA] px-3 py-[6px] my-4 rounded-sm text-white font-semibold text-xs bg-[#4E43FA]'>Dashboard</button></NavLink>
          </div>
        </div>

      </div>
      <Footer/>
    </Fragment>
  )
}

export default Blogs
