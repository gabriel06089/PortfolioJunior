/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import { Container, InfoContainer, NavBar, NavButton, Title } from './styles'

export function DashBoard() {
  const [selectedValue, setSelectedValue] = useState('GaOS')
  const [disableAutoToggle, setDisableAutoToggle] = useState(false)

  const handleNavButtonClick = (value: string) => {
    setSelectedValue(value)
    setDisableAutoToggle(true)
  }

  useEffect(() => {
    if (!disableAutoToggle) {
      const timer = setInterval(() => {
        setSelectedValue((prevValue) => {
          switch (prevValue) {
            case 'GaOS':
              return 'LP'
            case 'LP':
              return 'Delivery'
            case 'Delivery':
              return 'Todos'
            case 'Todos':
              return 'GaOS'
            default:
              return prevValue
          }
        })
      }, 5000)

      return () => {
        clearInterval(timer)
      }
    }
  }, [disableAutoToggle])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisableAutoToggle(false)
    }, 10000)

    return () => {
      clearTimeout(timeout)
    }
  }, [selectedValue])

  return (
    <>
      <Container>
        <Title>
          <h1>Stack Tecnológico</h1>
        </Title>
        <NavBar>
          <NavButton
            onClick={() => handleNavButtonClick('GaOS')}
            selected={selectedValue === 'GaOS'}
          >
            <span>GaOS</span>
          </NavButton>
          <NavButton
            onClick={() => handleNavButtonClick('LP')}
            selected={selectedValue === 'LP'}
          >
            <span>LP</span>
          </NavButton>
          <NavButton
            onClick={() => handleNavButtonClick('Delivery')}
            selected={selectedValue === 'Delivery'}
          >
            <span>Delivery</span>
          </NavButton>

          <NavButton
            onClick={() => handleNavButtonClick('Todos')}
            selected={selectedValue === 'Todos'}
          >
            <span>Todos</span>
          </NavButton>
        </NavBar>
        <InfoContainer>
          {selectedValue === 'GaOS' && (
            <>
              <p>Linguagens de Programação</p>
              <h1>
                HTML, CSS,
                <br /> JavaScript,
                <br /> TypeScript
              </h1>
              <p>Frameworks / Bibliotecas</p>
              <h1>React</h1>
              <p>Biblioteca de Estilização</p>
              <h1>styled-components</h1>
              <p>Controle de Versão</p>
              <h1>Git</h1>
              <p>Linter</p>
              <h1>ESLint</h1>
              <p>Editor de Código</p>
              <h1>VS Code</h1>
            </>
          )}

          {selectedValue === 'Delivery' && (
            <>
              <p>Linguagens de Programação</p>
              <h1>
                HTML, CSS,
                <br /> JavaScript,
                <br /> TypeScript
              </h1>
              <p>Frameworks / Bibliotecas</p>
              <h1>React</h1>
              <p>Biblioteca de Estilização</p>
              <h1>styled-components</h1>
              <p>Controle de Versão</p>
              <h1>Git</h1>
              <p>Linter</p>
              <h1>ESLint</h1>
              <p>Editor de Código</p>
              <h1>VS Code</h1>
            </>
          )}
          {selectedValue === 'LP' && (
            <>
              <p>Linguagens de Programação</p>
              <h1>
                HTML,
                <br /> CSS,
                <br /> JavaScript
              </h1>
              <p>Frameworks / Bibliotecas</p>
              <h1>React</h1>
              <p>Biblioteca de Estilização</p>
              <h1>Module CSS</h1>
              <p>Controle de Versão</p>
              <h1>Git</h1>
              <p>Linter</p>
              <h1>ESLint</h1>
              <p>Editor de Código</p>
              <h1>VS Code</h1>
            </>
          )}
          {selectedValue === 'Todos' && (
            <>
              <p>Linguagens de Programação</p>
              <h1>HTML, CSS, JavaScript, TypeScript</h1>
              <p>Frameworks / Bibliotecas</p>
              <h1>React</h1>
              <p>Biblioteca de Estilização</p>
              <h1>styled-components, Module CSS</h1>
              <p>Controle de Versão</p>
              <h1>Git</h1>
              <p>Linter</p>
              <h1>ESLint</h1>
              <p>Editor de Código</p>
              <h1>VS Code</h1>
            </>
          )}
        </InfoContainer>
      </Container>
    </>
  )
}
