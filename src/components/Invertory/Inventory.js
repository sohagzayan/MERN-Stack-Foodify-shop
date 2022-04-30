import React from 'react';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import './Inventory.css';
const Inventory = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-center  text-5xl font-bold text-black_soft tracking-wider '>Our Inventory </h2>
           <div className='grid grid-cols-3  container px-4 mx-auto mt-16'>
                <InventoryProduct   />
                <InventoryProduct   />
                <InventoryProduct   />
           </div>
        </div>
    );
};

export default Inventory;