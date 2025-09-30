import Card from '../../components/Card'
import Title from '../../components/Title'
import Footer from '../../components/Footer'

import * as S from './styles'

export type Props = {
  repos: Project[]
  type: 'primary' | 'secondary'
}

const ProjectsList = ({ repos, type }: Props) => {
  return (
    <section id="projects">
      <Title>Projetos</Title>
      {type === 'primary' && (
        <S.LinkElement to={'/projects'}>Ver todos</S.LinkElement>
      )}
      <S.List type={type}>
        {repos.map((project: Project) => (
          <Card
            key={project.id}
            title={project.name}
            banner={project.banner}
            description={project.description}
            html_url_github={project.html_url_github}
            html_url_vercel={project.html_url_vercel}
          />
        ))}
      </S.List>
      {type === 'secondary' && (
        <>
          <S.LinkElement to={'/'}>Voltar</S.LinkElement>
          <Footer />
        </>
      )}
    </section>
  )
}

export default ProjectsList
