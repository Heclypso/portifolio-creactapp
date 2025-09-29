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
        description: 'ype placeholder'
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
        description: 'ebac placeholder'
      },
      {
        id: 2,
        banner: espro,
        title: 'Espro',
        description: 'Espro placeholder'
      },
      {
        id: 3,
        banner: etec,
        title: 'ETEC João Belarmino',
        description: 'etecplaceholder'
      }
    ]
  }
]
