import styled from 'styled-components'
interface PointIndexProps {
  active?: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  a {
    height: 100%;
    width: 100%;
  }
`

export const AngryGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 20rem 20rem 20rem 20rem 20rem 20rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-inline: 5rem;
  gap: 1rem;
  position: absolute;
  max-width: 100%;
  column-gap: 24px;
  row-gap: 24px;
  column-gap: 1.2rem;
  row-gap: 1.2rem;
  padding-bottom: 5rem;

  @media (max-width: 1024px) {
    transform: scale(73%);
    transform-origin: center;
    margin-top: -16rem;
    padding-bottom: 5rem;
  }
  @media (max-width: 768px) {
    transform: scale(55%);
    transform-origin: center;
    margin-top: -29rem; // Ajuste este valor conforme necessário
    padding-bottom: 5rem;
  }
  @media (max-width: 690px) {
    transform: scale(100%);
    transform-origin: center;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    margin-top: 0.5rem; // Ajuste este valor conforme necessário
  }
  @media (max-width: 646px) {
    transform: scale(95%);
    transform-origin: center;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    margin-top: -5rem; // Ajuste este valor conforme necessário
    max-width: 100%;
    padding-bottom: 5rem;
  }
  @media (max-width: 605px) {
    transform: scale(88%);
    margin-top: -13rem;
  }
  @media (max-width: 567px) {
    transform: scale(80%);
    margin-top: -22.5rem;
  }
  @media (max-width: 519px) {
    transform: scale(76%);
    margin-top: -27.3rem;
  }
  @media (max-width: 495px) {
    transform: scale(72%);
    margin-top: -31.7rem;
  }
  @media (max-width: 469px) {
    transform: scale(68%);
    margin-top: -36.7rem;
  }
  @media (max-width: 441px) {
    transform: scale(64%);
    margin-top: -41.4rem;
  }
  @media (max-width: 425px) {
    transform: scale(60%);
    transform-origin: center;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    margin-top: -46.2rem; // Ajuste este valor conforme necessário
    max-width: 100%;
    padding-bottom: 5rem;
  }
  @media (max-width: 400px) {
    transform: scale(57.5%);
    transform-origin: center;
    margin-top: -49rem; // Ajuste conforme necessário
  }

  @media (max-width: 385px) {
    transform: scale(55%);
    transform-origin: center;
    margin-top: -51.9rem; // Ajuste conforme necessário
  }
  @media (max-width: 375px) {
    transform: scale(55%);
    transform-origin: center;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    margin-top: -52rem; // Ajuste este valor conforme necessário
    max-width: 100%;
    padding-bottom: 5rem;
  }
  @media (max-width: 327px) {
    transform: scale(48%);
    transform-origin: center;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    margin-top: -55rem; // Ajuste este valor conforme necessário
    max-width: 100%;
    padding-bottom: 5rem;
  }
  @media (max-width: 320px) {
    transform: scale(47%);
    transform-origin: center;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    margin-top: -61rem; // Ajuste este valor conforme necessário
    max-width: 100%;
    padding-bottom: 5rem;
  }
`
const GridBase = styled.div`
  border-radius: 2rem;
  background-color: ${(props) => props.theme['Secondary-Button']};
  box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.1);
  width: 100%;
  opacity: 0.2;
`
export const DivGrid0 = styled(GridBase)`
  grid-row-start: 3;
  grid-column-start: 2;

  grid-row-end: 3;
  grid-column-end: 4;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  h1 {
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.UltraContrast},
      ${(props) => props.theme.Contrast}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: 4em;
  }

  span {
    font-size: 1.5em;
  }
  p {
    font-size: 0.8em;
    width: 60%;
    text-align: center;
  }
  @media (max-width: 690px) {
    grid-row-start: 3;
    grid-column-start: 1;

    grid-row-end: 3;
    grid-column-end: 3;
    height: 20rem;
    h1 {
      font-size: 4em;
    }

    span {
      font-size: 2.2em;
    }
    p {
      font-size: 1em;
      width: 100%;
      text-align: center;
    }
  }
`
export const WorkButton = styled.button`
  margin-top: 1rem;

  border-style: solid;
  background:
    linear-gradient(
        ${(props) => props.theme['Secondary-Button']},
        ${(props) => props.theme['Secondary-Button']}
      )
      padding-box,
    linear-gradient(
        to top right,
        ${(props) => props.theme.UltraContrast},
        ${(props) => props.theme.Contrast}
      )
      border-box;
  border-radius: 100px;
  border: 2px solid transparent;
  box-shadow: 1px 2px 5px ${(props) => props.theme.Secondary};
  padding: 0.3rem 0.8rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
  span {
    font-family: 'Inter';
    font-weight: bold;
    font-size: 1em;
    color: ${(props) => props.theme.Primary};
  }
  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`

export const DivGrid1 = styled(GridBase)`
  grid-row-start: 4;
  grid-column-start: 4;
  opacity: 1;
  grid-row-end: 6;
  grid-column-end: 4;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 690px) {
    grid-row-start: 6;
    grid-column-start: 1;
    grid-row-end: span 2; // Isso fará com que o elemento ocupe duas linhas
    grid-column-end: 1;
    height: 40rem;
  }
`
export const ContainerAbsolute = styled.div`
  position: absolute;
  display: flex;
`
export const DivGrid2 = styled(GridBase)`
  grid-row-start: 6;
  grid-column-start: 1;

  grid-row-end: 6;
  grid-column-end: 1;
  width: 100%;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  transition: background-image 0.5s ease-in-out;
  img {
    display: block;
    position: absolute;
    width: 18.5rem;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 690px) {
    grid-row-start: 10;
    grid-column-start: 2;

    grid-row-end: 10;
    grid-column-end: 2;
    height: 20rem;
    img {
      width: auto;
      height: 100%;
    }
  }
`
export const ContainerIndex = styled.div`
  display: flex;
  align-items: center;

  position: absolute;

  gap: 0.5rem;
  bottom: 1rem;
  transition: transform 0.5s ease-in-out;
`
export const SVG1 = styled.div`
  svg {
    color: white;
    position: absolute;

    right: 7.9rem;
    bottom: 1.4rem;
    z-index: 99;
  }
`
export const SVG2 = styled.div`
  svg {
    color: white;
    position: absolute;

    left: 7.9rem;
    bottom: 1.4rem;
    z-index: 99;
  }
`
export const ArrowPhotoButton1 = styled.button`
  height: 3rem;
  width: 3rem;
  background-color: black;

  border: none;
  outline: none;
  border-radius: 50%;
  position: absolute;
  opacity: 0.3;
  position: absolute;

  right: 7rem;
  bottom: 0.5rem;
  &:hover {
    outline: 10px solid rgba(255, 255, 255, 0.5);
  }
  transition: all 0.5s;
`
export const ArrowPhotoButton2 = styled.button`
  height: 3rem;
  width: 3rem;
  background-color: black;

  border: none;
  outline: none;
  border-radius: 50%;
  position: absolute;
  opacity: 0.3;
  left: 7rem;
  bottom: 0.5rem;
  &:hover {
    outline: 10px solid rgba(255, 255, 255, 0.5);
  }
  transition: all 0.5s;
`
export const PointIndex = styled.div<PointIndexProps>`
  height: 0.8rem;
  width: 0.8rem;

  border: none;
  border-radius: 50%;
  z-index: 99;
  opacity: 0.8;
  background-color: ${(props) => (props.active ? 'whitesmoke' : 'gray')};
  margin-bottom: 1.5rem;
`

export const DivGrid3 = styled(GridBase)`
  grid-row-start: 6;
  grid-column-start: 2;

  grid-row-end: 5;
  grid-column-end: 4;

  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 33px;
    height: 33px;
    background-color: ${(props) => props.theme.Primary};
    border-radius: 100% 0 0 0;
    z-index: -1;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 33px;
    height: 33px;
    background-color: ${(props) => props.theme.Primary};
    border-radius: 0 0 100px 0;
    z-index: -1;
  }
  &::before {
    top: 0;
    right: 0;
  }
  @media (max-width: 690px) {
    grid-row-start: 11;
    grid-column-start: 1;

    grid-row-end: 11;
    grid-column-end: 3;
    height: 20rem;
  }
`
export const Square = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: red;
`
export const DivGrid4 = styled(GridBase)`
  grid-row-start: 2;
  grid-column-start: 4;
  opacity: 1;
  grid-row-end: 4;
  grid-column-end: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  h1 {
    align-self: center;
    margin-bottom: 1rem;
  }
  p {
    margin: 1rem;
    margin-left: 2.5rem;
    opacity: 0.8;
    font-size: 0.8rem;
  }
  @media (max-width: 690px) {
    grid-row-start: 6;
    grid-column-start: 2;
    grid-row-end: span 2;
    grid-column-end: 2;
    height: 40rem;
  }
`
export const LearningContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: row;

  align-items: center;

  img {
    height: 2.1rem;
    width: 2.1rem;
    margin-right: 0.5rem;
  }
`
export const Line = styled.div`
  width: 100%;
  height: 2px;
  opacity: 0.2;
  background-color: black;
  border-radius: 20px;
  bottom: 0;
  margin: 0.5rem 0;
`
export const LogoContainers = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2.5rem;
  margin: 0.5rem 2.5rem;
  img {
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
  }
`
export const DivGrid5 = styled(GridBase)`
  grid-row-start: 3;
  grid-column-start: 1;
  opacity: 1;
  grid-row-end: 4;
  grid-column-end: 1;
  @media (max-width: 690px) {
    grid-row-start: 5;
    grid-column-start: 1;

    grid-row-end: 5;
    grid-column-end: 1;
    height: 20rem;
  }
`

export const DivGrid6 = styled(GridBase)`
  grid-row-start: 4;
  grid-column-start: 2;

