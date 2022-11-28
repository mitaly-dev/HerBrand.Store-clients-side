import React from 'react';
import { FaArrowRight, FaHeart, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {picture,weight,title,price,_id,availability,category,quantity} = product

    return (
        <div>
           <div className='group'>
                <div className='h-[253px] w-[244px] relative overflow-hidden'>
                    <img src={picture} alt="products" className='rounded-3xl h-full w-full'/>
                    <div className='flex py-2 px-3 justify-center absolute bottom-0 left-2/4 ease-in-out duration-500 translate-y-14 group-hover:translate-y-[-10px] translate-x-[-50%]'>
                        <Link to={`/product/${_id}`}  className='bg-main py-3 px-3 hover:bg-red-100 hover:text-main rounded-full text-white text-[13px] mx-2'>
                        <FaArrowRight></FaArrowRight>
                        </Link>
                        <button className='bg-main py-3 px-3 hover:bg-red-100 hover:text-main rounded-full text-white text-[13px] mx-2'>
                        <FaHeart></FaHeart>
                        </button>
                        <button className='bg-main py-3 px-3 hover:bg-red-100 hover:text-main rounded-full text-white text-[13px] mx-2'>
                        <FaSearch></FaSearch>
                        </button>
                    </div>
                </div>
                <h3 className='pt-3 text-2xl'>{title}</h3>
                <h3 className='font-bold text-lg mt-2'>Rs. <span>{price}.00</span></h3>
           </div>
        </div>
    );
};

export default SingleProduct;