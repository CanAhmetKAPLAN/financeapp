import { useState, type ChangeEvent, type SyntheticEvent } from 'react'
import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import { searchCompanies } from './Components/api'
import type { CompanySearch } from './company'

function App() {
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      const result = await searchCompanies(search)
      setSearchResult(result)
      setServerError('')
    } catch (error) {
      setServerError(error instanceof Error ? error.message : 'Bilinmeyen bir hata oluştu')
    }
  }
  return (
    <>
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      {serverError && <p className='error'>{serverError}</p>}
      <CardList companies={searchResult} />
    </>
  )
}

export default App
