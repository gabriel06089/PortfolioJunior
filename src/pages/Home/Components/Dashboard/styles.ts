import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`
export const Title = styled.div`
  margin: 1rem;
`
export const InfoContainer = styled.div`
  margin: 1rem;
  h1 {
    color: ${(props) => props.theme.Primary};
    margin-bottom: 0.5rem;
  }
  p {
    color: ${(props) => props.theme.Primary};
    opacity: 0.7;
  }
`
export const NavBar = styled.div`
  display: flex;

  gap: 0.5rem;
  margin: 0.5rem;
  margin-bottom: 1.5rem;
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
