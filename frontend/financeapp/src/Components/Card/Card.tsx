import React, { type JSX, type SyntheticEvent } from 'react'
import './Card.css'
import type { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio';

interface Props {
  id: string;
  companies: CompanySearch
  onPortfolioCreate: (e: SyntheticEvent, symbol: string) => void
}
const Card: React.FC<Props> = ({ id, companies, onPortfolioCreate }: Props): JSX.Element => {
  return (
    <div className='card' id={id}>
      <img src="https://thumbs.dreamstime.com/z/finance-business-concept-invesment-graph-coins-rows-investment-growth-table-blue-color-tone-111488763.jpg?ct=jpeg" alt={companies.name} />
      <div className='details'>
        <h2>{companies.name}</h2>
        <h2>{companies.symbol}</h2>
        <p>${companies.currency}</p>
        <p className='info'>{companies.exchangeShortName} - {companies.stockExchange}</p>
        <AddPortfolio onPortfolioCreate={(e) => onPortfolioCreate(e, companies.symbol)} symbol={companies.symbol} />
      </div>
    </div>
  )
}

export default Card
