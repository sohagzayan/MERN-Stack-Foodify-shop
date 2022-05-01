import React from 'react';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import './Inventory.css';
const Inventory = () => {
    return (
        <div className='mt-16 container mx-auto'>
            <h2 className='text-center text-4xl  md:text-5xl font-bold text-black_soft tracking-wider '>Our Inventory </h2>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2    mt-16'>
                <InventoryProduct   />
                <InventoryProduct   />
                <InventoryProduct   />
           </div>
            <div className='text-center'>
            <button className='btn-inventory mt-6'>
               Manage Inventory
           </button>
            </div>
        </div>
    );
};

export default Inventory;