import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'
import { breakpoints } from '../../styles'

export const SidebarContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.secondaryColor};
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}) {
    height: 80vh;
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
  $isVisible: boolean
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
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
`
