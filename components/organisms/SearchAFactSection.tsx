import { useState } from "react"
import TextInput from "../atoms/TextInput"
import Title from "../atoms/Title"

interface SearchAFactSectionProps {
  inputPressEnter: (value: string) => void
}

const SearchAFactSection = ({ inputPressEnter }: SearchAFactSectionProps) => {
  const [inputValue, setInputValue] = useState()

  const captureEnterPress = (event: any) => {
    if(event.key !== 'Enter') return
    inputPressEnter(event.target.value)
  }

  return (
  <section className="pt-6">
    <Title>Search a Fact</Title>
    <TextInput
      value={inputValue}
      onChange={setInputValue}
      onKeyDown={captureEnterPress} 
    />
  </section>
  )
}

export default SearchAFactSection