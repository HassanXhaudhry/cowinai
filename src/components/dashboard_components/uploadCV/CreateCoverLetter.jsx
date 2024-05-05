import React, { useState } from 'react';
import cl1 from '../../../assets/cl1.png';
import cl2 from '../../../assets/cl2.png';
import cl3 from '../../../assets/cl3.png';
import cl4 from '../../../assets/cl4.png';
import cl5 from '../../../assets/cl5.png';
import cl6 from '../../../assets/cl6.png';
import cl7 from '../../../assets/cl7.png';
import cl8 from '../../../assets/cl8.png';
import cl9 from '../../../assets/cl9.png';
import cl10 from '../../../assets/cl10.png';
import cl11 from '../../../assets/cl11.png';
import cl12 from '../../../assets/cl12.png';
import cl13 from '../../../assets/cl13.png';
import cl14 from '../../../assets/cl14.png';
import cl15 from '../../../assets/cl15.png';
import cl16 from '../../../assets/cl16.png';

const CreateCoverLetter = ({ setIsCreateClOpen }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClosePopup = () => {
        setIsCreateClOpen(false);
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

                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(cl1)}>WhiteChocolate
                        <div><img src={cl1} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(cl2)}>BlackTea
                        <div><img src={cl2} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(cl3)}>Cappuccino
                        <div><img src={cl3} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(cl4)}>Espresso
                        <div><img src={cl4} alt="" className='h-48 py-1' /></div>
                    </div>
                    {/* Repeat your items as needed */}
                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(cl5)}>Amaricano
                        <div><img src={cl5} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(cl6)}>Irish
                        <div><img src={cl6} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(cl7)}>Latte
                        <div><img src={cl7} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(cl8)}>Macchiato
                        <div><img src={cl8} alt="" className='h-48 py-1' /></div>
                    </div>

                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(cl9)}>Mocha
                        <div><img src={cl9} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(cl10)}>Organic
                        <div><img src={cl10} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(cl11)}>IcedCoffee
                        <div><img src={cl11} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(cl12)}>Decaf
                        <div><img src={cl12} alt="" className='h-48 py-1' /></div>
                    </div>

                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(cl13)}>Chai
                        <div><img src={cl13} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer" onClick={() => handleImageClick(cl14)}>DarkCoffee
                        <div><img src={cl14} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(cl15)}>Frappuccino
                        <div><img src={cl15} alt="" className='h-48 py-1' /></div>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer pt-1" onClick={() => handleImageClick(cl16)}>Affogato
                        <div><img src={cl16} alt="" className='h-48 py-1' /></div>
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

export default CreateCoverLetter;
