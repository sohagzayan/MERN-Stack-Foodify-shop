import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import image from '../../assets/image/blog-1.jpg';

const InventoryProduct = () => {
    return (
        <div className='mx-4 inventory_product'>
            <div className='pl-5 pr-5 mt-5'>
                <img className='rounded-md' src={image} alt="img" />
            </div>
            <div className='p-5'>
                <span className='card-date'>March.02.2021</span>
                <h4 className='tracking-wider font-light'>Breakfast Cereals, Snacks</h4>
                <h3 className='text-2xl mb-2 font-bold'>Aenean Magna, A Lobortis Mauris Vehicula Sed.</h3>
                <h5 className='mb-2'><span className='text-lg font-semibold '>Supplier :</span> Jonker Mahabub </h5>
                <div className='flex items-center justify-between mb-3'>
                    <span className='text-3xl text-green_soft font-semibold'>$9</span>
                    <span className='text-md text-green_soft tracking-wider'><span className='text-3xl font-bold'>Q</span>uantity : <span className='text-2xl font-bold'>69</span></span>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <button className='btn-product flex items-center'>Update <AiOutlineDoubleRight className='text-lg ml-5 ' /> </button>
                    <span className='React-Love active cursor-pointer'><FiHeart className='text-3xl love  text-yellow_soft' /></span>
                </div>
            </div>
        </div>
    );
};

export default InventoryProduct;