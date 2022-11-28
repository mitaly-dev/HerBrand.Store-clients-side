import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import Title from '../Shared/Title';
import SingleProduct from './SingleProduct';

const CategoryProduct = () => {
    useTitle('Category product')
    const products = useLoaderData()
   
    return (
       <div>
        <Title title="Foods Item"></Title>
         <div className='sm:grid sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-7 px-4 md:px-14 lg:px-28'>
            {
                products.map(product=><SingleProduct key={product.id} product={product}></SingleProduct>)
            }
        </div>
       </div>
    );
};

export default CategoryProduct;