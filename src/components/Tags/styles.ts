import styled from 'styled-components'
import { ComponentProps } from '.'

type Props = {
  children: React.ReactNode
}

export const TagContainer = styled.div<ComponentProps>`
  background-color: ${(props) => props.theme.secondaryColor};
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 5px;
  grid-column: 1 / 3;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }
`

export const Tag = styled.div<Props>`
  color: ${(props) => props.theme.primaryTextColor};
  background-color: ${(props) => props.theme.tertiaryColor};
  font-size: 16px;
  font-weight: 500;
  padding: 8px 12px;
  display: flex;
  gap: 6px;
  border-radius: 12px;
`

export const TagDecoration = styled.div`
  width: 19px;
  height: 19px;
  background-color: ${(props) => props.theme.secondaryTextColor};
  border-radius: 9.5px;
`
