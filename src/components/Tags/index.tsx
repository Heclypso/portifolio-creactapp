import Title from '../Title'
import * as S from './styles'

export type ComponentProps = {
  $tags: string[]
}

const Tags = ({ $tags }: ComponentProps) => {
  return (
    <S.TagContainer $tags={$tags}>
      <Title $marginBottom={24}>Tecnologias</Title>
      <div>
        {$tags.map((tag, index) => (
          <S.Tag key={index}>
            <S.TagDecoration />
            {tag}
          </S.Tag>
        ))}
      </div>
    </S.TagContainer>
  )
}

export default Tags
