import Card from '../../components/Card'
import Title from '../../components/Title'

import background from '../../assets/generic_backgrounds/blue_pattern.jpg'

import * as S from './styles'
import Footer from '../../components/Footer'

export type Props = {
  repos: Project[]
  type: 'primary' | 'secondary'
}

const ProjectsList = ({ repos, type }: Props) => {
  return (
    <section
      id="projects"
      style={{ paddingBottom: type === 'secondary' ? '88px' : '' }}
    >
      <Title>Projetos</Title>
      {type === 'primary' && (
        <S.LinkElement to={'/projects'}>Ver todos</S.LinkElement>
      )}
      {type === 'secondary' && (
        <>
          <S.LinkElement to={'/'}>Voltar</S.LinkElement>
          <Footer />
        </>
      )}
      <S.List type={type}>
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
