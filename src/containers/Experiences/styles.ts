import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 16rem;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    height: auto;
    background-color: red;
    padding: 32px 32px 5rem 32px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    padding: 32px;
  }
`
