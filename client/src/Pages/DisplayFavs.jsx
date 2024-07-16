import React, { useState } from 'react';
import RecipeCard2 from '../Components/Recipe/RecipeCard';
import {db} from "../firebase";
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';

export default function DisplayFavs() {
    const [recipes, setRecipes] = useState([]);
    const fetchFavRecipes = async () =>{
        try {
            const snapshot = await getDocs(collection(db,'SavedRecipes'));
            let currRecipes = [];
            snapshot.docs.forEach((doc)=>{
                // console.log(doc.data());
                currRecipes.push(doc.data());
                console.log(doc.id)
                // console.log("curr rec: ", currRecipes[0])
            });
            setRecipes(currRecipes);
            console.log(currRecipes);
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
                            ingredients={recipe.ingredientLines}
                        />
                    ))}
                </div>


</div>
  )
}
