import axios from 'axios';
import React, { useEffect, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MyProductFrame from "../components/MyProductFrame/MyProductFrame";
import { useAuthContext } from "../context/AuthContent";
import "./MyProducts.css";
const MyProducts = () => {
  const { username } = useAuthContext();
  const [myItem, setMyItem] = useState([]);
  useEffect(() => {
    axios(`https://farmfood-freshbox-api.herokuapp.com/api/todo/myitem?gmail=${username.email}`,{
      headers : {
        authorization : `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((data) => setMyItem(data.data))
     
  }, [username.email, myItem]);
  

  return (
    <>
      <Header />
   { myItem.length ?  <div className="">
        <div className="">
          {myItem.map((item) => (
            <MyProductFrame item={item} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-10 mb-4">
          <NavLink
            to="/manage"
            className="btn-product flex items-center cursor-pointer"
          >
            Manage Inventory <AiOutlineDoubleRight className="text-lg ml-5 " />{" "}
          </NavLink>
        </div>
      </div>
    : <div className="flex items-center justify-center flex-col mt-52">
          <h2 className="text-2xl">You Don't add Product Yet</h2>
          <span>Please add Your Product Fast</span>
          <NavLink className="bg-blue-600 text-white py-4 rounded-lg mt-8 px-10" to="/addProduct">ADD YOUR PRODUCT</NavLink>
          <div className="flex items-center justify-center mt-10 mb-4">
          <NavLink
            to="/manage"
            className="btn-product flex items-center cursor-pointer"
          >
            Manage Inventory <AiOutlineDoubleRight className="text-lg ml-5 " />{" "}
          </NavLink>
        </div>
     </div>  
    }
   
           
      
      <Footer />
    </>
  );
};

export default MyProducts;
