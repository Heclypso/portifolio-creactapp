import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Sidebar from './containers/Sidebar'

import LightTheme from './themes/light'
import DarkTheme from './themes/dark'
import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import RoutesElement from './routes'

function App() {
  const [darkThemeActive, setDarkThemeActive] = useState(false)

  function switchTheme() {
    setDarkThemeActive(!darkThemeActive)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkThemeActive ? DarkTheme : LightTheme}>
        <EstiloGlobal />
        <Container>
          <Sidebar switchTheme={switchTheme} />
          <RoutesElement />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
