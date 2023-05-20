import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-text']};
  padding: 16px;
`
