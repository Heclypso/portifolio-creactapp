import bxmailer from './assets/project_banners/bxmailer.png'
import efood from './assets/project_banners/efood.png'
import eplay from './assets/project_banners/eplay.png'
import cdplus from './assets/project_banners/cdplus.png'
import ldcontatos from './assets/project_banners/ldcontatos.png'
import ehtml from './assets/project_banners/ehtml.png'
import jqdfotos from './assets/project_banners/jqgdfotos.png'
import tcnest from './assets/project_banners/tcnest.png'
import arecentes from './assets/project_banners/arecentes.png'

export const projects: Project[] = [
  {
    id: 1,
    name: 'EFood',
    description:
      'O projeto foi desenvolvido com intuito de criar um sistema de envio de e-mails html similar ao https://putsmail.com e utiliza a metodologia BEM para a nomenclatura de classes, o frontend do projeto é responsável por receber as informações inseridas nos formulários e enviar uma requisição fetch api do tipo post para a api realizar o envio do email, se tudo der certo a api irá retornar uma mensagem de código 200 no console do navegador do frontend "Email enviado com sucesso" e o JQuery irá exibir um toast azul na tela com a mensagem de sucess, caso contrario o JQuery irá bloquear o envio das informações para a api e irá exibir um toast vermelho com a mensagem de error e uma sequência de labels.error em vermelho informando quais campos precisam ser corrigidos.',
    html_url_github: 'https://efood-lime-kappa.vercel.app',
    html_url_vercel: 'https://github.com/Heclypso/efood',
    banner: efood
  },
  {
    id: 2,
    name: 'EPlay',
    description:
      'O projeto foi desenvolvido com intuito de criar um sistema de envio de e-mails html similar ao https://putsmail.com e utiliza a metodologia BEM para a nomenclatura de classes, o frontend do projeto é responsável por receber as informações inseridas nos formulários e enviar uma requisição fetch api do tipo post para a api realizar o envio do email, se tudo der certo a api irá retornar uma mensagem de código 200 no console do navegador do frontend "Email enviado com sucesso" e o JQuery irá exibir um toast azul na tela com a mensagem de sucess, caso contrario o JQuery irá bloquear o envio das informações para a api e irá exibir um toast vermelho com a mensagem de error e uma sequência de labels.error em vermelho informando quais campos precisam ser corrigidos.',
    html_url_github: 'https://github.com/Heclypso/eplay',
    html_url_vercel: 'https://eplay-self-one.vercel.app',
    banner: eplay
  },
  {
    id: 3,
    name: 'BXMailer',
    description:
      'O projeto foi desenvolvido com intuito de criar um sistema de envio de e-mails html similar ao https://putsmail.com e utiliza a metodologia BEM para a nomenclatura de classes, o frontend do projeto é responsável por receber as informações inseridas nos formulários e enviar uma requisição fetch api do tipo post para a api realizar o envio do email, se tudo der certo a api irá retornar uma mensagem de código 200 no console do navegador do frontend "Email enviado com sucesso" e o JQuery irá exibir um toast azul na tela com a mensagem de sucess, caso contrario o JQuery irá bloquear o envio das informações para a api e irá exibir um toast vermelho com a mensagem de error e uma sequência de labels.error em vermelho informando quais campos precisam ser corrigidos.',
    html_url_github: 'https://github.com/Heclypso/bxmailer-front',
    html_url_vercel: 'https://bxmailer-front.vercel.app',
    banner: bxmailer
  },
  {
    id: 4,
    name: 'Lista de contatos',
    description:
      'O projeto foi desenvolvido com intuito de criar um sistema de envio de e-mails html similar ao https://putsmail.com e utiliza a metodologia BEM para a nomenclatura de classes, o frontend do projeto é responsável por receber as informações inseridas nos formulários e enviar uma requisição fetch api do tipo post para a api realizar o envio do email, se tudo der certo a api irá retornar uma mensagem de código 200 no console do navegador do frontend "Email enviado com sucesso" e o JQuery irá exibir um toast azul na tela com a mensagem de sucess, caso contrario o JQuery irá bloquear o envio das informações para a api e irá exibir um toast vermelho com a mensagem de error e uma sequência de labels.error em vermelho informando quais campos precisam ser corrigidos.',
    html_url_github: 'https://github.com/Heclypso/lista-de-contatos',
    html_url_vercel: 'https://lista-de-contatos-navy-omega.vercel.app',
    banner: ldcontatos
  },
  {
    id: 5,
    name: 'Clone Disney Plus',
    description:
      'O projeto foi desenvolvido com intuito de criar um sistema de envio de e-mails html similar ao https://putsmail.com e utiliza a metodologia BEM para a nomenclatura de classes, o frontend do projeto é responsável por receber as informações inseridas nos formulários e enviar uma requisição fetch api do tipo post para a api realizar o envio do email, se tudo der certo a api irá retornar uma mensagem de código 200 no console do navegador do frontend "Email enviado com sucesso" e o JQuery irá exibir um toast azul na tela com a mensagem de sucess, caso contrario o JQuery irá bloquear o envio das informações para a api e irá exibir um toast vermelho com a mensagem de error e uma sequência de labels.error em vermelho informando quais campos precisam ser corrigidos.',
    html_url_github: 'https://github.com/Heclypso/clone_disney_plus',
    html_url_vercel: 'https://clone-disney-plus-beta.vercel.app',
    banner: cdplus
  },
  {
    id: 6,
    name: 'Email HTML',
    description:
      'O projeto foi desenvolvido com intuito de criar um sistema de envio de e-mails html similar ao https://putsmail.com e utiliza a metodologia BEM para a nomenclatura de classes, o frontend do projeto é responsável por receber as informações inseridas nos formulários e enviar uma requisição fetch api do tipo post para a api realizar o envio do email, se tudo der certo a api irá retornar uma mensagem de código 200 no console do navegador do frontend "Email enviado com sucesso" e o JQuery irá exibir um toast azul na tela com a mensagem de sucess, caso contrario o JQuery irá bloquear o envio das informações para a api e irá exibir um toast vermelho com a mensagem de error e uma sequência de labels.error em vermelho informando quais campos precisam ser corrigidos.',
    html_url_github: 'https://github.com/Heclypso/email/blob/main/email.html',
    banner: ehtml
  },
  {
    id: 7,
    name: 'JQuery Galeria',
    description:
      'O projeto foi desenvolvido com intuito de criar um sistema de envio de e-mails html similar ao https://putsmail.com e utiliza a metodologia BEM para a nomenclatura de classes, o frontend do projeto é responsável por receber as informações inseridas nos formulários e enviar uma requisição fetch api do tipo post para a api realizar o envio do email, se tudo der certo a api irá retornar uma mensagem de código 200 no console do navegador do frontend "Email enviado com sucesso" e o JQuery irá exibir um toast azul na tela com a mensagem de sucess, caso contrario o JQuery irá bloquear o envio das informações para a api e irá exibir um toast vermelho com a mensagem de error e uma sequência de labels.error em vermelho informando quais campos precisam ser corrigidos.',
    html_url_github: 'https://github.com/Heclypso/jquery-galeria-fotos',
    html_url_vercel: 'https://gm-jquery-galeria-fotos.vercel.app',
    banner: jqdfotos
  },
  {
    id: 8,
    name: 'The Cake Nest',
    description:
      'O projeto foi desenvolvido com intuito de criar um sistema de envio de e-mails html similar ao https://putsmail.com e utiliza a metodologia BEM para a nomenclatura de classes, o frontend do projeto é responsável por receber as informações inseridas nos formulários e enviar uma requisição fetch api do tipo post para a api realizar o envio do email, se tudo der certo a api irá retornar uma mensagem de código 200 no console do navegador do frontend "Email enviado com sucesso" e o JQuery irá exibir um toast azul na tela com a mensagem de sucess, caso contrario o JQuery irá bloquear o envio das informações para a api e irá exibir um toast vermelho com a mensagem de error e uma sequência de labels.error em vermelho informando quais campos precisam ser corrigidos.',
    html_url_github: 'https://github.com/Heclypso/loja_doces',
    html_url_vercel: 'https://loja-doces-iota.vercel.app',
    banner: tcnest
  },
  {
    id: 9,
    name: 'Atividades Recentes',
    description:
      'O projeto foi desenvolvido com intuito de criar um sistema de envio de e-mails html similar ao https://putsmail.com e utiliza a metodologia BEM para a nomenclatura de classes, o frontend do projeto é responsável por receber as informações inseridas nos formulários e enviar uma requisição fetch api do tipo post para a api realizar o envio do email, se tudo der certo a api irá retornar uma mensagem de código 200 no console do navegador do frontend "Email enviado com sucesso" e o JQuery irá exibir um toast azul na tela com a mensagem de sucess, caso contrario o JQuery irá bloquear o envio das informações para a api e irá exibir um toast vermelho com a mensagem de error e uma sequência de labels.error em vermelho informando quais campos precisam ser corrigidos.',
    html_url_github: 'https://github.com/Heclypso/recent-activity',
    html_url_vercel: 'https://recent-activity.vercel.app',
    banner: arecentes
  }
]
