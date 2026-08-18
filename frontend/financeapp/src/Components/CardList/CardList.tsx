import React, { type JSX } from 'react'
import Card from '../Card/Card'
import type { CompanySearch } from '../../company'

interface Props {
    companies: CompanySearch[]
}

const defaultCompanies: CompanySearch[] = [
    { name: 'Apple', symbol: 'AAPL', currency: 'USD', exchangeShortName: 'NASDAQ', stockExchange: 'NASDAQ' },
    { name: 'Microsoft', symbol: 'MSFT', currency: 'USD', exchangeShortName: 'NASDAQ', stockExchange: 'NASDAQ' },
    { name: 'Tesla', symbol: 'TSLA', currency: 'USD', exchangeShortName: 'NASDAQ', stockExchange: 'NASDAQ' },
]

const CardList: React.FC<Props> = ({ companies }: Props): JSX.Element => {
    const list = companies.length > 0 ? companies : defaultCompanies
    return (
        <div>
            {list.map((company) => (
                <Card key={company.symbol} companyName={company.name} ticker={company.symbol} price={0} />
            ))}
        </div>
    )
}

export default CardList