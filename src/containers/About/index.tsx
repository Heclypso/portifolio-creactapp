import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'

import { GithubSection } from './styles'

const About = () => {
  return (
    <section id="about">
      <Title>Sobre mim</Title>
      <Paragraph type="tertiary">
        Olá, eu me chamo Gabriel e tenho 21 anos.
        <br />
        <br />
        No nono ano do ensino fundamental, em 2018, eu descobri o mundo do TI e
        da programação. Sempre quis seguir uma carreira nessa área e sempre
        gostei de estudar, então construir uma carreira em TI casou como uma
        luva para mim.
        <br />
        <br />
        Em 2019, comecei o ensino médio na ETEC da minha cidade e cursei Análise
        e Desenvolvimento de Sistemas integrado ao ensino médio. Passar na prova
        da ETEC foi incrível.
        <br />
        <br />
        Depois do ensino médio, tirei um tempo para pensar em qual vertente da
        programação eu investiria minha vida. Nesse período, busquei um emprego
        de meio período para pagar um curso profissionalizante de Engenheiro
        Front-end na EBAC.
        <br />
        <br />
        No curso, desenvolvi projetos utilizando tecnologias como HTML5, CSS3,
        Javascript, Babel, Typescript, JQuery, React, Vite, Redux, Sass, Less,
        Styled-components, Gulp, Cypress, Jest, Bootstrap, Git e GitHub. Além
        disso, também pratiquei conceitos como consumo de APIs RESTful,
        desenvolvimento de interfaces responsivas e deploy de aplicações
        utilizando a Vercel.
        <br />
        <br />
        Fui contratado como Jovem Aprendiz na Ypê através da Espro e comecei a
        usar o dinheiro do meu salário para pagar o curso. Trabalhei em um
        escritório de manutenção, sempre entregando minhas atribuições no prazo
        e usando minha comunicação como ponto forte para me adaptar rapidamente
        mesmo sem conhecer a área no início.
        <br />
        <br />
        Fui o primeiro menor aprendiz do meu setor a participar de um projeto.
        Dentro da minha turma da Espro, participei de uma empresa simulada e fui
        designado para o setor de TI. Após uma reestruturação, me candidatei
        para a diretoria e fui escolhido como consultor, ficando logo abaixo da
        instrutora na hierarquia.
        <br />
        <br />
        Ao fim do meu contrato, recebi um certificado de destaque pelo meu
        desempenho.
        <br />
        <br />
        Sei que, além de ferramentas e trabalho em equipe, ser programador é
        antes de tudo sobre resolver problemas. Minha criatividade,
        adaptabilidade, resiliência e capacidade de aprender sempre foram meus
        diferenciais.
        <br />
        <br />
        Agora, quero ir além. Busco um ambiente desafiador para aprender e
        crescer profissionalmente em minha carreira.
      </Paragraph>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=heclypso&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=heclypso&layout=compact&langs_count=7&theme=dracula" />
      </GithubSection>
    </section>
  )
}

export default About
