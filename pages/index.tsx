import Head from 'next/head'
import { useState } from 'react'
import Banner from '../components/molecules/Banner'
import Header from '../components/molecules/Header'
import { getFact, getFactByCategory, getFactByQuery } from './api/hello'
import { Fact } from '../types/facts'
import FactsListSection from '../components/organisms/FactsListSection'
import CategoriesSection from '../components/organisms/CategoriesSection'
import SearchAFactSection from '../components/organisms/SearchAFactSection'

export interface HomeProps {
  exploreFact: Fact
  factsCategories: string[]
}

const Home = ({ exploreFact, factsCategories }: HomeProps) => {
  const [factOnBanner, setFactOnBanner] = useState<Fact>()
  const [recordedFacts, setRecordedFacts] = useState<Fact[]>([])

  const getANewFact = async () => {
    const fact = await getFact()
    setFactOnBanner(fact)
    setRecordedFacts([...recordedFacts, fact])
  }

  const getANewFactByCategory = async (category: string) => {
    const fact = await getFactByCategory(category)
    setFactOnBanner(fact)
    setRecordedFacts([...recordedFacts, fact])
  }

  const getANewFactByQuery = async (query: string) => {
    const fact = await getFactByQuery(query)
    setFactOnBanner(fact)
    setRecordedFacts([...recordedFacts, fact])
  }

  return (
    <div>
      <Head>
        <title>Chuck Norris</title>
        <meta name="Chuck Norris" content="A webpage dedicated to show some facts about Chuck Norris" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='sticky top-0 left-0 right-0 z-10'>
        <Header />
      </header>

      <main>
        <div className='bg-black h-[410px] sm:h-[510px] lg:h-[610px] xl-h[710px] 2xl:h-[810px]'>
          <Banner
            fact={factOnBanner?.value || exploreFact?.value}
            buttonClick={getANewFact}
          />
        </div>

        <div className='max-w-7xl mx-auto px-8 sm:px-16 min-h-screen'>
          <CategoriesSection
            categories={factsCategories}
            eachButtonClick={getANewFactByCategory}
          />

          <SearchAFactSection
            inputPressEnter={getANewFactByQuery}
          />
          
          <FactsListSection
            facts={recordedFacts}
          />
        </div>
        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const exploreFact = await fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())

  const factsCategories = await fetch('https://api.chucknorris.io/jokes/categories')
    .then((response) => response.json())

  return {
    props: {
      exploreFact,
      factsCategories,
    }
  }
}

export default Home
