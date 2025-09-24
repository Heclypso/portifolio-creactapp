import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, ThemeButton, SidebarContainer } from './styles'

type Props = {
  switchTheme: () => void
}

const Sidebar = (props: Props) => {
  return (
    <SidebarContainer>
      <Avatar />
      <Title $marginBottom={6} type="primary">
        Gabriel Munhak
      </Title>
      <Paragraph type="secondary" fontSize={16}>
        @heclypso
      </Paragraph>
      <Description type="primary" fontSize={14}>
        Engenheiro front-end <br /> <br />
        Técnico em ADS
      </Description>
      <ThemeButton onClick={props.switchTheme}>Trocar tema</ThemeButton>
    </SidebarContainer>
  )
}

export default Sidebar
