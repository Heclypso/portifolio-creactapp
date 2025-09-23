import { Tag, TagContainer, TagDecoration } from './styles'

type Tag = {
  id: number
  tecnology: string
}

const Tags = () => {
  const Tags: Tag[] = [
    {
      id: 1,
      tecnology: 'React'
    },
    {
      id: 2,
      tecnology: 'Typescript'
    }
  ]

  return (
    <TagContainer>
      {Tags.map((tag) => (
        <Tag key={tag.id}>
          <TagDecoration />
          {tag.tecnology}
        </Tag>
      ))}
    </TagContainer>
  )
}

export default Tags
