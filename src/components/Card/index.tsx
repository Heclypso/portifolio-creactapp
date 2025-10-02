import { useState } from 'react'

import { useTheme } from 'styled-components'

import Modal from '../Modal'
import Title from '../Title'

import * as S from './styles'

type Props = {
  title: string
  banner: string
  html_url_github?: string
  html_url_vercel?: string
  description?: string
}

const Card = ({
  title,
  banner,
  html_url_github,
  html_url_vercel,
  description
}: Props) => {
  const [showModalState, setShowModalState] = useState(false)

  const theme = useTheme()

  const closeModal = () => setShowModalState(false)

  const modalHandler = () => {
    setShowModalState((prev) => !prev)
  }

  return (
    <>
      <S.Card
        onClick={modalHandler}
        style={{
          background: `linear-gradient(${theme.overlayPrimaryColor}) , url(${banner}) no-repeat center`,
          backgroundSize: 'cover'
        }}
      >
        <Title type="secondary">{title}</Title>
      </S.Card>
      {showModalState && (
        <Modal
          onClose={closeModal}
          banner={banner}
          description={description ?? ''}
          html_ref_github={html_url_github ?? ''}
          html_ref_vercel={html_url_vercel ?? ''}
          title={title}
        />
      )}
    </>
  )
}

export default Card
