import React, { Fragment, useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { apiWithToken } from "../../../api";
import { API_URLS } from "../../../utils/API_URLS";
import { setToken } from '../../../reducers/user.reducer';

const EditTodo = ({ editTodo, task, setIsPopupOpen }) => {

  const user = useSelector((state) => state.user.token);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await apiWithToken(user).patch(API_URLS.user.editGoals, {
        position: values.position,
        companyName: values.companyName,
        location: values.location,
        programmingLanguage: values.programmingLanguage
      });
      if (response.status === 200) {
        const editedData = {
          id: task.id,
          position: values.position,
          companyName: values.companyName,
          location: values.location,
          programmingLanguage: values.programmingLanguage
        };
        console.log(editedData)
        setIsPopupOpen(false);
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-popup_bg" onClick={() => setIsPopupOpen(false)}>
          <div className="fixed top-[80px] left-[600px] right-0 flex bg-white rounded-xl h-[400px] w-[360px] z-100" onClick={(e) => e.stopPropagation()} style={{ animation: 'dropTop .3s linear' }}>
          <div className="flex flex-col pb-2">
            <p className='pb-1 pt-4 pl-6 text-lg font-semibold'>Edit Goals</p>
            <p className='px-3 pl-6 text-xs text-[#475467]'>Share your job position and company details with the AI to create intelligent interview plans.</p>

            <Formik
              initialValues={{
                position: '',
                companyName: '',
                location: '',
                programmingLanguage: ''
              }}
              validationSchema={Yup.object({
                position: Yup.string().required('Required'),
                companyName: Yup.string().required('Required'),
                location: Yup.string().required('Required'),
                programmingLanguage: Yup.string().required('Required')
              })}
              onSubmit={handleSubmit}
            >
              {formik => (
                <Form className="flex flex-col gap-4 mx-6 my-3">
                  <div className='font-Mulish sm:w-[300px] w-[200px]'>
                    <p className="text-xs font-bold">Position</p>
                    <div className="relative flex">
                      <input
                        placeholder="Edit Position"
                        type="text"
                        name="position"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.position}
                        className="w-72 h-7 text-[11px] focus:ring-0 focus:border-current rounded-sm"
                      />
                    </div>
                    <ErrorMessage name="position" component="div" className="text-red-700 text-xs" />
                  </div>
                  <div className='font-Mulish sm:w-[300px] w-[200px]'>
                    <p className="text-xs font-bold">Company Name</p>
                    <div className="relative flex">
                      <input
                        placeholder="Edit Company Name"
                        type="text"
                        name="companyName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.companyName}
                        className="w-72 h-7 text-[11px] focus:ring-0 focus:border-current rounded-sm"
                      />
                    </div>
                    <ErrorMessage name="position" component="div" className="text-red-700 text-xs" />
                  </div>
                  <div className='font-Mulish sm:w-[300px] w-[200px]'>
                    <p className="text-xs font-bold">Location</p>
                    <div className="relative flex">
                      <input
                        placeholder="Edit Location"
                        type="text"
                        name="location"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                        className="w-72 h-7 text-[11px] focus:ring-0 focus:border-current rounded-sm"
                      />
                    </div>
                    <ErrorMessage name="position" component="div" className="text-red-700 text-xs" />
                  </div>
                  <div className='font-Mulish sm:w-[300px] w-[200px]'>
                    <p className="text-xs font-bold">Programming Language</p>
                    <div className="relative flex">
                      <input
                        placeholder="Edit Programming Language"
                        type="text"
                        name="programmingLanguage"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.programmingLanguage}
                        className="w-72 h-7 text-[11px] focus:ring-0 focus:border-current rounded-sm"
                      />
                    </div>
                    <ErrorMessage name="position" component="div" className="text-red-700 text-xs" />
                  </div>
                  <div className='flex gap-3 ml-32'>
                    <button type="button" className="w-[85px] h-7 text-[12px] flex items-center justify-center rounded-[5px] text-[#6C6C6C] bg-[#D9D9D9]"
                      onClick={() => { setIsPopupOpen(false)}}>
                      Cancel
                    </button>
                    <button type="submit" className="w-[85px] h-7 text-[12px] flex items-center justify-center rounded-[5px] text-[#6C6C6C] bg-[#D9D9D9]"
                    >Create
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
