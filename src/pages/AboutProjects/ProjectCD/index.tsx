import { useState, useEffect } from 'react'

import {
  Container,
  ImgContainer,
  StackContainer,
  AnimatedText,
  TwinklingStar,
  TerminalContainer,
  TerminalBar,
  BallContainer,
  RedBall,
  GreenBall,
  YellowBall,
  BlinkCursor,
} from './styles'
import LP from '../../../assets/cafe.png'
import Type from '../../../assets/Typescript.png'
import Css from '../../../assets/Css.svg'

import Styled from '../../../assets/styled.png'
import Vite from '../../../assets/Vite.svg'
import Git from '../../../assets/GitHub-transformed.png'
import ReactLogo from '../../../assets/ReactLogoClean.png'
import Net from '../../../assets/netlify-logo-png-transparent.png'
import Figma from '../../../assets/Figma.png'

export function ProjectAboutCD() {
  const [starCoordinates, setStarCoordinates] = useState<
    { id: number; top: number; left: number }[]
  >([])

  const topRange = 35
  const leftRange = 250

  useEffect(() => {
    const numberOfStars = 1

    const interval = setInterval(() => {
      const coordinates: { id: number; top: number; left: number }[] =
        Array.from({ length: numberOfStars }, (_, index) => ({
          id: index,
          top: Math.floor(Math.random() * (topRange + 1)) - 15,
          left: Math.floor(Math.random() * (leftRange + 1)) - 30,
        }))
      setStarCoordinates(coordinates)
    }, 700)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Container>
      <h1>
        <AnimatedText>
          <span> Coffee Delivery</span>
          {starCoordinates.map((star) => (
            <div
              key={star.id}
              style={{
                position: 'absolute',
                top: star.top,
                left: star.left,
              }}
            >
              <TwinklingStar size={22} weight="fill" />
            </div>
          ))}
        </AnimatedText>
      </h1>

      <h1>Desafio RocketSeat</h1>

      <ImgContainer>
        <img src={LP} alt="" />
      </ImgContainer>
      <h1>Stack Tecnológico</h1>

      <StackContainer>
        <img src={Css} alt="" />
        <img src={Styled} alt="" />
        <img src={Type} alt="" />
        <img src={Vite} alt="" />
        <img src={Git} alt="" />
        <img src={ReactLogo} alt="" />
        <img src={Net} alt="" />
        <img src={Figma} alt="" />
      </StackContainer>

      <TerminalContainer>
        <TerminalBar>
          <BallContainer>
            <RedBall />
            <YellowBall />
            <GreenBall />
          </BallContainer>

          <span>
            <span> Desafio </span>{' '}
          </span>
        </TerminalBar>
        <p>
          No projeto desenvolvido pela Rocketseat, foi proposto a criação de um
          sistema de delivery de café, utilizando como base um layout já
          elaborado no Figma. O desafio era integrar esse design ao código,
          aproveitando os benefícios do Context e Redux para gerenciar os dados
          e o estado da aplicação de forma eficiente.
          <BlinkCursor />
        </p>
      </TerminalContainer>

      <TerminalContainer>
        <TerminalBar>
          <BallContainer>
            <RedBall />
            <YellowBall />
            <GreenBall />
          </BallContainer>

          <span> Aprendizado </span>
        </TerminalBar>
        <p>
          O uso do Context no projeto de delivery de café foi uma oportunidade
          valiosa de aprendizado. Através dessa ferramenta, pude compartilhar
          informações dinâmicas entre as telas do aplicativo de forma eficiente.
          Aprendi como transmitir dados importantes, como tipos de café e
          preços, de maneira acessível em toda a aplicação. Essa experiência
          aprimorou minhas habilidades de desenvolvimento e fortaleceu minha
          compreensão do gerenciamento de estado.
          <BlinkCursor />
        </p>
      </TerminalContainer>
    </Container>
  )
}
