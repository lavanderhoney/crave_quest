import React from "react";
import "../index.css";

const RecipeCard = ({ title, image, ingredients }) => {
    console.log(ingredients)
    return (
        <div className="bg-violet-300 rounded-[10px] p-[10px] m-[7px] flex-col items-center w-[800px] gap-[7px]">
            <h1 className="text-[20px] font-bold text-center">{title}</h1>
            <ou>
                {Array.isArray(ingredients) && ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                    // console.log("in map", ingredient)
                ))}
            </ou>
            <img className="style.image" src={image} alt="" />
        </div >
    );
};

export default RecipeCard;