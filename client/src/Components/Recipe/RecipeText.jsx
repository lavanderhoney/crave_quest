import React from 'react'

export default function RecipeText(props) {
    let ingredients = props.ingredients;
    return (
        <div className='p-2'>
            <h1 className="text-[20px] font-bold text-center col-span-1 row-start-1 row-end-2 col-start-2 mb-4">{props.title}</h1>
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
