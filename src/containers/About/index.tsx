import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre mim</Title>
      <Paragraph type="primary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
        similique eveniet fugit nulla maxime autem quibusdam architecto
        inventore animi. Obcaecati excepturi vero soluta debitis quis, alias
        nemo est facilis harum?
      </Paragraph>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=heclypso&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=heclypso&layout=compact&langs_count=7&theme=dracula" />
      </GithubSection>
    </section>
  )
}

export default About
