import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Banner from '../components/molecules/Banner'
import Header from '../components/molecules/Header'
import { getFact } from './api/hello'
import { HomeProps, Fact } from '../types/facts'
import Title from '../components/atoms/Title'
import FactsListSection from '../components/organisms/FactsListSection'



const Home = ({ exploreFact }: HomeProps) => {
  const [factOnBanner, setFactOnBanner] = useState<Fact>()
  const [recordedFacts, setRecordedFacts] = useState<Fact[]>([])

  const getANewFact = async () => {
    const fact = await getFact()
    setFactOnBanner(fact)
    setRecordedFacts([...recordedFacts, fact])
  }

  const getANewFactAndRecod = async () => {
    const fact = await getFact()
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

      <div className='bg-black h-[410px] sm:h-[510px] lg:h-[610px] xl-h[710px] 2xl:h-[810px]'>
        <Banner
          fact={factOnBanner?.value || exploreFact?.value}
          buttonClick={getANewFact}
        />
        <div className='h-screen'/>
        <div className='h-screen'/>
        <div className='h-screen'/>
      </div>
      
      <FactsListSection />

      <footer>
        
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const exploreFact = await fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())

  return {
    props: {
      exploreFact
    }
  }
}

export default Home
