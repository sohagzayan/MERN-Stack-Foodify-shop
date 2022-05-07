import React from 'react';
import { NavLink } from 'react-router-dom';

const MyProducts = () => {

 

    return (
        <div className='flex items-center justify-between manageProductList'>
                <div>
                    <img width={"70px"} src={"image"} alt="img" />
                    <h3 className='text-lg font-medium my-2'>{"title"}</h3>
                    <span>Quantity : <span className='text-2xl text-green_soft font-bold'>{"quantity"}</span></span>
                </div>
                <div className='flex flex-col'>
                        <NavLink  to={"/inventory/"} className=' btn-manageInventory btn-detailsPage'>Inventory</NavLink>
                        <button  className=' btn-manageInventory btn-delete'>Delete</button>
                </div>
            </div>
    );
};

export default MyProducts;