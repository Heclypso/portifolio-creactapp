import { useState } from 'react'

import About from './containers/About'
import Projects from './containers/ProjectsList'
import Sidebar from './containers/Sidebar'
import Experience from './containers/Experience'

import LightTheme from './themes/light'
import DarkTheme from './themes/dark'
import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'

function App() {
  const [darkThemeActive, setDarkThemeActive] = useState(false)

  function switchTheme() {
    setDarkThemeActive(!darkThemeActive)
  }

  return (
    <ThemeProvider theme={darkThemeActive ? DarkTheme : LightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar switchTheme={switchTheme} />
        <main>
          <About />
          <Projects />
          <Experience />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
