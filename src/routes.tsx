import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Tasks from './pages/Tasks'

const RoutesElement = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/tasks" element={<Tasks />} />
  </Routes>
)

export default RoutesElement
