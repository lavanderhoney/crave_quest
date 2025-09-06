import React, { useState } from 'react';
import RecipeCard2 from '../Components/Recipe/RecipeCard';
import { getFavoriteRecipes } from '../services/firestore';
import { useEffect } from 'react';

export default function DisplayFavs() {
    const [recipes, setRecipes] = useState([]);
    const fetchFavRecipes = async () =>{
        try {
            if (!user || !user.uid) {
                console.log("User not logged in");
                return;
            }
            const favRecipes = await getFavoriteRecipes(user.uid);
            setRecipes(favRecipes);
        } catch (error) {
           console.log(error); 
        }
    }
    useEffect(() => {
        fetchFavRecipes();
      }, []);
  return (
    <div className='w-full'>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {recipes.map((recipe, index) => (
                <RecipeCard2
                    key={index}
                    title={recipe.title}
                    image={recipe.image}
                    ingredients={recipe.ingredients}
                />
            ))}
        </div>
    </div>
  )
}
