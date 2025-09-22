import { LinkButton } from './styles'

type Props = {
  html_url: string
}

const Button = ({ html_url }: Props) => (
  <LinkButton target="_blanc" href={html_url}>
    Leia mais
  </LinkButton>
)

export default Button
