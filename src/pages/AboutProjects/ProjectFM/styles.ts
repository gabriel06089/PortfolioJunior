import styled, { keyframes } from "styled-components";
import React, { useState, useEffect } from "react";
import { StarFour } from "phosphor-react";
const scaleAndRotateAnimation = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(90deg);
    opacity: 1;
  }
  100% {
    transform: scale(0) rotate(180deg);
    opacity: 0;
  }
`;
interface IBlurTextProps {
  isHovered: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline: 5rem;
  margin-top: 2rem;

  h1 {
    margin-bottom: 1rem;
  }
  @media (max-width: 664px) {
    margin-inline: 0rem;
    margin-top: 0rem;
    h1 {
      font-size: 1.6rem;
    }
  }
`;

export const ImgContainer = styled.div`
  margin: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50px;
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 664px) {
    margin-inline: 1.8rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    img {
      border-radius: 16px;
      max-width: 100%;
      height: auto;
    }
  }
`;

export const StackContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 4rem;
  img {
    height: 4rem;
    max-width: 100%;
    max-height: 4rem;
    object-fit: contain;

    @media (max-width: 1100px) {
      height: 6vw; // A altura será 3% da largura da viewport
      max-height: auto;
    }
    @media (max-width: 664px) {
      height: 6.5vw;
    }
  }
`;

export const BlurText = styled.span<IBlurTextProps>`
  border-radius: 100px;
  ${Container} p:hover & {
    opacity: 1;
  }
  transition: filter 0.3s ease;

  filter: ${(props) => (props.isHovered ? "none" : "blur(5px)")};
`;
export const CursorCircle = styled.div<{ mouseX: number; mouseY: number }>`
  position: fixed;
  top: ${({ mouseY }) => `${mouseY}px`};
  left: ${({ mouseX }) => `${mouseX}px`};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  z-index: 9999;
  border: 1px solid white;
  transform: translate(-50%, -50%);
`;
const gradientAnimation = keyframes`
  0% {
    background-position: 0% center;
  }
  to {
    background-position: -200% center;
  }
`;
export const AnimatedText = styled.span`
  animation: ${gradientAnimation} 3s linear infinite;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.UltraContrast},
    ${(props) => props.theme.MidContrast},
    ${(props) => props.theme.Contrast},
    ${(props) => props.theme.UltraContrast}
  );
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  position: relative;
`;
export const TwinklingStar = styled(StarFour)`
  position: absolute;
  color: ${(props) => props.theme.UltraContrast};
  animation: ${scaleAndRotateAnimation} 700ms ease infinite;
  transform-origin: center;
`;
export const TwinklingStar2 = styled(StarFour)`
  position: absolute;
  color: ${(props) => props.theme.UltraContrast};
  animation: ${scaleAndRotateAnimation} 700ms ease infinite;
  transform-origin: center;
`;
const BaseBall = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 100%;
  @media (max-width: 664px) {
    height: 1rem;
    width: 1rem;
  }
`;
export const BallContainer = styled.div`
  display: flex;
  margin-inline: 1rem;
  gap: 1rem;
  align-items: center;
  position: absolute;
  left: 0;
  @media (max-width: 664px) {
    gap: 0.5rem;
  }
`;
export const RedBall = styled(BaseBall)`
  background-color: #fb6058;
`;
export const GreenBall = styled(BaseBall)`
  background-color: #28c73f;
`;
export const YellowBall = styled(BaseBall)`
  background-color: #fbbb31;
`;

export const TerminalBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 3.5rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border-bottom: 2px solid ${(props) => props.theme.Secondary};
  background-color: ${(props) => props.theme.BarColor};

  img {
    height: 2rem;
    margin-right: 0.5rem;
  }
`;
export const TerminalContainer = styled.div`
  display: flex;
  margin-bottom: 5rem;
  flex-direction: column;
  width: 80%;
  height: auto;
  border-radius: 1rem;

  box-shadow: 5px solid black;
  background-color: ${(props) => props.theme["Secondary-Button"]};
  p {
    margin-block: 1rem;

    position: relative;
    z-index: 1;
    font-family: "Roboto";
    text-align: start;
    margin: 1rem;
    font-size: 1rem;
    line-height: 1.5;
  }
  h1 {
    text-align: start;
  }
  span {
    font-weight: bold;
    font-size: 1.5rem;
    position: relative;
  }
  @media (max-width: 664px) {
    margin-bottom: 2rem;
    width: 88%;
    span {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 1.8;
    }
  }
`;
const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 1; }
  51% { opacity: 0; }
  100% { opacity: 0; }
`;
export const BlinkCursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 0.8rem;
  margin-left: 1px;
  background-color: ${(props) => props.theme.Primary};
  animation: ${blinkAnimation} 1s steps(1) infinite;
`;
export const StyledLink = styled.a`
  color: ${(props) => props.theme.Contrast};
  text-decoration: none;
  font-weight: bold;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${(props) => props.theme.UltraContrast};
  }
`;
