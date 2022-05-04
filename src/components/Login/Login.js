import React from 'react';
import GoogleButton from "react-google-button";
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
      <h2 className="text-3xl text-black_soft font-bold ">
      Login to your account!
      </h2>
        <span className=" text-sm cursor-pointer my-3 block" href="/register">
            Don’t have an account? <NavLink className="text-blue-500" to="/register/signup">Sign Up Free!</NavLink>
        </span>
      <form className="flex flex-col fromGroup">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <div className='flex items-center justify-between my-4'>
            <span className='flex items-center'>
                <input className='mr-4' id='remember' type="checkbox" />
                <label className='cursor-pointer' htmlFor="remember">Remember me</label>
            </span>
            <span>
                <a href="/">Forgot password?</a>
            </span>
        </div>
        <p className="text-sm">
          I agree to the
          <a className="text-blue-500 underline mx-2" href="/">
            privacy policy
          </a>
          and
          <a className="text-blue-500 underline mx-2" href="/">
            
            terms of service
          </a>
          
        </p>
        <button className="btnSignUp">Login with email</button>
     <span className="flex items-center justify-center mt-5">
     <GoogleButton 
        className=""
          onClick={() => {
            console.log("Google button clicked");
          }}
        />
     </span>
      </form>
    </div>
    );
};

export default Login;