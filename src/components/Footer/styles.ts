import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const FooterContainer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.footerColor};

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
    display: block;
    padding: 32px;
    position: static;
  }

  ul {
    display: flex;

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
    }

    li {
      margin-right: 24px;

      @media (max-width: ${breakpoints.mobile}) {
        margin-bottom: 10px;
        margin-right: 0;
      }

      a {
        color: ${(props) => props.theme.primaryTextColor};
        font-weight: 700;
      }
    }
  }
`
