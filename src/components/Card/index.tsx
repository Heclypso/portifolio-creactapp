import { useState } from 'react'

import Modal from '../Modal'
import Title from '../Title'

import * as S from './styles'

type Props = {
  title: string
  html_url: string
  background: string
}

const Card = ({ title, html_url, background }: Props) => {
  const [showModalState, setShowModalState] = useState(false)

  const description = `O projeto se trata de uma loja virtual de games que utiliza o Redux para gerenciamento do carrinho de compras e faz a conexão com a API através do RTK Query.

    Tecnologias utilizadas:

    Redux • RTK Query • React • Typescript
  `

  const closeModal = () => setShowModalState(false)

  return (
    <>
      <S.Card
        onClick={() => setShowModalState(true)}
        style={{
          background: `url(${background}) no-repeat center`,
          backgroundSize: 'cover'
        }}
      >
        <Title type="secondary">{title}</Title>
      </S.Card>
      {showModalState && (
        <Modal
          onClose={closeModal}
          banner={background}
          description={description}
          html_ref_github={html_url}
          html_ref_vercel="e"
          title={title}
        />
      )}
    </>
  )
}

export default Card
