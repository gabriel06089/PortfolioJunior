import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Box from './Smile'

const EyeContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
`

const Pupil = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #333;
  border-radius: 50%;
`

const Eyebrow = styled.div`
  position: relative;
  width: 30px;
  height: 5px;
  background-color: black;
  margin-bottom: 1rem;
`
const FaceContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Mouth = styled.div<{ rotate: number }>`
  position: relative;
  width: 80px;
  height: 0;
  margin: 0 auto;
  border-top: 2px solid black;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  transform-origin: top center; /* Ajuste: Definir o ponto de rotação no topo central */
  transform: rotate(${(props) => props.rotate}deg);
`

interface EyeProps {
  mouseX: number
  mouseY: number
}

const Eye: React.FC<EyeProps> = ({ mouseX, mouseY }) => {
  const [pupilX, setPupilX] = useState(25)
  const [pupilY, setPupilY] = useState(25)
  const [eyebrowY, setEyebrowY] = useState(0)
  const [mouthRotate, setMouthRotate] = useState(0)

  useEffect(() => {
    const eyeRect = document.getElementById('eye')?.getBoundingClientRect()
    if (eyeRect) {
      const eyeCenterX = eyeRect.left + eyeRect.width / 2
      const eyeCenterY = eyeRect.top + eyeRect.height / 2
      const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX)
      const distance = Math.min(
        eyeRect.width / 4,
        Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY) - 12.5,
      )
      const newPupilX = 12.5 + distance * Math.cos(angle)
      const newPupilY = 12.5 + distance * Math.sin(angle)
      const newEyebrowY = Math.max(0, newPupilY - 15)
      const newMouthRotate = mouseY < eyeCenterY ? -15 : 0 // Rotação da boca
      setPupilX(newPupilX)
      setPupilY(newPupilY)
      setEyebrowY(newEyebrowY)
      setMouthRotate(newMouthRotate)
    }
  }, [mouseX, mouseY])

  return (
    <FaceContainer>
      <Box />
    </FaceContainer>
  )
}

export default Eye
