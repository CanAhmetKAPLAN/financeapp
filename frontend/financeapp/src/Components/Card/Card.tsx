import React, { type JSX, type SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
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
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <Link
        to={`/company/${companies.symbol}/company-profile`}
        className="font-bold text-center text-black md:text-left"
      >
        {companies.name} ({companies.symbol})
      </Link>
      <p className="text-black">{companies.currency}</p>
      <p className="font-bold text-black">
        {companies.exchangeShortName} - {companies.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={(e) => onPortfolioCreate(e, companies.symbol)}
        symbol={companies.symbol}
      />
    </div>
  )
}

export default Card
