import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  mobile: '768px'
}

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
    background-color: ${(props) => props.theme.primaryColor};
  }

  main {
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    scrollbar-color: ${(props) => props.theme.tertiaryTextColor} transparent;

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.tertiaryTextColor};
      border-radius: 10px;
    }

    @media (max-width: ${breakpoints.desktop}) {
      height: auto;
      scroll-snap-type: none;
      scroll-behavior: auto;
    }
  }

  section {
    min-height: 100vh;
    scroll-snap-align: start;
    padding: 32px;

    @media(max-width: ${breakpoints.desktop}) {
        min-height: auto;

    }
  }

  #about {
    padding: 32px 32px 0px 32px;
  }

  #experience, #projects {
    position: relative;

    @media(max-width: ${breakpoints.desktop}) {
      padding: 32px 0 0 0;
    }
  }
`

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 32vw auto;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
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

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
`

export default EstiloGlobal