  grid-row-end: 4;
  grid-column-end: 4;
  @media (max-width: 690px) {
    grid-row-start: 9;
    grid-column-start: 1;

    grid-row-end: 9;
    grid-column-end: 3;
  }
`

export const DivGrid7 = styled(GridBase)`
  position: relative;
  background-color: #171515;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;

  img {
    height: 7rem;
    width: 7rem;
  }
`
export const LinkDivGrid7 = styled.a`
  grid-row-start: 1;
  grid-column-start: 4;

  grid-row-end: 1;
  grid-column-end: 4;

  @media (max-width: 690px) {
    grid-row-start: 4;
    grid-column-start: 1;

    grid-row-end: 4;
    grid-column-end: 1;
    height: 20rem;
  }
`

export const DivGrid8 = styled(GridBase)`
  grid-row-start: 1;
  grid-column-start: 1;
  opacity: 1;
  grid-row-end: 3;
  grid-column-end: 1;
  @media (max-width: 690px) {
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: span 2;
    grid-column-end: 1;
    height: 40rem;
  }
`

export const DivGrid9 = styled(GridBase)`
  grid-row-start: 1;
  grid-column-start: 2;
  opacity: 1;
  grid-row-end: 3;
  grid-column-end: 2;
  @media (max-width: 690px) {
    grid-row-start: 1;
    grid-column-start: 2;

    grid-row-end: span 2;
    grid-column-end: 2;
    height: 40rem;
  }
`

export const DivGrid10 = styled(GridBase)`
  grid-row-start: 5;
  grid-column-start: 1;
  opacity: 1;
  grid-row-end: 6;
  grid-column-end: 2;

