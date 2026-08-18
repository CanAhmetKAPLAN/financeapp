import React, { type SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
    onPortFolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, onPortFolioDelete }) => {
    return (
        <div>
            <h3>My Portfolio</h3>
            <ul>
                {portfolioValues && portfolioValues.map((portfolioValues) => {
                    return <CardPortfolio portfolioValues={portfolioValues} onPortFolioDelete={onPortFolioDelete} />
                })
                }
            </ul>
        </div>
    )
}

export default ListPortfolio
