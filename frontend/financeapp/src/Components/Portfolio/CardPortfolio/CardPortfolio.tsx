import React from 'react'

interface Props {
    portfolioValues: string[];
}


const CardPortfolio = ({ portfolioValues }) => {
    return (
        <>
            <h4>
                {portfolioValues}
            </h4>
            <button>x</button>
        </>
    )
}

export default CardPortfolio
