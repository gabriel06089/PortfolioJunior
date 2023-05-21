import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import { Ball, DissolveIcon, SwitchButton } from './styles'
import { Moon, Sun } from 'phosphor-react'

export const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [move, setMove] = useState(false)

  const handleClick = () => {
    toggleTheme()
    setMove(!move)
  }

  return (
    <SwitchButton onClick={handleClick}>
      <DissolveIcon>
        <Ball move={move} />
        <Moon size={24} weight="fill" />
        <Sun size={24} weight="fill" />
      </DissolveIcon>
    </SwitchButton>
  )
}
