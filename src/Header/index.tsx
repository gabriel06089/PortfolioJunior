import { useLocation } from 'react-router-dom'

import { ContactButton, Container, NavBar, NavButton } from './styles'
import { ThemeButton } from './components/ThemeButton'

export function Header() {
  const location = useLocation()

  return (
    <Container>
      <ThemeButton />
      <NavBar>
        <NavButton className={location.pathname === '/' ? 'selected' : ''}>
          <span>Sobre</span>
        </NavButton>
        <NavButton
          className={location.pathname === '/projects' ? 'selected' : ''}
        >
          <span>Projetos</span>
        </NavButton>
        <NavButton className={location.pathname === '/media' ? 'selected' : ''}>
          <span>Media</span>
        </NavButton>
      </NavBar>
      <ContactButton>Contato</ContactButton>
    </Container>
  )
}
