import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

export const TagContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  display: flex;
  gap: 14px;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 16px;
  margin-top: auto;
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
