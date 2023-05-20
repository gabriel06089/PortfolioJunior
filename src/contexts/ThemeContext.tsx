import { createContext, useState, ReactNode } from 'react'
import { defaultTheme, defaultThemeDark } from '../styles/themes/default'

interface ThemeContextType {
  theme: typeof defaultTheme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(defaultTheme)

  const toggleTheme = () => {
    if (theme === defaultTheme) {
      setTheme(defaultThemeDark)
    } else {
      setTheme(defaultTheme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
