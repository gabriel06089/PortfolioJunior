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
  const handleProjectsFMClick = () => {
    navigate('/aboutProjects/projectFM')
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
          <span>Delivery</span>
        </NavButton>
        <NavButton
          className={
            location.pathname === '/aboutProjects/projectLP' ? 'selected' : ''
          }
          onClick={handleProjectsLPClick}
        >
          <span>LandingPage</span>
        </NavButton>
        <NavButton
          className={
            location.pathname === '/aboutProjects/projectFM' ? 'selected' : ''
          }
          onClick={handleProjectsFMClick}
        >
          <span>PlusFM</span>
        </NavButton>
      </NavBar>
      <ContactButton>
        <span>Contato</span>
      </ContactButton>
    </Container>
  )
}
