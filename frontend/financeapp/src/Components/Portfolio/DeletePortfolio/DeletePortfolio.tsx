import React, { type SyntheticEvent } from 'react'

interface Props {
    portfolioValues: string[];
    onPortFolioDelete: (e: SyntheticEvent) => void;
}


const DeletePortfolio = ({ onPortFolioDelete, portfolioValues }: Props) => {
    return (
        <div>
            <form onSubmit={onPortFolioDelete} >
                <input hidden={true} value={portfolioValues} />
                <button>X</button>
            </form>
        </div >
    )
}

export default DeletePortfolio
