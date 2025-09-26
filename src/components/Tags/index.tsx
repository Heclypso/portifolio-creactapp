import * as S from './styles'

export type ComponentProps = {
  $tags: string[]
}

const Tags = ({ $tags }: ComponentProps) => {
  return (
    <S.TagContainer $tags={$tags}>
      {$tags.map((tag, index) => (
        <S.Tag key={index}>
          <S.TagDecoration />
          {tag}
        </S.Tag>
      ))}
    </S.TagContainer>
  )
}

export default Tags
