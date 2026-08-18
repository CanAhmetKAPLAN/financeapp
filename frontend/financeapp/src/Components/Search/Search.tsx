import React, { type ChangeEvent, type JSX, type SyntheticEvent } from 'react'

interface Props {
    onClick: (e: SyntheticEvent) => void
    search: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<Props> = ({ onClick, search, handleChange }: Props): JSX.Element => {
    return (
        <div>
            <input value={search} onChange={handleChange} />
            <button onClick={onClick}></button>
        </div>
    )
}

export default Search
