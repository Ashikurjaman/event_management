import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthContextProvider = ({children}) => {
    const [user,setUser] =useState();
    const [loader, setLoader] = useState(true)

    


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            
                console.log('user is login');
                setUser(currentUser)
                setLoader(false);
                // ...
              
        })

        return ()=>{
            unsubscribe();
        }
    },[]);
    const provider = new GoogleAuthProvider();

    // const googleUserLogin()=>{
    //   return  signInWithPopup(auth, provider)
    // }

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        user,
        userLogin,
        logOut,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;