import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import artboard1 from '../../assets/Artboard1.png'
import artboard2 from '../../assets/Artboard2.png'
import artboard3 from '../../assets/Artboard3.png'
import artboard4 from '../../assets/Artboard4.png'
import artboard5 from '../../assets/Artboard5.png'

const Slider = () => {
  const row = [artboard1, artboard2, artboard3, artboard4, artboard5];

  return (
    <Fragment>
      <div className="Slider">
        <div className="slider-imgs">
          <Marquee>
            <MarqueeGroup>
              {row.map((el, index) => (
                <ImageGroup key={index}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <span className="space"></span>
            <MarqueeGroup>
              {row.map((el, index) => (
                <ImageGroup key={index}>
                  <Image src={el} />
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
animation: ${scrollX} 15s linear infinite;
gap: 7.5px;
@media screen and (max-width: 768px) {
  justify-content: center;
  gap: 5px;
  margin-left: 5px;
  animation: ${scrollX} 15s linear infinite;
}
`;
const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
  cursor: pointer;
}
 @media screen and (max-width: 768px) {
      padding: calc(clamp(1rem, 1rem + 5vmin, 1rem) / 50);

  }
`;

const Image = styled.img`
  object-fit: contain;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

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