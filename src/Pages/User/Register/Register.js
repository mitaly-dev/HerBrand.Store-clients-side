import { Result } from 'postcss';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Register = () => {
    const {createUser,
        updateProfileUser,
        logOut,
        emailValidation

    } = useContext(AuthContext)
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        photoURL:"",
        password:""
    })
    const {name,email,password,photoURL} = formData
    const navigate = useNavigate()

    const [formDataError,setFormDataError] = useState({
        emailError:"",
        passwordError:""
    })
    const handleName=(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    const handleEmail=(event)=>{
        const value = event.target.value
        if(!/\S+@\S+\.\S+/.test(value)){
            setFormDataError({...formDataError,"emailError":"Email is not found !"})
            setFormData({...formData,[event.target.name]:""})
            return
        }
        setFormDataError({...formDataError,"emailError":""})
        setFormData({...formData,[event.target.name]:value})
    }

    const handlePhotoURL=(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    const handlePassword=(event)=>{
        const value = event.target.value
        if(value.length<6){
            setFormDataError({...formDataError,"passwordError":"Password should be minimum 6 digit !"})
            setFormData({...formData,[event.target.name]:""})
            return
        }
        setFormDataError({...formDataError,"passwordError":""})
        setFormData({...formData,[event.target.name]:value})
    }

    const createUserHandle=(event)=>{
        event.preventDefault()
        console.log(name,email,password,photoURL)
        if(name && email && photoURL && password){
            createUser(email,password)
            .then(result=>{
                emailValidation()
                userProfileUpdateHandle()
                logOut()
                navigate('/login')
            })
            .catch(error=>alert(error.message))
        }
    }
    const userProfileUpdateHandle=()=>{
        const profile ={
            displayName : name,
            photoURL : photoURL
        }
        updateProfileUser(profile)
    }

    return (
        <div className="flex flex-col w-5/12 m-auto mt-14 p-12 space-y-4 text-center bg-[#fee4d75b] text-gray-600 rounded-xl">
        <h1 className="text-3xl font-semibold mb-5">Register</h1>
        <form onSubmit={createUserHandle} className="space-y-4 ng-untouched ng-pristine ng-valid">
            <div className="flex flex-col mb-5 text-left">
                <input onBlur={handleName} id="name" name="name" type="text" placeholder="Name" className=" rounded-t-md focus:ring-main focus:border-main py-2 px-3 outline-none focus:ring-1 bg-[#fee4d75d] border border-[#31cf905b]" />
                <input onBlur={handleEmail} id="email" name="email" type="email" placeholder="Email" className=" mt-4 rounded-t-md focus:ring-main focus:border-main py-3 px-3 outline-none focus:ring-1 bg-[#fee4d75d] border border-[#31cf905b]" />
                <p className='text-red-500 font-semibold'>{formDataError.emailError}</p>

                <input onBlur={handlePhotoURL} id="photoURL" name='photoURL' type="text" placeholder="PhotoURL" className=" mt-4 rounded-t-md focus:ring-main focus:border-main py-3 px-3 outline-none focus:ring-1 bg-[#fee4d75d] border border-[#31cf905b]" />
                <input onBlur={handlePassword} id="password" name="password" type="password" placeholder="Password" className=" mt-4 rounded-t-md focus:ring-main focus:border-main py-3 px-3 outline-none focus:ring-1 bg-[#fee4d75d] border border-[#31cf905b]"  />
                <p className='text-red-500 font-semibold'>{formDataError.passwordError}</p>
            </div>
            <button
             type="submit"
            className="px-8 py-3 text-white space-x-2 font-semibold rounded-full bg-main ">Register</button>
            <div className='flex justify-between pt-6  mt-20 border-t-2 border-[#ffebc1] text-black font-medium'>
                <button>Already account ? <Link to="/login" className='underline'>Login</Link></button>
                <Link to="/" >Return to Store</Link>
            </div>
        </form>
    </div>
    );
};

export default Register;