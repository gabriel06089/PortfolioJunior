import { useLocation, useNavigate } from 'react-router-dom'

import { ContactButton, Container, NavBar, NavButton } from './styles'
import { ThemeButton } from '../../Header/components/ThemeButton'

export function HeaderProjects() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleProjectsOSClick = () => {
    navigate('/aboutProjects/projectOS')
  }

  const handleProjectsCDClick = () => {
    navigate('/aboutProjects/projectCD')
  }
  const handleAllClick = () => {
    navigate('/')
  }
  const handleProjectsLPClick = () => {
    navigate('/aboutProjects/projectLP')
  }
  return (
    <Container>
      <ThemeButton />
      <NavBar>
        <NavButton
          className={location.pathname === '/' ? 'selected' : ''}
          onClick={handleAllClick}
        >
          <span>Home</span>
        </NavButton>
        <NavButton
          className={
            location.pathname === '/aboutProjects/projectOS' ? 'selected' : ''
          }
          onClick={handleProjectsOSClick}
        >
          <span>Porfólio</span>
        </NavButton>
        <NavButton
          className={
            location.pathname === '/aboutProjects/projectCD' ? 'selected' : ''
          }
          onClick={handleProjectsCDClick}
        >
          <span>Coffee Delivery</span>
        </NavButton>
        <NavButton
          className={
            location.pathname === '/aboutProjects/projectLP' ? 'selected' : ''
          }
          onClick={handleProjectsLPClick}
        >
          <span>LandingPage</span>
        </NavButton>
      </NavBar>
      <ContactButton>
        <span>Contato</span>
      </ContactButton>
    </Container>
  )
}
