import styled from 'styled-components'

export const Card = styled.div`
  padding: 16px;
  height: 208px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.tertiaryColor};
`
