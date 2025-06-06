import styled from 'styled-components'

export const GithubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;
    min-height: auto;

    @media (max-width: 768px) {
      height: auto;
      min-height: 157px;
    }
  }
`
