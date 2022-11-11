import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { createContext, useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UserContext = createContext()
export const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState({});

    const signUp = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
            return setDoc(doc(db, 'users', email),{
                watchList:[],
            })
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
      })
      return () =>{
        unSubscribe()
      }
    }, [])
    

    return (
        <UserContext.Provider value={{signUp, signIn, logOut, user}} >{children}</UserContext.Provider>
    )
}


export const UserAuth = () =>{
    return useContext(UserContext)
}