import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hook/useTitle';
import Product from '../Home/Product';
import Title from '../Shared/Title';
import CategoryItem from './CategoryItem';

const Category = () => {
    useTitle('Category')
    const {categoryies} = useContext(AuthContext)
    return (
       <div>
        <Title title="Food Categories"></Title>
         <div className='grid grid-cols-3 gap-5'>
            {
                categoryies.map(category=><CategoryItem key={category._id} signleCategory={category}></CategoryItem>)
            }
        </div>
       </div>
    );
};

export default Category;