import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthContextProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loader, setLoader] = useState(true)

    


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                console.log('user is login');
                // ...
              } else {
                // User is signed out
                // ...
                console.log('user is logout');
              }
        })

        return ()=>{
            unsubscribe();
        }
    },[]);
    const provider = new GoogleAuthProvider();

    const googleLogin()=>{
        signInWithPopup(auth, provider)
    }

    const createUser =(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin =(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        signOut(auth)
    }

    const authInfo = {
        createUser,
        user,
        userLogin,
        logOut,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;