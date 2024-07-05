import React from 'react'
import RecipeCard from '../Components/Recipe/RecipeCard'
import { UserAuth } from '../context/AuthContext';
import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css"
import SearchBar from '../Components/SearchBar';

export default function UserDashboard() {
    const { logOut, user } = UserAuth();
    const handleLogOut = async () => {
        try {
            console.log("inside handlelogout");
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await axios.get(`http://localhost:5000/recipes/` + query);
        // console.log(response.data.hits);
        // console.log(response.data)
        setRecipes(response.data);
        response.data.map((recipe) => {
            console.log(recipe.recipe.ingredientLines);
            recipe.recipe.ingredientLines.map((line) => {
                console.log(line);
            })
        })
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
                <div className="flex-auto justify-center ml-auto mr-auto">
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.recipe.label}
                            title={recipe.recipe.label}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredientLines}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
