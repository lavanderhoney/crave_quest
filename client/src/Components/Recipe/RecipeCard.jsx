import React from "react";
import "../../../src/index.css";
import RecipeImage from "./RecipeImage";
import RecipeText from "./RecipeText";
import { Star, StarOff } from "lucide-react";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";

const RecipeCard2 = ({ title, image, ingredients }) => {
    const { user } = UserAuth();
    const handleFavClick = async () => {
        try {
            const existingDocsSnapshot = await getDocs(query(collection(db, 'SavedRecipes'), where('title', '==', title)));
            if (!existingDocsSnapshot.empty) {
                console.log("A document with this title already exists.");
                console.log(existingDocsSnapshot.docs[0]);

                //get the existing recipe (doc)
                const existingDoc = existingDocsSnapshot.docs[0];
                const usersFavs = [...existingDoc.data().usersFavs,user.uid]; 

                // Update the document with the modified 'usersFavs' array
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
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>

            </div>
            <hr></hr>
            <button className="m-5 p-2 h-fit" onClick={handleFavClick}>
                <Star />
            </button>
        </div>
    )
};

// export default RecipeCard;
export default RecipeCard2;