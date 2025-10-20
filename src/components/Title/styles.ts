import styled from 'styled-components'
import { Props } from '.'
import { breakpoints } from '../../styles'

export const Title = styled.h3<Omit<Props, 'children'>>`
  color: ${(props) =>
    props.type === 'secondary'
      ? props.theme.overlayTextColor
      : props.theme.primaryTextColor};
  font-size: ${({ fontSize, type }) =>
    fontSize && type === 'primary'
      ? fontSize + 'px'
      : type === 'secondary'
      ? '2rem'
      : '1.4rem'};
  font-weight: 900;
  margin-bottom: ${({ $marginBottom, type }) =>
    $marginBottom && type === 'primary'
      ? $marginBottom + 'px'
      : type === 'secondary'
      ? ''
      : '32px'};
  text-align: center;
  width: ${({ type }) => (type === 'secondary' ? '90%' : '')};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${({ fontSize, type }) =>
      fontSize && type === 'primary'
        ? fontSize + 'px'
        : type === 'secondary'
        ? '24px'
        : '28px'};
  }
`
