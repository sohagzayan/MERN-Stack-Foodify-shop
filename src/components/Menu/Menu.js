import React from 'react';

const Menu = () => {
    return (
        <div>
            <ul className='flex items-center'>
                <li className='px-4 py-1'>
                    <a className='   text-black_soft font-medium text-lg ' href="/">Home</a>
                </li>
                <li className='px-4 py-1'>
                    <a className='   text-black_soft font-medium text-lg ' href="/">Blog</a>
                </li>
                <li className='px-4 py-1'>
                    <a className='   text-black_soft font-medium text-lg ' href="/">Manage Product</a>
                </li>
                <li className='px-4 py-1'>
                    <a className='   text-black_soft font-medium text-lg ' href="/">Add Product</a>
                </li>
                <li className='px-4 py-1'>
                    <a className=' capitalize  text-black_soft font-medium text-lg ' href="/">My <span>Product</span></a>
                </li>
                <li className='px-4 py-1'>
                    <a className='   text-black_soft font-medium text-lg' href="/">Logout</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;