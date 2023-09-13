export interface Experience {
  title: string
  company: string
  from: string
  to: string
  details: {
    location: string
    responsibilities: string[]
  }
}
