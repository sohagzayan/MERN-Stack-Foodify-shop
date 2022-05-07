import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ManageList from '../components/manageProductList/ManageList';
import './ManageProduct.css';
const ManageProduct = () => {

    const [manageProduct , setManageProduct] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/api/todo/")
        .then(res => res.json())
        .then(data => setManageProduct(data))
    },[manageProduct])

    return (
        <>
        <Header />
        <div>
            <div className='mt-24'>
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