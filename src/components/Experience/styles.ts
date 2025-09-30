import styled from 'styled-components'

export const Experience = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: calc(100% - 31px);
  height: calc(100% - 56px);
  background-color: ${(props) => props.theme.secondaryColor};
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
  padding: 32px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    position: absolute;
    width: 100%;
    height: 100vh;
  }
`

export const Subcategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 100%;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
  position: absolute;
  top: 0;
  right: 0;
`

export const Banner = styled.div`
  width: 100%;
  height: 64%;
`

export const InfosWrapper = styled.div`
  padding: 32px;
`
