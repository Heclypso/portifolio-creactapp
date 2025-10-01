import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const GithubSection = styled.div`
  margin-top: 32px;

  img {
    height: 157px;
    min-height: auto;

    @media (max-width: ${breakpoints.desktop}) {
      height: auto;
      width: 50%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      height: auto;
      width: 100%;
    }
  }
`
