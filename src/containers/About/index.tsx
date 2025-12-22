import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'

import { GithubSection } from './styles'

const About = () => {
  return (
    <section id="about">
      <Title>Sobre mim</Title>
      <Paragraph type="tertiary">
        Meu nome é Gabriel, tenho 21 anos e no nono ano do ensino fundamental,
        isso em 2018 eu descobri o mundo do TI e a programação, sempre quis
        seguir uma carreira de TI e sempre gostei de estudar, então construir
        uma carreira casou como uma luva para mim.
        <br />
        <br />
        Em 2019, comecei o ensino médio na ETEC da minha cidade e integrado ao
        ensino médio cursei Análise e Desenvolvimento de Sistemas. Passar na
        prova da ETEC pra mim foi incrível, me senti como se tivesse dado o
        primeiro passo na minha carreira.
        <br />
        <br />
        Depois do ensino médio tirei um tempo para pensar em qual vertente da
        programação investiria minha vida, então busquei um emprego de meio
        período para pagar um curso profissionalizante de Engenheiro Front-end
        na EBAC. No curso, desenvolvi projetos que utilizavam tecnologias como,
        HTML5, CSS3, Javascript, Babel, Typescript, JQuery, React, Vite, Redux,
        Sass, Less, Styled-components, Gulp, Cypress, Jest, Bootstrap, Git e
        GitHub. Além disso também pratiquei a conceitos como consumo de APIs
        RESTful, desenvolvimento de interfaces responsivas e deploy de
        aplicações utilizando a Vercel.
        <br />
        <br />
        Fui contratado como Jovem Aprendiz na Ypê através de uma empresa
        terceirizada chamada Espro e comecei a usar o dinheiro do meu salário
        para pagar o curso.
        <br />
        <br />
        Dentro da Ypê trabalhei em um escritório de Manutenção, eu dava meu
        melhor todos os dias, gerenciar tempo sempre foi um ponto forte meu,
        então sempre entreguei minhas atribuições dentro do prazo. No começo,
        foi um choque, porque eu não entendia nada sobre manutenção. Mas minha
        comunicação sempre foi meu ponto forte, então foi só questão de tempo
        para dominar as demandas que me eram passadas.
        <br />
        <br />
        Ainda dentro da Ypê fui o primeiro menor aprendiz do meu setor à
        participar de um projeto. Dentro da minha turma da Espro acontecia uma
        empresa simulada dividida em setores, logo quando entrei fui designado
        para o setor de TI, após isso a minha instrutora fez uma reestruturação
        na empresa e resolvi me candidatar como membro da diretoria e então,
        quando o resultado chegou ela tinha me escolhido como consultor da
        diretoria, eu só ficava abaixo dela na hierarquia da empresa.
        <br />
        <br />
        Ao fim do meu contrato, como resultado do meu trabalho, minha instrutora
        me entregou um certificado de destaque pelo meu desempenho.
        <br />
        <br />
        Sei que além de trabalho em equipe e ferramentas, ser Programador é,
        antes de tudo, sobre resolver problemas. Por isso, minha capacidade de
        resolver problemas sempre foi meu maior diferencial – seja aprendendo
        novas tecnologias ou praticando as que eu já sei.
        <br />
        <br />
        Tenho muita criatividade para pensar fora da caixa e encontrar soluções
        inovadoras, mas sem perder o foco nos requisitos, resultados e impactos
        da minha escolha. Sou adaptável, porque sei que o mundo da programação
        muda o tempo todo e o que funciona hoje pode não funcionar amanhã. E,
        acima de tudo, sou resiliente – já aprendi na prática que um desafio bem
        enfrentado sempre vira uma grande oportunidade de crescimento. Agora,
        quero ir além. Busco um ambiente desafiador para aprender e crescer
        profissionalmente em minha carreira.
      </Paragraph>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=heclypso&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=heclypso&layout=compact&langs_count=7&theme=dracula" />
      </GithubSection>
    </section>
  )
}

export default About
