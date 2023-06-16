import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import {
  BlurText,
  Container,
  ImgContainer,
  StackContainer,
  AnimatedText,
  TwinklingStar,
  TwinklingStar2,
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
import Folder from '../../../assets/Folder.png'
import Styled from '../../../assets/styled.png'
import Vite from '../../../assets/Vite.svg'
import Git from '../../../assets/GitHub-transformed.png'
import ReactLogo from '../../../assets/ReactLogoClean.png'
import Netlify from '../../../assets/netlify-logo-png-transparent.png'

const StyledBlurText = styled(BlurText)`
  filter: ${(props) => (props.isHovered ? 'blur(0)' : 'blur(5px)')};
`

export function ProjectAboutOS() {
  const [hoveredIndexes, setHoveredIndexes] = useState([-1, -1, -1])
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [starCoordinates, setStarCoordinates] = useState<
    { id: number; top: number; left: number }[]
  >([])

  const topRange = 35 // Define o intervalo de valores para o top
  const leftRange = 250 // Define o intervalo de valores para o left
  const parentTop = 0 // Posição superior do componente pai
  const parentLeft = 0 // Posição esquerda do componente pai
  const range = 80 // Intervalo de valores para as posições das estrelas

  const numberOfStars = 1 // Define o número de estrelas a serem exibidas

  const stars = Array.from({ length: numberOfStars }, (_, index) => ({
    id: index,
    top: parentTop + Math.floor(Math.random() * range) - range / 2,
    left: parentLeft + Math.floor(Math.random() * range) - range / 2,
  }))
  useEffect(() => {
    const numberOfStars = 1 // Define o número de estrelas a serem exibidas

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
  const alternateTopRange = 20 // Define o intervalo de valores para o top da nova estrela
  const alternateLeftRange = 200 // Define o intervalo de valores para o left da nova estrela

  const alternateStarCoordinates = Array.from(
    { length: numberOfStars },
    (_, index) => ({
      id: index,
      top:
        parentTop + Math.floor(Math.random() * (alternateTopRange + 1)) - -15,
      left:
        parentLeft + Math.floor(Math.random() * (alternateLeftRange + 1)) - 30,
    }),
  )

  const alternateTopRang2 = 20 // Define o intervalo de valores para o top da nova estrela
  const alternateLeftRange2 = 100 // Define o intervalo de valores para o left da nova estrela
  const alternateStarCoordinates2 = Array.from(
    { length: numberOfStars },
    (_, index) => ({
      id: index,
      top:
        Math.floor(Math.random() * (alternateTopRang2 + 2)) -
        alternateTopRang2 / 4,
      left:
        Math.floor(Math.random() * (alternateLeftRange2 + 2)) -
        alternateLeftRange2 / 20,
    }),
  )

  const handleMouseEnter = (index: number) => {
    const newHoveredIndexes = [...hoveredIndexes]
    newHoveredIndexes[index] = index
    setHoveredIndexes(newHoveredIndexes)
  }

  const handleMouseLeave = () => {
    setHoveredIndexes([-1, -1, -1])
  }
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMouseX(event.clientX)
    setMouseY(event.clientY)
  }

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

      <h1>Pórtfolio pessoal.</h1>

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
            <span>Sobre o Portfolio</span>{' '}
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

          <span> Destacar-se </span>
        </TerminalBar>
        <p>
          Destacar-se e criar um portfólio único pode ser um desafio. Durante o
          processo criativo, mergulhei de cabeça em cores vibrantes, layouts
          descolados e uma pitada de diversão. Cada decisão foi como encaixar
          peças de um quebra-cabeça, criando um resultado único e cheio de
          personalidade. Fiquei tão animado vendo meu portfólio tomando forma e
          ganhando vida.
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

          <span>Uma Solução Empolgante </span>
        </TerminalBar>
        <p>
          Investi um tempinho a mais para garantir que cada detalhe estivesse
          perfeito. Meu portfólio tinha que se destacar em meio à multidão e
          chamar a atenção das pessoas certas. Foi como vestir minha melhor
          roupa. Explore a mistura de criatividade e estratégia envolvida na
          criação de um portfólio único e cheio de personalidade.
          <BlinkCursor />
        </p>
      </TerminalContainer>
    </Container>
  )
}
