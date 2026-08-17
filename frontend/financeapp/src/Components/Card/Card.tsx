import React, { type JSX } from 'react'
import './Card.css'

interface Props {
  companyName: string
  ticker: string
  price: number
}
const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
  return (
    <div className='card'>
      <img src="https://thumbs.dreamstime.com/z/finance-business-concept-invesment-graph-coins-rows-investment-growth-table-blue-color-tone-111488763.jpg?ct=jpeg" alt={companyName} />
      <div className='details'>
        <h2>{ticker}</h2>
        <p>${price}</p>
        <p className='info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, ea!</p>
      </div>
    </div>
  )
}

export default Card
