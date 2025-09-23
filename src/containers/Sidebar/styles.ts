import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 20px;
  margin-bottom: 64px;
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.descriptionColor};
`

type ThemeButton = {
  children: React.ReactNode
  onClick: () => void
}

export const ThemeButton = styled.button<ThemeButton>`
  border-radius: 12px;
  padding: 8px 12px;
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  font-weight: 500;
  background-color: ${(props) => props.theme.quaternaryColor};
  cursor: pointer;
  border: none;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.tertiaryColor};

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
    position: static;
  }
`
