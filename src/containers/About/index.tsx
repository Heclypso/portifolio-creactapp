import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import Tags from '../../components/Tags'

import { GithubSection } from './styles'

const About = () => {
  return (
    <section>
      <Title>Sobre mim</Title>
      <Paragraph>
        Olá, eu me chamo Gabriel e tenho 21 anos
        <br />
        <br />
        Tenho um perfil multidisciplinar construído a partir de minhas
        experiências anteriores em áreas voltadas ao ramo da programação e
        demandas empresariais, onde pude desenvolver minha capacidade analítica,
        empatia e trabalho em equipe, os quais considero pontos fortes que
        poderei utilizar em possíveis desafios oferecidos pela carreira.
        <br />
        <br />
        Estou expandindo meu aprendizado e construindo meu portfólio com
        projetos práticos. Atualmente, tenho habilidades em:
        <br />
        <br />
        Softwares de Design como o Figma
        <br />
        Softwares de Programação como o Visual Studio Code
        <br />
        Ferramentas que auxiliam no desenvolvimento como Git e GitHub
        <br />
        Mapeamento das necessidades do usuário
        <br />
        Construção de interfaces multiplataformas
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
