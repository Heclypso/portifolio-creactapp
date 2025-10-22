import { ReactNode } from 'react'
import { P } from './styles'

export type Props = {
  children: ReactNode
  type?: 'primary' | 'secondary' | 'tertiary'
  fontSize?: number
}

const Paragraph = ({ children, type = 'primary', fontSize }: Props) => (
  <P fontSize={fontSize} type={type}>
    {children}
  </P>
)

export default Paragraph
