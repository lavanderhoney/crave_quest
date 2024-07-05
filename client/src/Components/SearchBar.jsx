import React from 'react'
import '../Styles/SearchBarStyles.css'
export default function SearchBar(props) {
    return (
        <div className='flex justify-center'>
            <form onSubmit={props.getSearch} className='flex flex-row items-center gap-5 px-10 my-8 border-black border-1 w-[500px]'>
                <input
                    className="focus:outline-0 search-bar rounded-lg basis-1/2 bg-slate-300"
                    type="text"
                    value={props.search}
                    onChange={props.updateSearch}
                />
                <button className="bg-rose-700 text-white rounded-xl p-2 px-3" type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}
