import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Props } from '.'
import { Title } from '../../components/Title/styles'

export const List = styled.ul<Omit<Props, 'repos'>>`
  height: ${({ type }) => (type === 'primary' ? '80vh' : '100%')};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }

  ${Title} {
    font-size: ${({ type }) => (type === 'secondary' ? '28px' : '')};
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
