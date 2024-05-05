import React, { useState } from 'react';
import rs1 from '../../../assets/rs1.png';
import rs2 from '../../../assets/rs2.png';
import rs3 from '../../../assets/rs3.png';
import rs4 from '../../../assets/rs4.png';
import rs5 from '../../../assets/rs5.png';
import rs6 from '../../../assets/rs6.png';
import rs7 from '../../../assets/rs7.png';
import rs8 from '../../../assets/rs8.png';
import rs9 from '../../../assets/rs9.png';
import rs10 from '../../../assets/rs10.png';
import rs11 from '../../../assets/rs11.png';
import rs12 from '../../../assets/rs12.png';
import rs13 from '../../../assets/rs13.png';
import rs14 from '../../../assets/rs14.png';
import rs15 from '../../../assets/rs15.png';
import rs16 from '../../../assets/rs16.png';

const CreateResume = ({ setIsCreateResumeOpen }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClosePopup = () => {
    setIsCreateResumeOpen(false);
  };

  const handleImageClick = (image) => {
        setSelectedImage(image);
    };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-popup_bg" onClick={handleClosePopup}>
            <div className="fixed top-[32px] left-[440px] right-0 flex justify-center bg-[#475467] rounded-xl h-[490px] w-[650px] z-100" onClick={(e) => e.stopPropagation()} style={{ animation: 'dropTop .3s linear' }}>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[325px] mt-2 ml-6 font-Manrope text-white overflow-y-auto" style={{ maxHeight: '440px', height: '440px' }}>
                    <div className="flex items-center flex-col cursor-pointer" >
                        <div><img src="" alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer" >
                        <div><img src='' alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1">
                        <div><img src='' alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" >
                        <div><img src='' alt="" className='h-48 py-1' /></div>
                    </div>

                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(rs1)}>WhiteChocolate
                        <div><img src={rs1} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(rs2)}>BlackTea
                        <div><img src={rs2} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(rs3)}>Cappuccino
                        <div><img src={rs3} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(rs4)}>Espresso
                        <div><img src={rs4} alt="" className='h-48 py-1' /></div>
                    </div>
                    
                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(rs5)}>Amaricano
                        <div><img src={rs5} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(rs6)}>Latte
                        <div><img src={rs6} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(rs7)}>Irish
                        <div><img src={rs7} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(rs8)}>Macchiato
                        <div><img src={rs8} alt="" className='h-48 py-1' /></div>
                    </div>

                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(rs9)}>Mocha
                        <div><img src={rs9} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(rs10)}>IcedCoffee
                        <div><img src={rs10} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(rs11)}>Organic
                        <div><img src={rs11} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(rs12)}>Decaf
                        <div><img src={rs12} alt="" className='h-48 py-1' /></div>
                    </div>

                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(rs13)}>Chai
                        <div><img src={rs13} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(rs15)}>Frappuccino
                        <div><img src={rs15} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(rs14)}>DarkCoffee
                        <div><img src={rs14} alt="" className='h-48 py-1' /></div>
                    </div>
                    
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(rs16)}>Affogato
                        <div><img src={rs16} alt="" className='h-48 py-1' /></div>
                    </div>

                </div>




                <div className="flex flex-col w-[325px]">
                <div className='flex justify-center'>
                <div className="mt-8 mx-3 h-[380px] w-[260px]">
                    {selectedImage && <img src={selectedImage} alt="Selected Image" className="h-full w-full" />}
                </div>
            </div>
            
                    <div className='flex gap-3 justify-end items-end mt-auto mb-6 mr-7 text-white text-xs'>
                        <button className='w-24 h-8 bg-[#008FFF] rounded-sm'>Download PDF</button>
                        <button className='w-24 h-8 bg-[#008FFF] rounded-sm'>Download DOCX</button>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default CreateResume;
