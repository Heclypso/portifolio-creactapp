import { useState } from 'react'

import Modal from '../Modal'

import { useTheme } from 'styled-components'

import { experiences } from '../../data/experiences'

import Title from '../Title'
import * as S from './styles'

const Experience = () => {
  const theme = useTheme()

  const [showSubcategoryId, setShowSubcategoryId] = useState<number | null>(
    null
  )

  return (
    <>
      {experiences.map((e) =>
        showSubcategoryId === e.id ? (
          <Modal
            key={e.id}
            type="secondary"
            banner={e.banner}
            title={e.title}
            subcategory={e.subcategory}
            onClose={() => setShowSubcategoryId(null)}
          />
        ) : (
          <S.Experience
            key={e.id}
            onClick={() => setShowSubcategoryId(e.id)}
            style={{
              background: `linear-gradient(${theme.overlaySecondaryColor}, ${theme.overlaySecondaryColor}), url(${e.banner}) no-repeat center / cover`
            }}
          >
            <Title type="secondary">{e.title}</Title>
          </S.Experience>
        )
      )}
    </>
  )
}

export default Experience
