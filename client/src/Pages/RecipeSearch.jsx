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

    // Map an API meal object into a shape that also contains the
    // Firestore/favorite-style keys (title, image, ingredients array, etc.)
    const normalizeMealForCard = (meal) => {
        // If the meal already looks like a favorites document, return as-is
        if (meal && (meal.title || meal.image) && Array.isArray(meal.ingredients)) {
            return meal;
        }

        // Build ingredients array from MealDB fields
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ing = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ing && ing.trim() !== "") {
                ingredients.push(measure && measure.trim() !== "" ? `${measure.trim()} ${ing.trim()}` : ing.trim());
            }
        }

        return {
            // keep original API keys so existing code still works
            ...meal,
            // add favorite-style keys
            title: meal.strMeal || meal.title,
            image: meal.strMealThumb || meal.image,
            idMeal: meal.idMeal || meal.id || meal._id,
            ingredients,
            instructions: meal.strInstructions || meal.instructions || "",
            area: meal.strArea || meal.area,
            category: meal.strCategory || meal.category,
            tags: meal.strTags || meal.tags,
        };
    }

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
                    {recipes.map((meal, index) => {
                        const normalized = normalizeMealForCard(meal);
                        return (
                            <RecipeCard2
                                key={normalized.idMeal || index}
                                meal={normalized}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    )
}
