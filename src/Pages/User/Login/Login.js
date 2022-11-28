import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { accessToken } from '../../../api/jwtToken';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const {userSignIn,refresh,setRefresh} = useContext(AuthContext)
    const [emailError,setEmailError] = useState("")
    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    const {email,password} = formData


    const handleEmail=(event)=>{
        const value = event.target.value
        if(!/\S+@\S+\.\S+/.test(value)){
            setEmailError("Email is not found !")
            setFormData({...formData,[event.target.name]:""})
            return
        }
        setEmailError("")
        setFormData({...formData,[event.target.name]:value})
    }

    const handlePassword=(event)=>{
        const value = event.target.value
        setFormData({...formData,[event.target.name]:value})
    }

    const navigation = ()=>{
        navigate(from,{ replace : true })
    }
    const userSignInHandle=(event)=>{
        event.preventDefault()
        if(email && password){
            userSignIn(email,password)
            .then(result=>{
               accessToken(email,navigation,refresh,setRefresh)
            })
            .catch(error=>alert(error.message))
        }
    }
    

    return (
        <div className="flex flex-col w-5/12 m-auto mt-14 p-12 space-y-4 text-center bg-[#fee4d75b] text-gray-600 rounded-xl">
            <h1 className="text-3xl font-semibold mb-5">Log in</h1>
            <form onSubmit={userSignInHandle} noValidate="" className="space-y-4 ng-untouched ng-pristine ng-valid">
                <div className="flex flex-col mb-5">
                    <input onBlur={handleEmail} id="email" name='email' type="email" placeholder="Email address" className="rounded-t-md focus:ring-main focus:border-main py-3 px-3 outline-none focus:ring-1 bg-[#fee4d75d] border border-[#31cf905b]" />
                    <p className='text-red-500 font-semibold'>{emailError}</p>
                    <input onBlur={handlePassword} id="password" name='password' type="password" placeholder="Password" className="mt-4 rounded-t-md focus:ring-main focus:border-main py-3 px-3 outline-none focus:ring-1 bg-[#fee4d75d] border border-[#31cf905b]"  />
                </div>
              
                <button type="submit" className="px-8 py-3 text-white space-x-2 font-semibold rounded-full bg-main ">LogIn</button>
                <div className='flex justify-between pt-6  mt-20 border-t-2 border-[#ffebc1] text-black font-medium'>
                    <button>Forgot your password?</button>
                    <Link to="/register">Create account</Link>
                    <Link to="/">Return to Store</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;