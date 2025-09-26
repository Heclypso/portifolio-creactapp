import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 45vh;
  gap: 32px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`
