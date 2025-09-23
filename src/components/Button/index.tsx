import { ButtonElement } from './styles'

type Props = {
  html_url?: string
  content: string
  href?: string
  onClick: () => void
}

const Button = ({ html_url, content, href, onClick }: Props) => {
  if (href) {
    return (
      <ButtonElement as="a" target="_blanc" href={html_url}>
        {content}
      </ButtonElement>
    )
  }

  return (
    <ButtonElement onClick={onClick} as="button">
      {content}
    </ButtonElement>
  )
}
export default Button
