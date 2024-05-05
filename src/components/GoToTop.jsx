import React, {useEffect, useState} from 'react';
import { IoIosArrowUp } from "react-icons/io";
import  styled  from 'styled-components';


const GoToTop = () => {

 const [isVisible, setIsVisible]= useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const listenToScroll =()=>{
        let heightToHidden =200;
        const winScroll= document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > heightToHidden){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll);
        return ()=> window.removeEventListener('scroll', listenToScroll);
    },[]);
   
    return (
        <Wrapper>
        {isVisible && (
            <div className='top-btn' onClick={goToBtn}>
                <IoIosArrowUp style={{}} className='icon' />
            </div>
        )}
        </Wrapper>
    );
}

const Wrapper = styled.section`
display: flex;
justify-content:center;
align-items:center;

.top-btn {
    font-size: 1.8rem;
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    background-color: #4E43FA;
    border-radius: 50%;
    position: fixed;
    bottom: 2.5rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease; 
    box-shadow: 0px 8px 16px rgba(3, 4, 28, 0.3);
  }
  
  .top-btn .icon {
    padding-top: 10px;
  }
  
  .top-btn:hover {
    transform: translateY(-5px);
    background-color: #1004B8;
  }
  

}
@media (max-width:550px) {
    .top-btn {
        display: none;
        margin: 0 auto;
        width:10px;
        height:10px;
    }
}

}
`;



export default GoToTop;