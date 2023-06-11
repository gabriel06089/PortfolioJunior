/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { Container, InfoContainer, NavBar, NavButton, Title } from './styles'

export function DashBoard() {
  const [selectedValue, setSelectedValue] = useState('2023')

  const handleNavButtonClick = (value: string) => {
    setSelectedValue(value)
  }

  return (
    <>
      <Container>
        <Title>
          <h1>Dashboard de Corrida</h1>
        </Title>
        <NavBar>
          <NavButton
            onClick={() => handleNavButtonClick('20')}
            selected={selectedValue === '20'}
          >
            <span>20</span>
          </NavButton>
          <NavButton
            onClick={() => handleNavButtonClick('21')}
            selected={selectedValue === '21'}
          >
            <span>21</span>
          </NavButton>
          <NavButton
            onClick={() => handleNavButtonClick('22')}
            selected={selectedValue === '22'}
          >
            <span>22</span>
          </NavButton>
          <NavButton
            onClick={() => handleNavButtonClick('2023')}
            selected={selectedValue === '2023'}
          >
            <span>2023</span>
          </NavButton>
          <NavButton
            onClick={() => handleNavButtonClick('Todos')}
            selected={selectedValue === 'Todos'}
          >
            <span>Todos</span>
          </NavButton>
        </NavBar>
        <InfoContainer>
          {selectedValue === '20' && (
            <>
              <p>RUNS</p>
              <h1>77</h1>
              <p>DISTANCE</p>
              <h1>230 km</h1>
              <p>AVERAGE PACE</p>
              <h1>5'10"</h1>
              <p>TIME</p>
              <h1>19:49:26</h1>
              <p>AVERAGE DISTANCE</p>
              <h1>2.9 km/run</h1>
              <p>ELEVATION GAINED</p>
              <h1>808m</h1>
            </>
          )}
          {selectedValue === '21' && (
            <>
              <p>RUNS</p>
              <h1>60</h1>
              <p>DISTANCE</p>
              <h1>180 km</h1>
              <p>AVERAGE PACE</p>
              <h1>5'30"</h1>
              <p>TIME</p>
              <h1>15:43:21</h1>
              <p>AVERAGE DISTANCE</p>
              <h1>3 km/run</h1>
              <p>ELEVATION GAINED</p>
              <h1>600m</h1>
            </>
          )}
          {selectedValue === '22' && (
            <>
              <p>RUNS</p>
              <h1>70</h1>
              <p>DISTANCE</p>
              <h1>210 km</h1>
              <p>AVERAGE PACE</p>
              <h1>5'00"</h1>
              <p>TIME</p>
              <h1>18:21:54</h1>
              <p>AVERAGE DISTANCE</p>
              <h1>3 km/run</h1>
              <p>ELEVATION GAINED</p>
              <h1>700m</h1>
            </>
          )}
          {selectedValue === '2023' && (
            <>
              <p>RUNS</p>
              <h1>80</h1>
              <p>DISTANCE</p>
              <h1>240 km</h1>
              <p>AVERAGE PACE</p>
              <h1>4'30"</h1>
              <p>TIME</p>
              <h1>21:10:32</h1>
              <p>AVERAGE DISTANCE</p>
              <h1>3 km/run</h1>
              <p>ELEVATION GAINED</p>
              <h1>800m</h1>
            </>
          )}
          {selectedValue === 'Todos' && (
            <>
              <p>RUNS</p>
              <h1>287</h1>
              <p>DISTANCE</p>
              <h1>870 km</h1>
              <p>AVERAGE PACE</p>
              <h1>5'20"</h1>
              <p>TIME</p>
              <h1>68:17:03</h1>
              <p>AVERAGE DISTANCE</p>
              <h1>3.0 km/run</h1>
              <p>ELEVATION GAINED</p>
              <h1>2908m</h1>
            </>
          )}
        </InfoContainer>
      </Container>
    </>
  )
}
