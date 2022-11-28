import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hook/useTitle';
import SingleProduct from '../CategoryProduct/SingleProduct';
import Title from '../Shared/Title';

const AllProduct = () => {
    useTitle('All Prouduct')
    const {allProduct,setAllProduct} = useContext(AuthContext)
    const [count,setCount] = useState(0)
    const [size,setSize] = useState(4)
    const [page,setPage] = useState(0)
    const pages = Math.ceil(count/size)

    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            setCount(data.count)
            setAllProduct(data.products)
        })
    },[page,size])

    return (
        <div className='pb-16'>
            <Title title="Fruits & Vegetables"></Title>
            <div className='sm:grid sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-7 px-4 md:px-14 lg:px-28'>
                {
                    allProduct.map(product=><SingleProduct key={product._id} product={product}></SingleProduct>)
                }
            </div>
            <h3 className='text-center pt-14 text-gray-500'>Current page {page+1} and size {size}</h3>
            <div className="flex justify-center space-x-1 dark:text-gray-100 pb-14 pt-4">
                <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                {
                    [...Array(pages).keys()].map(number=>{
                        return <button key={number} onClick={()=>setPage(number)} type="button" className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md ${page===number && "bg-main text-white"}`} title="Page 2">{number+1}</button>
                    })
                }
                <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
                <select onChange={event=>setSize(event.target.value)} className="border px-3 rounded shadow-md outline-none">
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="8">8</option>
                </select>
            </div>
        </div>
    );
};

export default AllProduct;