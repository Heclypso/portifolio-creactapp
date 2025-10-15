import ProjectsList from '../../containers/ProjectsList'

import { projects } from '../../data/projects'

const Projects = () => {
  return (
    <ProjectsList title="Outros Projetos" type="secondary" repos={projects} />
  )
}

export default Projects
