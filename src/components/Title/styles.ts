import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.primaryTextColor};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '14px')};
  font-weight: 900;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom + 'px' : '0'};
  text-align: center;
`
