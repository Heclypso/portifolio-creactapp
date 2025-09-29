import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Tags from '../../components/Tags'
import Title from '../../components/Title'

import background from '../../assets/generic_backgrounds/blue_pattern.jpg'

import * as S from './styles'

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

  const dplaceholder = 'placeholder'

  return (
    <section id="experience">
      <Title>Experiência</Title>
      <S.List>
        {experienceArray.map((e) => (
          <Card
            key={e.id}
            title={e.title}
            banner={background}
            description={dplaceholder}
          />
        ))}
        <Tags $tags={tagsArray} />
      </S.List>
      <Footer />
    </section>
  )
}

export default Experience
