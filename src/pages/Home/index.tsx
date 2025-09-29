import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import About from '../../containers/About'
import Experiences from '../../containers/Experiences'
import Projects from '../../containers/ProjectsList'

import { setScrollY } from '../../store/reducers/sidebar'

import { projects } from '../../projects'

const Home = () => {
  const dispatch = useDispatch()
  const mainRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const target = mainRef.current
    if (!target) return

    const handleScroll = () => {
      dispatch(setScrollY(target.scrollTop))
    }

    target.addEventListener('scroll', handleScroll)
  }, [dispatch])

  const selectedProjects = ['EFood', 'EPlay', 'BXMailer', 'Clone Disney Plus']
  const favoriteProjects = projects.filter((project: Project) =>
    selectedProjects.includes(project.name)
  )

  return (
    <main ref={mainRef}>
      <About />
      <Projects type="primary" repos={favoriteProjects} />
      <Experiences />
    </main>
  )
}

export default Home
