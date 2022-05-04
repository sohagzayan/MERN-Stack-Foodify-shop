import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContent";

const Menu = ({ showMenu, setShowMenu }) => {
  const {username , logOut} = useAuthContext()

  const handesignOut = async ()=>{
    try{
      await logOut()
    }
    catch(err){
      console.log(err);
    }
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
          <NavLink className="   text-black_soft font-medium text-lg " to="/">
            Blog
          </NavLink>
        </li>
        {username ? (
          <li className="px-4 py-1">
            <NavLink className="   text-black_soft font-medium text-lg " to="/">
              Manage Product
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {username ? (
          <li className="px-4 py-1">
            <NavLink className="   text-black_soft font-medium text-lg " to="/">
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
          <NavLink
            onClick={handesignOut}
            className="   text-black_soft font-medium text-lg"
            to="/register/login"
          >
            {username ? "SignOut" : "Login"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
