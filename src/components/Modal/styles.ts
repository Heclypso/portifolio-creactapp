import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Modal = styled.div`
  width: calc(100% - 32px);
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

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
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
