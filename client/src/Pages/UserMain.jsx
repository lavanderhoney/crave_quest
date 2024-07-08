import React from 'react'
import RecipeCard2 from '../Components/Recipe/RecipeCard'
import { UserAuth } from '../context/AuthContext';
import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css"
import SearchBar from '../Components/SearchBar';

export default function UserDashboard() {
    const { user } = UserAuth();
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/recipes/` + query);
            // console.log(response.data.hits);
            // console.log(response.data)
            setRecipes(response.data);
            // response.data.map((recipe) => {
            //     console.log("recipe object: ",recipe);
            //     // console.log(recipe.recipe.ingredientLines);
            // })
        } catch (error) {

        }

    };

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };


    return (
        <div>
            <div>
                <h1 className='font-serif m-2 my-4 text-4xl '>Welcome {user?.displayName}, find the recipe you crave now !</h1>
                <SearchBar getSearch={getSearch} search={search} updateSearch={updateSearch} />
                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {recipes.map((recipe, index) => (
                        <RecipeCard2
                            key={index}
                            title={recipe.recipe.label}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredientLines}
                        />
                    ))}
                </div>

                {/* <RecipeCard2></RecipeCard2> */}
            </div>
        </div>
    )
}
