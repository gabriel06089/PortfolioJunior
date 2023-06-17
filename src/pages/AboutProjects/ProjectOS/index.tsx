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
import Portfolio from '../../../assets/Portfolio.png'
import Type from '../../../assets/Typescript.png'
import Css from '../../../assets/Css.svg'

import Styled from '../../../assets/styled.png'
import Vite from '../../../assets/Vite.svg'
import Git from '../../../assets/GitHub-transformed.png'
import ReactLogo from '../../../assets/ReactLogoClean.png'
import Netlify from '../../../assets/netlify-logo-png-transparent.png'

export function ProjectAboutOS() {
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
          <span> Gabriel OS</span>
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

      <h1>Pórtfolio pessoal</h1>

      <ImgContainer>
        <img src={Portfolio} alt="" />
      </ImgContainer>
      <h1>Stack Tecnológico</h1>

      <StackContainer>
        <img src={Css} alt="" />
        <img src={Styled} alt="" />
        <img src={Type} alt="" />
        <img src={Vite} alt="" />
        <img src={Git} alt="" />
        <img src={ReactLogo} alt="" />
        <img src={Netlify} alt="" />
      </StackContainer>

      <TerminalContainer>
        <TerminalBar>
          <BallContainer>
            <RedBall />
            <YellowBall />
            <GreenBall />
          </BallContainer>

          <span>
            <span>Sobre </span>{' '}
          </span>
        </TerminalBar>
        <p>
          Meu portfólio é uma peça fundamental para mostrar quem sou e o que sou
          capaz de fazer. É como um reflexo digital do meu trabalho e paixão
          pela minha área. Nele, compartilho meus projetos mais incríveis,
          colocando minha criatividade e habilidades em destaque. Cada elemento
          foi cuidadosamente selecionado para transmitir minha personalidade e
          estilo único. Meu portfólio é uma representação autêntica do meu
          percurso e conquistas, e me enche de orgulho poder compartilhá-lo com
          o mundo. É a minha maneira de mostrar ao mercado o que posso oferecer
          e abrir as portas para novas e emocionantes oportunidades.
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

          <span> Personalidade </span>
        </TerminalBar>
        <p>
          Meu portfólio é construído com foco na transmissão de uma imagem
          profissional distinta. Cada elemento, desde a seleção de projetos até
          o design e layout, é cuidadosamente escolhido para destacar minhas
          habilidades e competências. Com uma abordagem estratégica e criativa,
          meu portfólio oferece uma visão autêntica da minha personalidade
          profissional, mostrando meu estilo único e capacidade de entregar
          resultados excepciona
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

          <span>Solução</span>
        </TerminalBar>
        <p>
          Dediquei tempo e empenho para assegurar que cada aspecto do meu
          portfólio estivesse impecável. Era fundamental que ele se sobressaísse
          em meio à multidão e capturasse a atenção das pessoas certas. Foi como
          selecionar cuidadosamente a vestimenta perfeita para causar uma ótima
          primeira impressão. Ao criar um portfólio único e cheio de
          personalidade, explorei a combinação entre criatividade e estratégia,
          resultando em uma solução recompensadora.
          <BlinkCursor />
        </p>
      </TerminalContainer>
    </Container>
  )
}
