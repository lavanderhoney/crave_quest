import React from "react";
import "../../../src/index.css";
import RecipeImage from "./RecipeImage";
import RecipeText from "./RecipeText";

// const RecipeCard = ({ title, image, ingredients }) => {
//     console.log(ingredients)
//     return (
//         /*bg-violet-300 rounded-[10px] p-[10px] m-[7px] flex-col items-center w-[800px] gap-[7px] */
//         <div className="bg-violet-300 rounded-[10px] p-[20px] m-[7px] grid grid-cols-2 items-center w-[700px] gap-[7px] justify-items-center ml-auto mr-auto">
//             <div className="col-start-1"> <RecipeImage image={image} /></div>
//             <div className="col-start-2"><RecipeText title={title} ingredients={ingredients} /></div>
//         </div >
//     );
// };

const RecipeCard2 = ({ title, image, ingredients }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <RecipeImage image={image} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                    <RecipeText ingredients={ingredients} />
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
        </div>
    )
};

// export default RecipeCard;
export default RecipeCard2;