  position: relative;

  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0077b5;

  img {
    height: 7rem;
    width: 7rem;
  }
  svg {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    color: white;
    z-index: 99;
  }
`
export const LinkGrid10 = styled.a`
  grid-row-start: 5;
  grid-column-start: 1;

  grid-row-end: 6;
  grid-column-end: 2;
  @media (max-width: 690px) {
    grid-row-start: 10;
    grid-column-start: 1;

    grid-row-end: 10;
    grid-column-end: 1;
    height: 20rem;
  }
`

export const DivGrid11 = styled(GridBase)`
  grid-row-start: 5;
  grid-column-start: 2;

  grid-row-end: 6;
  grid-column-end: 3;
  height: 100%;
  width: auto;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #f7786b 45%,
    #cc1d80 60%,
    #285aeb 90%
  );
  img {
    height: 7rem;
    width: 7rem;
  }
  svg {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    color: white;
    z-index: 99;
  }
`
export const LinkGrid11 = styled.a`
  grid-row-start: 4;
  grid-column-start: 1;

  grid-row-end: 4;
  grid-column-end: 1;
  @media (max-width: 690px) {
    grid-row-start: 8;
    grid-column-start: 1;

    grid-row-end: 8;
    grid-column-end: 3;
    height: 20rem;
  }
`

export const ArrowButton = styled.button`
  border-radius: 100%;
  height: 3rem;
  width: 3rem;

  background-color: #000000;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 1rem;
  right: 1rem;

  svg {
    color: white;
  }
  &:hover {
    outline: 10px solid rgba(255, 255, 255, 0.5);
  }
  transition: all 0.5s;
`
export const ArrowGray = styled(ArrowButton)`
  background-color: #000000;
  opacity: 0.2;

  img {
    opacity: 1;
  }
  &:hover {
    outline: 10px solid rgba(255, 255, 255, 0.5);
    transition: all 0.2s ease;
  }
`
export const DivGridExtra = styled(GridBase)`
  grid-row-start: 1;
  grid-column-start: 3;
  opacity: 1;
  grid-row-end: 3;
  grid-column-end: 3;
  @media (max-width: 690px) {
    grid-row-start: 4;
    grid-column-start: 2;

    grid-row-end: span 2;
    grid-column-end: 2;
  }
`
