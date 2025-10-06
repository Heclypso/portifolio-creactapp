import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/Sidebar'
import RoutesElement from './routes'
import store from './store'

import LightTheme from './themes/light'
import DarkTheme from './themes/dark'

import EstiloGlobal, { Container } from './styles'

function App() {
  const [darkThemeActive, setDarkThemeActive] = useState(true)

  useEffect(() => {
    const currentBrowserTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    )

    setDarkThemeActive(currentBrowserTheme.matches)
  }, [])

  const switchTheme = () => {
    setDarkThemeActive((prev) => !prev)
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={darkThemeActive ? DarkTheme : LightTheme}>
          <EstiloGlobal />
          <Container>
            <Sidebar switchTheme={switchTheme} />
            <RoutesElement />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
