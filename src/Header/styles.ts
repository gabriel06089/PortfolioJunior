import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: 4rem;
`
export const NavBar = styled.div`
  display: flex;

  gap: 0.5rem;

  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  margin-left: 3rem;

  box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme['Secondary-Button']};
  width: auto;
  padding: 4px 5px 4px 5px;
  span {
    font-weight: bold;
    color: ${(props) => props.theme.Primary};
  }
`
export const NavButton = styled.button`
  outline: none;
  border: none;
  padding: 6px 8px 6px 8px;
  background-color: ${(props) => props.theme['Secondary-Button']};
  cursor: pointer;
  border-radius: 100px;

  &.selected {
    background-color: ${(props) => props.theme.Secondary};
    width: auto;
    height: auto;
    border-radius: 100px;
    pointer-events: none;
  }

  transition: opacity 0.2s;

  &:not(.selected):hover {
    opacity: 0.2;
  }
`
export const ContactButton = styled.button`
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
  border: 2.5px solid transparent;

  padding: 0.5rem 0.8rem;
  span {
    font-weight: bold;
    color: ${(props) => props.theme.Primary};
  }
`
