import { useEffect, useState } from 'react'
import Project from '../../components/Project'
import Title from '../../components/Title'
import { List } from './styles'

type Project = {
  id: number
  name: string
  description: string
  html_url: string
}

const Projects = () => {
  const [repos, setRepos] = useState([])

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
    </section>
  )
}

export default Projects
