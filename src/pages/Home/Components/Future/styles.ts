import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
`
export const Title = styled.h1``
export const Desc = styled.span`
  margin-inline: 2rem;
  text-align: center;
  margin-block: 1rem;
`
export const Button = styled.button`
  border-style: solid;
  background-color: ${(props) => props.theme['Secondary-Button']};
  border-radius: 100px;
  border: 3px solid ${(props) => props.theme.Secondary};
  box-shadow: 1px 2px 5px ${(props) => props.theme.Secondary};

  padding: 0.4rem 0.5rem;
  span {
    font-family: 'Inter';
    font-weight: bold;
    color: ${(props) => props.theme.Primary};
  }
`
