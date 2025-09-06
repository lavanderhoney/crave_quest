import React from 'react'

export default function RecipeImage(props) {
    // props.image is now strMealThumb from MealsDB
    return (
        <div>
            <img className="w-full" src={props.image} alt="Meal" />
        </div>
    )
}
