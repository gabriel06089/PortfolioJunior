import {
  ButtonView,
  Container,
  ContainerName,
  ContainerPort,
  ImgContainer,
  Title,
} from './styles'
import Portfolio from '../../../../assets/Portfolio.png'
import Type from '../../../../assets/Typescript.png'
import CSS from '../../../../assets/Css.svg'
import Styled from '../../../../assets/styled.png'
import React from '../../../../assets/ReactLogoClean.png'
import Vite from '../../../../assets/Vite.svg'
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
        <img src={Portfolio} alt="" />
      </ContainerPort>
      <ButtonView>
        <span>Ver o projeto</span>
      </ButtonView>
      <p>Sobre o Projeto</p>
    </Container>
  )
}
