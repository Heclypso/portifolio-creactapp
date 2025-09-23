import styled from 'styled-components'

export const ButtonElement = styled.div`
  color: ${(props) => props.theme.primaryTextColor};
  font-size: 14;
  background-color: ${(props) => props.theme.secondaryColor};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
  width: 100%;
  height: 64px;
  border: none;
  margin-bottom: 32px;
`
