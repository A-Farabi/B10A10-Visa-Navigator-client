import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebaase.config';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Handle Google login
    const googleLogin = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                setUser(result.user); // Update the user state
                toast.success("Successfully signed in with Google!"); // Return the user object for navigation handling
                return result.user;
            })
            .catch((err) => {
                const message = err.message;
                toast.error("Error during Google sign-in: " + error.message);
                throw new Error(message); // Allow caller to handle errors
            });
    };

    // update user profile 
    const updateUserProfile = async (name, photoUrl) => {
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoUrl
            })
            setUser({ ...auth.currentUser })
        } 
        catch (error) {
            throw new Error(error.message);

        }
    }

     // Log out user
     const logOut = () => {
        return signOut(auth);
    };

    // unsubscribe 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    })



    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleLogin, 
        updateUserProfile,
        logOut,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
            {/* Toast Container */}
            <ToastContainer />
        </AuthContext.Provider>
    );
};

export default AuthProvider;