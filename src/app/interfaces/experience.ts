export interface Experience {
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
