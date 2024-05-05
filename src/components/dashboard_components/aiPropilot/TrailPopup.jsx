import React from 'react'
import danger from '../../../assets/danger.svg';
import { NavLink } from "react-router-dom";

const TrailPopup = ({setIsTrailOpen}) => {

  const handleClosePopup = () => {
    setIsTrailOpen(false)
  }; 

  return (
    
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-popup_bg" onClick={handleClosePopup}>
      <div className="fixed top-[175px] left-[500px] right-0 flex flex-col bg-white rounded-xl h-[200px] w-[500px] z-110" onClick={(e) => e.stopPropagation()} style={{ animation: 'dropTop .3s linear' }}>
        
        <div className='flex mx-8 my-4'>
          <img src={danger} alt="" />
          <div className='flex flex-col my-3 px-4'>
            <p className='text-sm font-semibold py-2'>Launch Free Trail Session</p>
            <p className='text-xs font-light'>Are you Sure you want to launch your free Trail session? Your
              session will expire after 5 minutes and please subscribe to get
              hour-long sessions. </p>
          </div>
        </div>
        <div className="flex gap-2 font-semibold justify-end mr-9">
          <button type="button" className="w-[100px] h-7 text-[12px] flex items-center justify-center rounded-[5px] text-[#6C6C6C] bg-[#D9D9D9]" onClick={handleClosePopup}>
            Cancel
          </button>
          <NavLink to='/trialsession'>
          <button type="submit" className="w-[100px] h-7 text-[12px] flex items-center justify-center rounded-[5px] text-white bg-gradient-to-r from-yellow to-orange">
          Create
          </button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default TrailPopup
