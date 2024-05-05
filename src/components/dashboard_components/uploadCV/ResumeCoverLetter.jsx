import React, { useState } from 'react';
import UploadResume from './UploadResume';
import UploadCoverLetter from './UploadCoverLetter';
import CreateResume from './CreateResume';
import CreateCoverLetter from './CreateCoverLetter';

const ResumeCoverLetter = () => {
    const [isUploadResumeOpen, setIsUploadResumeOpen] = useState(false);
    const [isUploadClOpen, setIsUploadClOpen] = useState(false);
    const [isCreateResumeOpen, setIsCreateResumeOpen] = useState(false);
    const [isCreateClOpen, setIsCreateClOpen] = useState(false);
    



    return (
        <div className='font-Roboto' >
            <div className="text-xl font-semibold pt-3 pl-4 text-neutral-700 " >
                Resume and Cover Letter
                <h2 className="text-[12px] font-Inter font-light pl-3 text-[#475467]">
                    Upload your resume and cover letter to train your AI Interview
                </h2>
            </div>
            <div className='flex justify-between mt-6 mx-9'>
                <p className='flex w-5'>
                    CV&nbsp;/&nbsp;Resume:
                </p>
                <div className='flex gap-3'>
                    <button
                        className="w-24 h-7 text-xs cursor-pointer rounded-[5px] text-white bg-gradient-to-r from-orange to-yellow"
                        onClick={() => setIsUploadResumeOpen(true)}
                    >
                        Upload
                    </button>
                    <button
                        className="w-24 h-7 text-xs cursor-pointer rounded-[5px] text-white bg-gradient-to-r from-orange to-yellow"
                        onClick={() => setIsCreateResumeOpen(true)}
                    >
                        Create
                    </button>
                </div>
            </div>
            {isUploadResumeOpen && <UploadResume setIsUploadResumeOpen={setIsUploadResumeOpen} />}
            {isCreateResumeOpen && <CreateResume setIsCreateResumeOpen={setIsCreateResumeOpen} />}
            
            <div className='font-Manrope flex flex-col justify-start mx-8 my-4 rounded-lg h-auto md:shadow-2xl shadow-indigo-500/40 bg-opacity-30'>
                <div className='flex text-sm gap-16 border-b text-[#475467] border-[#475467] border-opacity-40 py-3 pt-6 px-4'>
                    <p>Set as Primary</p>
                    <p>File Name</p>
                    <p>Upload Date</p>
                </div>
                <div className="flex flex-col overflow-y-auto max-h-screen">

                </div>
            </div>




            <div className='flex justify-between mt-16 mx-9'>
                <p className='flex w-5'>
                    Cover&nbsp;Letter:
                </p>
                <div className='flex gap-3'>
                    <button
                        className="w-24 h-7 text-xs cursor-pointer rounded-[5px] text-white bg-gradient-to-r from-orange to-yellow"
                        onClick={() => setIsUploadClOpen(true)}
                    >
                        Upload
                    </button>
                    <button
                        className="w-24 h-7 text-xs cursor-pointer rounded-[5px] text-white bg-gradient-to-r from-orange to-yellow"
                        onClick={() => setIsCreateClOpen(true)}
                    >
                        Create
                    </button>
                </div>
            </div>
            {isUploadClOpen && <UploadCoverLetter setIsUploadClOpen={setIsUploadClOpen} />}
            {isCreateClOpen && <CreateCoverLetter setIsCreateClOpen={setIsCreateClOpen} />}
            
            <div className='font-Manrope flex flex-col justify-start mx-8 my-4 rounded-lg h-auto md:shadow-2xl shadow-indigo-500/40 bg-opacity-30'>
                <div className='flex text-sm gap-16 border-b text-[#475467] border-[#475467] border-opacity-40 py-3 pt-6 px-4'>
                    <p>Set as Primary</p>
                    <p>File Name</p>
                    <p>Upload Date</p>
                </div>
                <div className="flex flex-col overflow-y-auto max-h-screen">

                </div>
            </div>
        </div>
    );
};

export default ResumeCoverLetter;