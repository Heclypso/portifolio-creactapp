import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Modal = styled.div`
  width: calc(100% - 31px);
  height: 100vh;
  background-color: ${(props) => props.theme.secondaryColor};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: -33px;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 32px;
    right: 0;
    z-index: 1;
  }
`

export const ModalHeader = styled.header`
  position: relative;
  height: 36.4%;
`

export const ModalContainer = styled.div`
  padding: 32px;

  > div {
    display: flex;
    gap: 14px;
  }
`

export const Button = styled.a`
  padding: 9px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 6px;
  background-color: ${(props) => props.theme.tertiaryColor};
  color: ${(props) => props.theme.primaryTextColor};
`

export const CloseIcon = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 24px;
  right: 24px;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
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

  @media (max-width: ${breakpoints.mobile}) {
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
  height: 40%;
`

export const InfosWrapper = styled.div`
  padding: 32px;
`

export const CloseBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  height: 32px;
  border: none;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryTextColor};
  margin-right: 14px;
  padding: 4.5px 9px;
  border-radius: 6px;
`
