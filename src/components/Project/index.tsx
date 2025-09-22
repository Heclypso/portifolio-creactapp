import Button from '../Button'
import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card } from './styles'

type Props = {
  title: string
  description: string
  html_url: string
}

const Project = ({ title, description, html_url }: Props) => (
  <Card>
    <Title>{title}</Title>
    <Paragraph type="secondary">{description}</Paragraph>
    <Button html_url={html_url} />
  </Card>
)

export default Project
