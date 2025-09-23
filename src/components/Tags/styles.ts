import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

export const TagContainer = styled.div`
  background-color: ${(props) => props.theme.tertiaryColor};
  display: flex;
  gap: 14px;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 16px;
`

export const Tag = styled.div<Props>`
  height: 22px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.quaternaryColor};
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
  background-color: ${(props) => props.theme.descriptionColor};
  border-radius: 9.5px;
`
