import ProjectsList from '../ProjectsList'

import { Tasks } from '../../data/tasks'

const TasksList = () => {
  const selectedTasks = [
    'Transpilação com Babel',
    'Gerenciamento de State para Redux',
    'Testes com Cypress',
    'ES6 +'
  ]
  const filteredTasks = Tasks.filter((t) => selectedTasks.includes(t.name))

  return (
    <ProjectsList
      to="/tasks"
      title="Atividades"
      type="primary"
      cardType="secondary"
      repos={filteredTasks}
    />
  )
}

export default TasksList
