import React from 'react'
import styled, { keyframes } from 'styled-components'

const audioWaveAnimation = keyframes`
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.3);
  }
  100% {
    transform: scaleY(1);
  }
`

const AudioWaveContainer = styled.div`
  display: flex;

  height: 21px;
`

const AudioWaveBar = styled.div<{ delay: number }>`
  width: 3px;
  height: 20px;
  background-color: #ff0000;
  border-radius: 100px;
  margin: 0 1.5px;
  animation: ${audioWaveAnimation} 1s infinite;
  animation-delay: ${({ delay }) => delay}s;
  animation-duration: ${({ delay }) => Math.random() + 0.5}s;
`

const AudioWave = () => {
  return (
    <AudioWaveContainer>
      <AudioWaveBar delay={0} />
      <AudioWaveBar delay={0.2} />
      <AudioWaveBar delay={0.4} />
    </AudioWaveContainer>
  )
}

export default AudioWave
