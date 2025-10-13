import styled from 'styled-components'
import { ComponentProps } from '.'
import { breakpoints } from '../../styles'

type Props = {
  children: React.ReactNode
}

export const TagContainer = styled.div<ComponentProps>`
  background-color: ${(props) => props.theme.secondaryColor};
  display: flex;
  flex-direction: column;
  padding: 16px 16px 32px 16px;
  border-radius: 10px;
  grid-column: 1 / 3;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;

    @media (max-width: ${breakpoints.mobile}) {
      gap: 12px;
      justify-content: center;
    }
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
