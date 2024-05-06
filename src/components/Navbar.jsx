import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import cowin_light from '../assets/cowin_light.png';
import cowin_dark from '../assets/cowin_dark.png';
import { FiMoon, FiSun } from "react-icons/fi";
import cross_img from '../assets/cross_img.svg';
import togglebtn from '../assets/togglebutton.svg';
import { useTheme } from '../contexts/ThemeContext';


const Navbar = () => {
    
    const { darkMode, toggleDarkMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollLock, setScrollLock] = useState(false);
    const [icon, setIcon] = useState(darkMode ? FiSun : FiMoon);

    // const useBodyScrollLock = () => {
    //     const bodyStyle = document.body.style;

    //     useEffect(() => {
    //         bodyStyle.overflowY = scrollLock ? 'hidden' : 'auto';

    //         return () => {
    //             bodyStyle.overflowY = 'auto';
    //         };
    //     }, [scrollLock]);
    // };

    // useBodyScrollLock();

    // // const toggleScroll = () => {
    // //     setScrollLock(!scrollLock);
    // // };

    const togggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setScrollLock(!isMenuOpen); 
    };

    const toggleIcon = () => {
        setIcon(darkMode ? FiMoon : FiSun);
    };

    const handleModeCombined = () => {
        toggleDarkMode();
        toggleIcon();
    };

    return (
        <header className={`font-Manrope w-full left-0 right-0 border-b-2 border-none ${darkMode && "dark"}`}>
            <nav className='py-2 dark:bg-dark bg-white top-0 right-0 left-0' >
                <div className='flex items-center justify-between visible mb-2 z-100'>
                    <div className='flex flex-col items-center justify-center text-center font-bold text-xl text-black pl-4 mt-1'>
                     <NavLink to='/'>{darkMode ? <img src={cowin_dark} alt="" className='h-10 w-30' /> : <img src={cowin_light} alt="" className='h-10 w-30' />}</NavLink> 
                    </div>
                
                    <div className='lg:flex items-center cursor-pointer hidden text-nav-text dark:text-white'>
                    <NavLink to="/dashboard" className='block hover:text-blue-btn py-2 px-4 '>Dashboard</NavLink>
                        <NavLink to="/recommendation" className='block hover:text-blue-btn py-2 px-4 '>Recommedation</NavLink>
                        <NavLink to="/howwedo" className='block hover:text-blue-btn py-2 px-4 '>How we do?</NavLink>
                        <NavLink to="/tutorials" className='block hover:text-blue-btn py-2 px-4 '>Why we do?</NavLink>
                        <NavLink to="/pricing" className='block hover:text-blue-btn py-2 px-4 '>Pricing</NavLink>
                    </div>
                 
                    <div className='lg:block hidden text-black pr-4'>
                        <div className='flex flex-row gap-3 cursor-pointer'>
                            <div className='text-2xl pt-2 text-user-color' onClick={handleModeCombined}>{icon}</div>
                            <NavLink to='/login'><button className='w-auto px-3 text-sm h-10 mx-2 rounded-md bg-blue-btn hover:bg-dark-blue text-white '>Kick Start for FREE</button></NavLink>
                        </div>
                    </div>

                    <button
                        onClick={togggleMenu}
                        className='lg:hidden border-menu-circle border-[1.5px] w-[36px] h-[36px] rounded-full mr-4'
                    >
                        {isMenuOpen ? (
                            <img src={cross_img} alt="" className='pl-[5px] h-7 w-7' />
                        ) : (
                            <img src={togglebtn} alt="" className='pl-[6px]' />
                        )}
                    </button>


                </div>
             
                {isMenuOpen && (
                    <div className='mt-0 w-full h-screen top-0 left-0 bg-dark text-white py-1 z-1000'>
                        <div className='mt-10 flex flex-col gap-2 cursor-pointer'>
                        <NavLink to='/dashboard' className='block hover:text-blue-btn py-2 mx-4 border-b-[1px] border-grey'>Dashboard</NavLink>
                            <NavLink to='/recommendation' className='block hover:text-blue-btn py-2 mx-4 border-b-[1px] border-grey'>Recommendation</NavLink>
                            <NavLink to='/howwedo' className='block hover:text-blue-btn py-2 mx-4 border-b-[1px] border-grey'>How we do?</NavLink>
                            <NavLink to='/tutorials' className='block hover:text-blue-btn py-2 mx-4 border-b-[1px] border-grey'>Why we do?</NavLink>
                            <NavLink to='/pricing' className='block hover:text-blue-btn py-2 mx-4 border-b-[1px] border-grey'>Pricing</NavLink>
                        </div>
                    </div>
                )}

            </nav>
        </header>
    );
};

export default Navbar;
