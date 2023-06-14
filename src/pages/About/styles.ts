import styled, { keyframes } from 'styled-components'
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

  grid-template-rows: 20rem 20rem 20rem 20rem 20rem 20rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-inline: 5rem;
  gap: 1rem;
  position: relative;
  max-width: 100%;
  column-gap: 24px;
  row-gap: 24px;
  margin-bottom: 80px;
`
const GridBase = styled.div`
  border-radius: 2rem;
  background-color: ${(props) => props.theme['Secondary-Button']};
  box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.1);
  width: 100%;
  opacity: 0.1;
`
export const DivGrid0 = styled(GridBase)`
  grid-row-start: 1;
  grid-column-start: 1;

  grid-row-end: 3;
  grid-column-end: 3;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  h1 {
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.UltraContrast},
      ${(props) => props.theme.Contrast}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: 4rem;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.5em;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1rem;
    width: 90%;
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'Inter';
  }
`
export const WorkButton = styled.button`
  margin-top: 1rem;

  border-style: solid;
  background: linear-gradient(
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

  padding: 0.5rem 0.8rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
  span {
    font-family: 'Inter';
    font-weight: bold;
    font-size: 1.5rem;
    color: ${(props) => props.theme.Primary};
  }
`

export const DivGrid1 = styled(GridBase)`
  /*
 *
 */
  grid-row-start: 4;
  grid-column-start: 1;

  grid-row-end: 6;
  grid-column-end: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
export const ContainerAbsolute = styled.div`
  position: absolute;
  display: flex;
`
export const DivGrid2 = styled(GridBase)`
  grid-row-start: 2;
  grid-column-start: 3;
  opacity: 1;
  grid-row-end: 3;
  grid-column-end: 4;
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
  grid-row-start: 1;
  grid-column-start: 3;
  opacity: 1;
  grid-row-end: 1;
  grid-column-end: 5;

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
`
export const Square = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: red;
`
export const DivGrid4 = styled(GridBase)`
  grid-row-start: 4;
  grid-column-start: 2;

  grid-row-end: 6;
  grid-column-end: 2;
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
  grid-row-start: 2;
  grid-column-start: 4;
  opacity: 1;
  grid-row-end: 2;
  grid-column-end: 4;
`

export const DivGrid6 = styled(GridBase)`
  grid-row-start: 6;
  grid-column-start: 2;

  grid-row-end: 6;
  grid-column-end: 4;
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
  grid-row-start: 4;
  grid-column-start: 2;
  opacity: 1;
  grid-row-end: 3;
  grid-column-end: 4;
`

export const DivGrid8 = styled(GridBase)`
  grid-row-start: 4;
  grid-column-start: 3;

  grid-row-end: 6;
  grid-column-end: 4;
`

export const DivGrid9 = styled(GridBase)`
  grid-row-start: 4;
  grid-column-start: 4;

  grid-row-end: 6;
  grid-column-end: 5;
`

export const DivGrid10 = styled(GridBase)`
  position: relative;
  opacity: 1;
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
  grid-row-start: 3;
  grid-column-start: 1;
  opacity: 1;
  grid-row-end: 3;
  grid-column-end: 1;
`

export const DivGrid11 = styled(GridBase)`
  height: 100%;
  width: auto;
  position: relative;
  opacity: 1;
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
  grid-row-start: 3;
  grid-column-start: 4;

  grid-row-end: 3;
  grid-column-end: 4;
`
export const DivGrid12 = styled(GridBase)`
  grid-row-start: 6;
  grid-column-start: 1;

  grid-row-end: 7;
  grid-column-end: 2;
`

export const DivGrid13 = styled(GridBase)`
  grid-row-start: 6;
  grid-column-start: 2;

  grid-row-end: 7;
  grid-column-end: 4;
`

export const DivGrid14 = styled(GridBase)`
  grid-row-start: 6;
  grid-column-start: 4;

  grid-row-end: 7;
  grid-column-end: 5;
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
