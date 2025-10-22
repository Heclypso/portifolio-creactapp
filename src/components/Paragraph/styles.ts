import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '16px')};
  color: ${(props) =>
    props.type === 'primary' || props.type === 'tertiary'
      ? props.theme.primaryTextColor
      : props.theme.tertiaryTextColor};
  line-height: 18px;
  font-weight: 500;
  height: ${({ type }) => (type === 'tertiary' ? '28.4rem' : 'auto')};
  overflow-y: ${({ type }) => (type === 'tertiary' ? 'scroll' : '')};
  scrollbar-width: thin;
`
