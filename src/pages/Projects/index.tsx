import { useEffect, useState } from 'react'

import ProjectsList from '../../containers/ProjectsList'

const Projects = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/heclypso/repos')
      .then((resp) => resp.json())
      .then((data) => setRepos(data))
  }, [])

  return <ProjectsList repos={repos} />
}

export default Projects
