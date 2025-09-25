import styled from 'styled-components'
import { Title } from '../Title/styles'

export const Card = styled.div`
  width: 100%;
  min-height: 291px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;

  ${Title} {
    position: relative;
    z-index: 2;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.overlayPrimaryColor};
    z-index: 1;
  }
`
