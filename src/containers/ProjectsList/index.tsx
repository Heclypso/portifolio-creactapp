import Card from '../../components/Card'
import Title from '../../components/Title'

import background from '../../assets/generic_backgrounds/blue_pattern.jpg'

import * as S from './styles'

type Props = {
  repos: Project[]
}

const ProjectsList = ({ repos }: Props) => {
  return (
    <section id="projects">
      <Title>Projetos</Title>
      <S.LinkElement to={'/projects'}>Expandir</S.LinkElement>
      <S.List>
        {repos.map((project: Project) => (
          <Card
            background={background}
            key={project.id}
            title={project.name}
            html_url={project.html_url}
          />
        ))}
      </S.List>
    </section>
  )
}

export default ProjectsList
