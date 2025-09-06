import React, { useState } from "react";
import "../../../src/index.css";
import RecipeImage from "./RecipeImage";
import RecipeText from "./RecipeText";
import { Star, StarOff } from "lucide-react";
import { addRecipe, addFavorite, removeFavorite } from "../../services/firestore";
import { UserAuth } from "../../context/AuthContext";


// Helper to parse ingredients and measures from MealsDB meal object
function parseIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(measure ? `${measure.trim()} ${ingredient.trim()}` : ingredient.trim());
        }
    }
    return ingredients;
}

const RecipeCard2 = ({ meal }) => {
    const { user } = UserAuth();
    const [isFavorited, setIsFavorited] = useState(false);
    const title = meal.strMeal;
    const recipeId = meal.idMeal;
    const image = meal.strMealThumb;
    const instructions = meal.strInstructions;
    const ingredients = parseIngredients(meal);

    // Toggle favorite status - add or remove from favorites
    const handleFavClick = async () => {
        if (!user || !user.uid) {
           throw new Error("User is not authenticated");
        }
        
        try {
            if (isFavorited) {
                // Remove from favorites
                await removeFavorite({
                    userId: user.uid,
                    recipeId: recipeId
                });
                setIsFavorited(false);
                console.log('Recipe removed from user favorites');
            } else {
                // Add recipe to Recipes collection if not already present
                await addRecipe({
                    id: recipeId,
                    image: image,
                    title: title,
                    ingredients: ingredients,
                    instructions: instructions,
                    area: meal.strArea,
                    category: meal.strCategory,
                    tags: meal.strTags,
                });
                
                // Add to user's Favorites subcollection
                await addFavorite({
                    userId: user.uid,
                    recipeId: recipeId
                });
                setIsFavorited(true);
                console.log('Recipe added to user favorites');
            }
        } catch (error) {
            console.error('Error updating favorite status:', error);
        }
    };    return (
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <div className="flex-grow">
                <RecipeImage image={image} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        <RecipeText ingredients={ingredients} />
                    </p>
                    <div className="mt-2 text-sm text-gray-600">
                        {instructions}
                    </div>
                </div>
                {/* Optionally, display tags or area/category */}
                <div className="px-6 pt-4 pb-2">
                    {meal.strCategory && <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{meal.strCategory}</span>}
                    {meal.strArea && <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{meal.strArea}</span>}
                    {meal.strTags && meal.strTags.split(',').map((tag, idx) => (
                        <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag.trim()}</span>
                    ))}
                </div>
            </div>
            <hr />
            <button className="m-5 p-2 h-fit" onClick={handleFavClick}>
                {isFavorited ? <Star fill="gold" color="gold" /> : <StarOff />}
            </button>
        </div>
    )
};

// export default RecipeCard;
export default RecipeCard2;