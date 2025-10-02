import styled from 'styled-components'
import { Title } from '../Title/styles'

export const Card = styled.div`
  height: 38vh;
  padding: 16px;
  border-radius: 8px;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Title} {
    position: relative;
    z-index: 2;
  }
`
