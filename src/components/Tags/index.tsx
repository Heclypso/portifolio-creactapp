import * as S from './styles'

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
    },
    {
      id: 3,
      tecnology: 'Jest'
    },
    {
      id: 4,
      tecnology: 'Cypress'
    }
  ]

  return (
    <S.TagContainer>
      {Tags.map((tag) => (
        <S.Tag key={tag.id}>
          <S.TagDecoration />
          {tag.tecnology}
        </S.Tag>
      ))}
    </S.TagContainer>
  )
}

export default Tags
