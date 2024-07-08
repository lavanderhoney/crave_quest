import React from 'react'
import RecipeCard2 from '../Components/Recipe/RecipeCard'
import { UserAuth } from '../context/AuthContext';
import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css"
import SearchBar from '../Components/SearchBar';

export default function UserMain() {
    const { user } = UserAuth();
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const getRecipes = async () => {
        console.log("query: ",query);
        try {
            const recipeError = [{
                recipe:
                {
                    label: "Not Found",
                    image: "",
                    ingredientLines: ""
                }

            }]
            const response = await axios.get(`http://localhost:5000/recipes/` + query);
            // console.log(response.data.hits);
            // console.log(response.data)
            setRecipes(response.data);

        } catch (error) {
            console.log(error);
            const recipeError = [{
                recipe:
                {
                    label: "Not Found",
                    image: "",
                    ingredientLines: error.message
                }

            }]
            console.log("eror obj:", recipeError);
            setRecipes(recipeError);
            console.log(recipes);
            console.log("[0]: ", recipes[0].recipe);
        }

    };

    const updateSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value==="") {
            console.log("in updateserch");
            setRecipes([]);
        }
        setQuery(e.target.value || "");
        console.log("query in updatesearcH: ",query);
    };

    const getSearch = (e) => {
        e.preventDefault();
        console.log("in getSearch: ",search);
        setQuery(search);
        console.log("after setting: ",query);
        getRecipes();
        // setSearch("");
    };

    return (
        <div className='w-full'>
                <SearchBar getSearch={getSearch} search={search} updateSearch={updateSearch} />
                {recipes.length === 0 || search===""? (<h2 className='text-center text-slate-500 text-3xl font-thin'>Type a keyword in the searchbar to start searching</h2>) :
                    (
                        recipes[0].recipe.label === 'Not Found' ? (
                            <div className='flex flex-col justify-center'>
                                <div className="text-center p-5 text-red-700 font-bold text-2xl">Sorry, we couldn't find any recipes.</div>
                                <span className="text-center p-5 text-red-600 font-semibold text-xl">{recipes[0].recipe.ingredientLines}</span>
                            </div>
                        ) :
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
                    )
                }

        </div>
    )
}
