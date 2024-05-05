import React, { Fragment, useState } from "react";
import { FaUser } from "react-icons/fa";
import { TbShieldLockFilled } from "react-icons/tb";
import folder from '../../assets/folder.svg';
import profile from '../../assets/profile.svg';
import bluearrow from '../../assets/bluearrow.svg'
import google from '../../assets/google.svg';
import linkedin from '../../assets/linkedin.svg';
import x from '../../assets/x.svg';
import fb from '../../assets/fb.svg';
import dustbin from '../../assets/dustbin.svg'
import pen from '../../assets/pen.svg'
import pin from '../../assets/pin.svg'
import alert from '../../assets/alert.svg'
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const ManageAccount = ({ setIsOpenPopup }) => {
  const [editMode, setEditMode] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [showEmptyDiv, setShowEmptyDiv] = useState(false);
  const [selectedSection, setSelectedSection] = useState("accounts");
  const [password, setPassword] = useState(true);
  const [password1, setPassword1] = useState(true);
  const [password2, setPassword2] = useState(true);
  const [selectedProfilePic, setSelectedProfilePic] = useState(null);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleChangePassword = () => {
    setEditMode(true);
    setShowButtons(false);
    setShowEmptyDiv(true);
  }
  const handleBackClick = () => {
    setEditMode(false);
    setShowButtons(true);
  };
  const handleShowButtonsClick = () => {
    setShowButtons(true);
    setShowEmptyDiv(false);
  };
  const handleChangeButtonClick = () => {
    setShowButtons(false);
    setShowEmptyDiv(true);
  };
  const handleBackCombined = () => {
    handleBackClick();
    handleShowButtonsClick(false);
  };
  const togglePassword = () => {
    setPassword(!password)
  }
  const togglePassword1 = () => {
    setPassword1(!password1)
  }
  const togglePassword2 = () => {
    setPassword2(!password2)
  }
  const handleUpload = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (!file) return; // No file selected

    setSelectedProfilePic(file.name); // Set the selected file name

    // Add functionality for uploading the file here
    // You can use FormData to send the file to the server

    // Example of how to upload using FormData and fetch API
    const formData = new FormData();
    formData.append('profile_pic', file);

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

  const handleCancel = () => {
    setSelectedProfilePic(null); // Reset selected file
  };

  return (
    <Fragment>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center  bg-popup_bg"
        onClick={setIsOpenPopup.bind(this, false)}
      >
        <div
          className={`fixed top-[25px] left-[430px] right-0 flex bg-white rounded-xl h-[500px] w-[660px] z-10 ${editMode ? "border-none" : "border"
            }`}
          onClick={(e) => e.stopPropagation()}
          style={{ animation: "dropTop .3s linear" }}
        >
          <div className="flex flex-col w-44 gap-3 mt-24 mr-8 font-Roboto">
            <button
              className={`w-[162px] h-[31px] bg-indigo-600 text-xs bg-opacity-40 rounded-tr-[50px] rounded-br-[50px] flex items-center text-neutral-500  ${selectedSection === "accounts" ? "bg-indigo-600 text-stone-950" : "bg-white"
                }`}
              onClick={() => setSelectedSection("accounts")}
            >
              <FaUser className="mx-3 text-[15px]" />
              Manage Account
            </button>
            <button
              className={`w-[160px] h-[31px] bg-opacity-40 rounded-tr-[50px] text-xs rounded-br-[50px] flex items-center pb-[1px] text-neutral-500 ${selectedSection === "security" ? "bg-indigo-600 text-stone-950" : "bg-white"
                }`}
              onClick={() => setSelectedSection("security")}
            >
              <TbShieldLockFilled className="mx-3 text-[15px]" />
              Security
            </button>
          </div>


          {selectedSection === "accounts" && (
            <div className="flex flex-col font-Roboto">
              <div className={`pb-3 w-[410px] ${editMode && "border-none"}`}>
                {!editMode && (
                  <div className="flex flex-col items-center mt-4 mb-2 mr-16">
                    <p className="text-xl font-semibold ">Accounts</p>
                    <p className="text-[#6C6C6C] text-xs py-1">
                      Manage your Account Info.
                    </p>
                  </div>
                )}
                {editMode ? (
                  <div className="empty-div">
                    <div className="flex gap-1 mt-3 text-[#6C6C6C]" onClick={handleBackCombined}>
                      <HiOutlineArrowNarrowLeft className="h-6 w-5" />
                      <button onClick={handleShowButtonsClick}>Back</button>
                    </div>
                    <p className="text-lg font-semibold pt-5">Upload Profile</p>
                    <div className="flex flex-col justify-center items-center mr-4">
                      <img src={profile} alt="" className="w-24 h-24 rounded-full bg-slate-200 my-3" />

                      {showButtons && (
                        <div className="flex gap-4 mt-2">
                          <button
                            className="w-[85px] h-[27px] text- flex items-center justify-center gap-1 rounded-[5px] text-neutral-500 bg-zinc-300"
                            onClick={handleChangeButtonClick}
                          >
                            <img src={pen} alt="" className="w-4 h-4" />
                            Change
                          </button>
                          <button
                            className="w-[85px] h-[27px] flex items-center hover:bg-red-600 hover:text-white  justify-center gap-1 rounded-[5px] text-neutral-500 bg-zinc-300"
                          >
                            <RiDeleteBinLine className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      )}

                      {showEmptyDiv && (

                        <div className="w-[406px] h-[160px] bg-[#EDEDED] rounded-lg flex flex-col items-center justify-center" onDrop={handleFileDrop} onDragOver={(e) => e.preventDefault()}>
                          <div className="w-16 h-16 bg-[#D9D9D9] rounded-full flex items-center justify-center">
                            <img src={folder} alt="" className="w-6 h-6" />
                          </div>
                          <div className="flex pt-2 text-xs">
                            {selectedProfilePic ? selectedProfilePic : (
                              <div className="flex">
                              <p className="text-[#0066FF]">Click to choose</p>&nbsp;
                                <p className="text-[#6C6C6C]">or Drag File here</p>
                              </div>
                            )}
                            <input
                              id="file-upload"
                              type="file"
                              onChange={handleUpload}
                              className="absolute opacity-0"
                            />
                          </div>
                          <div>
                          </div>
                          <div className="flex gap-3 mt-3 absolute top-[360px] right-12">
                            <button className="w-[85px] h-[27px] flex items-center justify-center gap-2 rounded-[5px] text-neutral-500 bg-zinc-300" onClick={handleCancel}>Cancel</button>
                            <button className="w-[85px] h-[27px] flex items-center justify-center gap-2 rounded-[5px] text-white bg-gradient-to-r from-orange to-yellow">Upload</button>
                          </div>
                        </div>

                      )}

                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-[15px] font-semibold">Profile</p>
                    <div
                      onClick={setIsOpenPopup.bind(this, false)}
                    ></div>
                    <div className="flex">
                      <img src={profile} alt="" className="w-10 h-10 rounded-full bg-slate-200 ml-6 my-3 mb-4" />
                      <p className="pt-5 pl-3 text-[Grey]">August</p>
                      <button
                        className={`w-[85px] h-[27px] flex items-center justify-center gap-2 absolute right-12 top-[115px] rounded-[5px] text-neutral-500 bg-zinc-300 ${editMode && "border-none"}`}
                        onClick={handleEditClick}
                      >
                        Edit <img src={pen} alt="" className="h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {!editMode && (
                  <div>
                    <div className="flex gap-[145px] border-t border-[#6C6C6C]">
                      <p className="text-[15px] font-semibold py-4 ">Email Address</p>
                      <p className="text-xs py-3 text-[#475467] pt-4">Delete &nbsp;&nbsp;&nbsp; &nbsp;  Edit &nbsp;&nbsp;&nbsp;  Set as primary</p>
                    </div>
                    <div className="flex gap-[80px]">
                      <div className="flex flex-col gap-[13px]">
                        <div className="flex ml-2">
                          <img src={bluearrow} alt="" className="w-4 h-4" />
                          <p className="pl-3 text-xs text-[#475467]">username@gmail.com</p></div>
                        <div className="flex ml-2">
                          <img src={google} alt="" className="w-4 h-4" />
                          <p className="pl-3 text-xs text-[#475467]">username@gmail.com</p></div>
                        <div className="flex ml-2">
                          <img src={linkedin} alt="" className="w-4 h-4" />
                          <p className="pl-3 text-xs text-[#475467]">username@gmail.com</p></div>
                        <div className="flex ml-2">
                          <img src={x} alt="" className="w-4 h-4" />
                          <p className="pl-3 text-xs text-[#475467]">username@gmail.com</p></div>
                        <div className="flex ml-2">
                          <img src={fb} alt="" className="w-4 h-4" />
                          <p className="pl-3 text-xs text-[#475467]">username@gmail.com</p></div>
                      </div>
                      <div className="grid grid-cols-3 gap-6 ml-2">
                        <div className="flex flex-col gap-3 mt-1 items-center">
                          <img src={dustbin} alt="" className="w-4 h-4" />
                          <img src={dustbin} alt="" className="w-4 h-4" />
                          <img src={dustbin} alt="" className="w-4 h-4" />
                          <img src={dustbin} alt="" className="w-4 h-4" />
                          <img src={dustbin} alt="" className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-3 mt-1 items-center pr-4">
                          <img src={pen} alt="" className="w-4 h-4" />
                          <img src={pen} alt="" className="w-4 h-4" />
                          <img src={pen} alt="" className="w-4 h-4" />
                          <img src={pen} alt="" className="w-4 h-4" />
                          <img src={pen} alt="" className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-3 mt-1 items-center">

                          <input type="checkbox" className="peer sr-only opacity-0" id="toggle1" />
                          <label htmlFor="toggle1" className="relative flex h-4 w-8 cursor-pointer items-center rounded-full bg-gray-400 px-1 outline-gray-400 transition-colors before:h-3 before:w-3 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                          </label>

                          <input type="checkbox" className="peer sr-only opacity-0" id="toggle2" />
                          <label htmlFor="toggle2" className="relative flex h-4 w-8 cursor-pointer items-center rounded-full bg-gray-400 px-1 outline-gray-400 transition-colors before:h-3 before:w-3 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                          </label>

                          <input type="checkbox" className="peer sr-only opacity-0" id="toggle3" />
                          <label htmlFor="toggle3" className="relative flex h-4 w-8 cursor-pointer items-center rounded-full bg-gray-400 px-1 outline-gray-400 transition-colors before:h-3 before:w-3 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                          </label>

                          <input type="checkbox" className="peer sr-only opacity-0" id="toggle4" />
                          <label htmlFor="toggle4" className="relative flex h-4 w-8 cursor-pointer items-center rounded-full bg-gray-400 px-1 outline-gray-400 transition-colors before:h-3 before:w-3 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                          </label>

                          <input type="checkbox" className="peer sr-only opacity-0" id="toggle5" />
                          <label htmlFor="toggle5" className="relative flex h-4 w-8 cursor-pointer items-center rounded-full bg-gray-400 px-1 outline-gray-400 transition-colors before:h-3 before:w-3 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                          </label>
                        </div>
                      </div>

                    </div>
                    <div className="border-t border-[#6C6C6C] my-5">
                      <p className="text-[15px] font-semibold my-3">Connect your another account</p>
                      <div className="flex gap-8 ml-8 mt-3">
                        <div className="flex flex-col gap-2 items-center">
                          <img src={google} alt="" className="h-6 w-6" />
                          <img src={pin} alt="" className="absolute pl-7 h-[45px] w-[45px]" />
                          <p className="text-[#6C6C6C] text-xs">Google</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                          <img src={linkedin} alt="" className="h-6 w-6" />
                          <img src={pin} alt="" className="absolute pl-7 h-[45px] w-[45px]" />
                          <p className="text-[#6C6C6C] text-xs">Linkedin</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                          <img src={x} alt="" className="h-6 w-6" />
                          <img src={pin} alt="" className="absolute pl-7 h-[45px] w-[45px]" />
                          <p className="text-[#6C6C6C] text-xs">Twitter</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                          <img src={fb} alt="" className="h-6 w-6" />
                          <img src={pin} alt="" className="absolute pl-7 h-[45px] w-[45px]" />
                          <p className="text-[#6C6C6C] text-xs">Facebook</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}





          {selectedSection === "security" && (
            <div className="flex flex-col font-Roboto">
              <div className={`pb-3 w-[410px] ${editMode && "border-none"}`}>
                {!editMode && (
                  <div className="flex flex-col items-center mt-4 mb-2 mr-16">
                    <p className="text-xl font-semibold ">Security</p>
                    <p className="text-[#6C6C6C] text-xs py-1">
                      Manage your Security Preferences
                    </p>
                  </div>
                )}
                {editMode ? (
                  <div className="empty-div">
                    {showButtons && (
                      <div className="flex flex-col justify-center items-center mr-4 pt-20">
                        <img src={alert} alt="" className="w-24 h-24 rounded-full bg-slate-200 my-3" />
                        <p className="text-[#6C6C6C] text-lg my-3">Are you sure you want to <br /> &nbsp;&nbsp; delete your account?</p>

                        <div className="flex gap-4 mt-2">
                          <button
                            className="w-[85px] h-[27px] flex items-center justify-center gap-1 rounded-[5px] text-neutral-500 bg-zinc-300 "
                            onClick={handleBackCombined}
                          >
                            Cancel
                          </button>
                          <button
                            className="w-[85px] h-[27px] flex items-center justify-center gap-1 rounded-[5px] text-white bg-[#DF0404]"
                          >
                            <RiDeleteBinLine className="w-4 h-4 text-white" />
                            Delete
                          </button>
                        </div>
                      </div>
                    )}

                    {showEmptyDiv && (
                      <div>
                        <div className="flex gap-1 mt-3 text-[#6C6C6C]" onClick={handleBackCombined}>
                          <HiOutlineArrowNarrowLeft className="h-6 w-5" />
                          <button onClick={handleShowButtonsClick}>Back</button>
                        </div>
                        <p className="text-[15px] font-semibold pt-10">Change Password</p>

                        <Formik
                          initialValues={{
                            oldPassword: '',
                            newPassword: '',
                            confirmPassword: '',
                          }}
                          validationSchema={Yup.object({
                            oldPassword: Yup.string().required('Required'),
                            newPassword: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
                            confirmPassword: Yup.string()
                              .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
                              .required('Required'),
                          })}
                          onSubmit={(values, { setSubmitting }) => {
                            // Handle form submission logic here
                            // Remember to call setSubmitting(false) when done
                          }}
                        >
                          {formik => (
                            <form className="flex flex-col gap-4 ml-7 mt-6" onSubmit={formik.handleSubmit}>
                              <div >
                                <p className="pb-1 text-xs font-semibold">Old Password</p>
                                <div className="relative flex">
                                  <input
                                    type={password ? 'password' : "text"}
                                    placeholder="Enter your old password"
                                    name="oldPassword"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.oldPassword}
                                    className="w-72 h-7 text-[11px] focus:ring-0 focus:border-current"
                                  />
                                  <div className="absolute right-[105px] top-[6.5px] text-[#6C6C6C]"> {password ? (<FiEye onClick={togglePassword} />) : (<FiEyeOff onClick={togglePassword} />)}</div>
                                </div>
                                {formik.touched.oldPassword && formik.errors.oldPassword ? (
                                  <div className="text-red-700 text-xs">{formik.errors.oldPassword}</div>
                                ) : null}
                              </div>
                              <div>
                                <p className="pb-1 text-xs font-semibold">New Password</p>
                                <div className="relative flex">
                                  <input
                                    type={password1 ? 'password' : "text"}
                                    placeholder="Must contain 8 or more letters"
                                    name="newPassword"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.newPassword}
                                    className="w-72 h-7 text-[11px] focus:ring-0 focus:border-current "
                                  />
                                  <div className="absolute right-[105px] top-[6.5px] text-[#6C6C6C]"> {password1 ? (<FiEye onClick={togglePassword1} />) : (<FiEyeOff onClick={togglePassword1} />)}</div>
                                </div>
                                {formik.touched.newPassword && formik.errors.newPassword ? (
                                  <div className="text-red-700 text-xs">{formik.errors.newPassword}</div>
                                ) : null}
                              </div>
                              <div>
                                <p className="pb-1 text-xs font-semibold">Confirm Password</p>
                                <div className="relative flex">
                                  <input
                                    type={password2 ? 'password' : "text"}
                                    placeholder="Re-type your new password"
                                    name="confirmPassword"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                    className="w-72 h-7 text-[11px] focus:ring-0 focus:border-current "
                                  />
                                  <div className="absolute right-[105px] top-[6.5px] text-[#6C6C6C]"> {password2 ? (<FiEye onClick={togglePassword2} />) : (<FiEyeOff onClick={togglePassword2} />)}</div>
                                </div>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                  <div className="text-red-700 text-xs">{formik.errors.confirmPassword}</div>
                                ) : null}
                              </div>
                              <button type="submit" className="w-[85px] h-[27px] mt-2  flex items-center justify-center rounded-[5px] text-neutral-500 bg-zinc-300">
                                Continue
                              </button>
                            </form>
                          )}
                        </Formik>
                      </div>
                    )}


                  </div>

                ) : (
                  <div>
                    <div className="flex flex-col font-Roboto">

                      <div className="profile-info">
                        <p className=" text-[15px] font-semibold mt-5">Change Password</p>
                        <div className="flex my-4 ml-4 gap-2">
                          <img src={pen} alt="" className="w-4 h-4" />
                          <p className={`text-[#6C6C6C] text-xs  ${editMode && "border-none"}`} onClick={handleChangePassword}>Change passowrd</p>
                        </div>
                      </div>

                      <div className="border-t border-[#6C6C6C] my-5">
                        <div className="profile-info">
                          <p className=" text-[15px] font-semibold mt-5">Delete Account</p>
                          <div className="flex ml-4 gap-44">
                            <div className="flex my-4 ml-4 gap-2">
                              <img src={dustbin} alt="" className="w-4 h-4" />
                              <p className="text-[#6C6C6C] text-xs">Delete Account</p>
                            </div>
                            <button className={`w-[85px] h-[27px] mt-2  flex items-center justify-center rounded-[5px] text-neutral-500 bg-zinc-300 hover:bg-red-600 hover:text-white  ${editMode && "border-none"}`} onClick={handleEditClick}>
                              <RiDeleteBinLine alt="" className="h-4 mr-1" />Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ManageAccount;
