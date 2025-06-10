import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <aside>
        <Avatar />
        <Title fontSize={20}>Gabriel Munhak</Title>
        <Paragraph type="secondary" fontSize={16}>
          heclypso
        </Paragraph>
        <Description type="primary" fontSize={12}>
          Engenheiro front-end
        </Description>
        <ThemeButton>Trocar tema</ThemeButton>
      </aside>
    </SidebarContainer>
  )
}

export default Sidebar
