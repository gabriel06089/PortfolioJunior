import {
  ButtonView,
  Container,
  ContainerName,
  ContainerPort,
  ImgContainer,
  Title,
} from './styles'
import LP from '../../../../assets/LP.png'
import Java from '../../../../assets/Javascript.svg'
import CSS from '../../../../assets/Css.svg'
import Module from '../../../../assets/css-modules-logo.png'
import React from '../../../../assets/ReactLogoClean.png'
import Vite from '../../../../assets/Vite.svg'
export function ProjectDisplayLP() {
  return (
    <Container>
      <Title>
        <span>PROJETO</span>
        <h1>Landing Page</h1>
      </Title>
      <ContainerName>
        <span>STACK TECNOLÓGICO</span>
        <ImgContainer>
          <img src={Java} alt="" />
          <img src={CSS} alt="" />
          <img src={React} alt="" />
          <img src={Vite} alt="" />
          <img src={Module} alt="" />
        </ImgContainer>
      </ContainerName>
      <a href=""></a>
      <ContainerPort>
        <img src={LP} alt="" />
      </ContainerPort>
      <a href="https://bezerranetoadvocacia.com">
        <ButtonView>
          <span>Ver o projeto</span>
        </ButtonView>
      </a>
      <a href="">
        <p>Sobre o Projeto</p>
      </a>
    </Container>
  )
}
