import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  gap: 32px;
  height: 76vh;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`
