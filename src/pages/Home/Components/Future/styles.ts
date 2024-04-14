import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
`
export const Title = styled.h1`
  @media (max-width: 600px) {
    font-size: 2em;
  }
`
export const Desc = styled.span`
  margin-inline: 2rem;
  text-align: center;
  @media (max-width: 600px) {
    margin-inline: 1.5rem;
    font-size: 1em;
  }
`
export const Button = styled.button`
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
  border: 2.5px solid transparent;
  box-shadow: 1px 2px 5px ${(props) => props.theme.Secondary};
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
  padding: 0.5rem 0.8rem;
  span {
    font-family: 'Inter';
    font-weight: bold;
    color: ${(props) => props.theme.Primary};
    @media (max-width: 600px) {
      border-radius: 100px;
      border: 2.5px solid transparent;

      font-size: 1.2em;
    }
  }
`
