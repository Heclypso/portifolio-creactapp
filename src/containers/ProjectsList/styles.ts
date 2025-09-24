import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const List = styled.ul`
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`

export const LinkElement = styled(Link)`
  font-size: 16px;
  color: ${(props) => props.theme.primaryTextColor};
  font-weight: 400;
  top: 32px;
  right: 32px;
  position: absolute;
`
