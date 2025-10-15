import ProjectsList from '../../containers/ProjectsList'

import { Tasks as TasksDatas } from '../../data/tasks'

const Tasks = () => {
  return (
    <ProjectsList
      title="Outras Atividades"
      type="secondary"
      repos={TasksDatas}
    />
  )
}

export default Tasks
