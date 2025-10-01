import Footer from '../../components/Footer'
import Tags from '../../components/Tags'
import Title from '../../components/Title'
import Experience from '../../components/Experience'

import * as S from './styles'

const Experiences = () => {
  const tagsArray: string[] = [
    'HTML',
    'Javascript',
    'Typescript',
    'Bootstrap',
    'JQuery',
    'CSS',
    'Sass',
    'Gulp',
    'React',
    'Vue',
    'Cypress',
    'Jest',
    'Git',
    'Github'
  ]

  return (
    <section id="experience">
      <Title>Experiência</Title>
      <S.List>
        <Experience />
        <Tags $tags={tagsArray} />
      </S.List>
      <Footer />
    </section>
  )
}

export default Experiences
