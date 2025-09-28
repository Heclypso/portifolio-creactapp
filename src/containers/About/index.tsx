import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'

import { GithubSection } from './styles'

const About = () => {
  return (
    <section id="about">
      <Title>Sobre mim</Title>
      <Paragraph>
        Olá, eu me chamo Gabriel e tenho 21 anos.
        <br />
        <br />
        Descobri o mundo da programação por volta de 2018 que foi quando eu
        comecei a planejar minha carreira.
        <br />
        <br />
        Em 2019 eu fiz uma prova para entrar na ETEC João Belarmino onde eu fiz
        um curso técnico de Análise e Desenvolvimento de Sistemas integrado ao
        ensino médio que foi a minha porta de entrada para o mundo da
        programação.
        <br />
        <br />
        Sempre amei estudar então uma carreira que como requisito necessita que
        você estude a todo momento durante a sua vida inteira caiu como uma luva
        para mim.
        <br />
        <br />
        Concluí o ensino médio em 2021 e planejo no futuro cursar mestreado em
        engenharia de software e me tornar um programador excepcional.
        <br />
        <br />
        Entre 2022 e o fim de 2023, aproveitei o tempo para escolher a vertente
        da programação que eu iria seguir e construir minha carreira.
        <br />
        <br />
        Em março de 2023 eu entrei na Espro que é uma organização sem fins
        lucrativos que forma e insere jovens no mundo do trabalho e através dela
        eu entrei como auxiliar de escritório na Ypê, ao fim do meu contrato eu
        recebi um certificado de destaque pelo meu desempenho.
        <br />
        <br />
        Ainda em 2023 enquanto trabalhava na Ypê eu investi parte do meu salário
        em um curso de Engenheiro Front-end na EBAC.
        <br />
        <br />E isso me traz ao meu momento de carreira atual
      </Paragraph>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=heclypso&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=heclypso&layout=compact&langs_count=7&theme=dracula" />
      </GithubSection>
    </section>
  )
}

export default About
