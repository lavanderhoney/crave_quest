import React from 'react'

export default function RecipeText(props) {
    let ingredients = props.ingredients;
    return (
        <div className='p-2'>
            <div className="col-start-2 row-start-2 row-end-12">
                <ou>
                    {Array.isArray(ingredients) && ingredients.map((ingredient) => (
                        <li>{ingredient}</li>
                        // console.log("in map", ingredient)
                    ))}
                </ou>
            </div>
        </div>
    )
}
