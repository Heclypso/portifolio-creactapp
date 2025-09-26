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
          <HashLink to="/#projects">Projetos favoritos</HashLink>
        </li>
        <li>
          <HashLink to="/#experience">Experiência</HashLink>
        </li>
        <li>
          <HashLink to="/#copyright">Direitos Autorais</HashLink>
        </li>
      </ul>
    </nav>
  </S.FooterContainer>
)

export default Footer
