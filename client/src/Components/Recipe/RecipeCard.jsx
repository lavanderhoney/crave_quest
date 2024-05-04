import React from "react";
import "../../../src/index.css";
import RecipeImage from "./RecipeImage";
import RecipeText from "./RecipeText";

const RecipeCard = ({ title, image, ingredients }) => {
    console.log(ingredients)
    return (
        /*bg-violet-300 rounded-[10px] p-[10px] m-[7px] flex-col items-center w-[800px] gap-[7px] */
        <div className="bg-violet-300 rounded-[10px] p-[20px] m-[7px] grid grid-cols-2 items-center w-[700px] gap-[7px] justify-items-center ml-auto mr-auto">
            <div className="col-start-1"> <RecipeImage image={image} /></div>
            <div className="col-start-2"><RecipeText title={title} ingredients={ingredients} /></div>
        </div >
    );
};

export default RecipeCard;