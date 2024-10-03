/* eslint-disable prettier/prettier */
import {
  AngryGrid,
  ArrowButton,
  ArrowGray,
  ArrowPhotoButton1,
  ArrowPhotoButton2,
  BorderDiv,
  Container,
  ContainerIndex,
  DivGrid0,
  DivGrid1,
  DivGrid10,
  DivGrid11,
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
  LinkDivGrid7,
  LinkGrid10,
  LinkGrid11,
  LogoContainers,
  PointIndex,
  SVG1,
  SVG2,
  WorkButton,
} from "./styles";
import React, { useState, useEffect, useRef } from "react";
import Academia from "../../assets/FotoAcademia.jpg";
import Bone from "../../assets/Bone.png";
import Sorriso from "../../assets/Sorriso.png";

import Estacio from "../../assets/EstacioLogo.png";
import Discover from "../../assets/Discover.png";
import Html from "../../assets/Html.png";
import Css from "../../assets/Css.svg";
import JavaScript from "../../assets/javascript.svg";
import Ignite from "../../assets/Ignite.png";
import ReactJs from "../../assets/React.Js.png";
import ReactNative from "../../assets/ReactNative.png";
import NodeJs from "../../assets/NodeJs.png";
import TypeScript from "../../assets/Typescript.png";
import Styled from "../../assets/styled.png";
import Next from "../../assets/NextJs.png";
import Vite from "../../assets/Vite.svg";
import Git from "../../assets/GitHub-transformed.png";
import Kedin from "../../assets/Linkedin.png";
import Insta from "../../assets/Instagram.png";

import GitHubCalendar from "react-github-calendar";
import MapLibreMap from "./Components/Map/Map";

import DrawingBoard from "./Components/Canvas";

import { DashBoard } from "./Components/Dashboard";
import { ArrowRight, CaretLeft, CaretRight, Square } from "phosphor-react";
import { Future } from "./Components/Future";
import { Music } from "./Components/Music";
import { ProjectDisplayPort } from "./Components/ProjectDisplayPort";
import { ProjectDisplayLP } from "./Components/ProjectDisplayLP";
import { ProjectDisplayCD } from "../Projects/ProjectDisplayLP";
import { Link } from "react-router-dom";

export function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [currentImage, setCurrentImage] = useState(Academia);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        if (prevImage === Academia) {
          return Bone;
        } else if (prevImage === Bone) {
          return Sorriso;
        } else {
          return Academia;
        }
      });
    }, 12000);

    return () => clearInterval(interval);
  }, []);
  const handleBackClick = () => {
    setCurrentImage((prevImage) => {
      if (prevImage === Academia) {
        return Sorriso;
      } else if (prevImage === Bone) {
        return Academia;
      } else {
        return Bone;
      }
    });
  };

  const handleForwardClick = () => {
    setCurrentImage((prevImage) => {
      if (prevImage === Academia) {
        return Bone;
      } else if (prevImage === Bone) {
        return Sorriso;
      } else {
        return Academia;
      }
    });
  };
  const handleMouseMove1 = (e: React.MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };
  const divRefs = useRef<React.RefObject<HTMLDivElement>[]>([
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
  ]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    divRefs.current.forEach((divRef) => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Agora divRef.current é do tipo HTMLDivElement
        divRef.current.style.setProperty("--x", `${x}px`);
        divRef.current.style.setProperty("--y", `${y}px`);
      }
    });
  };
  // const handleMouseMove = (e: MouseEvent) => {
  //   divRefs.current.forEach((divRef) => {
  //     if (divRef.current) {
  //       const rect = divRef.current.getBoundingClientRect();
  //       // Calcula o centro da div
  //       const centerX = rect.left + rect.width / 2;
  //       const centerY = rect.top + rect.height / 2;
  //       // Calcula a distância do mouse até o centro da div
  //       const distanceX = Math.abs(e.clientX - centerX);
  //       const distanceY = Math.abs(e.clientY - centerY);
  //       // Calcula a distância total como uma soma das distâncias X e Y
  //       const distance = Math.sqrt(
  //         distanceX * distanceX + distanceY * distanceY
  //       );

  //       // Aplica estilos com base na distância. Exemplo: altera a opacidade
  //       // Quanto menor a distância, maior a opacidade (você pode ajustar os valores conforme necessário)
  //       const opacity = Math.max(0, 1 - distance / 500); // 500 é um valor arbitrário para o "raio de ação"
  //       divRef.current.style.opacity = `${opacity}`;

  //       // Você pode adicionar mais estilos com base na distância aqui
  //     }
  //   });
  // };
  return (
    <>
      <AngryGrid onMouseMove={handleMouseMove}>
        <DivGrid0 ref={divRefs.current[0]}>
          <h1>Gabriel Alves</h1>
          <span>Desenvolvedor front-end</span>
          <p>
            Olá! Sou o Gabriel e busco oportunidades em empresas onde possa
            contribuir e evoluir como desenvolvedor.
          </p>
          <WorkButton>
            <Link to="/about">
              <span>Saiba mais</span>
            </Link>
          </WorkButton>
        </DivGrid0>
        <DivGrid1 ref={divRefs.current[1]}>
          {/* <Cube /> */} <DashBoard />
        </DivGrid1>
        <DivGrid2 ref={divRefs.current[2]}>
          <img src={currentImage} alt="" />
          <ContainerIndex>
            <ArrowPhotoButton1 onClick={handleBackClick} />
            <SVG1 onClick={handleBackClick}>
              <CaretLeft size={20} weight="bold" />
            </SVG1>

            <PointIndex active={currentImage === Academia} />
            <PointIndex active={currentImage === Bone} />
            <PointIndex active={currentImage === Sorriso} />

            <SVG2 onClick={handleForwardClick}>
              <CaretRight size={20} weight="bold" />
            </SVG2>
            <ArrowPhotoButton2 onClick={handleForwardClick} />
          </ContainerIndex>
        </DivGrid2>
        <DivGrid3 ref={divRefs.current[3]}>
          <MapLibreMap />
        </DivGrid3>
        <DivGrid4 ref={divRefs.current[4]}>
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
        <DivGrid5 ref={divRefs.current[5]}>
          <Future />
        </DivGrid5>
        <DivGrid6 ref={divRefs.current[6]}>
          <Music />
        </DivGrid6>
        <LinkDivGrid7 href="https://github.com/gabriel06089">
          {" "}
          <DivGrid7 ref={divRefs.current[7]}>
            <img src={Git} alt="" />
            <ArrowButton>
              {" "}
              <ArrowRight weight="bold" size={30} />
            </ArrowButton>
          </DivGrid7>
        </LinkDivGrid7>
        <DivGrid8 ref={divRefs.current[8]}>
          <ProjectDisplayPort />
        </DivGrid8>
        <DivGrid9 ref={divRefs.current[9]}>
          <ProjectDisplayCD />
        </DivGrid9>
        <LinkGrid10 href="www.linkedin.com/in/gabriel-alves-araujo0608">
          <DivGrid10 ref={divRefs.current[10]}>
            <img src={Kedin} alt="" />
            <ArrowRight weight="bold" size={30} />
            <ArrowGray />
          </DivGrid10>
        </LinkGrid10>

        <LinkGrid11 href="https://www.instagram.com/gabriel.a1ves/">
          <DivGrid11 ref={divRefs.current[11]}>
            <img src={Insta} alt="" />
            <ArrowRight weight="bold" size={30} />
            <ArrowGray />
          </DivGrid11>
        </LinkGrid11>
      </AngryGrid>
      <Container>{/* <GitHubCalendar username="gabriel06089" /> */}</Container>
    </>
  );
}
