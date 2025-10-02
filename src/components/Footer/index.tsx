import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <nav>
      <ul>
        <li>
          <HashLink to="/#about">Sobre mim</HashLink>
        </li>
        <li>
          <HashLink to="/#projects">Projetos</HashLink>
        </li>
        <li>
          <HashLink to="/#experience">Experiência</HashLink>
        </li>
        <li>
          <a
            target="_blank"
            href="https://br.freepik.com/vetores-gratis/abstract-blue-wave-circles-pattern-patrao-de-circulos-de-ondas-azuis_415090275.htm#fromView=search&page=1&position=14&uuid=54569887-43c5-4b06-b114-9d2e34cfd66c&query=blue+and+white+pattern https://br.freepik.com/vetores-gratis/abstract-blue-wave-circles-pattern-patrao-de-circulos-de-ondas-azuis_415090275.htm#fromView=search&page=1&position=14&uuid=54569887-43c5-4b06-b114-9d2e34cfd66c&query=blue+and+white+pattern "
            rel="noreferrer"
          >
            Direitos Autorais
          </a>
        </li>
      </ul>
    </nav>
  </S.FooterContainer>
)

export default Footer
