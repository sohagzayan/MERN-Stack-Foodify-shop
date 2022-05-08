import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ManageList from '../components/manageProductList/ManageList';
import './ManageProduct.css';
const ManageProduct = () => {

    const [manageProduct , setManageProduct] = useState([])

    useEffect(()=>{
        fetch("https://farmfood-freshbox-api.herokuapp.com/api/todo/")
        .then(res => res.json())
        .then(data => setManageProduct(data))
    },[manageProduct])

    return (
        <>
        <Header />
        <div>
            <div className='flex justify-center items-center mt-10 '>
            <NavLink className="text-xl bg-blue-600 text-white py-2 px-5 rounded-lg cursor-pointer " to="/AddProduct">Add new item</NavLink>
            </div>
            <div className='mt-10'>
                {
                    manageProduct.map(item => <ManageList  key={item._id} item={item}/> )
                }
            </div>
        </div>
        <Footer />
        </>
    );
};

export default ManageProduct;