import React from 'react';
import banner from '../../assets/images/banner.webp'
import useTitle from '../../hook/useTitle';
import AllProduct from '../AllProduct/AllProduct';
import Category from '../Category/Category';
import Product from './Product';

const Home = () => {
  useTitle('Home')
    return (
     <>
        <div className="relative rounded-3xl px-14">
          <img
            src={banner}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative min-h-[90vh] flex items-center">
            <div className="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-28 lg:py-20">
                <div className=" text-[#636363]">
                  <h2 className="text-3xl">
                  Fresh & Organically Grown
                  </h2>
                  <h3 className='text-4xl text-[#5da88a] py-3 font-semibold'>FLOURISHED VEGGIES</h3>
                  <h3 className='text-4xl font-thin'>Save Upto <span className='font-bold'>20% off</span></h3>
                  <button className='bg-[#5da88a] text-white mt-10 font-semibold py-3 px-5 rounded-full uppercase text-lg'>shop now</button>
                </div>
            </div>
          </div>
        </div>
        <Product></Product>
        <Category></Category>
        <AllProduct></AllProduct>
     </>
    );
};

export default Home;