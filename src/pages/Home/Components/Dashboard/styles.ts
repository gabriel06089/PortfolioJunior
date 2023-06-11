import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;
  margin: 1rem;
`
export const Title = styled.div`
  margin-inline: 1rem;
  margin-top: 1rem;
`
export const InfoContainer = styled.div`
  margin-inline: 1rem;
  h1 {
    color: ${(props) => props.theme.Primary};
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
  }
  p {
    color: ${(props) => props.theme.Primary};
    opacity: 0.7;
    margin-bottom: 0.5rem;
  }
`
export const NavBar = styled.div`
  display: flex;

  gap: 0.5rem;
  margin-inline: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 100px;
  justify-content: center;
  align-items: center;

  box-shadow: 0.5px 0.5px ${(props) => props.theme.Secondary};
  background-color: ${(props) => props.theme.Secondary};
  width: auto;
  padding: 4px 5px 4px 5px;
  span {
    font-weight: bold;
    color: ${(props) => props.theme.Primary};
  }
`
export const NavButton = styled.button<{ selected: boolean }>`
  outline: none;
  border: none;
  padding: 6px 8px 6px 8px;
  background-color: ${(props) =>
    props.selected ? props.theme['Secondary-Button'] : props.theme.Secondary};
  cursor: pointer;
  border-radius: 100px;
`
