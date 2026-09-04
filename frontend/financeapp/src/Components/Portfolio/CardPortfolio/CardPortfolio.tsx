import { type SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import type { PortfolioGet } from '../../../Models/Portfolio';

interface Props {
    portfolioValues: PortfolioGet;
    onPortFolioDelete: (e: SyntheticEvent) => void;
}


const CardPortfolio = ({ portfolioValues, onPortFolioDelete }: Props) => {
    return (
        <>
            <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
                <Link
                    to={`/company/${portfolioValues.symbol}/company-profile`}
                    className="pt-6 text-xl font-bold"
                >
                    {portfolioValues.symbol}
                </Link>
                <DeletePortfolio
                    portfolioValues={portfolioValues.symbol}
                    onPortFolioDelete={onPortFolioDelete}
                />
            </div>
        </>
    )
}

export default CardPortfolio
