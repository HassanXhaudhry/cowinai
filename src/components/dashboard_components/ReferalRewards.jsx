import React, {useState} from 'react'
import money from '../../assets/money_bag.svg'

const ReferalRewards = ({setIsRewardsOpen}) => {
    const [selectedCl, setSelectedCl] = useState(null);

  const handleClosePopup = () => {
    setIsRewardsOpen(false)
  }; 

  return (
    
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-popup_bg z-50 " onClick={handleClosePopup}>
      <div className="fixed top-[168px] left-[525px] right-0 flex flex-col bg-white rounded-xl h-[190px] w-[500px] z-100" onClick={(e) => e.stopPropagation()} style={{ animation: 'dropTop .3s linear' }}>
        
        <div className='flex mx-6 my-4 flex-col'>
          <img src='' alt="" />
          <div className='flex flex-col'>
            <p className='text-md font-semibold py-2'>Copy this link on to your friends.</p>
            <p className='text-xs font-normal text-[#475467]'>If a friend signs up for Final Round AI through your referral, both you 
            and your friend will receive 50 credits each. Together, <br />
            <div className='flex'>
            <p className='text-sm underline underline-offset-1 text-[#475467]'>these credits have a total value of $100!</p>
            <img src={money} alt="" className='w-5 h-5'/>
            </div>
            </p>
          </div>
          <div className="flex items-center justify-center font-Inter mb-3">
          <div className="relative flex w-full max-w-[45rem] my-5 border border-solid border-[#F04C18] rounded-md justify-center align-middle items-center py-[2.5px]">
            <div className="relative h-7 w-full flex items-center">
              <label htmlFor="file-upload" className="custom-file-upload">
                {selectedCl ? selectedCl : 'Copy'}
              </label>
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default ReferalRewards;
