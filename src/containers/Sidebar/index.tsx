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
      <aside>
        <Avatar />
        <Title fontSize={20}>Gabriel Munhak</Title>
        <Paragraph type="secondary" fontSize={16}>
          heclypso
        </Paragraph>
        <Description type="primary" fontSize={12}>
          Engenheiro front-end
        </Description>
        <ThemeButton onClick={props.switchTheme}>Trocar tema</ThemeButton>
      </aside>
    </SidebarContainer>
  )
}

export default Sidebar
