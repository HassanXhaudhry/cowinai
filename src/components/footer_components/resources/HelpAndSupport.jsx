import Navbar from '../../Navbar'
import React, { Fragment, useState, useEffect, useRef } from 'react'
import bgcolor from '../../../assets/bgcolor.png'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Footer from '../../../components/Footer';
import { useTheme } from '../../../contexts/ThemeContext';

const HelpAndSupport = () => {
    const { darkMode } = useTheme();

    const [userName, setUserName] = useState('userName');
    const [userEmail, setUserEmail] = useState('userEmail');
    const [userMessage, setMessageEmail] = useState('userMessage');


    const tranform3d = useRef();
    useEffect(() => {
        effect3d();
    }, []);

    const effect3d = () => {
        tranform3d.current.style.transform = `translate3d(0, 0, 0)`;
    };
    return (
        <Fragment>
            <Navbar darkMode={darkMode} />
            <div className={` ${darkMode && "dark "}`}>
                <div ref={tranform3d} className="dark:bg-dark overflow-hidden z-[-50]">
                    <div className='flex justify-center items-center text-center flex-col mx-5 dark:text-white'>
                        <p className='text-4xl font-Manrope py-10 font-semibold mt-5'>
                            Love to hear from you, Get in touch. 👋🏻
                        </p>
                        <p className='text-lg font-semibold'>Have comments, questions, or feedback to share?</p>
                        <div className='flex font-medium py-2'>
                            <p>Submit a message below and we will get back. You can also contact &nbsp;<span className='text-[#1BE0EB] underline cursor-pointer'>hi@cowin.ai</span> <br /> for investment inquiry and affiliate marketing.</p>
                        </div>
                        <img className="z-[-12] absolute top-20" src={bgcolor} alt="" />
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-6 sm:grid-cols-3 md:gap-3 sm:gap-4 gap-2 my-8 mt-10 sm:mx-8 md:mx-5 mx-5 lg:mx-36'>
                        <button className='text-xs font-Manrope bg-[#4E43FA] h-11 rounded-sm text-white font-medium'>Feedback & Recommendations</button>
                        <button className='text-xs font-Manrope bg-[#4E43FA] h-11 rounded-sm text-white font-medium'>Billing</button>
                        <button className='text-xs font-Manrope bg-[#4E43FA] h-11 rounded-sm text-white font-medium'>Account</button>
                        <button className='text-xs font-Manrope bg-[#4E43FA] h-11 rounded-sm text-white font-medium'>Page Errors</button>
                        <button className='text-xs font-Manrope bg-[#4E43FA] h-11 px-3 rounded-sm text-white font-medium'>New Feature Request</button>
                        <button className='text-xs font-Manrope bg-[#4E43FA] h-11 rounded-sm text-white font-medium'>Others</button>
                    </div>
                    
                    <div className='grid sm:grid-cols-2 grid-cols-1 justify-center align-middle my-10'>
                        
                        <Formik
                            initialValues={{
                                userName: '',
                                userEmail: '',
                                userMessage: ''
                            }}
                            validationSchema={Yup.object({
                                userName: Yup.string().required('Name is required'),
                                userEmail: Yup.string()
                                    .required('Email is required')
                                    .test('valid-email', 'Email must be valid', function (value) {
                                        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                                    }),
                                userMessage: Yup.string().required('Type your message')
                            })}
                        // onSubmit={(values, { setSubmitting }) => {
                        // }}
                        >
                            {formik => (
                                <Form className="flex flex-col items-center justify-center gap-5 dark:text-white" onSubmit={formik.handleSubmit}>
                                    <div className='font-Mulish sm:w-[300px] w-[250px]'>
                                        <p className="pb-1 text-xs font-bold">Name</p>
                                        <div className="relative flex">
                                            <input
                                                type={userName ? 'text' : "text"}
                                                placeholder="Enter your name"
                                                name="userName"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.userName}
                                                className="w-72 h-9 text-[#9A9AB0] focus:ring-0 focus:border-current rounded-lg sm:text-xs text-[11px]"
                                            />
                                        </div>
                                        {formik.touched.userName && formik.errors.userName ? (
                                            <div className="text-red-700 text-xs">{formik.errors.userName}</div>
                                        ) : null}
                                    </div>
                                    <div className='font-Mulish sm:w-[300px] w-[250px]'>
                                        <p className="pb-1 text-xs font-bold">Email</p>
                                        <div className="relative flex">
                                            <input
                                                type={userEmail ? 'email' : "text"}
                                                placeholder="Enter your email"
                                                name="userEmail"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.userEmail}
                                                className="w-72 h-9 text-[#9A9AB0] focus:ring-0 focus:border-current rounded-lg sm:text-xs text-[11px]"
                                            />
                                        </div>
                                        {formik.touched.userEmail && formik.errors.userEmail ? (
                                            <div className="text-red-700 text-xs">{formik.errors.userEmail}</div>
                                        ) : null}
                                    </div>
                                    <div className='font-Mulish sm:w-[300px] w-[250px]'>
                                        <p className="pb-1 text-xs font-bold">Message</p>
                                        <div className="relative flex">
                                            <input
                                                type={userMessage ? 'text' : "text"}
                                                placeholder="Write your message here"
                                                name="userMessage"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.userMessage}
                                                className="w-72 h-9 pb-20 pt-5 sm:pr-12 pr-4 text-[#9A9AB0] focus:ring-0 focus:border-current rounded-lg sm:text-xs text-[11px]"
                                            />
                                        </div>
                                        {formik.touched.userMessage && formik.errors.userMessage ? (
                                            <div className="text-red-700 text-xs">{formik.errors.userMessage}</div>
                                        ) : null}
                                    </div>
                                    <div className="flex flex-col items-center w-1">
                                        <button type="submit" className="w-[150px] font-Inter h-[33px] bg-[#4E43FA] hover:bg-gradient-to-r from-orange to-yellow rounded-lg text-white text-sm my-2 sm:my-0">
                                            Send
                                        </button>
                                    </div>
                                </Form>
                                
                            )}
                        </Formik>
                        
                        <div className="lg:block md:hidden hidden absolute h-[330px] border-l-2 border-[#505F7C] left-bar"></div>
                        <div className='text-[#3A4863] mx-4 font-semibold justify-center sm:justify-start dark:text-[#bcbcbc] text-sm lg:text-lg'>
                            “We’re seeking feedback and recommendations, <br />so I can tailor my CoWin WebApp more accurately”
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

        </Fragment>
    )
}

export default HelpAndSupport
