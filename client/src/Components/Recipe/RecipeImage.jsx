import React from 'react'

export default function RecipeImage(props) {
    return (
        <div>
            <img className="w-auto h-max row-span-12 col-start-1 " src={props.image} alt="" />
        </div>
    )
}
