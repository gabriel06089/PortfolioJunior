import {
  AngryGrid,
  Container,
  ContainerAbsolute,
  DivGrid0,
  DivGrid1,
  DivGrid10,
  DivGrid11,
  DivGrid12,
  DivGrid13,
  DivGrid14,
  DivGrid2,
  DivGrid3,
  DivGrid4,
  DivGrid5,
  DivGrid6,
  DivGrid7,
  DivGrid8,
  DivGrid9,
  LearningContainer,
  Line,
  LogoContainers,
  WorkButton,
} from './styles'
import React, { useState } from 'react'
import Academia from '../../assets/FotoAcademia.jpg'
import Estacio from '../../assets/EstacioLogo.png'
import Discover from '../../assets/Discover.png'
import Html from '../../assets/Html.png'
import Css from '../../assets/Css.svg'
import JavaScript from '../../assets/javascript.svg'
import Ignite from '../../assets/Ignite.png'
import ReactJs from '../../assets/React.Js.png'
import ReactNative from '../../assets/ReactNative.png'
import NodeJs from '../../assets/NodeJs.png'
import TypeScript from '../../assets/Typescript.png'
import Styled from '../../assets/styled.png'
import Next from '../../assets/NextJs.png'
import Vite from '../../assets/Vite.svg'
import GitHubCalendar from 'react-github-calendar'
import MapLibreMap from './Components/Map/Map'

import DrawingBoard from './Components/Canvas'
import Eye from './Components/Persona'
import Cube from './Components/Persona/Smile'
import { DashBoard } from './Components/Dashboard'
import { Square } from 'phosphor-react'
import { Future } from './Components/Future'
import { Music } from './Components/Music'

export function Home() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }
  return (
    <>
      <AngryGrid onMouseMove={handleMouseMove}>
        <DivGrid0>
          <h1>Gabriel Alves</h1>
          <span>Desenvolvedor front-end</span>
          <p>
            Olá! Sou o Gabriel e busco oportunidades em empresas onde possa
            contribuir e evoluir como desenvolvedor.
          </p>
          <WorkButton>
            <span>Veja meu trabalho</span>
          </WorkButton>
        </DivGrid0>
        <DivGrid1>
          {/* <Cube /> */} <DashBoard />
        </DivGrid1>
        <DivGrid2>
          <img src={Academia} alt="" />
        </DivGrid2>
        <DivGrid3>
          <MapLibreMap />
        </DivGrid3>
        <DivGrid4>
          <h1> Aprendizado</h1>
          <LearningContainer>
            <img src={Estacio} alt="" />
            <span>Análise e Desenvolvimento de Sistemas</span>
          </LearningContainer>
          <p>COMPLETO</p>
          <Line />
          <LearningContainer>
            <img src={Discover} alt="" />
            <span>Rota: Discover Rocketseat</span>
          </LearningContainer>
          <LogoContainers>
            <img src={Html} alt="" />
            <img src={Css} alt="" />
            <img src={JavaScript} alt="" />
          </LogoContainers>
          <p>COMPLETO</p>
          <Line />
          <LearningContainer>
            <img src={Ignite} alt="" />
            <span>Rota: Ignite Rocketseat</span>
          </LearningContainer>
          <LogoContainers>
            <img src={ReactJs} alt="" />
            <img src={ReactNative} alt="" />
            <img src={NodeJs} alt="" />
          </LogoContainers>
          <p>COMPLETO</p>
          <Line />
          <LearningContainer>
            <img src={ReactJs} alt="" />
            <span>Trilha: ReactJs Rocketseat</span>
          </LearningContainer>
          <LogoContainers>
            <img src={TypeScript} alt="" />
            <img src={Styled} alt="" />
            <img src={Next} alt="" />
            <img src={Vite} alt="" />
          </LogoContainers>
          <p>80% COMPLETO</p>
        </DivGrid4>
        <DivGrid5>
          <Future />
        </DivGrid5>
        <DivGrid6>
          <Music />
        </DivGrid6>
        <DivGrid7>
          <DrawingBoard />
        </DivGrid7>
        <DivGrid8>i</DivGrid8>
        <DivGrid9>j</DivGrid9>
        <DivGrid10>k</DivGrid10>
        <DivGrid11>l</DivGrid11>
        <DivGrid12>m</DivGrid12>
        <DivGrid13>n</DivGrid13>
        <DivGrid14>o</DivGrid14>
      </AngryGrid>
      <Container>
        <GitHubCalendar username="gabriel06089" />
      </Container>
    </>
  )
}
