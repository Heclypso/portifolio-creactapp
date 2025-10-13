import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Props } from '.'
import { Title } from '../../components/Title/styles'
import { breakpoints } from '../../styles'

export const List = styled.ul<Omit<Props, 'repos'>>`
  height: ${({ type }) => (type === 'primary' ? '80vh' : 'auto')};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding-bottom: ${({ type }) => (type === 'primary' ? '0' : '4rem')};

  ${Title} {
    font-size: ${({ type }) => (type === 'secondary' ? '28px' : '')};
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    padding: 32px;
    height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    height: auto;
    padding: 32px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LinkElement = styled(Link)`
  font-size: 16px;
  color: ${(props) => props.theme.primaryTextColor};
  font-weight: 400;
  top: 32px;
  right: 32px;
  position: absolute;
`
