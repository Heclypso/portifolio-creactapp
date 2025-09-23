import Title from '../Title'
import { Card } from './styles'

type Props = {
  title: string
  html_url: string
}

const Project = ({ title, html_url }: Props) => (
  <Card>
    <a target="_blank" href={html_url} rel="noreferrer">
      <Title>{title}</Title>
    </a>
  </Card>
)

export default Project
