import {
  ButtonView,
  Container,
  ContainerName,
  ContainerPort,
  ImgContainer,
  Title,
} from "./styles";
import { Link } from "react-router-dom";
import Portfolio from "../../../../assets/Portfolio.png";
import Type from "../../../../assets/Typescript.png";
import CSS from "../../../../assets/Css.svg";
import Styled from "../../../../assets/styled.png";
import React from "../../../../assets/ReactLogoClean.png";
import Vite from "../../../../assets/Vite.svg";
export function ProjectDisplayPort() {
  return (
    <Container>
      <Title>
        <span>PROJETO</span>
        <h1>Portfolio(GaOS)</h1>
      </Title>
      <ContainerName>
        <span>STACK TECNOLÓGICO</span>
        <ImgContainer>
          <img src={CSS} alt="" />
          <img src={Styled} alt="" />
          <img src={React} alt="" />
          <img src={Type} alt="" />
          <img src={Vite} alt="" />
        </ImgContainer>
      </ContainerName>
      <ContainerPort>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={Portfolio} alt="" />
        </a>
      </ContainerPort>
      <a href="">
        <ButtonView>
          <span>Ver o projeto</span>
        </ButtonView>
      </a>
      <Link to="/aboutProjects/projectOS">
        <p>Sobre o Projeto</p>
      </Link>
    </Container>
  );
}
