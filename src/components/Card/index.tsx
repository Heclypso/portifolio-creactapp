import Title from '../Title'

import * as S from './styles'

type Props = {
  title: string
  html_url: string
  background: string
}

const Card = ({ title, html_url, background }: Props) => (
  <a target="_blank" href={html_url} rel="noreferrer">
    <S.Card
      style={{
        background: `url(${background}) no-repeat center`,
        backgroundSize: 'cover'
      }}
    >
      <Title type="secondary">{title}</Title>
    </S.Card>
  </a>
)

export default Card
