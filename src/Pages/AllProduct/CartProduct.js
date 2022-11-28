import React from 'react';
import { useContext } from 'react';
import { FaUpload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const CartProduct = ({product}) => {
    const {price,title,type,weight,_id,productQuantity,category,picture} = product
    const {cartProduct, setCartProduct,refresh,setRefresh,logOut} = useContext(AuthContext)

    const deleteProduct=(id)=>{
        fetch(`http://localhost:5000/cartProducts/${id}`,{
            method: 'DELETE',
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
        .then(data=>{
            if(data.deletedCount>0){
                toast.success(`${title} product deleted`,{autoClose:1000})
                const remaining = cartProduct.filter(product=>product._id!==id)
                setCartProduct(remaining)
                setRefresh(!refresh)
            }
        })
    }

    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
        <div className="flex w-full space-x-2 sm:space-x-4">
            <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded-xl outline-none sm:w-32 sm:h-32 bg-gray-500" src={picture} alt="Polaroid camera" />
            <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                        <h3 className="text-xl font-semibold leading-snug sm:pr-8">{title}</h3>
                        <p className="text text-gray-700 capitalize font-semibold">Type : {type}</p>
                        <p className="text text-gray-700 capitalize font-semibold">weight : {weight}</p>
                        <p className="text text-gray-700 capitalize font-semibold">Quantity : {productQuantity}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold">Rs. {price*productQuantity}.00</p>
                        <p className="text-sm line-through text-gray-600">Rs. {(price*productQuantity)+20}.00</p>
                    </div>
                </div>
                <div className="flex text-sm divide-x">
                    <button onClick={()=>deleteProduct(_id)} className="flex items-center px-2 py-1 pl-0 space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                            <rect width="32" height="200" x="168" y="216"></rect>
                            <rect width="32" height="200" x="240" y="216"></rect>
                            <rect width="32" height="200" x="312" y="216"></rect>
                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                    </button>
                    <Link to={`/cartProduct/${_id}`} type="button" className="flex items-center px-2 py-1 space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        <span>Update</span>
                    </Link>
                </div>
            </div>
        </div>
    </li>
    );
};

export default CartProduct;