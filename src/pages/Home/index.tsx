import { useEffect, useState } from 'react'

import About from '../../containers/About'
import Experience from '../../containers/Experience'
import Projects from '../../containers/ProjectsList'

const Home = () => {
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
    <main>
      <About />
      <Projects type="primary" repos={favoriteProjects} />
      <Experience />
    </main>
  )
}

export default Home
