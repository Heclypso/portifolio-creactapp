import Card from '../../components/Card'
import Title from '../../components/Title'
import Footer from '../../components/Footer'

import * as S from './styles'

export type Props = {
  repos: Project[]
  type: 'primary' | 'secondary'
  title: string
  to?: string
}

const ProjectsList = ({ repos, type, title, to }: Props) => {
  return (
    <section id="projects">
      <Title>{title}</Title>
      {type === 'primary' && to && (
        <S.LinkElement to={to}>Ver mais</S.LinkElement>
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
