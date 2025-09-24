import styled from 'styled-components'
import { Props } from '.'

export const Title = styled.h3<Props>`
  color: ${(props) => props.theme.primaryTextColor};
  font-size: ${({ fontSize, type }) =>
    fontSize && type === 'primary'
      ? fontSize + 'px'
      : type === 'secondary'
      ? '40px'
      : '20px'};
  font-weight: 900;
  margin-bottom: ${({ $marginBottom, type }) =>
    $marginBottom && type === 'primary'
      ? $marginBottom + 'px'
      : type === 'secondary'
      ? ''
      : '32px'};
  text-align: center;
`
