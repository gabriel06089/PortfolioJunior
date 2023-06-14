import { useLocation, useNavigate } from 'react-router-dom'

import { ContactButton, Container, NavBar, NavButton } from './styles'
import { ThemeButton } from './components/ThemeButton'

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleProjectsClick = () => {
    navigate('/projects')
  }

  const handleMediaClick = () => {
    navigate('/media')
  }
  const handleAllClick = () => {
    navigate('/')
  }
  const handleAboutClick = () => {
    navigate('/about')
  }
  return (
    <Container>
      <ThemeButton />
      <NavBar>
        <NavButton
          className={location.pathname === '/' ? 'selected' : ''}
          onClick={handleAllClick}
        >
          <span>Tudo</span>
        </NavButton>
        <NavButton
          className={location.pathname === '/projects' ? 'selected' : ''}
          onClick={handleProjectsClick}
        >
          <span>Projetos</span>
        </NavButton>
        <NavButton
          className={location.pathname === '/about' ? 'selected' : ''}
          onClick={handleAboutClick}
        >
          <span>Sobre</span>
        </NavButton>

        <NavButton
          className={location.pathname === '/media' ? 'selected' : ''}
          onClick={handleMediaClick}
        >
          <span>Media</span>
        </NavButton>
      </NavBar>
      <ContactButton>
        <span>Contato</span>
      </ContactButton>
    </Container>
  )
}
