import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    text-decoration: none;
  }

  body {
    background-color: ${(props) => (props.theme as Theme).primaryColor};
  }

  main {
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }

  section {
    min-height: 100vh;
    scroll-snap-align: start;
    padding: 32px;
    display: flex;
    flex-direction: column;
  }
`

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 444px auto;
  column-gap: 32px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`

export default EstiloGlobal
