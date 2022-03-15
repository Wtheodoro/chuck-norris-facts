export interface HomeProps {
    exploreFact: Fact
}
  
export interface Fact {
    icon_url: string
    id: string
    url: string
    value: string
}