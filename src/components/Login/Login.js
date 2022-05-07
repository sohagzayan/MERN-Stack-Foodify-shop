import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from 'react';
import GoogleButton from "react-google-button";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useAuthContext } from '../../context/AuthContent';

const Login = () => {
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  const {login , googleLogin} = useAuthContext()
  const navigate = useNavigate();
  const [error, setError] = useState("");
  let schema = yup.object().shape({
    email: yup.string().required("Please enter your email !").email(),
    password: yup.string().required().min(6).max(12),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async  (data) => {
    const {email, password} = data
    try{
     await login(email , password)
     navigate(from , {replace : true})
    }
    catch(err){
      setError(err.message)
    }
  }

   
  const googleLoginFacebook = async()=>{
    
    try{
       await googleLogin()
       navigate(from , {replace : true})
    }
    catch(err){
     setError(err.message)
    }
 
   }



    return (
        <div>
      <h2 className="text-3xl text-black_soft font-bold ">
      Login to your account!
      </h2>
        <span className=" text-sm cursor-pointer my-3 block" href="/register">
            Don’t have an account? <NavLink className="text-blue-500" to="/register/signup">Sign Up Free!</NavLink>
        </span>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col fromGroup">
        <input type="email" name="email" placeholder="Email"  {...register("email")} />
        <p className="errMessage">{errors.email?.message}</p>
        <input type="password" name="password" placeholder="Password"  {...register("password")} />
        <p className="errMessage">{errors.password?.message}</p>
        <div className='flex items-center justify-between my-4'>
            <span className='flex items-center'>
                <input className='mr-4' id='remember' type="checkbox" />
                <label className='cursor-pointer' htmlFor="remember">Remember me</label>
            </span>
            <span>
                <NavLink to="/register/forgotPassword">Forgot password?</NavLink>
            </span>
        </div>
        <p className="text-red-600 mb-6">{error}</p>
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
        onClick={googleLoginFacebook}
        />
     </span>
      </form>
    </div>
    );
};

export default Login;