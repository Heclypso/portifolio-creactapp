import About from '../../containers/About'
import Experience from '../../containers/Experience'
import Projects from '../../containers/ProjectsList'

import { projects } from '../../projects'

const Home = () => {
  const selectedProjects = ['EFood', 'EPlay', 'BXMailer', 'Clone Disney Plus']

  const favoriteProjects = projects.filter((project: Project) =>
    selectedProjects.includes(project.name)
  )

  return (
    <main>
      <About />
      <Projects type="primary" repos={favoriteProjects} />
      <Experience />
    </main>
  )
}

export default Home
