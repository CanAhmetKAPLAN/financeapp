import React, { type SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

interface Props {
    portfolioValues: string[];
    onPortFolioDelete: (e: SyntheticEvent) => void;
}


const CardPortfolio = ({ portfolioValues, onPortFolioDelete }: Props) => {
    return (
        <>
            <h4>
                {portfolioValues}
            </h4>
            <DeletePortfolio onPortFolioDelete={onPortFolioDelete} portfolioValues={portfolioValues} />
        </>
    )
}

export default CardPortfolio
