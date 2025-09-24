import { useEffect, useState } from 'react'

import Card from '../../components/Card'
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
      .then((data) => setRepos(data))
  }, [])

  const selectedProjects = [
    'efood',
    'eplay',
    'bxmailer-front',
    'clone_disney_plus'
  ]

  const renameMap: Record<string, string> = {
    'bxmailer-front': 'BXMailer',
    clone_disney_plus: 'CDisney Plus',
    efood: 'EFood',
    eplay: 'Eplay'
  }

  const favoriteProjects = repos
    .filter((repo: Project) => selectedProjects.includes(repo.name))
    .map((repo: Project) => ({
      ...repo,
      name: renameMap[repo.name]
    }))

  return (
    <section id="projects">
      <Title>Projetos Favoritos</Title>
      <List>
        {favoriteProjects.map((project: Project) => (
          <Card
            key={project.id}
            title={project.name}
            html_url={project.html_url}
          />
        ))}
      </List>
    </section>
  )
}

export default Projects
