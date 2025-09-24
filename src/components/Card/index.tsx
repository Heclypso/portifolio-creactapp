import Title from '../Title'

import { Card as StyledCard } from './styles'

type Props = {
  title: string
  html_url: string
  background: string
}

const Card = ({ title, html_url, background }: Props) => (
  <StyledCard
    style={{
      background: `url(${background}) no-repeat center`,
      backgroundSize: 'cover'
    }}
  >
    <a target="_blank" href={html_url} rel="noreferrer">
      <Title type="secondary">{title}</Title>
    </a>
  </StyledCard>
)

export default Card
