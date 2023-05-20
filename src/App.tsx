import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <StyledThemeProvider theme={theme}>
            <BrowserRouter>
              <Router />
              <GlobalStyle />
            </BrowserRouter>
          </StyledThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  )
}
