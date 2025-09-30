import { useState, useRef, useEffect } from 'react'

import { useTheme } from 'styled-components'

import { experiences } from '../../experience'

import Title from '../Title'
import { ContentTitle, Description } from '../../styles'
import * as S from './styles'

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const [showSubcategoryId, setShowSubcategoryId] = useState<number | null>(
    null
  )
  const [openSubCategoryId, setOpenSubCategoryId] = useState<number | null>(
    null
  )

  useEffect(() => {
    containerRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    })
  }, [showSubcategoryId])

  return (
    <>
      {experiences.map((e) => (
        <S.Experience
          key={e.id}
          onClick={() => setShowSubcategoryId(e.id)}
          style={{
            background: `linear-gradient(${theme.overlaySecondaryColor}, ${theme.overlaySecondaryColor}), url(${e.banner}) no-repeat center / cover`
          }}
        >
          <Title type="secondary">{e.title}</Title>
          {showSubcategoryId === e.id && (
            <S.Container ref={containerRef}>
              {e.subcategory?.map((c) => (
                <div key={c.id}>
                  <S.Subcategory
                    onClick={() => setOpenSubCategoryId(c.id)}
                    style={{
                      background: `linear-gradient(${theme.overlaySecondaryColor}, ${theme.overlaySecondaryColor}), url(${c.banner}) no-repeat center / cover`
                    }}
                  >
                    <Title type="secondary">{c.title}</Title>
                  </S.Subcategory>
                  {openSubCategoryId === c.id && (
                    <S.Content>
                      <S.Banner
                        style={{
                          background: `linear-gradient(${theme.overlaySecondaryColor}, ${theme.overlaySecondaryColor}), url(${c.banner}) no-repeat top / cover`
                        }}
                      />
                      <S.InfosWrapper>
                        <ContentTitle>{c.title}</ContentTitle>
                        <Description>{c.description}</Description>
                      </S.InfosWrapper>
                    </S.Content>
                  )}
                </div>
              ))}
            </S.Container>
          )}
        </S.Experience>
      ))}
    </>
  )
}

export default Experience
