import Navbar from '../../Navbar'
import React, { Fragment, useState, useEffect, useRef } from 'react'
import bgcolor from '../../../assets/bgcolor.png'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Footer from '../../../components/Footer';
import { useTheme } from '../../../contexts/ThemeContext';

const ContactUs = () => {
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

        <div ref={tranform3d} className="dark:bg-dark overflow-hidden z-[-50] font-Manrope">
          <img className="z-[-12] absolute" src={bgcolor} alt="" />
          <div className='flex justify-center items-center text-center flex-col mx-5 dark:text-white'>
            <p className='text-4xl py-10 font-semibold mt-5'>
              How can we help you? 🤔
            </p>
          </div>
          <div className='grid sm:grid-cols-2 grid-cols-1 justify-center sm:gap-32 gap-1 align-middle my-10 mx-40'>
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
                        placeholder="hi@cowin.ai"
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
            <div className="lg:block md:hidden hidden absolute h-[330px] border-l-2 border-[#505F7C] left-bar-two"></div>

            <div className='flex font-medium py-2 justify-center sm:justify-start py-5 sm:py-0'>
              <p className='dark:text-white'>Email Us&nbsp;<span className='text-[#1BE0EB] underline cursor-pointer '>hi@cowin.ai</span></p>
            </div>
          </div>

          <div className='dark:text-white'>
            <div className='flex flex-col justify-center items-center text-center mx-5 mt-28'>
              <p className='py-3 text-lg font-semibold'>Still Having Problems ? let us Help</p>
              <p className='text-2xl font-semibold'>1. Did you forgot or lost access to sign in method?</p>
            </div>
            <div className='lg:px-32 md:px-20 px-5 py-10'>
              <p className='text-2xl font-semibold'>1.1 How to find your CoWin account?</p>
              <div className='px-8 text-md'>
                <p>
                  Regardless of the method you used to sign up to CoWin, there’s always an email address attached to youraccount.<br /> Try the following:
                </p>
                <ul className='list-disc px-8'>
                  <li>Check if you can find any emails from CoWin in your email inboxes. If you have received emails from CoWin to a specific inbox, it means that you have an account associated with that email address.</li>
                  <li>If you have a CoWin subscription, check all your email inboxes and try to find the email subject or titled</li>
                </ul>
              </div>
              <p className='py-10 flex justify-center text-center'>“Thank you for becoming a CoWin member”</p>
              <p>If you are able to find that email, it means that your membership CoWin account is associated with that email address.</p>
            

            <p className='text-2xl font-semibold pt-6'>1.2 How to sign in your CoWin account</p>
            <div className='px-8 text-md'>
                <p>
                Once you know which email address is associated with your CoWin account, you can sign in to your CoWin account with that email address.
                </p>
                <p className='text-lg font-semibold py-3'>1.2.1 Desktop</p>
                <ul className='list-decimal px-8'>
                  <li>On the CoWin homepage, click Sign in at the top-right corner.</li>
                  <li>Choose Sign in with email.</li>
                  <li>Enter your email address and click Continue.</li>
                  <li>Go to your inbox and open the verification email.</li>
                  <li> Click Sign in to CoWin in the email to be redirected to CoWin and signed in to your account.</li>
                </ul>
                <p className='text-lg font-semibold py-3'>1.2.2 IOS & ANDROID</p>
                <ul className='list-decimal px-8'>
                  <li>Coming Soon !!</li>
                </ul>
              </div>

              <p className='text-2xl font-semibold pt-6'>1.3 What is my password?</p>
              <div className='px-8 text-md flex flex-col gap-4'>
                <p>You can sign in to your CoWin account using your email address or a social account that you've connected with your CoWin account.</p>
                <p>If you want to login your password and you do not remember it click on Forget Password and we will send you Password Reset link to your registered email address.</p>
                <p>Click on the link received in the email account to Reset and then set desires “New Password”.</p>
                <p>New you can login using your “New Password”. If you still have any problem let us help you. Please send a email on hi@cowin.ai with your name and registered email address.</p>
              </div>
              <div className='flex flex-col justify-center items-center text-center pt-10 pb-2 text-2xl font-semibold'>2. How to Connect social media accounts ?
              <p className='text-[16px] font-normal sm:px-40 px-10 py-1'>You can connect your Facebook, Twitter, Google, or Apple account with your CoWinaccount. Doing so will allow you to sign in to your CoWin account with that social account. </p>
              </div>
              <div className='px-8 text-md'>
                <p className='text-lg font-semibold py-3'>2.1 Personal Privacy</p>
                <ul className='list-disc px-8'>
                  <li>CoWin will never post anything on your social media account.</li>
                  <li>CoWin does not import any contacts from your social media network.</li>
                </ul>
                <p className='text-lg font-semibold py-3'>2.2 Connect Social Media Account</p>
                <ul className='list-decimal px-8'>
                  <li>On your dashboard homepage, click on your profile picture and click Settings.</li>
                  <li>Click the Security and apps tab, click Connect Facebook, Twitter, LinkedIN, Apple, Google, Etc.</li>
                  <li>Authorize your Social Media Account.</li>
                  <li>OWe do not connect with your Social Media personal or business pages.</li>
                </ul>
                <p className='text-lg font-semibold py-3'>2.3 Disconnect account</p>
                <p className='px-8'>You can disconnect your social media account by clicking Disconnect.</p>
              </div>
              <div className='flex flex-col justify-center items-center text-center pt-10 pb-2 text-2xl font-semibold'>3. FAQ's
              <p className='text-[16px] font-normal sm:px-40 px-10 py-1'>You can get your answer blazing fast from FQA in this article.</p>
              </div>
            </div>
            
          </div>




        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default ContactUs
