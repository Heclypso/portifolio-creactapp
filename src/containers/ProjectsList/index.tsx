import { useEffect, useState } from 'react'
import Project from '../../components/Project'
import Title from '../../components/Title'
import { List } from './styles'
import Button from '../../components/Button'

type Project = {
  id: number
  name: string
  description: string
  html_url: string
}

const Projects = () => {
  const [repos, setRepos] = useState([])
  const [showProjects, setShowProjects] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/heclypso/repos')
      .then((resp) => resp.json())
      .then((data) => {
        setRepos(data)
        console.log(data)
      })
  }, [])

  return (
    <section>
      <Button onClick={() => setShowProjects(true)} content="Expandir" />
      {showProjects && (
        <>
          <Title fontSize={20} marginBottom={32}>
            Projetos Favoritos
          </Title>
          <List>
            {repos.map((project: Project) => (
              <li key={project.id}>
                <Project title={project.name} html_url={project.html_url} />
              </li>
            ))}
          </List>
        </>
      )}
    </section>
  )
}

export default Projects
