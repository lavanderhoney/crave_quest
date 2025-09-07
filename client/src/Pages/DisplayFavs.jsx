import React, { useState } from 'react';
import RecipeCard2 from '../Components/Recipe/RecipeCard';
import { getFavoriteRecipes } from '../services/firestore';
import { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';

export default function DisplayFavs() {
    const { user } = UserAuth();
    const [recipes, setRecipes] = useState([]);
    // Normalize a favorite document from Firestore into the `meal` shape
    const normalizeFavoriteToMeal = (fav) => {
        if (!fav) return fav;
        // If it already looks like a meal object, return as-is
        if (fav.strMeal || fav.idMeal) return fav;

        return {
            // keep any existing keys
            ...fav,
            // Map favorite fields to the MealDB-style keys RecipeCard expects
            strMeal: fav.title || fav.strMeal || "",
            strMealThumb: fav.image || fav.strMealThumb || "",
            idMeal: fav.id || fav.idMeal || fav.recipeId || "",
            // If ingredients already provided as array, leave; otherwise fall back to any stored string
            ingredients: Array.isArray(fav.ingredients) ? fav.ingredients : (fav.ingredients || []),
            strInstructions: fav.instructions || fav.strInstructions || "",
            strArea: fav.area || fav.strArea || "",
            strCategory: fav.category || fav.strCategory || "",
            strTags: fav.tags || fav.strTags || "",
        };
    }
    const fetchFavRecipes = async () =>{
        try {
            if (!user || !user.uid) {
                console.log("User not logged in");
                return;
            }
            const favRecipes = await getFavoriteRecipes(user.uid);
            setRecipes(favRecipes);
            console.log("Fetched favorite recipes:", favRecipes);
            console.log("Current recipes state:", recipes);
        } catch (error) {
           console.log(error); 
        }
    }
    useEffect(() => {
        fetchFavRecipes();
      }, [user]);
  return (
    <div className='w-full'>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {recipes.map((recipe, index) => {
                const meal = normalizeFavoriteToMeal(recipe);
                return (
                    <RecipeCard2
                        key={meal.idMeal || index}
                        meal={meal}
                    />
                );
            })}
        </div>
    </div>
  )
}
