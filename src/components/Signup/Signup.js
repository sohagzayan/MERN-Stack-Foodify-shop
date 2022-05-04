import React from "react";
import GoogleButton from "react-google-button";
import { NavLink } from 'react-router-dom';
const Signup = () => {
  return (
    <div>
      <h2 className="text-3xl text-black_soft font-bold mb-5">
        Sign up for free!
      </h2>
      <form className="flex flex-col fromGroup">
        <input type="text" name="username" placeholder="User Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="ConformPassword"
          placeholder="Conform Password"
        />
        <p className="text-sm">
          I agree to the
          <a className="text-blue-500 underline" href="/">
            privacy policy
          </a>
          and
          <a className="text-blue-500 underline" href="/">
            
            terms of service
          </a>
          .
        </p>
        <button className="btnSignUp">Sign up with email</button>
     <span className="flex items-center justify-center mt-5">
     <GoogleButton 
        className=""
          onClick={() => {
            console.log("Google button clicked");
          }}
        />
     </span>
        <NavLink  className="mt-4 text-blue-700 cursor-pointer hover:underline" to="/register/login">
          Already have an account?
        </NavLink>
      </form>
    </div>
  );
};

export default Signup;
