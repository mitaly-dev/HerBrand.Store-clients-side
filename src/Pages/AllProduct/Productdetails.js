import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const Productdetails = () => {
    const product = useLoaderData()
    const {cartProduct,user,refresh,setRefresh} = useContext(AuthContext)
    const {weight,type,title,quantity,price,picture,availability,category} = product

    const [productQuantity,setProductQuantity] = useState(quantity)

    const minusQuantity=()=>{
        if(productQuantity>1){
            setProductQuantity(productQuantity-1)
        }
    }
    const plusQuantity=()=>{
        setProductQuantity(productQuantity+1)
    }

    const addToCart=(productTitle)=>{
        const product= {title,weight,price,type,productQuantity,category,picture,email:user?.email}
        const exit = cartProduct.find(cart=>cart.title===productTitle)
        if(exit){
            toast.warning('Already Added',{autoClose:1500})
        }
        else{
            fetch(`http://localhost:5000/product`,{
                method:'POST',
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body:JSON.stringify(product)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged){
                    setRefresh(!refresh)
                    toast.success(`${title} added Successfull`,{autoClose:1500})
                }
            })
        }
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
                    <span className="text-main text-[16px]">Rs. {price*productQuantity}.00</span>
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
                        <span className='px-3 py-1'>{productQuantity}</span>
                        <button onClick={plusQuantity} className='px-3 py-1 text-white bg-main rounded-r-lg'>+</button>
                    </div>
                </div>
                <button onClick={()=>addToCart(title)} className='py-3 px-12 border-xl bg-main text-white font-semibold rounded-xl text-lg mt-5'>Add to Cart</button>
           </div>
        </div>
    );
};

export default Productdetails;