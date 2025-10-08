import ProjectsList from '../../containers/ProjectsList'

import { projects } from '../../data/projects'

const Projects = () => {
  return <ProjectsList type="secondary" repos={projects} />
}

export default Projects
