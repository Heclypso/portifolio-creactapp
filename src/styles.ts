import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${(props) => (props.theme as Theme).primaryColor};
  }

  main {
    padding: 32px 32px 0px 0px;
  }
`

export default EstiloGlobal

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
