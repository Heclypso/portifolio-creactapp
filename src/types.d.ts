declare type Project = {
  id: number
  name: string
  description: string
  html_url_github: string
  html_url_vercel?: string
  banner: string
}

declare type Subcategory = {
  id: number
  title: string
  banner: string
  description: string
}
