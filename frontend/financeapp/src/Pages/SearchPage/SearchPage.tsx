import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from 'react'
import Hero from '../../Components/Hero/Hero'
import type { CompanySearch } from '../../company'
import { searchCompanies } from '../../Components/api'
import CardList from '../../Components/CardList/CardList'
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio'
import Search from '../../Components/Search/Search'
import type { PortfolioGet } from '../../Models/Portfolio'
import { portfolioGetAPI, portfolioAddAPI, portfolioDeleteAPI } from '../../Services/PortfolioService'
import { toast } from 'react-toastify'

const SearchPage = () => {

    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
    const [serverError, setServerError] = useState<string>('')
    const [portfolioValues, setPortfolioValue] = useState<PortfolioGet[]>([]);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    useEffect(()=>{
        getPortfolio()
    },[])
    const getPortfolio = () =>{
        portfolioGetAPI()
        .then((res) =>{
            if (res?.data) {
                setPortfolioValue(res.data)
            }
        }).catch(()=>{
            toast.warning("Could not get portfolio values")
        })
    }
    const onPortfolioCreate = (e: SyntheticEvent) => {
        e.preventDefault()
        portfolioAddAPI((e.target as any)[0].value)
        .then((res) =>{
            if (res?.status ===201) {
                toast.success("Stock added to portfolio")
                getPortfolio()
            }
        }).catch(()=>{
            toast.warning("Could not create portfolio item")
        })
    }
    const onPortfolioDelete = (e: SyntheticEvent) => {
        e.preventDefault()
        portfolioDeleteAPI((e.target as any)[0].value)
        .then((res)=>{
            if (res?.status ==200) {
                toast.success("Stock deleted from portfolio")
                getPortfolio()
            }
        })
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
            <Hero />
            <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
            {serverError && <h1>{serverError}</h1>}
            {portfolioValues.length > 0 && <p>Portföy: {portfolioValues.map(p => p.symbol).join(', ')}</p>}
            <ListPortfolio portfolioValues={portfolioValues} onPortFolioDelete={onPortfolioDelete} />
            <CardList companies={searchResult} onPortfolioCreate={onPortfolioCreate} />
        </>
    )
}

export default SearchPage
