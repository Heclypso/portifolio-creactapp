import styled, { createGlobalStyle } from 'styled-components'

import { Theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    text-decoration: none;
    list-style: none;
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

  #experience, #projects {
    position: relative;
  }

  #experience {
    padding-bottom: 88px;
  }
`

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 32vw auto;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    display: block;
  }
`

export const ContentTitle = styled.h3`
  font-size: 24px;
  color: ${(props) => props.theme.primaryTextColor};
  margin-bottom: 24px;
`

export const Description = styled.p`
  color: ${(props) => props.theme.primaryTextColor};
  width: 515px;
  white-space: pre-line;
  margin-bottom: 48px;
`

export default EstiloGlobal
