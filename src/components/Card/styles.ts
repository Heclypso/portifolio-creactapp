import styled from 'styled-components'
import { Title } from '../Title/styles'

export const Card = styled.div`
  height: 38vh;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  border-radius: 5px;

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
