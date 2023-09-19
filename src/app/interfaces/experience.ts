export interface Experience {
  id: number
  title: string
  company: string
  from: string
  to: string
  details: {
    description: string
    location: string
    responsibilities: string[]
    link: string
  }
}
