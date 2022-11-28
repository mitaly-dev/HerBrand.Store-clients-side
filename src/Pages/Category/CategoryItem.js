import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({signleCategory}) => {
    const {title,category,image,_id,categoryid} = signleCategory
 
    return (
        <Link to={`/category/${categoryid}`}>
             <div className="relative h-[300px]">
                <img src={image} alt="images" className='h-full object-cover rounded-2xl'/>
                <div className='absolute grid grid-cols-2 top-1/4  pr-2'>
                    <div className='col-span-1'>
                    </div>
                    <div className='col-span-1'>
                        <p className='font-medium'>{title}</p>
                        <h3 className='font-semibold text-teal-800 text-2xl mb-3'>{category}</h3>
                        <button className='text-teal-800 text-lg uppercase hover:border-b pb-2 border-main'>shop now</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CategoryItem;