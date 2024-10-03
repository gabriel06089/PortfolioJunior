import { useState, useEffect } from "react";

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
  StyledLink,
} from "./styles";
import PlusFM from "../../../assets/PlusFM.png";
import Type from "../../../assets/Typescript.png";
import Css from "../../../assets/Css.svg";
import Java from "../../../assets/Javascript.svg";
import PlayStore from "../../../assets/playStore.png";
import AppStore from "../../../assets/appStore.png";
import WordPress from "../../../assets/WordPress.png";
import Styled from "../../../assets/styled.png";
import Php from "../../../assets/PHP.png";
import Git from "../../../assets/GitHub-transformed.png";
import ReactLogo from "../../../assets/ReactLogoClean.png";
import Netlify from "../../../assets/netlify-logo-png-transparent.png";

export function ProjectAboutFM() {
  const [starCoordinates, setStarCoordinates] = useState<
    { id: number; top: number; left: number }[]
  >([]);

  const topRange = 35;
  const leftRange = 250;

  useEffect(() => {
    const numberOfStars = 1;

    const interval = setInterval(() => {
      const coordinates: { id: number; top: number; left: number }[] =
        Array.from({ length: numberOfStars }, (_, index) => ({
          id: index,
          top: Math.floor(Math.random() * (topRange + 1)) - 15,
          left: Math.floor(Math.random() * (leftRange + 1)) - 30,
        }));
      setStarCoordinates(coordinates);
    }, 700);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <h1>
        <AnimatedText>
          <span> Plus FM</span>
          {starCoordinates.map((star) => (
            <div
              key={star.id}
              style={{
                position: "absolute",
                top: star.top,
                left: star.left,
              }}
            >
              <TwinklingStar size={22} weight="fill" />
            </div>
          ))}
        </AnimatedText>
      </h1>

      <h1>Projeto Web/Mobile</h1>

      <ImgContainer>
        <img src={PlusFM} alt="" />
      </ImgContainer>
      <h1>Stack Tecnológico</h1>

      <StackContainer>
        <img src={Css} alt="" />
        <img src={Styled} alt="" />
        <img src={Type} alt="" />
        <img src={Java} alt="" />
        <img src={Git} alt="" />
        <img src={ReactLogo} alt="" />
        <img src={Netlify} alt="" />
        <img src={AppStore} alt="" />
        <img src={PlayStore} alt="" />
        <img src={WordPress} alt="" />
        <img src={Php} alt="" />
      </StackContainer>

      <TerminalContainer>
        <TerminalBar>
          <BallContainer>
            <RedBall />
            <YellowBall />
            <GreenBall />
          </BallContainer>

          <span>
            <span>Sobre </span>{" "}
          </span>
        </TerminalBar>
        <p>
          Meu primeiro projeto foi a revitalização de um site antigo (veja no
          <StyledLink
            href="https://web.archive.org/web/20231130174254/https://www.plusfm.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;Wayback Machine
          </StyledLink>
          ). O objetivo foi trazer novidades e modificações para a plataforma,
          com um foco especial em integrar todas as rádios da rede,
          conectando-as aos municípios onde atuam. Além disso, o aplicativo da
          rádio foi refeito do zero, modernizando a experiência para os
          usuários. O site também incluiu um pequeno blog de entretenimento e
          programas da rádio, ampliando o conteúdo de forma inovadora.
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
          Este foi meu primeiro projeto: a revitalização de um site antigo (veja
          no Wayback Machine). O objetivo foi trazer novidades e modificações
          para a plataforma, com um foco especial em integrar todas as rádios da
          rede, conectando-as aos municípios onde atuam. Além disso, o
          aplicativo da rádio foi refeito do zero, modernizando a experiência
          para os usuários. O site também incluiu um pequeno blog de
          entretenimento e programas da rádio, ampliando o conteúdo de forma
          inovadora." Isso torna o texto mais pessoal e destaca a importância do
          projeto na sua trajetória
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
  );
}
