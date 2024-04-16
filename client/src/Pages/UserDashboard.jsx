import React from 'react'
import Button from '../Components/Button'
import RecipeCard from '../Components/RecipeCard'
import { UserAuth } from '../context/AuthContext';
import { useEffect, useState } from "react";
import axios from "axios";

import "../index.css"
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
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await axios.get(`http://localhost:5000/recipes/watermelon`);
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
            <h1>Welcome {user?.displayName}</h1>
            <Button text="Log out" onClick={handleLogOut} />
            // <RecipeCard />
            <form onSubmit={getSearch} className="border-black rounded-md">
                <input
                    className="search-bar"
                    type="text"
                    value={search}
                    onChange={updateSearch}
                />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="recipe">
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
    )
}
