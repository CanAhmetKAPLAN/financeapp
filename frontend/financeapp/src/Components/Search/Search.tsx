import React, { useState, type ChangeEvent, type JSX, type SyntheticEvent } from 'react'

interface Props { }

const Search: React.FC<Props> = (): JSX.Element => {

    const [search, setSearch] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    const onClick = (e: SyntheticEvent) => {
        console.log(e)
    }
    return (
        <div>
            <input value={search} onChange={handleChange} />
            <button onClick={(e) => onClick(e)}></button>
        </div>
    )
}

export default Search
