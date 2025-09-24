import Card from '../../components/Card'
import Tags from '../../components/Tags'
import Title from '../../components/Title'

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

  return (
    <section>
      <Title>Experiência</Title>
      <List>
        {experienceArray.map((e) => (
          <Card key={e.id} title={e.title} html_url="#" />
        ))}
      </List>
      <Tags />
    </section>
  )
}

export default Experience
