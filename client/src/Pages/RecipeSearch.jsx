import React from 'react'
import RecipeCard2 from '../Components/Recipe/RecipeCard'
import { useState } from "react";
import axios from "axios";
import "../index.css"
import SearchBar from '../Components/SearchBar';

export default function UserMain() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const getRecipes = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            if (response.data.meals) {
                setRecipes(response.data.meals);
            } else {
                setRecipes([]);
            }
        } catch (error) {
            console.error(error);
            setRecipes([]);
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
            {recipes.length === 0 || search === "" ? (
                <h2 className='text-center text-slate-500 text-3xl font-thin'>Type a keyword in the searchbar to start searching</h2>
            ) : (
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {recipes.map((meal, index) => (
                        <RecipeCard2
                            key={meal.idMeal || index}
                            meal={meal}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
