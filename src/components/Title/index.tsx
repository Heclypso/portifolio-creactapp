import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
  marginBottom?: number
}

const Title = ({ children, fontSize, marginBottom }: Props) => (
  <TituloEstilo fontSize={fontSize} marginBottom={marginBottom}>
    {children}
  </TituloEstilo>
)

export default Title
