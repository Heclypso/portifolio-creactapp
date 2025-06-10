import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

type ThemeButton = {
  children: React.ReactNode
  onClick: () => void
}

export const ThemeButton = styled.button<ThemeButton>`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  height: 382px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
