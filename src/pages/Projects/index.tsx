import { useEffect, useState } from 'react'

import ProjectsList from '../../containers/ProjectsList'

const Projects = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/heclypso/repos')
      .then((resp) => resp.json())
      .then((data) => setRepos(data))
  }, [])

  const allowedProjects: string[] = [
    'efood',
    'eplay',
    'bxmailer-font',
    'clone_disney_plus',
    'cypress',
    'ebac_games_redux',
    'email',
    'jquery-galeria-fotos'
  ]

  const renameRecord: Record<string, string> = {
    efood: 'EFood',
    eplay: 'EPlay',
    'bxmailer-front': 'BXMailer',
    clone_disney_plus: 'CDisney Plus',
    cypress: 'Cypress',
    ebac_games_redux: 'EBAC Games Redux',
    email: 'Email HTML',
    'jquery-galeria-fotos': 'Galeria de Fotos'
  }

  const filtredProjects = repos
    .filter((repo: Project) => allowedProjects.includes(repo.name))
    .map((repo: Project) => ({
      ...repo,
      name: renameRecord[repo.name]
    }))

  return <ProjectsList type="secondary" repos={filtredProjects} />
}

export default Projects
