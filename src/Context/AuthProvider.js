import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, sendEmailVerification } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';

export const AuthContext = createContext()

 const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)
    const [categoryies,setCategoryies] = useState([])
    const [allProduct,setAllProduct] = useState([])
    const [cartProduct,setCartProduct] = useState([])
    const [refresh,setRefresh] = useState(true)
   

    const token = localStorage.getItem('herBrand-token')

    useEffect(()=>{
        if(user?.email && token){
         fetch(`http://localhost:5000/cartProducts?email=${user?.email}`,{
             headers:{
                 authorization:`Bearer ${localStorage.getItem('herBrand-token')}`
             }
         })
         .then(res=>{
             if(res.status===401 || res.status===403){
                toast.error("unauthoriezed user",{autoClose:1000})
                logOut()
             }
             return res.json()
         })
         .then(data=>setCartProduct(data))
        }
     },[token, refresh, setCartProduct, user?.email])

     const logOut= () =>{
        localStorage.removeItem("herBrand-token")
        return signOut(auth)
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/category`)
        .then(res=>res.json())
        .then(data=>setCategoryies(data))
    },[])

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userSignIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateProfileUser=(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }

 

    const emailValidation=()=>{
        setLoading(true)
       sendEmailVerification(auth.currentUser)
       .then(()=>alert("Please verify your email address"))
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])

    const value = {
        user,
        setUser,
        categoryies,
        allProduct,
        setAllProduct,
        createUser,
        userSignIn,
        updateProfileUser,
        logOut,
        emailValidation,
        cartProduct,
        setCartProduct,
        loading,setLoading,
        refresh,
        setRefresh
    }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;