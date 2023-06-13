import styled from 'styled-components'
export const Container = styled.div`
  margin-inline: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-weight: bold;
    letter-spacing: -1px;
  }
`
export const ContainerPort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 20rem;
    width: 14rem;
    object-fit: cover;
    object-position: 26%;
    border-radius: 16px;
  }
`
export const ContainerName = styled.div`
  img {
    height: 2.8rem;
    width: 2.8rem;
    object-fit: contain;
  }
  span {
    opacity: 0.5;

    letter-spacing: -0.5px;
  }
`
export const ImgContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`
export const Title = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  align-self: flex-start;
  span {
    opacity: 0.5;
    letter-spacing: -0.5px;
  }
  h1 {
    margin-top: 0.2rem;
    font-size: 1.8rem;
  }
`
export const ButtonView = styled.div`
  border-style: solid;
  background-color: ${(props) => props.theme.Secondary};
  border-radius: 100px;
  border: 2.5px solid transparent;

  padding: 0.8rem 1rem;
  margin-block: 1rem;
  span {
    font-family: 'Inter';
    font-weight: bold;
    color: ${(props) => props.theme.Primary};
  }
`
