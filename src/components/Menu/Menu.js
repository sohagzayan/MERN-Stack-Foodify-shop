import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Menu = ({showMenu , setShowMenu}) => {
    return (
        <div className=''>
            <ul className={showMenu ? "flex items-center menuBer active" : "flex items-center menuBer "}>
                <span className='CloseIcons cursor-pointer'>
                    <AiOutlineClose onClick={()=> setShowMenu(!showMenu) } />
                </span>
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