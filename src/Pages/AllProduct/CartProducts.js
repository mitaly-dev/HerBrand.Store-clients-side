import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link,  Navigate,  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import CartProduct from './CartProduct';

const CartProducts = () => {
    const {cartProduct, setCartProduct,user,refresh,logOut,setLoading} = useContext(AuthContext)
    const [total,setTotal] = useState()
    const navigate = useNavigate()
    let totalPrice = 0

    if(cartProduct.length>0){
        cartProduct.forEach(product => {
            const {price,productQuantity} = product
            totalPrice=totalPrice+(price*productQuantity)
        });  
       
    }

    return (
        
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-main text-gray-100 m-auto my-16 rounded-xl">
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
                {
                    cartProduct.length>0 ?
                    cartProduct.map((product,index)=><CartProduct key={index} product={product}></CartProduct>)
                    : 
                    <h3>Not found any cart</h3>
                }
            </ul>
            <div className="space-y-1 text-right">
                <p>Total amount:
                    <span className="font-semibold">Rs. {totalPrice}</span>
                </p>
                <p className="text-sm text-gray-100">Not including taxes and shipping costs</p>
            </div>
            <div className="flex justify-end space-x-4">
                <Link to="/allproducts" type="button" className="px-6 py-2 border rounded-md border-white">Back
                    <span className="sr-only sm:not-sr-only">to shop</span>
                </Link>
                <button type="button" className="px-6 py-2 border rounded-md bg-white text-gray-900 ]">
                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                </button>
            </div>
        </div> 
    );
};

export default CartProducts;