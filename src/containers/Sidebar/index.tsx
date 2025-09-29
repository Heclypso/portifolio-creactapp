import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { RootReducer } from '../../store'

import * as S from './styles'

type Props = {
  switchTheme: () => void
}

const Sidebar = (props: Props) => {
  const [showThemeButton, setShowThemeButton] = useState(true)
  const { scrollY } = useSelector((state: RootReducer) => state.sidebar)

  useEffect(() => {
    if (scrollY > 100) {
      setShowThemeButton(false)
    } else {
      setShowThemeButton(true)
    }
  }, [scrollY])

  return (
    <S.SidebarContainer>
      <Avatar />
      <Title $marginBottom={6} type="primary">
        Gabriel Munhak
      </Title>
      <Paragraph type="secondary" fontSize={16}>
        @heclypso
      </Paragraph>
      <S.Description type="primary" fontSize={14}>
        Engenheiro front-end <br /> <br />
        Técnico em ADS
      </S.Description>
      <S.ThemeButton $isVisible={showThemeButton} onClick={props.switchTheme}>
        Trocar tema
      </S.ThemeButton>
    </S.SidebarContainer>
  )
}

export default Sidebar
