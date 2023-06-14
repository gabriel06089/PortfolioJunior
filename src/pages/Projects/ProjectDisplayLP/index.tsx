import {
  ButtonView,
  Container,
  ContainerName,
  ContainerPort,
  ImgContainer,
  Title,
} from './styles'
import Cafe from '../../../assets/cafe.png'
import Type from '../../../assets/Typescript.png'
import CSS from '../../../assets/Css.svg'
import Styled from '../../../assets/styled.png'
import React from '../../../assets/ReactLogoClean.png'
import Vite from '../../../assets/Vite.svg'
export function ProjectDisplayCD() {
  return (
    <Container>
      <Title>
        <span>PROJETO</span>
        <h1>Cofee Delivery</h1>
      </Title>
      <ContainerName>
        <span>STACK TECNOLÓGICO</span>
        <ImgContainer>
          <img src={Type} alt="" />
          <img src={CSS} alt="" />
          <img src={React} alt="" />
          <img src={Vite} alt="" />
          <img src={Styled} alt="" />
        </ImgContainer>
      </ContainerName>
      <a href=""></a>
      <ContainerPort>
        <img src={Cafe} alt="" />
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
