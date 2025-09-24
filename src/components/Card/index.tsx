import Title from '../Title'

import { Card as StyledCard } from './styles'

type Props = {
  title: string
  html_url: string
}

const Card = ({ title, html_url }: Props) => (
  <StyledCard>
    <a target="_blank" href={html_url} rel="noreferrer">
      <Title type="secondary">{title}</Title>
    </a>
  </StyledCard>
)

export default Card
