import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Tags from '../../components/Tags'
import Title from '../../components/Title'

import background from '../../assets/generic_backgrounds/blue_pattern.jpg'

import { List } from './styles'

type Experience = {
  id: number
  title: string
}

const Experience = () => {
  const experienceArray: Experience[] = [
    {
      id: 1,
      title: 'Ypê'
    },
    {
      id: 2,
      title: 'Educação'
    }
  ]

  const tagsArray: string[] = [
    'HTML',
    'Javascript',
    'Typescript',
    'JQuery',
    'CSS',
    'Sass',
    'Gulp',
    'React',
    'Vue',
    'Cypress',
    'Jest'
  ]

  return (
    <section id="experience">
      <Title>Experiência</Title>
      <List>
        {experienceArray.map((e) => (
          <Card
            background={background}
            key={e.id}
            title={e.title}
            html_url="#"
          />
        ))}
      </List>
      <Tags $tags={tagsArray} />
      <Footer />
    </section>
  )
}

export default Experience
