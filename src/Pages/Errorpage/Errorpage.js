import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='min-h-[100vh] flex items-center justify-center '>
            <div  className='w-2/5 m-auto text-center'>
               <h3>Not Found</h3>
                <Link to="/" className="border py-3 px-8 rounded-full mt-10 inline-block">Back to home</Link>
            </div>
        </div>
    );
};

export default Errorpage;