import { useContext, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const GoogleSignIn = () => {
        return (signInWithPopup(auth, new GoogleAuthProvider()))
    }
    return (
        <AuthContext.Provider value={{ GoogleSignIn }}>
            {children}
        </AuthContext.Provider>
    )
}
//used to access the global data/context data
export const UserAuth = () => {
    return useContext(AuthContext)
}