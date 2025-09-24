import styled from 'styled-components'

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

  ul {
    display: flex;

    li {
      margin-right: 24px;

      a {
        color: ${(props) => props.theme.primaryTextColor};
        font-weight: 700;
      }
    }
  }
`
