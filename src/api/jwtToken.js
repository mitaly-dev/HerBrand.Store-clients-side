import { useContext } from "react"
import { toast } from "react-toastify"
import { AuthContext } from "../Context/AuthProvider"

export const accessToken=(email,navigation,refresh,setRefresh)=>{
    fetch(`http://localhost:5000/jwt`,{
        method:'POST',
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify({email:email})
    })
    .then(res=>res.json())
    .then(data=>{
        localStorage.setItem("herBrand-token",data.token)
        toast.success('Login successfull',{autoClose:1000})
        setRefresh(!refresh)
        navigation()
    })
    .catch(error=>console.log(error.message))
}