import React from "react";
import "../../../src/index.css";
import RecipeImage from "./RecipeImage";
import RecipeText from "./RecipeText";
import { Star, StarOff } from "lucide-react";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
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
    const title = meal.strMeal;
    const image = meal.strMealThumb;
    const instructions = meal.strInstructions;
    const ingredients = parseIngredients(meal);

    const handleFavClick = async () => {
        try {
            const existingDocsSnapshot = await getDocs(query(collection(db, 'SavedRecipes'), where('title', '==', title)));
            if (!existingDocsSnapshot.empty) {
                const existingDoc = existingDocsSnapshot.docs[0];
                const usersFavs = [...existingDoc.data().usersFavs, user.uid];
                await updateDoc(doc(db, 'SavedRecipes', existingDoc.id), {
                    usersFavs: usersFavs
                });
            } else {
                const docRef = await addDoc(collection(db, 'SavedRecipes'), {
                    image: image,
                    title: title,
                    ingredients: ingredients,
                    usersFavs: [user.uid]
                });
                console.log('Document written with ID: ', docRef.id);
            }
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
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
                <Star />
            </button>
        </div>
    )
};

// export default RecipeCard;
export default RecipeCard2;