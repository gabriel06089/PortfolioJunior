import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 3rem;
  padding: 1rem;
  margin-inline: 1rem;
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    height: 15rem;
    width: 15rem;
    border-radius: 10px;
    object-fit: cover;
  }
`
export const Title = styled.h1`
  font-size: 1.2rem;
`
export const Author = styled.span``
export const LogoContainer = styled.div`
  justify-content: space-between;
  align-items: center;

  img {
    position: relative;
    top: -0.5rem;
    left: -0.4rem;
    height: 4rem;
    width: 4rem;
  }
`
export const GifContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ff0000;
  margin-bottom: 1rem;
  img {
    border-radius: 0;
  }
`
