import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import Tags from '../../components/Tags'

import { GithubSection } from './styles'

const About = () => {
  return (
    <section id="about">
      <Title>Sobre mim</Title>
      <Paragraph>
        Olá, eu me chamo Gabriel e tenho 21 anos
        <br />
        <br />
        Eu descobri o mundo da programação por volta de 2018 que foi quando eu
        comecei a planejar minha carreira.
        <br />
        <br />
        Em 2019 eu fiz uma prova para entrar na ETEC João Belarmino onde eu fiz
        um curso técnico de Análise e Desenvolvimento de Sistemas integrado ao
        ensino médio que foi a minha porta de entrada para o mundo da
        programação.
        <br />
        <br />
        Eu sempre amei estudar então uma carreira que como requisito necessita
        que você estude a todo momento durante a sua vida inteira caiu como uma
        luva para mim.
        <br />
        <br />
        Eu concluí o ensino médio em 2021 e planejo no futuro cursar mestreado
        em engenharia de software e me tornar um programador excepcional.
        <br />
        <br />
        Eu usei o tempo de 2022 até o fim de 2023 para escolher a vertente da
        programação que eu iria seguir e construir minha carreira.
      </Paragraph>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=heclypso&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=heclypso&layout=compact&langs_count=7&theme=dracula" />
      </GithubSection>
      <Tags />
    </section>
  )
}

export default About
