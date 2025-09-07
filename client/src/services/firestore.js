import { db } from "../firebase";   
import { collection, addDoc, getDocs, query, where, doc, deleteDoc, documentId } from "firebase/firestore";
import { setDoc, getDoc } from "firebase/firestore";
export async function createUser(params) {
    try {
        const userRef = doc(db, 'Users', params.userId);
        await setDoc(userRef, { // Use userId as the document ID, not auto-generated. Reconciles with firestore's rules
            email: params.email,
            name: params.name,
            createdAt: Date.now(),
        });
        console.log('Document written with ID: ', userRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

//Add a recipe to the recipes collection, using the upsert pattern
export async function addRecipe(params) {
    try {
        // Check if recipe already exists using the recipe ID
        const recipeRef = doc(db, 'Recipes', params.id);
        const snapshot = await getDoc(recipeRef);

        if (snapshot.exists()) {
            console.log('Recipe already exists in Recipes collection');
        } else {
            const docRef = await setDoc(recipeRef, {
                title: params.title,
                image: params.image,
                ingredients: params.ingredients,
                instructions: params.instructions,
                area: params.area,
                category: params.category,
                tags: params.tags,
                createdAt: Date.now(),
            });
            console.log('Recipe document written with ID: ', docRef);
        }
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

//Add favorite recipe
export async function addFavorite(params) {
    try {
        const favRef = collection(db, "Users", params.userId, "Favorites");
        await addDoc(favRef, {
            recipeId: params.recipeId,
            addedAt: Date.now(),
        });
        console.log('Recipe added to favorites');
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export async function removeFavorite(params) {
    try {
        // Find the document in the Favorites subcollection that matches the recipeId
        const favRef = collection(db, "Users", params.userId, "Favorites");
        const q = query(favRef, where("recipeId", "==", params.recipeId));
        const snapshot = await getDocs(q);
        
        if (!snapshot.empty) {
            // Delete the first matching document
            const docToDelete = snapshot.docs[0];
            await deleteDoc(doc(db, "Users", params.userId, "Favorites", docToDelete.id));
            console.log('Recipe removed from favorites');
        } else {
            console.log('Recipe not found in favorites');
        }
    } catch (error) {
        console.error("Error removing document: ", error);
    }
}

export async function getFavoriteRecipes(params) {
    // Accept either a userId string or an object { userId }
    const userId = typeof params === 'string' ? params : params?.userId;
    try {
        // 1. Get the user's favorite recipes ids
        const favRef = collection(db, "Users", userId, "Favorites");
        console.log("Fetching favorite recipes for user:", userId);
        const favDocs = await getDocs(favRef);

        const recipeIds = Array.from(favDocs.docs.map(doc => doc.data().recipeId));
        console.log("Favorite Recipe IDs: ", recipeIds);
        
        if (recipeIds.length === 0) {
            console.log("No favorite recipes found for user:", params.userId);
            return [];
        }

        // 2. Fetch the recipe details for the favorite recipe ids
        const recipesRef = collection(db, "Recipes");
        const recipesQuery = query(recipesRef, where(documentId(), "in", recipeIds));
        const recipesDocs = await getDocs(recipesQuery);
        const favoriteRecipes = recipesDocs.docs.map(doc => doc.data());

        return favoriteRecipes;
    } catch (error) {
        console.error("Error fetching favorite recipes: ", error);
    }
}