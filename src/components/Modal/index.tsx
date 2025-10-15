import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import Title from '../Title'

import closeIcon from '../../assets/icons/close-icon.png'

import { ContentTitle, Description } from '../../styles'
import * as S from './styles'

type Props = {
  type: 'primary' | 'secondary'
  banner: string
  title: string
  subcategory?: Subcategory[]
  description?: string
  html_ref_github?: string
  html_ref_vercel?: string
  onClose?: () => void
}

const Modal = ({
  type = 'primary',
  banner,
  title,
  subcategory,
  description,
  html_ref_github,
  html_ref_vercel,
  onClose
}: Props) => {
  const theme = useTheme()
  const modalRef = useRef<HTMLDivElement>(null)
  const [openSubCategoryId, setOpenSubCategoryId] = useState<number | null>(
    null
  )

  const filterDescription = (description: string) => {
    if (description.length >= 450) {
      return description.slice(0, 450).trim() + '...'
    }
    return description
  }

  useEffect(() => {
    modalRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    })
  })

  if (type === 'primary') {
    return (
      <S.Modal ref={modalRef}>
        <S.ModalHeader
          style={{
            background: `linear-gradient(${theme.overlaySecondaryColor}, ${theme.overlaySecondaryColor}), url(${banner}) no-repeat top / cover`
          }}
        >
          <S.CloseIcon
            onClick={onClose}
            src={closeIcon}
            alt="Ícone de fechar o modal"
          />
        </S.ModalHeader>
        <S.ModalContainer>
          <ContentTitle>{title}</ContentTitle>
          <Description>
            {description && filterDescription(description)}
          </Description>
          <div>
            <S.Button target="_blank" href={html_ref_github}>
              Ver no Github
            </S.Button>
            {html_ref_vercel && (
              <S.Button target="_blank" href={html_ref_vercel}>
                Ver na Vercel
              </S.Button>
            )}
          </div>
        </S.ModalContainer>
      </S.Modal>
    )
  }
  return (
    <S.Modal ref={modalRef}>
      <S.Container>
        {subcategory?.map((sub) => (
          <div key={sub.id}>
            <S.Subcategory
              onClick={(ev) => {
                ev.stopPropagation()
                setOpenSubCategoryId(sub.id)
              }}
              style={{
                background: `linear-gradient(${theme.overlaySecondaryColor}, ${theme.overlaySecondaryColor}), url(${sub.banner}) no-repeat center / cover`
              }}
            >
              <Title type="secondary">{sub.title}</Title>
            </S.Subcategory>
            {openSubCategoryId === sub.id && (
              <S.Content>
                <S.Banner
                  style={{
                    background: `linear-gradient(${theme.overlaySecondaryColor}, ${theme.overlaySecondaryColor}), url(${sub.banner}) no-repeat top / cover`
                  }}
                />
                <S.InfosWrapper>
                  <ContentTitle>{sub.title}</ContentTitle>
                  <Description>{sub.description}</Description>
                  <S.CloseBtn
                    onClick={() => {
                      setOpenSubCategoryId(null)
                    }}
                  >
                    Voltar
                  </S.CloseBtn>
                  <S.CloseBtn
                    onClick={() => {
                      setOpenSubCategoryId(null)
                      onClose?.()
                    }}
                  >
                    Fechar tudo
                  </S.CloseBtn>
                </S.InfosWrapper>
              </S.Content>
            )}
          </div>
        ))}
      </S.Container>
    </S.Modal>
  )
}

export default Modal
