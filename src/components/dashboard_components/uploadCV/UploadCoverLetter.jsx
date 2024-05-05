import React, { useState } from 'react';

const UploadCoverLetter = ({ setIsUploadClOpen }) => {
    const [selectedCl, setSelectedCl] = useState(null);

  const handleClosePopup = () => {
    setIsUploadClOpen(false);
  };

 const handleUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return; // No file selected

    setSelectedCl(file.name); // Set the selected file name

    // Add functionality for uploading the file here
    // You can use FormData to send the file to the server

    // Example of how to upload using FormData and fetch API
    const formData = new FormData();
    formData.append('coverletter', file);

    fetch('your-upload-endpoint', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      // Handle response
    })
    .catch(error => {
      // Handle error
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-popup_bg" onClick={handleClosePopup}>
      <div className="fixed top-[120px] left-[490px] right-0 flex flex-col bg-white rounded-xl h-[300px] w-[550px] z-100" onClick={(e) => e.stopPropagation()} style={{ animation: 'dropTop .3s linear' }}>
        <div className="flex flex-col font-Manrope">
          <p className="py-1 pt-4 pl-6 text-lg font-semibold">Materials:</p>
          <p className="px-3 pl-6 text-xs text-[#475467]">Upload cover letter, to train your interview AI</p>
          <p className="py-1 pt-4 pl-6 text-lg font-semibold">Cover Letter:</p>
          <p className="px-3 pl-6 text-xs text-[#475467]">“Upload cover letter for better experience and train your interview AI”</p>
        <p className='text-xs font-semibold pt-9 ml-6'>Upload file (pdf, DOCX, and TXT up to 10mb)</p>
        </div>
        <div className="flex items-center justify-center font-Inter">
          <div className="relative flex w-full max-w-[45rem] mt-3 mx-6 border border-solid border-[#F04C18] rounded-md justify-center align-middle items-center py-[2.5px]">
            <div className="relative h-7 w-full flex items-center ">
              <label htmlFor="file-upload" className="custom-file-upload">
                {selectedCl ? selectedCl : 'Choose file'}
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleUpload}
                className="absolute opacity-0"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end px-6 pt-3 mt-2">
          <button type="button" onClick={handleClosePopup} className="w-[85px] h-7 text-[12px] flex items-center justify-center rounded-[5px] text-[#6C6C6C] bg-[#D9D9D9] mr-3">
            Cancel
          </button>
          <button type="submit" onClick={handleUpload} className="w-[85px] h-7 hover:bg-blue-600 hover:text-white text-[12px] flex items-center justify-center rounded-[5px] text-[#6C6C6C] bg-[#D9D9D9]">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCoverLetter;
