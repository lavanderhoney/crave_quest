import React from 'react'

export default function RecipeImage(props) {
    return (
        <div>
            <img className="w-full " src={props.image} alt="" />
        </div>
    )
}
