import React from 'react'

export default function SearchBar(props) {
    return (
        <div>
            <form onSubmit={props.getSearch} className='flex flex-row gap-10 px-10 my-8'>
                <input
                    className="search-bar border-black border-2 rounded-lg basis-1/2"
                    type="text"
                    value={props.search}
                    onChange={props.updateSearch}
                />
                <button className="border-black border-2 rounded-lg" type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}
