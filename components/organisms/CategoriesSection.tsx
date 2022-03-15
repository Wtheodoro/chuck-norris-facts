import Button from "../atoms/Button"
import Title from "../atoms/Title"

interface CategoriesSectionProps {
  categories: string[]
  eachButtonClick: (cateory: string) => void
}

const CategoriesSection = ({ categories, eachButtonClick }: CategoriesSectionProps) => {

  return (
    <section className="pt-6">
      <Title>Categories</Title>
      <div className="space-10 grid grid-cols-2 md:grid-cols-4 md:gap-x-10 cy_categories">
        {
          categories?.map((category: string) => (
            <Button
              key={category}
              onClick={() => eachButtonClick(category)}
            >
              {category}
            </Button>
          ))
        }
      </div>
    </section>
  )
}

export default CategoriesSection