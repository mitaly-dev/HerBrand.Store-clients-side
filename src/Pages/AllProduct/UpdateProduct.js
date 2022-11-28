import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const UpdateProduct = () => {
    const product = useLoaderData()
    const {cartProduct, setCartProduct,user,logOut,refresh,setRefresh} = useContext(AuthContext)
    const {weight,type,title,quantity,price,picture,_id,availability,category,productQuantity} = product

    const [totalQuantity,setTotalQuantity] = useState(productQuantity)
    const [totalPrice,setTotalPrice] = useState(price)
    const navigate=useNavigate()

    
    const minusQuantity=()=>{
        if(totalQuantity>1){
            setTotalQuantity(totalQuantity-1)
        }
    }
    const plusQuantity=()=>{
        setTotalQuantity(totalQuantity+1)
    }

    const updateProductnfo=()=>{
        const product= {title,weight,type,totalQuantity,totalPrice,category,picture}

       fetch(`http://localhost:5000/cartProducts/${_id}`,{
        method:'PUT',
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
            authorization:`Bearer ${localStorage.getItem('herBrand-token')}`
        },
        body:JSON.stringify(product)
       })
       .then(res=>{
        if(res.status===401 || res.status===403){
            toast.error("unauthoriezed user",{autoClose:1000})
            logOut()
        }
       return res.json()
       })
       .then(data=>{
        if(data.modifiedCount>0){
            toast.success(`${title} update successfull`,{autoClose:1500})
            setRefresh(!refresh)
       }
       })
    }

    return (
        <div className='grid grid-cols-2 gap-20 py-16 px-28'>
           <div>
                <img src={picture} alt="product" className='rounded-xl'/>
           </div>
           <div>
                <h3 className='text-4xl font-medium mb-10'>{title}</h3>
                <div className='font-semibold mb-5'>
                    <span className='w-[140px] inline-block text-lg'>Price :</span> 
                    <span className="text-main text-[16px]">Rs. {totalPrice}.00</span>
                </div>
                <div className='font-semibold mb-5 '>
                    <span className='w-[140px] inline-block text-lg'>Wegiht :</span>
                     <span className="text-main py-1 px-3 border border-main rounded-lg text-[16px]">{weight}</span>
                </div>
                <div className='font-semibold mb-5'>
                    <span className='w-[140px] inline-block text-lg'>Type :</span>
                    <span className="text-main text-[16px]">{type}</span>
                </div>
                <div className='font-semibold mb-5'>
                    <span className='w-[140px] inline-block text-lg'>Availability :</span> 
                    <span className="text-main text-[16px]">{availability==="available"?"In Stock!":"Stock Out"}</span>
                </div>
                <div className='font-semibold mb-5 flex'>
                    <span className='w-[140px] inline-block text-lg'>Quantity :</span> 
                    <div className="text-main text-[16px]  flex border border-main rounded-lg">
                        <button onClick={minusQuantity} className='px-3 bg-main py-1 text-white rounded-l-lg'>-</button>
                        <span className='px-3 py-1'>{totalQuantity}</span>
                        <button onClick={plusQuantity} className='px-3 py-1 text-white bg-main rounded-r-lg'>+</button>
                    </div>
                </div>
                <button onClick={updateProductnfo} className='py-3 px-12 border-xl bg-main text-white font-semibold rounded-xl text-lg mt-5'>Update Now</button>
           </div>
        </div>
    );
};

export default UpdateProduct;