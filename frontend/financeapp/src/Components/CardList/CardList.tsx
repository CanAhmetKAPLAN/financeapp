import React, { type JSX, type SyntheticEvent } from 'react'
import Card from '../Card/Card'
import type { CompanySearch } from '../../company'
import { v4 as uuidv4 } from 'uuid'

interface Props {
    companies: CompanySearch[]
    onPortfolioCreate: (e: SyntheticEvent, symbol: string) => void
}

const defaultCompanies: CompanySearch[] = [
    { name: 'Apple', symbol: 'AAPL', currency: 'USD', exchangeShortName: 'NASDAQ', stockExchange: 'NASDAQ' },
    { name: 'Microsoft', symbol: 'MSFT', currency: 'USD', exchangeShortName: 'NASDAQ', stockExchange: 'NASDAQ' },
    { name: 'Tesla', symbol: 'TSLA', currency: 'USD', exchangeShortName: 'NASDAQ', stockExchange: 'NASDAQ' },
]

const CardList: React.FC<Props> = ({ companies, onPortfolioCreate }: Props): JSX.Element => {
    const list = companies.length > 0 ? companies : defaultCompanies
    return (
        <>
            {companies.length > 0 ? (list.map((company) => (
                <Card key={company.symbol} id={uuidv4()} companies={company} onPortfolioCreate={onPortfolioCreate} />
            ))) : (<p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                Sonuc Yok!
            </p>)}
        </>
    )
}

export default CardList