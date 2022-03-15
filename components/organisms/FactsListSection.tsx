import Title from "../atoms/Title"
import { Fact } from '../../types/facts'
import SmallCard from "../atoms/SmallCard"

interface FactsListSectionProps {
  facts: Fact[]
}

const FactsListSection = ({ facts }: FactsListSectionProps) => {

  console.log(facts)
  return (
    <section className="pt-6">
        <Title>List of Facts</Title>
        <div className="cy_recordedFacts">
          {
            facts?.map(({ value, icon_url, updated_at, id}: Fact) => (
              <SmallCard key={id} fact={value} img_url={icon_url} updated_at={updated_at}/>
            ))
          }
        </div>
    </section>
  )
}

export default FactsListSection