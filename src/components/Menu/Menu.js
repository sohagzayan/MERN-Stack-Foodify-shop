import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { useAuthContext } from "../../context/AuthContent";

const Menu = ({ showMenu, setShowMenu }) => {
  const navigate = useNavigate()
  const {username , logOut} = useAuthContext()

  const handesignOut = async ()=>{
    try{
      await logOut()
      navigate("/register/login")
    }
    catch(err){
      console.log(err);
    }
  }


  const openModal = ()=>{
    swal({
      title: "Are you sure?",
      text: "You LogOut Your Account ? ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        handesignOut()
      } else {
        swal("Your LogOut Process Cancel !");
      }
    });
  }
  return (
    <div className="">
      <ul
        className={
          showMenu
            ? "flex items-center menuBer active"
            : "flex items-center menuBer "
        }
      >
        <span className="CloseIcons cursor-pointer">
          <AiOutlineClose onClick={() => setShowMenu(!showMenu)} />
        </span>
        <li className="px-4 py-1">
          <NavLink className="   text-black_soft font-medium text-lg " to="/">
            Home
          </NavLink>
        </li>
        <li className="px-4 py-1">
          <NavLink className="   text-black_soft font-medium text-lg " to="/blog">
            Blog
          </NavLink>
        </li>
        {username ? (
          <li className="px-4 py-1">
            <NavLink className="   text-black_soft font-medium text-lg " to="/manage">
              Manage Product
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {username ? (
          <li className="px-4 py-1">
            <NavLink className="   text-black_soft font-medium text-lg " to="/AddProduct">
              Add Product
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {username ? (
          <li className="px-4 py-1">
            <NavLink
              className=" capitalize  text-black_soft font-medium text-lg "
              to="/"
            >
              My <span>Product</span>
            </NavLink>
          </li>
        ) : (
          ""
        )}
        <li className="px-4 py-1">
          {
            username ? 
            <span
            onClick={openModal}
            className="   text-black_soft font-medium text-lg cursor-pointer"
            
          >
           SignOut
          </span>
          :
          <NavLink
          onClick={handesignOut}
          className="   text-black_soft font-medium text-lg"
          to="/register/login"
        >
          Login
        </NavLink>
          }
      
        </li>
      </ul>
    </div>
  );
};

export default Menu;
