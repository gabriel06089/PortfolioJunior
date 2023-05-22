import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`

export const AngryGrid = styled.div`
  display: grid;

  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
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
`
export const DivGrid0 = styled(GridBase)`
  grid-row-start: 1;
  grid-column-start: 1;

  grid-row-end: 2;
  grid-column-end: 3;

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
`
export const WorkButton = styled.button`
  margin-top: 1rem;

  border-style: solid;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to top right,
        ${(props) => props.theme.UltraContrast},
        ${(props) => props.theme.Contrast}
      )
      border-box;
  border-radius: 100px;
  border: 2px solid transparent;

  padding: 0.3rem 0.8rem;
  span {
    font-family: 'Inter';
    font-weight: bold;
    font-size: 1em;
    color: ${(props) => props.theme.Primary};
  }
`

export const DivGrid1 = styled(GridBase)`
  grid-row-start: 2;
  grid-column-start: 1;

  grid-row-end: 4;
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
  grid-row-start: 1;
  grid-column-start: 3;

  grid-row-end: 2;
  grid-column-end: 4;
  width: 100%;

  position: relative;

  overflow: hidden;
  img {
    position: absolute;

    transform: translateY(-50%);
    transform: translateX(0%);
    width: auto;
    height: 100%;
    object-fit: cover;
  }
`

export const DivGrid3 = styled(GridBase)`
  grid-row-start: 2;
  grid-column-start: 2;

  grid-row-end: 3;
  grid-column-end: 4;
`

export const DivGrid4 = styled(GridBase)`
  grid-row-start: 1;
  grid-column-start: 4;

  grid-row-end: 3;
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
  grid-column-start: 2;

  grid-row-end: 4;
  grid-column-end: 3;
`

export const DivGrid6 = styled(GridBase)`
  grid-row-start: 3;
  grid-column-start: 3;

  grid-row-end: 4;
  grid-column-end: 5;
`

export const DivGrid7 = styled(GridBase)`
  grid-row-start: 4;
  grid-column-start: 1;

  grid-row-end: 5;
  grid-column-end: 3;
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
  grid-row-start: 5;
  grid-column-start: 1;

  grid-row-end: 6;
  grid-column-end: 2;
`

export const DivGrid11 = styled(GridBase)`
  grid-row-start: 5;
  grid-column-start: 2;

  grid-row-end: 6;
  grid-column-end: 3;
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
