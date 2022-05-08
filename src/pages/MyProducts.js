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
  console.log(username);
  useEffect(() => {
    fetch(`http://localhost:5000/api/todo/myitem?gmail=${username.email}`)
      .then((res) => res.json())
      .then((data) => setMyItem(data));
  }, [username.email, myItem]);

  console.log(myItem);
  return (
    <>
      <Header />

      <div className="">
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
      <Footer />
    </>
  );
};

export default MyProducts;
