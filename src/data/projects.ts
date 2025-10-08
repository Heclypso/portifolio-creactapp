import bxmailer from '../assets/project_banners/bxmailer.png'
import efood from '../assets/project_banners/efood.png'
import eplay from '../assets/project_banners/eplay.png'
import cdplus from '../assets/project_banners/cdplus.png'
import ldcontatos from '../assets/project_banners/ldcontatos.png'
import ehtml from '../assets/project_banners/ehtml.png'
import jqdfotos from '../assets/project_banners/jqgdfotos.png'
import tcnest from '../assets/project_banners/tcnest.png'
import arecentes from '../assets/project_banners/arecentes.png'

export const projects: Project[] = [
  {
    id: 1,
    name: 'EFood',
    description: `O se trata de um menu online com uma opção diversa de restaurantes, tipos de comidas e pratos que podem ser adicionadas ao carrinho.

    O carrinho funciona através do Redux que gerencia as informações refentes ao pedido, em seguida o Formik juntamente com o Yup validam os formulários que são enviados para a API.

    Após o pedido ser concluido, é exibido uma mensagem de sucess que contém o id do pedido que foi retornado pela API.`,
    html_url_github: 'https://github.com/Heclypso/efood',
    html_url_vercel: 'https://efood-lime-kappa.vercel.app',
    banner: efood
  },
  {
    id: 2,
    name: 'EPlay',
    description: `O projeto foi desenvolvido com intuito de criar uma loja de jogos.

    O mesmo possui um sistema de carrinho de compras que foi desenvolvido através do Redux, os formulários referentes ao pagamento do pedido são validados com ajuda do Formik e do Yup.

    Após o pedido ser validado a API retorna o ID do pedido que é exibido na mensagem de sucess da compra.`,
    html_url_github: 'https://github.com/Heclypso/eplay',
    html_url_vercel: 'https://eplay-self-one.vercel.app',
    banner: eplay
  },
  {
    id: 3,
    name: 'BXMailer',
    description: `O projeto foi desenvolvido com intuito de criar um sistema de envio de e-mails html similar ao https://putsmail.com e utiliza a metodologia BEM para a nomenclatura de classes.

    O Front-end do projeto é responsável por receber as informações inseridas nos formulários e enviar uma requisição fetch API do tipo POST para a API realizar o envio do email, se tudo der certo sera exibido um toast azul na tela com a mensagem de sucess, caso contrario o JQuery irá bloquear o envio das informações para a api e irá exibir um toast vermelho com a mensagem de error e uma sequência de labels.error em vermelho informando quais campos precisam ser corrigidos.`,
    html_url_github: 'https://github.com/Heclypso/bxmailer-front',
    html_url_vercel: 'https://bxmailer-front.vercel.app',
    banner: bxmailer
  },
  {
    id: 4,
    name: 'Lista de contatos',
    description:
      'O projeto foi desenvolvido com intuito de criar uma lista de contatos, nela você pode adicionar um novo contato, excluir um contato ou editar um contato já existente, além de poder também pesquisar os contatos que já foram criados e estão armazenados na sua lista de contatos.',
    html_url_github: 'https://github.com/Heclypso/lista-de-contatos',
    html_url_vercel: 'https://lista-de-contatos-navy-omega.vercel.app',
    banner: ldcontatos
  },
  {
    id: 5,
    name: 'Clone Disney Plus',
    description: `O projeto foi desenvolvido utilizando a metodologia BEM em conjunto com Sass e Gulp, com o objetivo de criar uma landing page responsiva da plataforma Disney+.

    A proposta principal foi praticar a construção de layouts e o desenvolvimento de tasks no Gulp para automatizar processos como compactação de imagens, compilação do Sass em CSS, entre outros.`,
    html_url_github: 'https://github.com/Heclypso/clone_disney_plus',
    html_url_vercel: 'https://clone-disney-plus-beta.vercel.app',
    banner: cdplus
  },
  {
    id: 6,
    name: 'Email HTML',
    description: `O projeto utiliza css inline e algumas tags ultrapassadas do html como a tag <center> com o foco em garantir o máximo possível de compatibilidade com diversos navegadores e aplicativos de recebimento de e-mails como Outlook e Gmail.

      O principal objetivo do projeto foi praticar o uso dessas tags ultrapassadas juntamente com a construção do layout com tabelas, método esse que ja foi comum, para construir e-mails.`,
    html_url_github: 'https://github.com/Heclypso/email/blob/main/email.html',
    banner: ehtml
  },
  {
    id: 7,
    name: 'JQuery Galeria',
    description: `O projeto se trata de uma galeria que adiciona à sua lista de imagens e renderiza uma nova imagem refetente à url inserida no input que é exibido ao clicar no botão verde "NOVA IMAGEM +", após isso, basta clicar em "ADICIONAR".

    O mesmo foi desenvolvido com o intuito de praticar o uso do JQuery.
`,
    html_url_github: 'https://github.com/Heclypso/jquery-galeria-fotos',
    html_url_vercel: 'https://gm-jquery-galeria-fotos.vercel.app',
    banner: jqdfotos
  },
  {
    id: 8,
    name: 'The Cake Nest',
    description: `O projeto se trata de uma loja de um layout de loja de doces e foi desenvolvido com o intuito de praticar a criação de layouts.

    The Cake Nest foi um dos primeiros projeto que eu fiz durante o meu curso de Engenheiro Front-end na EBAC.`,
    html_url_github: 'https://github.com/Heclypso/loja_doces',
    html_url_vercel: 'https://loja-doces-iota.vercel.app',
    banner: tcnest
  },
  {
    id: 9,
    name: 'Atividades Recentes',
    description: `O projeto foi inspirado em duas páginas do Google Account e tem como objetivo comunicar ao usuário acessos estranhos à sua conta. O projeto funciona da seguinte maneira, o front-end faz uma requisição pro back-end (api) que retorna uma resposta contendo um objeto que simula as informações vindas de um novo acesso à sua conta utilizando um dispositivo diferente em uma cidade diferente e com um navegador diferente do habitual essa reposta é formatada em um array que é usado para uma comparação com o ultimo acesso autenticado da sua conta.

Para observar o comportamento do projeto em relação à invasão é necessário apertar o botão vermelho, para cada clique será criado uma nova invasão`,
    html_url_github: 'https://github.com/Heclypso/recent-activity',
    html_url_vercel: 'https://recent-activity.vercel.app',
    banner: arecentes
  }
]
