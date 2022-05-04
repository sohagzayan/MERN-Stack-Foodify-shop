import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Menu = ({ showMenu, setShowMenu }) => {
  const user = false;
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
        {user ? (
          <li className="px-4 py-1">
            <NavLink className="   text-black_soft font-medium text-lg " to="/">
              Manage Product
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {user ? (
          <li className="px-4 py-1">
            <NavLink className="   text-black_soft font-medium text-lg " to="/">
              Add Product
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {user ? (
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
            className="   text-black_soft font-medium text-lg"
            to="/register/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
