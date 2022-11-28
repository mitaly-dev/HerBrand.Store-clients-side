import React from 'react';
import product1 from '../../assets/images/product.avif'
import product2 from '../../assets/images/product2.avif'
import product3 from '../../assets/images/product3.avif'
import product4 from '../../assets/images/product4.avif'
import useTitle from '../../hook/useTitle';
import './style.css'

const Product = () => {
    useTitle('Product')
    return (
        <div className='px-4 md:px-10 lg:px-28 pt-28 pb-10'>
            <div className='grid grid-cols-4 gap-5'>
              <div className='product-container text-center relative'>
                    <div className='relative w-[160px] m-auto'>
                            <img src={product1} alt="" className='w-full border border-dashed p-10 rounded-full border-main text-center'/>
                            <span className='px-4 py-3 absolute right-0 bottom-0 rounded-full bg-main text-white font-semibold'>01</span>
                        </div>
                        <h3 className='text-3xl font-medium  my-5'>Organic Products</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className='product-container text-center relative'>
                    <div className='relative w-[160px] m-auto'>
                        <img src={product2} alt="" className='w-full border border-dashed p-10 rounded-full border-main text-center'/>
                        <span className='px-4 py-3 absolute right-0 bottom-0 rounded-full bg-main text-white font-semibold'>02</span>
                    </div>
                    <h3 className='text-3xl font-medium  my-5'>No Pesticides</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className='product-container text-center relative'>
                    <div className='relative w-[160px] m-auto'>
                        <img src={product3} alt="" className='w-full border border-dashed p-10 rounded-full border-main text-center'/>
                        <span className='px-4 py-3 absolute right-0 bottom-0 rounded-full bg-main text-white font-semibold'>03</span>
                    </div>
                    <h3 className='text-3xl font-medium  my-5'>Fresh Eatables</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className='product-container text-center relative'>
                    <div className='relative w-[160px] m-auto'>
                        <img src={product4} alt="" className='w-full border border-dashed p-10 rounded-full border-main text-center'/>
                        <span className='px-4 py-3 absolute right-0 bottom-0 rounded-full bg-main text-white font-semibold'>04</span>
                    </div>
                    <h3 className='text-3xl font-medium  my-5'>Healthy Life</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
        </div>
    );
};

export default Product;