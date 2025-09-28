import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.secondaryColor};

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
    position: static;
  }
`

export const Description = styled(P)`
  margin-top: 20px;
  margin-bottom: 64px;
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.secondaryTextColor};
`

type ThemeButton = {
  children: React.ReactNode
  onClick: () => void
}

export const ThemeButton = styled.button<ThemeButton>`
  border-radius: 6px;
  padding: 9px;
  color: ${(props) => props.theme.primaryTextColor};
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props) => props.theme.tertiaryColor};
  cursor: pointer;
  border: none;
`
