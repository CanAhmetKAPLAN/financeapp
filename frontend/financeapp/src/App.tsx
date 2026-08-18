import { useState, type ChangeEvent, type SyntheticEvent } from 'react'
import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import { searchCompanies } from './Components/api'
import type { CompanySearch } from './company'
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio'

function App() {
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string>('')
  const [portfolioValues, setPortfolioValue] = useState<string[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const onPortfolioCreate = (e: any) => {
    e.preventDefault()
    const exist = portfolioValues.includes(e.target[0].value);
    if (exist) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValue(updatedPortfolio);
  }
  const onPortfolioDelete = (e: any) => {
    e.preventDefault()
    const removed = portfolioValues.filter(item => item !== e.target[0].value);
    setPortfolioValue(removed);
  }
  const onSearchSubmit = async (e: SyntheticEvent) => {
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
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      {serverError && <p className='error'>{serverError}</p>}
      {portfolioValues.length > 0 && <p>Portföy: {portfolioValues.join(', ')}</p>}
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
      <CardList companies={searchResult} onPortfolioCreate={onPortfolioCreate} />
    </>
  )
}

export default App
