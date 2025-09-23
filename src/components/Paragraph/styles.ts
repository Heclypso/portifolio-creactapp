import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.type === 'primary'
      ? props.theme.primaryTextColor
      : props.theme.tertiaryTextColor};
  line-height: 18px;
  font-weight: 500;
`
