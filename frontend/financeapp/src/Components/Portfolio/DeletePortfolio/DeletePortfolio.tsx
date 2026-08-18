import { type SyntheticEvent } from 'react'

interface Props {
    portfolioValues: string;
    onPortFolioDelete: (e: SyntheticEvent) => void;
}


const DeletePortfolio = ({ onPortFolioDelete, portfolioValues }: Props) => {
    return (
        <div>
            <form onSubmit={onPortFolioDelete}>
                <input hidden={true} value={portfolioValues} />
                <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
                    X
                </button>
            </form>
        </div>
    )
}

export default DeletePortfolio
