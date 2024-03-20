/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
     // google
const googleProvider = new GoogleAuthProvider();

const axiosPublic = useAxiosPublic()

const googleSignIn = () => { 
  return signInWithPopup(auth, googleProvider);
}


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
       }

       const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
       }

       const logOut = () => {
        setLoading(true);
        return signOut(auth);
       }


       const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURl: photo
        })
    }

       useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           setUser(currentUser);
            console.log('current user', currentUser)
            if(currentUser){
                // 
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                // 
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
       }, [axiosPublic])
    

    const authInfo = {
        user, 
        loading, 
        googleSignIn,
        createUser, 
        singIn,
        logOut ,
        updateUserProfile   
    }

    return (
       <AuthContext.Provider  value={authInfo}>
              {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;