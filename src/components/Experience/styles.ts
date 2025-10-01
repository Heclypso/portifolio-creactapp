import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Experience = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: calc(100% - 31px);
  height: calc(100% - 56px);
  background-color: ${(props) => props.theme.secondaryColor};
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
  padding: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    position: absolute;
    width: 100%;
    height: 100vh;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    position: absolute;
    width: 100%;
    height: 100.5vh;
  }
`

export const Subcategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 100%;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
  position: absolute;
  top: 0;
  right: 0;
`

export const Icon = styled.img`
  position: absolute;
  top: 32px;
  right: 32px;
`

export const Banner = styled.div`
  width: 100%;
  height: 64%;

  @media (max-width: ${breakpoints.tablet}) {
    height: 40%;
  }
`

export const InfosWrapper = styled.div`
  padding: 32px;
`
