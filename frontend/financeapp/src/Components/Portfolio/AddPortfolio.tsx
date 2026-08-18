import { type SyntheticEvent } from 'react'

interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void
    symbol: string
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
    return (
        <div>
            <form onSubmit={onPortfolioCreate}>
                <input readOnly={true} hidden={true} value={symbol} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddPortfolio
