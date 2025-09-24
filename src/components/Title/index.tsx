import { Title as StyledTitle } from './styles'

export type Props = {
  children: string
  fontSize?: number
  $marginBottom?: number
  type?: 'primary' | 'secondary'
}

const Title = ({
  children,
  fontSize,
  $marginBottom,
  type = 'primary'
}: Props) => (
  <StyledTitle fontSize={fontSize} $marginBottom={$marginBottom} type={type}>
    {children}
  </StyledTitle>
)

export default Title
