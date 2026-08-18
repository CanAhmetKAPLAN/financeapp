import React, { type ChangeEvent, type JSX, type SyntheticEvent } from 'react'

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void
    search: string
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }: Props): JSX.Element => {
    return (
        <>
            <section className="relative bg-gray-100">
                <div className="max-w-4xl mx-auto p-6 space-y-6">
                    <form
                        className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
                        onSubmit={onSearchSubmit}
                    >
                        <input
                            className="flex-1 p-3 border-2 border-transparent rounded-lg text-darkBlue placeholder-gray-400 bg-white focus:outline-none focus:border-lightGreen"
                            id="search-input"
                            placeholder="Search companies"
                            value={search}
                            onChange={handleSearchChange}
                        ></input>
                        <button
                            type="submit"
                            className="px-8 py-3 font-bold text-white bg-lightGreen rounded-lg hover:opacity-80"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Search
