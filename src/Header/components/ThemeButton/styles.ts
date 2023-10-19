import styled, { keyframes, css } from 'styled-components'

interface BallProps {
  move: boolean
}

const moveRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(1.7rem);
  }
`

const moveLeft = keyframes`
  0% {
    transform: translateX(1rem);
  }
  100% {
    transform: translateX(0);
  }
`
const moveRight768 = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(1.7rem);
  }
`

const moveLeft768 = keyframes`
  0% {
    transform: translateX(1rem);
  }
  100% {
    transform: translateX(0);
  }
`
export const SwitchButton = styled.button`
  border-style: solid;
  border-radius: 100px;
  border: 3px solid transparent;
  padding: 0.3rem;

  background-color: ${(props) => props.theme['Secondary-Button']};
  transition: background-color 0s ease;
  width: auto;
  box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.1);
`
export const Ball = styled.div<BallProps>`
  background-color: white;
  padding: 1rem;
  border-radius: 50%;
  position: absolute;
  top: 2.25rem;
  left: 5.25rem;
  animation: ${({ move }) =>
    move
      ? css`
          ${moveRight} 0.2s ease forwards
        `
      : css`
          ${moveLeft} 0.2s ease forwards
        `};
  @media (max-width: 768px) {
    left: 2.75rem;
    animation: ${({ move }) =>
      move
        ? css`
            ${moveRight768} 0.2s ease forwards
          `
        : css`
            ${moveLeft768} 0.2s ease forwards
          `};
  }
`

export const DissolveIcon = styled.label`
  gap: 0.3rem;
  display: flex;

  svg {
  }
  svg:first-child {
  }

  svg:last-child {
  }
`
