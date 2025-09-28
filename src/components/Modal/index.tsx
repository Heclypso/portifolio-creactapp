import { useTheme } from 'styled-components'

import closeIcon from '../../assets/icons/close-icon.png'

import * as S from './styles'

type Props = {
  banner: string
  title: string
  description: string
  html_ref_github: string
  html_ref_vercel: string
  onClose: () => void
}

const Modal = ({
  banner,
  title,
  description,
  html_ref_github,
  html_ref_vercel,
  onClose
}: Props) => {
  const theme = useTheme()

  return (
    <S.Modal>
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
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.Description>{description}</S.Description>
        <div>
          <S.Button target="_blank" href={html_ref_github}>
            Ver no Github
          </S.Button>
          <S.Button target="_blank" href={html_ref_vercel}>
            Ver na Vercel
          </S.Button>
        </div>
      </S.ModalContainer>
    </S.Modal>
  )
}

export default Modal
