import styled from 'styled-components'

type Props = {
  target: string
  href: string
  children: string
}

export const LinkButton = styled.a<Props>`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14;
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
`
