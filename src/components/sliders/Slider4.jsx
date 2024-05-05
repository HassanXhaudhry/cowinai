import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import { useTheme } from '../../contexts/ThemeContext';

const Slider = () => {
  const row = ['Freshers', 'Engineering', 'Business', 'Coding', 'Product/Tools', 'Internship', 'Service Based', 'Data Science'];

  const { darkMode } = useTheme();

  return (
    <Fragment>
      <div className={` ${darkMode && "dark"} Slider`}>
        <div className="slider-imgs">
          <Marquee>
            <MarqueeGroup>
              {row.map((el, index) => (
                <ImageGroup key={index} className="mr-4">
                  <p>{el}</p>
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <span className="space"></span>
            <MarqueeGroup>
              {row.map((el, index) => (
                <ImageGroup key={index} className="mr-4">
                  <p>{el}</p>
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
        </div>
      </div>
    </Fragment>
  );
};

export default Slider;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 0%,
    hsl(0 0% 0% / 1) 100%,
    hsl(0 0% 0% / 0)
  );
`;
const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeGroup = styled.div`
  flex-shrink: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 300vh;
  animation: ${scrollX} 20s linear infinite;
  margin-left:2px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 5px;
    margin-left: 5px;
    animation: ${scrollX} 20s linear infinite;
  }
`;
const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 10rem + 10vmin, 50rem) / 5);
  border-radius:10px;
  cursor: pointer;
  background-color:#4e43fa21;
  color:black;
  font:bold;
  @media screen and (max-width: 768px) {
    padding: calc(clamp(1rem, 10rem + 10vmin, 4rem) / 6);
    font-size: 11px;
  }
`;

const Image = styled.p`
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  filter: grayscale(100);
  opacity: 0.5;
  &:hover {
    opacity: 1;
    filter: none;
  }

  .Slider {
    width: auto;
    max-width: 1280px;
    padding: 0 55px;
    margin: 100px auto;
    box-sizing: border-box;
    text-align: center;
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    color: #3b3c3d;
    padding: 0 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
