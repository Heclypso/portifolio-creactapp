import ebac from './assets/experience_banners/ebac.png'
import espro from './assets/experience_banners/espro.jpg'
import ype from './assets/experience_banners/generic-banner.jpg'
import etec from './assets/experience_banners/etec.jpg'

type Experience = {
  id: number
  title: string
  banner: string
  subcategory: Subcategory[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Trabalho',
    banner: ype,
    subcategory: [
      {
        id: 1,
        title: 'Ypê',
        banner: ype,
        description: `No ambiente corporativo pude desenvolver habilidades de comunicação, trabalho em equipe e resiliência, atuando diretamente na área de manutenção industrial.

        Em equipe conseguimos planejar e executar a manutenção contínua dos equipamentos da área reduzindo a chance de quebra do equipamento bruscamente.

        Através do meu desempenho na empresa, me tornei o primeiro jovem aprendiz do meu setor a participar de um projeto da Ypê.`
      }
    ]
  },
  {
    id: 2,
    title: 'Educação',
    banner: ype,
    subcategory: [
      {
        id: 1,
        banner: ebac,
        title: 'EBAC',
        description: `A EBAC marcou o início da minha carreira, me permitindo que eu me aprofundasse na minha área favorita, o Front-end, e me tornasse Engenheiro Front-End.

        Durante o período do meu curso, pude aprender diversas ferramentas que, sem sombra de dúvida, me ajudarão ao longo da minha carreira.`
      },
      {
        id: 2,
        banner: espro,
        title: 'Espro',
        description: `Durante o período em que estive na Espro, pude desenvolver significativamente minhas habilidades e, acima de tudo, o trabalho em equipe. Também tive a oportunidade de aprender e aperfeiçoar ferramentas e boas práticas que levarei para a vida inteira.

        Além disso, graças ao meu desempenho no ambiente corporativo, conquistei um certificado de destaque do qual me orgulho muito.`
      },
      {
        id: 3,
        banner: etec,
        title: 'ETEC João Belarmino',
        description:
          'A ETEC João Belarmino foi a minha porta de entrada para o mundo da programação, durante ensino médio pude praticar um pouco de Front-end, Back-end, Banco de dados e etc.'
      }
    ]
  }
]
