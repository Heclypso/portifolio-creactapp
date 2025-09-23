import { ButtonElement } from './styles'

type Props = {
  html_url?: string
  content: string
  href?: string
}

const Button = ({ html_url, content, href }: Props) => {
  if (href) {
    return (
      <ButtonElement as="a" target="_blanc" href={html_url}>
        {content}
      </ButtonElement>
    )
  }

  return <ButtonElement as="button">{content}</ButtonElement>
}
export default Button
