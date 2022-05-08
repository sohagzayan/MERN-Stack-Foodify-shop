import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <div className='flex justify-center items-center  h-screen'>
           <div>
           <h2 className='text-4xl text-center mb-4'>404 </h2>
            <img width={460} src="https://www.techjunkie.com/wp-content/uploads/2018/03/Cute-Variants-of-Sad-Gif-1.gif" alt="" />
           
           <div className='flex items-center justify-center mt-4 '>
              <NavLink to="/" className='font-bold text-center bg-red-400 text-white px-7 py-3 rounded-xl cursor-pointer'>Go Home</NavLink>
           </div>
           </div>

        </div>
    );
};

export default NotFound404;