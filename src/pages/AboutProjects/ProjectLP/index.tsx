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
import LP from '../../../assets/LPPAge.png'
import Java from '../../../assets/Javascript.svg'
import Css from '../../../assets/Css.svg'

import Styled from '../../../assets/css-modules-logo.png'
import Vite from '../../../assets/Vite.svg'
import Git from '../../../assets/GitHub-transformed.png'
import ReactLogo from '../../../assets/ReactLogoClean.png'
import LocaWeb from '../../../assets/LocaWeb.png'

export function ProjectAboutLP() {
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
          <span> Bezerra Neto LP</span>
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

      <h1>Landing Page</h1>

      <ImgContainer>
        <img src={LP} alt="" />
      </ImgContainer>
      <h1>Stack Tecnológico</h1>

      <StackContainer>
        <img src={Css} alt="" />
        <img src={Styled} alt="" />
        <img src={Java} alt="" />
        <img src={Vite} alt="" />
        <img src={Git} alt="" />
        <img src={ReactLogo} alt="" />
        <img src={LocaWeb} alt="" />
      </StackContainer>

      <TerminalContainer>
        <TerminalBar>
          <BallContainer>
            <RedBall />
            <YellowBall />
            <GreenBall />
          </BallContainer>

          <span>
            <span>Estratégia </span>{' '}
          </span>
        </TerminalBar>
        <p>
          Neste projeto, dediquei-me a uma análise aprofundada para transformar
          ideias em resultados tangíveis. O primeiro passo crucial foi
          compreender a identidade da empresa e os objetivos do cliente.
          Realizei uma pesquisa detalhada, examinando o mercado, o público-alvo
          e as tendências do setor jurídico. Essa análise estratégica permitiu
          identificar as melhores oportunidades para posicionar a empresa de
          forma única e atrativa.
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

          <span> Design </span>
        </TerminalBar>
        <p>
          Ao criar a landing page, foquei em um design profissional que
          transmitisse confiança e profissionalismo. Trabalhando em colaboração
          com o cliente, selecionei cuidadosamente as cores que representam a
          identidade da empresa de advocacia, garantindo uma harmonia visual
          atraente. Utilizei formas e elementos gráficos que refletem a
          seriedade e a credibilidade do escritório. O resultado foi um design
          profissional e cativante, capaz de chamar a atenção dos visitantes
          desde o primeiro momento.
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

          <span>Chamadas</span>
        </TerminalBar>
        <p>
          A landing page foi projetada para incentivar os visitantes a agir de
          forma decisiva. Por meio de chamadas de ação estratégicas e linguagem
          persuasiva, orientei os visitantes a entrar em contato, agendar
          consultas e explorar os serviços do escritório de advocacia. O
          resultado foi uma experiência envolvente e direcionada à conversão,
          estimulando os visitantes a agir rapidamente e com eficácia
          <BlinkCursor />
        </p>
      </TerminalContainer>
    </Container>
  )
}
