import React from 'react'

export default function RecipeText(props) {
    const ingredients = props.ingredients;
    return (
        <div className='p-2'>
            <div className="col-start-2 row-start-2 row-end-12">
                <ul>
                    {Array.isArray(ingredients) && ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
