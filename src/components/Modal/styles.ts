import styled from 'styled-components'

export const Modal = styled.div`
  width: calc(100% - 32px);
  height: 100vh;
  background-color: ${(props) => props.theme.secondaryColor};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
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

export const Description = styled.p`
  color: ${(props) => props.theme.primaryTextColor};
  width: 515px;
  white-space: pre-line;
  margin-bottom: 48px;
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

export const ModalTitle = styled.h3`
  font-size: 24px;
  color: ${(props) => props.theme.primaryTextColor};
  margin-bottom: 24px;
`
